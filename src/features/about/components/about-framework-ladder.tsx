"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { AboutFrameworkLadderLevel } from "../about-data";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
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
  // Default to the first level in the VSTEP range (usually Bậc 3)
  const [activeIndex, setActiveIndex] = React.useState(vstepRange.from);

  const activeLevel = levels[activeIndex];
  const inVstep = activeIndex >= vstepRange.from && activeIndex <= vstepRange.to;

  return (
    <section id={id} className={cn("scroll-mt-40", className)}>
      <div className="container px-4">
        <Typography
          variant="h2"
          className="mb-12 border-none text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {title}
        </Typography>

        <div className="mx-auto w-full max-w-4xl">
          {/* Tabs Navigation */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {levels.map((level, index) => {
              const isSelected = index === activeIndex;
              const isVstep = index >= vstepRange.from && index <= vstepRange.to;

              return (
                <button
                  key={level.cefr}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative flex w-[80px] sm:w-[100px] flex-col items-center justify-center rounded-2xl py-3 font-semibold transition-all duration-300 sm:py-4",
                    isSelected
                      ? "bg-white text-primary shadow-lg ring-2 ring-white/50 scale-105"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  <span className="text-sm sm:text-base">Bậc {index + 1}</span>
                  <span
                    className={cn(
                      "text-[10px] font-bold tracking-widest uppercase sm:text-xs",
                      isSelected ? "text-primary/70" : "text-white/60"
                    )}
                  >
                    {level.cefr}
                  </span>
                  
                  {isVstep && (
                    <div className="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-black tracking-widest text-amber-950 uppercase shadow-md">
                      VSTEP
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Content Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-10 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Header */}
                <div className="mb-8 flex flex-col items-start gap-4 border-b border-zinc-100 pb-8 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
                      {activeLevel.label}
                    </h3>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {inVstep && (
                        <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-sm">
                          {vstepRange.label} (Bậc {vstepRange.from + 1}-{vstepRange.to + 1})
                        </span>
                      )}
                      <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-bold tracking-widest text-zinc-600 uppercase">
                        Nhóm: {activeLevel.group}
                      </span>
                    </div>
                  </div>

                  {/* Big CEFR Badge */}
                  <div className="hidden shrink-0 items-center justify-center rounded-full bg-zinc-50 size-24 ring-1 ring-black/5 md:flex">
                    <span className="text-4xl font-black text-primary/80">
                      {activeLevel.cefr}
                    </span>
                  </div>
                </div>

                {/* Bento Grid Features (No bullet points) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {activeLevel.features.map((feature, i) => {
                    const [title, ...rest] = feature.split(":");
                    const hasTitle = rest.length > 0;

                    // Asymmetric magazine layout styles
                    const bentoStyles = [
                      "md:col-span-7 bg-zinc-900 text-white",
                      "md:col-span-5 bg-primary text-white",
                      "md:col-span-5 border border-zinc-200 bg-white text-zinc-900 shadow-sm",
                      "md:col-span-7 bg-zinc-100 text-zinc-900",
                    ];
                    const style = bentoStyles[i % 4];

                    return (
                      <div
                        key={i}
                        className={cn(
                          "flex flex-col justify-center rounded-[2rem] p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1",
                          style
                        )}
                      >
                        {hasTitle ? (
                          <>
                            <h4 className="mb-3 text-xs font-black tracking-widest uppercase opacity-70">
                              {title}
                            </h4>
                            <p className="text-xl font-bold leading-snug sm:text-2xl sm:leading-tight">
                              {rest.join(":")}
                            </p>
                          </>
                        ) : (
                          <p className="text-xl font-bold leading-snug sm:text-2xl sm:leading-tight">
                            {feature}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Giant Watermark */}
            <div className="pointer-events-none absolute -bottom-12 -right-6 z-0 select-none opacity-5">
              <span className="text-[16rem] font-black leading-none">
                {activeLevel.cefr}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
