"use client";

import Link from "next/link";
import { ArrowRight, CalendarBlank, Clock, MapPin } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import type { ExamScheduleItem } from "../../exam-schedule-data";

type ExamScheduleV2TimelineProps = {
  items: readonly ExamScheduleItem[];
};

export function ExamScheduleV2Timeline({ items }: ExamScheduleV2TimelineProps) {
  if (!items.length) return null;

  return (
    <div className="relative w-full">
      {/* Horizontal scroll container */}
      <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8 hide-scrollbar">
        {items.map((item, idx) => {
          const isExam = item.label === "Lịch thi";
          const isReview = item.label === "Thông báo ôn thi";
          const isPlan = item.label === "Kế hoạch năm";

          const accentColor = isExam
            ? "bg-rose-500 text-rose-500 border-rose-500/20"
            : isReview
              ? "bg-amber-500 text-amber-600 border-amber-500/20"
              : "bg-blue-500 text-blue-500 border-blue-500/20";
              
          const lightBg = isExam
            ? "bg-rose-50"
            : isReview
              ? "bg-amber-50"
              : "bg-blue-50";

          return (
            <div
              key={item.id}
              className="relative flex w-[280px] shrink-0 snap-center flex-col sm:w-[320px] md:w-[380px]"
            >
              {/* Top timeline connector (visual only) */}
              <div className="absolute top-4 left-[3rem] right-0 -z-10 h-0.5 bg-zinc-200" />
              {idx === 0 && (
                <div className="absolute top-4 left-0 -z-10 h-0.5 w-[3rem] bg-gradient-to-r from-transparent to-zinc-200" />
              )}
              {idx === items.length - 1 && (
                <div className="absolute top-4 left-[3rem] -z-10 h-0.5 w-full bg-gradient-to-r from-zinc-200 to-transparent" />
              )}

              {/* Node indicator */}
              <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-zinc-200 shadow-sm transition-all group-hover:scale-110">
                <div className={cn("h-2.5 w-2.5 rounded-full", accentColor.split(" ")[0])} />
              </div>

              {/* Card */}
              <Link
                href={item.href}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white/60 p-6 shadow-xl shadow-black/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 sm:p-8"
                )}
              >
                {/* Background glow on hover */}
                <div className={cn("absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl transition-opacity opacity-0 group-hover:opacity-40", accentColor.split(" ")[0])} />

                <div className="mb-4 flex items-center justify-between">
                  <span className={cn("rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider", lightBg, accentColor.split(" ")[1])}>
                    {item.label}
                  </span>
                  {item.isImportant && (
                    <span className="flex h-2 w-2 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                  )}
                </div>

                <h3 className="mb-3 line-clamp-2 text-xl font-bold tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                
                <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  {item.examDate && (
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-700">
                      <CalendarBlank className={accentColor.split(" ")[1]} weight="bold" size={16} />
                      {item.examDate}
                    </div>
                  )}
                  {item.preview?.rows.find((r) => r.kind === "location") && (
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-600">
                      <MapPin className="text-zinc-400" size={16} />
                      <span className="truncate">
                        {item.preview?.rows.find((r) => r.kind === "location")?.value}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center text-sm font-bold text-zinc-900 transition-colors group-hover:text-primary">
                  Xem chi tiết
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" weight="bold" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
