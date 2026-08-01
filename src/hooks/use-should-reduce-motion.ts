"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/** Matches Tailwind `lg` — appear animations only run on desktop. */
const DESKTOP_MQ = "(min-width: 1024px)";

/**
 * True when motion should be skipped: prefers-reduced-motion, or viewport below `lg`.
 * Defaults to reduced until mounted so mobile never flashes entrance animation.
 */
export function useShouldReduceMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MQ);

    function sync() {
      setIsDesktop(mediaQuery.matches);
    }

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return Boolean(prefersReducedMotion || !isDesktop);
}
