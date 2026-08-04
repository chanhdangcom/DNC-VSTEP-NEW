"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { AboutFrameworkLadderLevel } from "../about-data";

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
  const [activeIndex, setActiveIndex] = React.useState(vstepRange.from);
  const activeLevel = levels[activeIndex];

  return (
    <section id={id} className={cn("w-full scroll-mt-40", className)}>
      <div className="container">
        <div className="mx-auto w-full">
          {/* Section Title */}
          <Typography
            variant="h2"
            className="mb-8 border-none text-center text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl"
          >
            {title}
          </Typography>

          {/* 1. CLEAN HORIZONTAL TAB SELECTOR */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {levels.map((level, idx) => {
              const isActive = activeIndex === idx;
              const isVstepTarget =
                idx >= vstepRange.from && idx <= vstepRange.to;

              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "group relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200 outline-none select-none",
                    isActive
                      ? "scale-105 bg-white text-red-600 shadow-lg ring-2 ring-white"
                      : "bg-white/10 text-white/90 hover:bg-white/20 hover:text-white"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full text-xs font-black transition-colors",
                      isActive
                        ? "bg-red-600 text-white"
                        : "bg-white/20 text-white group-hover:bg-white/30"
                    )}
                  >
                    {idx + 1}
                  </span>
                  <span>Bậc {idx + 1}</span>

                  {/* VSTEP range dot */}
                  {isVstepTarget && !isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 2. MINIMALIST & CRYSTAL CLEAR CONTENT CARD */}
          <div
            key={activeIndex}
            className="animate-in fade-in rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 duration-200 sm:p-7 lg:p-8"
          >
            {/* Header / Level Title & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5">
              <h3 className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
                Bậc {activeIndex + 1}: {activeLevel?.group}
              </h3>

              {/* Badges */}
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-zinc-100 px-3.5 py-1 text-xs font-bold text-zinc-600">
                  CEFR {activeLevel?.cefr}
                </span>
                {activeIndex >= vstepRange.from &&
                  activeIndex <= vstepRange.to && (
                    <span className="rounded-full bg-red-50 px-3.5 py-1 text-xs font-bold text-red-600 ring-1 ring-red-600/20 ring-inset">
                      {vstepRange.label}
                    </span>
                  )}
              </div>
            </div>

            {/* Main Description */}
            <p className="mt-5 text-base leading-relaxed text-zinc-700 sm:text-lg sm:leading-relaxed">
              {activeLevel?.fullDescription}
            </p>

            {/* Specific Capabilities List */}
            <div className="mt-6 border-t border-zinc-100 pt-5">
              <h4 className="mb-3 text-sm font-bold text-zinc-900">
                Năng lực đạt được:
              </h4>
              <div className="flex flex-col gap-3">
                {activeLevel?.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base leading-relaxed font-medium text-zinc-700 sm:text-lg sm:leading-relaxed">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
