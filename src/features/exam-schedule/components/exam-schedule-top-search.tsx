"use client";

import { CaretDown, MagnifyingGlass, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  examScheduleDateSortOptions,
  type ExamScheduleDateSortValue,
} from "../utils/filter-exam-schedule";

type ExamScheduleTopSearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
  dateSort: ExamScheduleDateSortValue;
  onDateSortChange: (value: ExamScheduleDateSortValue) => void;
  searchPlaceholder: string;
  resultCount: number;
  className?: string;
};

const inputBaseStyle =
  "h-11 w-full rounded-2xl border border-zinc-200/80 bg-white text-sm font-medium text-zinc-900 shadow-2xs outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 sm:h-12";

/**
 * Thanh tìm kiếm & lọc đặt ở trên phần hiển thị card — 2 ô input giống hệt nhau về chiều cao, viền và kiểu dáng.
 */
export function ExamScheduleTopSearch({
  query,
  onQueryChange,
  dateSort,
  onDateSortChange,
  searchPlaceholder,
  resultCount,
  className,
}: ExamScheduleTopSearchProps) {
  return (
    <div className={cn("space-y-3 pb-1", className)}>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
        {/* Search Input Box */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="relative min-w-0 flex-1"
        >
          <label htmlFor="exam-schedule-top-search-input" className="sr-only">
            {searchPlaceholder}
          </label>

          <input
            id="exam-schedule-top-search-input"
            type="text"
            value={query}
            onChange={(event) => {
              onQueryChange(event.target.value);
            }}
            placeholder={searchPlaceholder}
            className={cn(inputBaseStyle, "pr-10 pl-11")}
          />

          <MagnifyingGlass
            className="text-primary pointer-events-none absolute top-1/2 left-4 size-4.5 -translate-y-1/2"
            weight="bold"
            aria-hidden
          />

          {query ? (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="absolute top-1/2 right-3.5 -translate-y-1/2 rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
            >
              <X className="size-3.5" weight="bold" />
              <span className="sr-only">Xóa tìm kiếm</span>
            </button>
          ) : null}
        </form>

        {/* Date Sort Select */}
        <div className="relative w-full shrink-0 sm:w-48">
          <label htmlFor="exam-schedule-top-date-sort" className="sr-only">
            Sắp xếp theo ngày
          </label>

          <select
            id="exam-schedule-top-date-sort"
            value={dateSort}
            onChange={(event) => {
              onDateSortChange(event.target.value as ExamScheduleDateSortValue);
            }}
            className={cn(
              inputBaseStyle,
              "cursor-pointer appearance-none px-4 pr-9 text-zinc-700"
            )}
          >
            {examScheduleDateSortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <CaretDown
            className="pointer-events-none absolute top-1/2 right-4 size-3.5 -translate-y-1/2 text-zinc-400"
            weight="bold"
            aria-hidden
          />
        </div>
      </div>

      {/* Result Count Info */}
      <div className="flex items-center justify-between px-1 text-xs font-semibold text-zinc-500">
        <span>Hiển thị {resultCount} kết quả</span>
      </div>
    </div>
  );
}
