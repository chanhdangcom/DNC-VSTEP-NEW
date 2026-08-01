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
  Clock,
  Hash,
  FileText,
  Star,
  Target,
  Monitor,
} from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/card";
import { CardsStack } from "@/components/ui/cards-stack";

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

const SKILL_THEMES: Record<
  string,
  { gradient: string; shadow: string; text: string; bgLight: string }
> = {
  nghe: {
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-200",
    text: "text-blue-600",
    bgLight: "bg-blue-50",
  },
  doc: {
    gradient: "bg-gradient-to-br from-teal-400 to-emerald-600",
    shadow:
      "shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:border-emerald-200",
    text: "text-teal-700",
    bgLight: "bg-emerald-50",
  },
  viet: {
    gradient: "bg-gradient-to-br from-amber-400 to-orange-500",
    shadow:
      "shadow-orange-500/10 hover:shadow-orange-500/20 hover:border-orange-200",
    text: "text-orange-600",
    bgLight: "bg-orange-50",
  },
  noi: {
    gradient: "bg-gradient-to-br from-rose-400 to-red-500",
    shadow:
      "shadow-red-500/10 hover:shadow-red-500/20 hover:border-red-200",
    text: "text-red-600",
    bgLight: "bg-red-50",
  },
};

function getBulletIcon(keyword: string) {
  const kw = keyword.toLowerCase();
  if (kw.includes("thời gian")) return Clock;
  if (
    kw.includes("số lượng") ||
    kw.includes("phần 1") ||
    kw.includes("phần 2") ||
    kw.includes("phần 3")
  )
    return Hash;
  if (kw.includes("nội dung")) return FileText;
  if (kw.includes("yêu cầu")) return Target;
  if (kw.includes("chấm điểm")) return Star;
  return CheckCircle;
}

export function AboutExamPaper({
  id,
  title,
  items,
  className,
}: AboutExamPaperProps) {
  return (
    <section id={id} className={cn("scroll-mt-40", className)}>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-16">
        {/* Title area (Sticky) */}
        <div className="h-max shrink-0 lg:sticky lg:top-40 lg:col-span-5 lg:mt-16">
          <Typography
            variant="h2"
            className="text-primary mb-4 border-none text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            Hình thức bài thi
            <br />
            VSTEP bậc 3 – 5
          </Typography>
          <p className="text-muted-foreground text-lg leading-relaxed lg:text-xl">
            Cấu trúc chi tiết 4 phần thi VSTEP trên máy tính. Mỗi kỹ năng được
            thiết kế chuyên biệt để đánh giá chính xác năng lực sử dụng ngôn ngữ
            của thí sinh.
          </p>
        </div>

        {/* Main Content Area: Stacked Cards */}
        <div className="lg:col-span-7">
          <CardsStack>
            {items.map((item, index) => {
              const Icon = ICONS[item.id] ?? CheckCircle;
              const partName = PART_NAMES[item.id] ?? "PHẦN THI";
              const theme = SKILL_THEMES[item.id] || SKILL_THEMES.nghe;
              return (
                <Card
                  key={item.id}
                  className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-zinc-50 p-0 shadow-sm ring-1 ring-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:flex-row"
                >
                  {/* Left Side: Solid Gradient Highlight Box */}
                  <div
                    className={cn(
                      "relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 text-white transition-all duration-700 md:w-2/5 lg:w-1/3",
                      theme.gradient
                    )}
                  >
                    {/* Decorative Orbs */}
                    <div className="absolute -top-12 -right-12 z-0 size-40 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover:scale-150"></div>
                    <div className="absolute -bottom-8 -left-8 z-0 size-32 rounded-full bg-black/10 blur-2xl transition-transform duration-700 group-hover:scale-150"></div>

                    {/* Giant Number Background */}
                    <div className="pointer-events-none absolute -bottom-10 -right-2 z-0 transition-transform duration-700 select-none group-hover:scale-110 group-hover:-rotate-3">
                      <span className="text-[14rem] leading-none font-black text-white/10 mix-blend-overlay">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Top: Icon & Badge */}
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-inner ring-1 ring-white/30 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:size-16">
                        <Icon weight="duotone" className="size-7 text-white sm:size-8" />
                      </div>
                      <div className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold tracking-widest text-white shadow-sm ring-1 ring-white/30 backdrop-blur-md">
                        {partName}
                      </div>
                    </div>

                    {/* Bottom: Title & Line */}
                    <div className="relative z-10 mt-12 sm:mt-16 text-left">
                      <div className="mb-4 h-1 w-10 rounded-full bg-white/40 transition-all duration-500 group-hover:w-16"></div>
                      <h4 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Side: Vertical List */}
                  <div className="relative z-10 flex-1 p-6 sm:p-8 flex flex-col justify-center md:pl-2">
                    <ul className="flex flex-col divide-y divide-zinc-200">
                      {item.bullets?.map((bullet, i) => {
                        const [keyword, ...rest] = bullet.split(":");
                        const hasKeyword = rest.length > 0;
                        const BulletIcon = hasKeyword
                          ? getBulletIcon(keyword)
                          : CheckCircle;

                        return (
                          <li
                            key={i}
                            className="group/list relative flex items-start gap-3 py-3 sm:gap-4 sm:py-4"
                          >
                            <div
                              className={cn(
                                "flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 ring-1 ring-black/5 transition-all duration-500 group-hover/list:scale-110 group-hover/list:bg-white group-hover/list:shadow-sm sm:size-11",
                                theme.text
                              )}
                            >
                              <BulletIcon
                                weight="duotone"
                                className="size-5"
                              />
                            </div>
                            
                            <div className="flex flex-col gap-1 mt-0.5">
                              <strong className="text-zinc-900 text-[14px] font-extrabold tracking-wide uppercase transition-colors duration-300">
                                {hasKeyword ? keyword : "Chi tiết"}
                              </strong>
                              
                              <p className="text-[15px] leading-relaxed text-zinc-600 transition-colors duration-300 group-hover/list:text-zinc-900">
                                {hasKeyword ? (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: highlightKeywords(rest.join(":")),
                                    }}
                                  />
                                ) : (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: highlightKeywords(bullet),
                                    }}
                                  />
                                )}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </CardsStack>
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
    /(\d+\s*câu hỏi|\d+\s*phần thi|\d+\s*phần)/g,
    '<strong class="font-bold text-zinc-900">$1</strong>'
  );
  // Bold scores (e.g. "Thang điểm 0–10")
  modified = modified.replace(
    /(Thang điểm [0-9–\-]+)/gi,
    '<strong class="font-bold text-zinc-900">$1</strong>'
  );

  return modified;
}
