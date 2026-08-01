"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import { homeBannerHeroSlides } from "../home-banner-data";
import { BANNER_EASE } from "../utils/home-banner-motion";

const SLIDE_INTERVAL_MS = 4500;
const SLIDE_COUNT = homeBannerHeroSlides.length;

type HomeBannerHeroMediaProps = {
  className?: string;
};

export function HomeBannerHeroMedia({ className }: HomeBannerHeroMediaProps) {
  const shouldReduceMotion = useShouldReduceMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = homeBannerHeroSlides[activeIndex];

  useEffect(() => {
    if (SLIDE_COUNT < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDE_COUNT);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  function goNext() {
    setActiveIndex((current) => (current + 1) % SLIDE_COUNT);
  }

  return (
    <div className={cn(className, "lg:pointer-events-auto")}>
      <div className="relative h-full min-h-64 w-full overflow-hidden sm:min-h-80 lg:min-h-0">
        <div
          aria-hidden="true"
          className="bg-primary/[0.08] pointer-events-none absolute right-[10%] bottom-[8%] z-0 h-[40%] w-[55%] rounded-[100%] blur-3xl"
        />

        <button
          type="button"
          aria-label="Ảnh tiếp theo"
          onClick={goNext}
          className="absolute inset-0 z-10 cursor-pointer"
        >
          <span className="sr-only">Chuyển ảnh tiếp theo</span>
        </button>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide.src}
            className="pointer-events-none absolute inset-0"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.7,
              ease: BANNER_EASE,
            }}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority={activeIndex === 0}
              quality={100}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-bottom drop-shadow-[0_28px_40px_rgba(15,23,42,0.14)] sm:object-[72%_100%] lg:object-[80%_100%]"
            />
          </motion.div>
        </AnimatePresence>

        {SLIDE_COUNT > 1 ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center sm:bottom-4 lg:bottom-6"
            aria-hidden="true"
          >
            <div className="flex items-center gap-2">
              {homeBannerHeroSlides.map((slide, index) => (
                <span
                  key={slide.src}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    index === activeIndex
                      ? "bg-primary w-5"
                      : "w-1.5 bg-zinc-400/55"
                  )}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
