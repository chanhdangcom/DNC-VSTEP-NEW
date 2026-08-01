"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { AboutFrameworkLadderLevel } from "../about-data";
import { Button } from "@/components/ui/button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";

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
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className={cn("scroll-mt-40", className)}>
      <div className="container px-4">
        <Typography variant="h3" className="mb-12 text-center text-white">
          {title}
        </Typography>

        <div className="mx-auto w-full max-w-7xl">
        {/* DESKTOP ALTERNATING TIMELINE (lg and xl) */}
        <div className="relative hidden lg:grid lg:grid-cols-6 lg:gap-x-0">
          {/* Continuous Horizontal Line */}
          <div className="col-span-6 col-start-1 row-start-2 h-[2px] w-full self-center bg-zinc-200" />

          {levels.map((level, index) => {
            const inVstep = index >= vstepRange.from && index <= vstepRange.to;
            const isTop = index % 2 === 0; // 0, 2, 4 are top. 1, 3, 5 are bottom.
            const colClasses = [
              "col-start-1",
              "col-start-2",
              "col-start-3",
              "col-start-4",
              "col-start-5",
              "col-start-6",
            ];

            return (
              <React.Fragment key={level.cefr}>
                {/* Node Circle */}
                <div
                  className={cn(
                    colClasses[index],
                    "z-10 row-start-2 flex size-10 items-center justify-center self-center justify-self-center rounded-full border-4 border-white transition-all duration-500",
                    inVstep
                      ? "bg-red-700 text-white shadow-md ring-1 shadow-zinc-900/20 ring-zinc-900/20 group-hover:scale-110"
                      : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200 group-hover:text-zinc-700"
                  )}
                >
                  <span className="text-sm leading-none font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content Card Wrapper */}
                <div
                  className={cn(
                    colClasses[index],
                    isTop
                      ? "row-start-1 justify-end pb-8"
                      : "row-start-3 justify-start pt-8",
                    "relative z-20 flex w-[280px] flex-col justify-self-center xl:w-[320px]"
                  )}
                >
                  <Card
                    className="relative w-full overflow-hidden border-primary/40 bg-zinc-100 shadow-xl shadow-primary/15"
                  >
                    {/* Watermark Number */}
                    <div className="pointer-events-none absolute -bottom-8 -right-4 z-0 -rotate-12 scale-110 select-none">
                      <span className="text-[12rem] font-black leading-none tracking-tighter text-primary opacity-5">
                        {index + 1}
                      </span>
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl text-primary">{level.label}</CardTitle>
                      <CardDescription>
                        Tương đương:{" "}
                        <span className="font-semibold text-primary">
                          {level.cefr}
                        </span>
                      </CardDescription>

                      <CardAction>
                        <span className="rounded-full bg-primary px-2.5 py-1 text-[0.65rem] font-bold tracking-widest text-primary-foreground uppercase">
                          {level.group}
                        </span>
                      </CardAction>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
                        {level.summary}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* MOBILE & TABLET FALLBACK (< lg) */}
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:hidden">
          {levels.map((level, index) => {
            const inVstep = index >= vstepRange.from && index <= vstepRange.to;
            const isLastInRowSm = index === 1 || index === 3 || index === 5;

            return (
              <div key={level.cefr} className="relative flex flex-col">
                {/* Horizontal Connecting Lines for sm screens */}
                {!isLastInRowSm && (
                  <div className="absolute top-5 left-1/2 -z-10 hidden h-[2px] w-[calc(100%+1.5rem)] bg-white/30 sm:block lg:hidden" />
                )}

                {/* Vertical Connecting Line for strict mobile (< sm) */}
                {index < levels.length - 1 && (
                  <div className="absolute top-10 left-1/2 -z-10 h-[calc(100%-8px)] w-[2px] -translate-x-1/2 bg-white/30 sm:hidden" />
                )}

                {/* Node Circle */}
                <div
                  className={cn(
                    "relative z-10 mx-auto mb-8 flex size-10 items-center justify-center rounded-full border-4 border-white transition-all duration-500",
                    inVstep
                      ? "bg-red-700 text-white shadow-md ring-1 shadow-zinc-900/20 ring-zinc-900/20"
                      : "bg-zinc-100 text-zinc-400"
                  )}
                >
                  <span className="text-sm leading-none font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex flex-1 flex-col">
                  <Card
                    className="relative flex-1 overflow-hidden border-primary/40 bg-zinc-100 shadow-xl shadow-primary/15"
                  >
                    {/* Watermark Number */}
                    <div className="pointer-events-none absolute -bottom-8 -right-4 z-0 -rotate-12 scale-110 select-none">
                      <span className="text-[12rem] font-black leading-none tracking-tighter text-primary opacity-5">
                        {index + 1}
                      </span>
                    </div>

                    <CardHeader className="relative z-10 pb-4">
                      <CardTitle className="text-xl text-primary">{level.label}</CardTitle>
                      <CardDescription>
                        Tương đương:{" "}
                        <span className="font-semibold text-primary">
                          {level.cefr}
                        </span>
                      </CardDescription>
                      <CardAction>
                        <span className="rounded-full bg-primary px-2.5 py-1 text-[0.65rem] font-bold tracking-widest text-primary-foreground uppercase">
                          {level.group}
                        </span>
                      </CardAction>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
                        {level.summary}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
