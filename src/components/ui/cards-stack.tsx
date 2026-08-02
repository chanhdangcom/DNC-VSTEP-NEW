"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Children, isValidElement, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const HEADER_OFFSET = 120;
/** Extra scroll runway after the last card finishes — keeps card 3 visible before news lifts */
export const SCROLL_HOLD_VH = 50;
const SCROLL_VH_PER_CARD = 100;
const COVER_RATIO = 0.9;
const PEEK_RATIO = 1 - COVER_RATIO;
const STACK_SCALE_STEP = 0.055;
const MIN_STACK_SCALE = 0.82;

type CardMotionState = {
  yPercent: number;
  scale: number;
  opacity: number;
  rotate: number;
  brightness: number;
  saturate: number;
  shadowOpacity: number;
  shadowY: number;
  zIndex: number;
};

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

function getFrontmostIndex(progress: number, total: number) {
  const segments = total - 1;
  return Math.min(
    total - 1,
    Math.max(0, Math.floor(progress * segments + 0.001))
  );
}

function stackedScaleForCard(progress: number, index: number, total: number) {
  const segments = total - 1;
  let scale = 1;

  for (let coverFrom = index; coverFrom < total - 1; coverFrom += 1) {
    const coverStart = coverFrom / segments;
    const coverEnd = (coverFrom + 1) / segments;
    const depth = coverFrom - index + 1;
    const targetScale = Math.max(MIN_STACK_SCALE, 1 - depth * STACK_SCALE_STEP);
    const prevScale = Math.max(
      MIN_STACK_SCALE,
      1 - (depth - 1) * STACK_SCALE_STEP
    );

    if (progress <= coverStart) {
      continue;
    }

    if (progress >= coverEnd) {
      scale = targetScale;
      continue;
    }

    const t = easeInOutCubic((progress - coverStart) / (coverEnd - coverStart));
    return lerp(prevScale, targetScale, t);
  }

  return scale;
}

function stackedDepthForCard(progress: number, index: number, total: number) {
  const segments = total - 1;
  let depth = 0;

  for (let coverFrom = index; coverFrom < total - 1; coverFrom += 1) {
    const coverEnd = (coverFrom + 1) / segments;
    if (progress >= coverEnd) {
      depth += 1;
    }
  }

  return depth;
}

function getCardMotionState(
  progress: number,
  index: number,
  total: number
): CardMotionState {
  const segments = total - 1;
  const stackedY = index * PEEK_RATIO * 100;
  const entryStart = index > 0 ? (index - 1) / segments : 0;
  const entryEnd = index > 0 ? index / segments : 0;
  const entryRotate = index % 2 === 0 ? -1.5 : 1.5;

  if (index > 0 && progress < entryStart) {
    return {
      yPercent: 130,
      scale: 0.94,
      opacity: 1,
      rotate: entryRotate,
      brightness: 1,
      saturate: 1,
      shadowOpacity: 0,
      shadowY: 0,
      zIndex: 0,
    };
  }

  let yPercent = index === 0 ? 0 : stackedY;
  let scale = 1;
  let opacity = 1;
  let rotate = 0;
  let brightness = 1;
  let saturate = 1;
  let shadowOpacity = 0.18;
  let shadowY = 24;

  if (index > 0 && progress < entryEnd) {
    const t = easeOutCubic((progress - entryStart) / (entryEnd - entryStart));
    yPercent = lerp(130, stackedY, t);
    scale = lerp(0.94, 1, t);
    opacity = 1;
    rotate = lerp(entryRotate, 0, t);
    shadowOpacity = lerp(0.04, 0.24, t);
    shadowY = lerp(8, 30, t);
  } else {
    scale = stackedScaleForCard(progress, index, total);
  }

  const stackDepth = stackedDepthForCard(progress, index, total);

  if (stackDepth > 0) {
    brightness = 1;
    saturate = 1;
    shadowOpacity = Math.min(
      shadowOpacity,
      Math.max(0.04, 0.16 - stackDepth * 0.04)
    );
    shadowY = Math.min(shadowY, Math.max(6, 18 - stackDepth * 5));
  }

  const frontmostIndex = getFrontmostIndex(progress, total);
  const isActive = index === frontmostIndex;

  if (isActive) {
    const activeStart = index === 0 ? 0 : entryStart;
    const activeEnd = index === 0 ? 1 / segments : entryEnd;
    const localT =
      progress >= activeEnd
        ? 1
        : easeOutCubic(
            Math.max(0, (progress - activeStart) / (activeEnd - activeStart))
          );

    shadowOpacity = lerp(shadowOpacity, 0.3, localT * 0.55);
    shadowY = lerp(shadowY, 34, localT * 0.5);
  }

  return {
    yPercent,
    scale,
    opacity,
    rotate,
    brightness,
    saturate,
    shadowOpacity,
    shadowY,
    zIndex: index + 1,
  };
}

