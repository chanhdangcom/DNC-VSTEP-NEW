"use client";

import Link from "next/link";
import { CalendarBlank } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import type { ExamScheduleItem } from "../exam-schedule-data";
import {
  EXAM_SCHEDULE_TYPE,
  getExamScheduleLabelTagClass,
} from "../utils/exam-schedule-theme";
import {
  EXAM_SCHEDULE_EASE,
  EXAM_SCHEDULE_STAGGER,
  EXAM_SCHEDULE_VIEWPORT,
} from "../utils/exam-schedule-motion";
import { formatListDate, toListDateTime } from "../utils/format-list-date";
import { ExamScheduleListRowAction } from "./exam-schedule-list-row-action";

type ExamScheduleListRowProps = {
  item: ExamScheduleItem;
  index: number;
  /** `list` = home rows; `card` = /lich-thi grid. */
  variant?: "list" | "card";
};

export function ExamScheduleListRow({
  item,
  index,
  variant = "list",
}: ExamScheduleListRowProps) {
  const shouldReduceMotion = useShouldReduceMotion();
  const isCard = variant === "card";

  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={EXAM_SCHEDULE_VIEWPORT}
      transition={{
        duration: 0.45,
        delay: index * EXAM_SCHEDULE_STAGGER,
        ease: EXAM_SCHEDULE_EASE,
      }}
      className={cn(
        isCard &&
          "h-full min-h-0 self-stretch overflow-hidden rounded-4xl bg-white shadow-sm",
        !isCard && "border-primary/15 border-t"
      )}
    >
      <Link
        href={item.href}
        className={cn(
          "group block transition-colors hover:bg-white/50",
          isCard
            ? "flex h-full min-h-0 flex-col px-5 py-5 sm:px-6 sm:py-6"
            : "px-6 py-4 sm:px-8"
        )}
      >
        {isCard ? (
          <div className="flex h-full min-h-0 flex-col gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span
                  className={cn(
                    EXAM_SCHEDULE_TYPE.tag,
                    getExamScheduleLabelTagClass(item.label)
                  )}
                >
                  {item.label}
                </span>

                {item.isNew ? (
                  <span
                    className={cn(
                      EXAM_SCHEDULE_TYPE.tag,
                      "bg-red-600/90 text-white"
                    )}
                  >
                    Mới
                  </span>
                ) : null}
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <h3
                  className={cn(
                    EXAM_SCHEDULE_TYPE.rowTitle,
                    "group-hover:text-primary min-w-0 flex-1 text-zinc-950 transition-colors"
                  )}
                >
                  {item.title}
                </h3>

                <ExamScheduleListRowAction appearance="soft" />
              </div>
            </div>

            <time
              dateTime={toListDateTime(item.date)}
              className="inline-flex items-center gap-1.5 text-xs leading-none text-blue-500"
            >
              <CalendarBlank
                className="size-3.5 shrink-0"
                weight="regular"
                aria-hidden
              />
              {formatListDate(item.date)}
            </time>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <time
                dateTime={toListDateTime(item.date)}
                className={cn(
                  EXAM_SCHEDULE_TYPE.date,
                  "shrink-0 text-zinc-600"
                )}
              >
                {formatListDate(item.date)}
              </time>

              <div className="flex flex-wrap items-center gap-1.5">
                <span
                  className={cn(
                    EXAM_SCHEDULE_TYPE.tag,
                    getExamScheduleLabelTagClass(item.label)
                  )}
                >
                  {item.label}
                </span>

                {item.isNew ? (
                  <span
                    className={cn(
                      EXAM_SCHEDULE_TYPE.tag,
                      "bg-primary/10 text-primary"
                    )}
                  >
                    Mới
                  </span>
                ) : null}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1 sm:gap-4 sm:pt-1.5">
              <h3
                className={cn(
                  EXAM_SCHEDULE_TYPE.rowTitle,
                  "group-hover:text-primary text-zinc-950 transition-colors"
                )}
              >
                {item.title}
              </h3>

              <ExamScheduleListRowAction />
            </div>
          </>
        )}
      </Link>
    </motion.li>
  );
}
