"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { AboutFrameworkLadderLevel } from "../about-data";
import { motion, AnimatePresence } from "framer-motion";

type AboutFrameworkLadderProps = {
  id: string;
  title: string;
  levels: readonly AboutFrameworkLadderLevel[];
  vstepRange: { from: number; to: number; label: string };
  className?: string;
};

export function AboutFrameworkLadder({
  id,
  title,
  levels,
  vstepRange,
  className,
}: AboutFrameworkLadderProps) {
  // Default to Bậc 3 (B1)
  const [activeIndex, setActiveIndex] = React.useState(vstepRange.from);

  const activeLevel = levels[activeIndex];

  return (
    <section id={id} className={cn("scroll-mt-40", className)}>
      <div className="container px-4">
        {/* Section Title */}
        <Typography
          variant="h2"
          className="mb-8 border-none text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {title}
        </Typography>

        <div className="mx-auto w-full max-w-3xl space-y-6">
          {/* Level Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {levels.map((level, idx) => {
              const isSelected = idx === activeIndex;
              const isVstep = idx >= vstepRange.from && idx <= vstepRange.to;

              return (
                <button
                  key={level.id}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm",
                    isSelected
                      ? "text-primary scale-105 bg-white shadow-lg ring-2 ring-white/50"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  )}
                >
                  <span>Bậc {idx + 1}</span>

                  {isVstep && (
                    <span className="flex size-1.5 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Card Container with polished min-height to prevent text clipping & layout shift */}
          <div className="min-h-[380px] sm:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLevel.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex min-h-[380px] flex-col justify-start space-y-4 rounded-[2rem] bg-white p-6 text-zinc-900 shadow-2xl ring-1 ring-black/5 sm:min-h-[340px] sm:space-y-5 sm:p-8"
              >
                {/* Card Header */}
                <div className="border-b-2 border-zinc-100 pb-3 sm:pb-4">
                  <h3 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                    {activeLevel.label}
                  </h3>
                </div>

                {/* Structured Key Points for High Readability */}
                <div className="space-y-3 sm:space-y-3.5">
                  {activeLevel.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[11px] font-black text-red-600 ring-1 ring-red-200/60">
                        ✓
                      </span>
                      <p className="text-sm leading-relaxed font-medium text-zinc-700 sm:text-base">
                        <strong className="font-bold text-zinc-900">
                          {pt.title}:
                        </strong>{" "}
                        {pt.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