function useCardMotion(
  progress: MotionValue<number>,
  index: number,
  total: number,
  shouldReduceMotion: boolean | null
) {
  const y = useTransform(progress, (value) => {
    if (shouldReduceMotion) {
      return index === 0 ? "0%" : `${index * PEEK_RATIO * 100}%`;
    }

    return `${getCardMotionState(value, index, total).yPercent}%`;
  });

  const scale = useTransform(progress, (value) => {
    if (shouldReduceMotion) {
      return 1;
    }

    return getCardMotionState(value, index, total).scale;
  });

  const opacity = useTransform(progress, (value) => {
    if (shouldReduceMotion) {
      return 1;
    }

    return getCardMotionState(value, index, total).opacity;
  });

  const rotate = useTransform(progress, (value) => {
    if (shouldReduceMotion) {
      return 0;
    }

    return getCardMotionState(value, index, total).rotate;
  });

  const filter = useTransform(progress, (value) => {
    if (shouldReduceMotion) {
      return "brightness(1) saturate(1)";
    }

    const state = getCardMotionState(value, index, total);
    return `brightness(${state.brightness}) saturate(${state.saturate})`;
  });

  const zIndex = useTransform(progress, (value) => {
    if (shouldReduceMotion) {
      return index + 1;
    }

    return getCardMotionState(value, index, total).zIndex;
  });

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0.05 ? "auto" : "none"
  );

  return { y, scale, opacity, rotate, zIndex, pointerEvents };
}

type StackingCardProps = {
  children: ReactNode;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
};

function StackingCard({
  children,
  index,
  total,
  scrollYProgress,
  shouldReduceMotion,
}: StackingCardProps) {
  const { y, scale, opacity, rotate, zIndex, pointerEvents } = useCardMotion(
    scrollYProgress,
    index,
    total,
    shouldReduceMotion
  );

  return (
    <motion.div
      className="absolute inset-x-0 top-0 mx-auto mt-16 w-full max-w-6xl will-change-transform [backface-visibility:hidden]"
      style={{
        zIndex,
        y,
        scale,
        opacity,
        rotate,
        pointerEvents,
        transformOrigin: "top center",
      }}
    >
      {children}
    </motion.div>
  );
}

type StackProgressDotProps = {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function StackProgressDot({
  index,
  total,
  scrollYProgress,
}: StackProgressDotProps) {
  const segments = total - 1;
  const start = index === 0 ? 0 : (index - 1) / segments;
  const end = index === total - 1 ? 1 : index / segments;

  const height = useTransform(scrollYProgress, (value) => {
    if (value <= start) {
      return index === 0 ? "1.75rem" : "0.45rem";
    }

    if (value >= end) {
      return "1.75rem";
    }

    const t = easeOutCubic((value - start) / (end - start));
    return `${lerp(0.45, 1.75, t)}rem`;
  });

  const dotOpacity = useTransform(scrollYProgress, (value) => {
    if (value >= end) {
      return 1;
    }

    if (value <= start) {
      return index === 0 ? 1 : 0.35;
    }

    return lerp(
      index === 0 ? 1 : 0.35,
      1,
      easeOutCubic((value - start) / (end - start))
    );
  });

  const dotScale = useTransform(scrollYProgress, (value) => {
    if (value >= start && value <= end) {
      const t = easeOutCubic((value - start) / (end - start));
      return 1 + Math.sin(t * Math.PI) * 0.18;
    }

    return value >= end ? 1 : 0.9;
  });

  return (
    <motion.span
      className="block w-1.5 rounded-full bg-red-800"
      style={{ height, opacity: dotOpacity, scale: dotScale }}
    />
  );
}

type StackProgressProps = {
  total: number;
  scrollYProgress: MotionValue<number>;
};

function StackProgress({ total, scrollYProgress }: StackProgressProps) {
  return (
    <div className="pointer-events-none absolute top-1/2 right-0 z-20 flex -translate-y-1/2 flex-col items-center gap-2.5 sm:right-1 md:right-2 lg:right-4">
      {Array.from({ length: total }, (_, index) => (
        <StackProgressDot
          key={index}
          index={index}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

type CardsListProps = {
  heading?: ReactNode;
  items: ReactNode[];
  className?: string;
};

function CardsList({ heading, items, className }: CardsListProps) {
  return (
    <div className={cn("container px-4", className)}>
      {heading}

      <div className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-4 lg:mt-8 lg:gap-6">
        {items}
      </div>
    </div>
  );
}

type CardsStackProps = {
  children: ReactNode;
  className?: string;
};

export function CardsStack({ children, className }: CardsStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const items = Children.toArray(children);
  const total = items.length;
  const firstChild = items[0];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardAnimEnd =
    (total * SCROLL_VH_PER_CARD) /
    (total * SCROLL_VH_PER_CARD + SCROLL_HOLD_VH);

  const cardScrollYProgress = useTransform(scrollYProgress, (progress) =>
    Math.min(1, progress / cardAnimEnd)
  );

  if (shouldReduceMotion) {
    return <div className={cn("flex flex-col gap-6", className)}>{items}</div>;
  }

  return (
    <>
      <div className={cn("flex flex-col gap-6 lg:hidden", className)}>
        {items}
      </div>

      <div
        ref={containerRef}
        className={cn("relative hidden w-full lg:block", className)}
        style={{
          height: `${total * SCROLL_VH_PER_CARD + SCROLL_HOLD_VH}vh`,
        }}
      >
        <div className="sticky top-40 h-[calc(100vh-10rem)] w-full overflow-visible">
          <div className="relative h-full min-h-0 w-full flex-1">
            <div className="pointer-events-none invisible" aria-hidden="true">
              {firstChild}
            </div>

            {items.map((child, index) => (
              <StackingCard
                key={
                  isValidElement(child) && child.key != null ? child.key : index
                }
                index={index}
                total={total}
                scrollYProgress={cardScrollYProgress}
                shouldReduceMotion={shouldReduceMotion}
              >
                {child}
              </StackingCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
