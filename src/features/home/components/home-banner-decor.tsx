"use client";

import { motion } from "motion/react";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import { cn } from "@/lib/utils";
import { HOME_BANNER_RED } from "../utils/home-banner-theme";
import { BANNER_EASE } from "../utils/home-banner-motion";

const FLOAT_DOTS = [
  { className: "top-[18%] left-[16%] size-1.5", delay: 0, distance: 18 },
  { className: "top-[36%] left-[26%] size-2.5", delay: 0.35, distance: 22 },
  { className: "top-[52%] left-[12%] size-2", delay: 0.7, distance: 16 },
  { className: "bottom-[30%] left-[22%] size-1.5", delay: 0.2, distance: 20 },
  { className: "top-[24%] right-[20%] size-2", delay: 0.45, distance: 24 },
  { className: "top-[48%] right-[14%] size-2.5", delay: 0.15, distance: 18 },
  { className: "bottom-[36%] right-[24%] size-1.5", delay: 0.85, distance: 20 },
  { className: "bottom-[18%] right-[12%] size-2", delay: 0.55, distance: 14 },
] as const;

export function HomeBannerDecor() {
  const shouldReduceMotion = useShouldReduceMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.42]"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.42 }}
        transition={{ duration: 1.1, ease: BANNER_EASE }}
      >
        <motion.g
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="18"
          strokeLinecap="round"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: [0, 3.5, 0], x: [0, 22, 0], y: [0, -14, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "220px 180px" }}
        >
          <circle cx="80" cy="100" r="260" />
          <circle cx="340" cy="40" r="240" />
          <circle cx="200" cy="280" r="160" />
        </motion.g>

        <motion.g
          fill="none"
          stroke="#d8d8dc"
          strokeWidth="16"
          strokeLinecap="round"
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: [0, -3, 0], x: [0, -18, 0], y: [0, 20, 0] }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          style={{ transformOrigin: "1200px 560px" }}
        >
          <circle cx="60" cy="560" r="220" />
          <circle cx="1320" cy="700" r="200" />
          <circle cx="1180" cy="280" r="180" />
          <circle cx="1280" cy="480" r="140" />
        </motion.g>
      </motion.svg>

      <motion.div
        className="bg-primary/10 absolute top-[14%] right-[4%] hidden size-[24rem] rounded-full blur-3xl lg:block xl:size-[28rem]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.18, 1],
                opacity: [0.45, 0.95, 0.45],
                x: [0, -16, 0],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="bg-primary/5 absolute bottom-[12%] left-[8%] hidden size-[16rem] rounded-full blur-3xl lg:block"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.14, 1],
                opacity: [0.35, 0.75, 0.35],
                y: [0, -18, 0],
              }
        }
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />

      {/* Thin accent rings */}
      <motion.span
        className="border-primary/20 absolute top-[20%] left-[30%] hidden size-28 rounded-full border lg:block xl:size-32"
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1, 1.2, 1], opacity: [0.35, 0.7, 0.35] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="border-primary/15 absolute right-[18%] bottom-[22%] hidden size-20 rounded-full border lg:block"
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1, 1.25, 1], opacity: [0.3, 0.65, 0.3] }
        }
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {FLOAT_DOTS.map((dot) => (
        <motion.span
          key={dot.className}
          className={cn(
            "bg-primary/40 absolute hidden rounded-full lg:block",
            dot.className
          )}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -dot.distance, 0],
                  x: [0, dot.distance * 0.35, 0],
                  opacity: [0.4, 1, 0.4],
                }
          }
          transition={{
            duration: 3.2 + dot.delay,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
