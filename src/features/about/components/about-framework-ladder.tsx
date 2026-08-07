"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  return (
    <section id={id} className={cn("w-full scroll-mt-40", className)}>
      <div className="container">
        <div className="mx-auto w-full">
          {/* Section Title */}
          <Typography
            variant="h2"
            className="mb-4 border-none text-center text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
          >
            {title}
          </Typography>

          <Tabs
            defaultValue={levels[vstepRange.from]?.id}
            className="flex w-full flex-col items-center"
          >
            <TabsList className="flex h-auto w-full max-w-full justify-start overflow-x-auto overflow-y-hidden rounded-[2rem] bg-black/20 shadow-2xl ring-1 ring-white/20 backdrop-blur-md sm:w-auto sm:justify-center">
              {levels.map((level, idx) => {
                const isVstepTarget =
                  idx >= vstepRange.from && idx <= vstepRange.to;

                return (
                  <TabsTrigger
                    key={level.id}
                    value={level.id}
                    className={cn(
                      "group relative flex shrink-0 cursor-pointer items-center gap-3 rounded-full px-6 py-3.5 text-base font-bold tracking-wide text-white/70 transition-all duration-300 outline-none sm:px-8",
                      "hover:bg-white/10 hover:text-white",
                      "data-[state=active]:bg-white data-[state=active]:text-red-700 data-[state=active]:shadow-xl"
                    )}
                  >
                    <span>Bậc {idx + 1}</span>

                    {/* VSTEP range dot */}
                    {isVstepTarget && (
                      <span
                        className={cn(
                          "h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all duration-300",
                          "group-data-[state=active]:scale-110 group-data-[state=active]:bg-red-500 group-data-[state=active]:shadow-none"
                        )}
                      />
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* 2. MINIMALIST & CRYSTAL CLEAR CONTENT CARD */}
            {levels.map((level, idx) => (
              <TabsContent
                key={level.id}
                value={level.id}
                className="mt-4 outline-none sm:mt-6"
              >
                <Card className="overflow-hidden rounded-[2rem] border-none bg-white/95 p-4 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8 sm:px-10">
                  <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4 border-b border-zinc-200/60 px-0 pt-0 pb-6">
                    <CardTitle className="text-primary text-3xl font-bold tracking-tight sm:text-4xl">
                      Bậc {idx + 1}: {level.group}
                    </CardTitle>

                    {/* Badges */}
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-semibold text-zinc-600">
                        CEFR {level.cefr}
                      </span>
                      {idx >= vstepRange.from && idx <= vstepRange.to && (
                        <span className="rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600 ring-1 ring-red-600/20 ring-inset">
                          {vstepRange.label}
                        </span>
                      )}
                    </div>
                  </CardHeader>

                  {/* Main Description */}
                  <CardContent className="px-0">
                    <p className="text-foreground text-lg leading-relaxed text-pretty">
                      {level.fullDescription}
                    </p>
                  </CardContent>

                  {/* Specific Capabilities List */}
                  <CardFooter className="flex-col items-start border-t border-zinc-200/60 px-0 pt-8 pb-0">
                    <h4 className="mb-5 text-sm font-bold tracking-wider text-zinc-900">
                      Năng lực đạt được:
                    </h4>

                    <div className="flex flex-col gap-2">
                      {level.capabilities.map((cap, capIdx) => (
                        <div
                          key={capIdx}
                          className="group flex items-start gap-2"
                        >
                          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 transition-colors group-hover:bg-red-100">
                            <svg
                              className="h-4 w-4 text-red-600"
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
                          </div>

                          <span className="text-foreground text-lg leading-relaxed">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
