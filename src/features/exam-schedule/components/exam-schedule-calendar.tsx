"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarBlank,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import {
  format,
  getMonth,
  getYear,
  isSameMonth,
  parse,
  setMonth,
} from "date-fns";
import { vi } from "date-fns/locale";
import { useMemo } from "react";
import {
  FullCalendar,
  FullCalendarCurrentDate,
  FullCalendarNextTrigger,
  FullCalendarPrevTrigger,
  FullCalendarTodayTrigger,
  useFullCalendar,
  type FullCalendarEvent,
} from "@/components/ui/full-calendar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

import { formatListDate, toListDateTime } from "../utils/format-list-date";
import type { ExamScheduleItem } from "../exam-schedule-data";
import { ExamScheduleHoverPreview } from "./exam-schedule-hover-preview";

type ExamScheduleCalendarProps = {
  items: readonly ExamScheduleItem[];
  emptyMessage: string;
  className?: string;
};

const TAG_ACCENT: Record<string, string> = {
  "Lịch thi": "border-l-sky-500",
  "Thông báo ôn thi": "border-l-emerald-500",
  "Kế hoạch năm": "border-l-amber-500",
};

const TAG_STYLES: Record<string, string> = {
  "Lịch thi": "bg-sky-50 text-sky-700 ring-sky-200/60",
  "Thông báo ôn thi": "bg-emerald-50 text-emerald-700 ring-emerald-200/60",
  "Kế hoạch năm": "bg-amber-50 text-amber-700 ring-amber-200/60",
};

function toEventDate(date: string) {
  return parse(date, "dd.MM.yyyy", new Date());
}

/** Ưu tiên ngày thi (cuối tháng); không có thì dùng ngày đăng thông báo. */
function calendarDateOf(item: ExamScheduleItem) {
  return toEventDate(item.examDate ?? item.date);
}

function itemToEvent(item: ExamScheduleItem): FullCalendarEvent {
  const start = calendarDateOf(item);

  return {
    id: item.id,
    start,
    end: start,
    title: item.title,
    color: item.isImportant || item.isNew ? "pink" : "blue",
  };
}

/** Card thông báo trong lưới năm (1 ô / tháng). */
function ExamScheduleYearMonthCard({
  item,
  monthDate,
}: {
  item: ExamScheduleItem;
  monthDate: Date;
}) {
  const { setDate } = useFullCalendar();
  const isCurrentMonth = isSameMonth(monthDate, new Date());

  return (
    <HoverCard>
      <HoverCardTrigger
        delay={180}
        closeDelay={80}
        render={
          <Link
            href={item.href}
            onClick={() => {
              setDate(monthDate);
            }}
            className={cn(
              "group flex h-full min-h-0 flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all sm:p-5",
              "border border-l-4 border-zinc-200/60 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]",
              isCurrentMonth ? "ring-primary ring-2" : "",
              TAG_ACCENT[item.label] || "border-l-zinc-300"
            )}
          >
            <div className="flex flex-wrap items-center gap-2">
              {item.isNew && (
                <span className="bg-primary/5 text-primary ring-primary/20 inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold ring-1">
                  Mới
                </span>
              )}
              <span
                className={cn(
                  "inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-[0.6875rem] font-medium ring-1",
                  TAG_STYLES[item.label] ||
                    "bg-zinc-100 text-zinc-600 ring-zinc-200/50"
                )}
              >
                {item.label}
              </span>
            </div>

            <div className="flex min-h-0 flex-1 items-start gap-3">
              <h3 className="group-hover:text-primary line-clamp-2 min-w-0 flex-1 text-sm leading-snug font-semibold text-zinc-950 transition-colors sm:text-base">
                {item.title}
              </h3>
              <span className="bg-primary/5 text-primary group-hover:bg-primary inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors group-hover:text-white">
                <ArrowRight className="size-3.5" weight="bold" aria-hidden />
              </span>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
              <time
                dateTime={toListDateTime(item.date)}
                className="inline-flex items-center gap-1.5 text-blue-500"
              >
                <CalendarBlank className="size-3.5 shrink-0" aria-hidden />
                Đăng {formatListDate(item.date)}
              </time>
              {item.examDate ? (
                <span className="text-zinc-400">
                  Thi {formatListDate(item.examDate)}
                </span>
              ) : null}
            </div>
          </Link>
        }
      />

      <HoverCardContent side="right" align="start" className="w-88 sm:w-96">
        <ExamScheduleHoverPreview item={item} />
      </HoverCardContent>
    </HoverCard>
  );
}

