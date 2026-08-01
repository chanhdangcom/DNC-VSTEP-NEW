"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { yearlyPlanItems } from "../yearly-plan-data";
import { YearlyPlanCard } from "./yearly-plan-card";

export function YearlyPlanGrid() {
  const items = yearlyPlanItems.slice(0, 8);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const syncScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const x = el.scrollLeft;
    setCanPrev(x > 4);
    setCanNext(x < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    syncScrollState();
    el.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState);

    const ro = new ResizeObserver(syncScrollState);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
      ro.disconnect();
    };
  }, [syncScrollState]);

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-yearly-plan-card]");
    const styles = getComputedStyle(
      el.querySelector(".yearly-plan-track") ?? el
    );
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "24") || 24;
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.75) + gap;

    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  if (items.length === 0) {
    return null;
  }

  const showNav = canPrev || canNext;

  return (
    <div className="relative space-y-4">
      <div
        ref={scrollerRef}
        className="yearly-plan-scroller -mx-4 overflow-x-auto px-4 py-2 sm:-mx-6 sm:px-6 lg:-mx-[calc((100vw-100%)/2)] lg:px-[calc((100vw-100%)/2)]"
      >
        <div className="yearly-plan-track flex w-max snap-x snap-mandatory items-stretch gap-5 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              data-yearly-plan-card
              className="flex w-[min(82vw,22rem)] shrink-0 snap-start p-1 sm:w-[min(70vw,24rem)]"
            >
              <YearlyPlanCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {showNav ? (
        <div className="flex justify-center gap-2.5">
          <YearlyPlanScrollButton
            label="Cuộn sang trái"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
          >
            <CaretLeft className="size-4" weight="bold" />
          </YearlyPlanScrollButton>
          <YearlyPlanScrollButton
            label="Cuộn sang phải"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
          >
            <CaretRight className="size-4" weight="bold" />
          </YearlyPlanScrollButton>
        </div>
      ) : null}
    </div>
  );
}

function YearlyPlanScrollButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "border-primary/15 inline-flex size-10 items-center justify-center rounded-full border bg-white/90 text-zinc-800",
        "shadow-[0_8px_20px_-12px_rgba(15,23,42,0.35)] backdrop-blur-sm",
        "transition-[opacity,border-color,color,background-color] duration-300",
        "ease-[cubic-bezier(0.33,1,0.68,1)]",
        "hover:border-primary/45 hover:text-primary",
        "disabled:pointer-events-none disabled:opacity-35",
        "focus-visible:ring-primary/35 focus-visible:ring-2 focus-visible:outline-none"
      )}
    >
      {children}
    </button>
  );
}
