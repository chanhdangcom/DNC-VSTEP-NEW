"use client";

import { CaretDoubleUp } from "@phosphor-icons/react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

function subscribeDesktop(onStoreChange: () => void) {
  const media = window.matchMedia(DESKTOP_MEDIA_QUERY);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function useIsDesktopViewport() {
  return useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_MEDIA_QUERY).matches,
    () => false
  );
}

function readScrollY() {
  return Math.max(
    window.scrollY,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
}

export function ScrollToTop() {
  const isDesktop = useIsDesktopViewport();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  const bottom = useSpring(useTransform(scrollY, [100, 400], [-80, 24]), {
    stiffness: 100,
    damping: 15,
  });

  const opacity = useTransform(scrollY, [100, 400], [0, 1]);

  useEffect(() => {
    if (isDesktop) return;

    const update = () => {
      setIsVisible(readScrollY() > 120);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, {
      passive: true,
      capture: true,
    });
    window.addEventListener("touchmove", update, { passive: true });
    window.addEventListener("touchend", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("touchmove", update);
      window.removeEventListener("touchend", update);
    };
  }, [isDesktop]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const buttonClassName = cn(
    "pointer-events-auto inline-flex size-11 touch-manipulation items-center justify-center overflow-visible rounded-full",
    "border-primary/25 bg-primary border text-white",
    "hover:bg-primary-hover shadow-md shadow-red-950/20 transition-colors active:scale-95"
  );

  if (!isDesktop) {
    if (!isVisible) return null;

    return (
      <div className="fixed right-4 bottom-6 z-50 sm:right-6">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className={buttonClassName}
        >
          <CaretDoubleUp
            className="size-4 shrink-0"
            weight="bold"
            aria-hidden
          />
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="pointer-events-none fixed right-4 z-50 sm:right-6"
      style={{ bottom, opacity }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Cuộn lên đầu trang"
        className={buttonClassName}
      >
        <CaretDoubleUp className="size-4 shrink-0" weight="bold" aria-hidden />
      </button>
    </motion.div>
  );
}