function ExamScheduleYearEmptyMonth({ monthDate }: { monthDate: Date }) {
  const isCurrentMonth = isSameMonth(monthDate, new Date());

  return (
    <div
      className={cn(
        "flex h-full min-h-34 flex-col items-start justify-start rounded-2xl border border-dashed border-zinc-300 px-4 py-4 sm:min-h-36 sm:px-5",
        isCurrentMonth && "border-primary/40"
      )}
    >
      <span className="text-sm text-zinc-400">Chưa có thông báo</span>
    </div>
  );
}

function ExamScheduleYearPanel({
  items,
}: {
  items: readonly ExamScheduleItem[];
}) {
  const { view, date } = useFullCalendar();

  const months = useMemo(
    () => Array.from({ length: 12 }, (_, index) => setMonth(date, index)),
    [date]
  );

  const itemsByMonth = useMemo(() => {
    const map = new Map<number, ExamScheduleItem[]>();
    const year = getYear(date);

    for (const item of items) {
      const eventDate = calendarDateOf(item);
      if (getYear(eventDate) !== year) continue;
      const month = getMonth(eventDate);
      const list = map.get(month) ?? [];
      list.push(item);
      map.set(month, list);
    }

    return map;
  }, [date, items]);

  if (view !== "year") return null;

  return (
    <div className="w-full py-1 pb-2">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
        {months.map((monthDate) => {
          const monthItems = itemsByMonth.get(getMonth(monthDate)) ?? [];
          const primary = monthItems[0];

          return (
            <div
              key={monthDate.toISOString()}
              className="flex min-h-0 flex-col gap-2"
            >
              <h3 className="text-primary shrink-0 text-left text-[0.9375rem] font-medium capitalize sm:text-base">
                {format(monthDate, "MMMM", { locale: vi })}
                {monthItems.length > 1 ? (
                  <span className="text-primary/70 ml-1.5 text-xs font-semibold tabular-nums">
                    {monthItems.length}
                  </span>
                ) : null}
              </h3>

              {primary ? (
                <ExamScheduleYearMonthCard
                  item={primary}
                  monthDate={monthDate}
                />
              ) : (
                <ExamScheduleYearEmptyMonth monthDate={monthDate} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ExamScheduleCalendar({
  items,
  className,
}: ExamScheduleCalendarProps) {
  const events = useMemo(() => items.map(itemToEvent), [items]);

  const defaultDate = useMemo(() => {
    if (events.length === 0) return new Date();
    const sorted = [...events].sort(
      (a, b) => b.start.getTime() - a.start.getTime()
    );
    return sorted[0]?.start ?? new Date();
  }, [events]);

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <FullCalendar
        key={defaultDate.toISOString()}
        defaultDate={defaultDate}
        defaultView="year"
        events={events}
        weekStartsOn={1}
        className="flex w-full flex-col bg-white"
      >
        <div className="flex w-full flex-col">
          <div className="grid shrink-0 grid-cols-[1fr_auto] items-center gap-4 py-5 sm:py-6">
            <FullCalendarCurrentDate className="min-w-0 truncate capitalize" />

            <div className="flex items-center justify-end gap-1.5">
              <FullCalendarPrevTrigger
                aria-label="Trước"
                className="size-8 rounded-full bg-zinc-100 text-zinc-800 hover:bg-zinc-200 hover:text-zinc-950"
              >
                <CaretLeft className="size-3.5" weight="bold" />
              </FullCalendarPrevTrigger>
              <FullCalendarTodayTrigger className="h-8 rounded-full bg-zinc-100 px-3.5 text-[0.8125rem] font-medium text-zinc-800 hover:bg-zinc-200 hover:text-zinc-950">
                Hôm nay
              </FullCalendarTodayTrigger>
              <FullCalendarNextTrigger
                aria-label="Sau"
                className="size-8 rounded-full bg-zinc-100 text-zinc-800 hover:bg-zinc-200 hover:text-zinc-950"
              >
                <CaretRight className="size-3.5" weight="bold" />
              </FullCalendarNextTrigger>
            </div>
          </div>

          <ExamScheduleYearPanel items={items} />
        </div>
      </FullCalendar>
    </div>
  );
}
