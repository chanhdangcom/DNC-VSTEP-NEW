"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import type { ExamScheduleItem } from "../exam-schedule-data";
import { EXAM_SCHEDULE_PAGE_SIZE } from "../exam-schedule-page-data";
import { paginateExamScheduleItems } from "../utils/filter-exam-schedule";
import { ExamScheduleItemCard } from "./exam-schedule-item-card";
import { ExamSchedulePagination } from "./exam-schedule-pagination";

type ExamSchedulePlansProps = {
  items: readonly ExamScheduleItem[];
  emptyMessage: string;
  className?: string;
};

function readPageParam(value: string | null) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return Math.floor(parsed);
}

/** Danh sách lịch dạng hàng + phân trang. */
export function ExamSchedulePlans({
  items,
  emptyMessage,
  className,
}: ExamSchedulePlansProps) {
  const searchParams = useSearchParams();
  const page = readPageParam(searchParams.get("page"));

  const {
    page: safePage,
    totalPages,
    items: pageItems,
  } = useMemo(
    () => paginateExamScheduleItems(items, page, EXAM_SCHEDULE_PAGE_SIZE),
    [items, page]
  );

  return (
    <div className={cn("space-y-6 sm:space-y-8", className)}>
      {items.length === 0 ? (
        <p className="rounded-md border border-zinc-200 bg-zinc-50 px-6 py-10 text-center text-sm text-zinc-600">
          {emptyMessage}
        </p>
      ) : (
        <>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pageItems.map((item) => (
              <li key={item.id} className="h-full">
                <ExamScheduleItemCard item={item} />
              </li>
            ))}
          </ul>

          <ExamSchedulePagination page={safePage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}
