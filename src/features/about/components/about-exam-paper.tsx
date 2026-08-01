"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { AboutAccordionItem } from "../about-data";
import {
  Headphones,
  BookOpenText,
  PencilSimpleLine,
  Microphone,
  CheckCircle,
} from "@phosphor-icons/react";

type AboutExamPaperProps = {
  id: string;
  title: string;
  items: readonly AboutAccordionItem[];
  className?: string;
};

const ICONS: Record<string, React.ElementType> = {
  nghe: Headphones,
  doc: BookOpenText,
  viet: PencilSimpleLine,
  noi: Microphone,
};

const PART_NAMES: Record<string, string> = {
  nghe: "PHẦN 1",
  doc: "PHẦN 2",
  viet: "PHẦN 3",
  noi: "PHẦN 4",
};

export function AboutExamPaper({ id, title, items, className }: AboutExamPaperProps) {
  return (
    <section id={id} className={cn("scroll-mt-40 space-y-8 sm:space-y-10", className)}>
      <div className="text-center">
        <Typography variant="h3" className="mb-3 text-primary">
          {title}
        </Typography>
        <p className="mx-auto max-w-xl text-sm text-zinc-600 sm:text-base">
          Cấu trúc chi tiết 4 phần thi VSTEP trên máy tính.
        </p>
      </div>

      <div className="w-full">
        {/* Grid of 4 Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {items.map((item) => {
            const Icon = ICONS[item.id] ?? CheckCircle;
            const partName = PART_NAMES[item.id] ?? "PHẦN THI";

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:p-6"
              >
                {/* Part Header */}
                <div className="mb-4 flex items-center gap-3 border-b border-zinc-100 pb-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon weight="duotone" className="size-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-zinc-500">
                      {partName}
                    </span>
                    <h4 className="truncate text-base font-bold text-zinc-900 sm:text-lg">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Bullets */}
                <div className="flex-1 pl-1">
                  <ul className="space-y-3">
                    {item.bullets?.map((bullet, i) => (
                      <li key={i} className="relative pl-5 text-sm leading-relaxed text-zinc-700">
                        <span className="absolute left-0 top-1.5 flex size-3 items-center justify-center rounded-full bg-primary/10">
                          <span className="size-1 rounded-full bg-primary" />
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: highlightKeywords(bullet) }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Helper function to highlight specific keywords for better UI */
function highlightKeywords(text: string) {
  let modified = text;
  // Bold time durations (e.g. "40 phút", "60 phút")
  modified = modified.replace(
    /(\d+\s*phút)/g,
    '<strong class="font-bold text-zinc-900">$1</strong>'
  );
  // Bold question counts (e.g. "35 câu hỏi", "2 phần")
  modified = modified.replace(
    /(\d+\s*câu hỏi|\d+\s*phần)/g,
    '<strong class="font-bold text-zinc-900">$1</strong>'
  );
  // Bold scores (e.g. "Thang điểm 0–10")
  modified = modified.replace(
    /(Thang điểm [0-9–\-]+)/gi,
    '<strong class="font-bold text-zinc-900">$1</strong>'
  );

  return modified;
}
