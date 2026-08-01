"use client";

import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import type { ExamScheduleTypeValue } from "../exam-schedule-page-data";
import {
  examScheduleDateSortOptions,
  type ExamScheduleDateSortValue,
} from "../utils/filter-exam-schedule";

const infoTypeOptions = [
  { value: "Lịch thi", label: "Lịch thi" },
  { value: "Thông báo ôn thi", label: "Lịch ôn" },
  { value: "Kế hoạch năm", label: "Kế hoạch năm" },
] as const satisfies readonly {
  value: ExamScheduleTypeValue;
  label: string;
}[];

export type ExamScheduleSearchFormProps = {
  query: string;
  onQueryChange: (value: string) => void;
  infoType: ExamScheduleTypeValue;
  onInfoTypeChange: (value: string) => void;
  dateSort: ExamScheduleDateSortValue;
  onDateSortChange: (value: ExamScheduleDateSortValue) => void;
  searchPlaceholder: string;
  fieldIdPrefix?: string;
  className?: string;
  /** `recruit` = nút đỏ pill kiểu Serverworks. */
  variant?: "default" | "recruit";
};

/** Thanh tìm + 2 filter cùng hàng. */
export function ExamScheduleSearchForm({
  query,
  onQueryChange,
  infoType,
  onInfoTypeChange,
  dateSort,
  onDateSortChange,
  searchPlaceholder,
  fieldIdPrefix = "",
  className,
  variant = "default",
}: ExamScheduleSearchFormProps) {
  const searchFieldId = `${fieldIdPrefix}exam-schedule-search`;
  const infoTypeFieldId = `${fieldIdPrefix}exam-schedule-info-type`;
  const dateSortFieldId = `${fieldIdPrefix}exam-schedule-date-sort`;
  const isRecruit = variant === "recruit";

  const fieldShell = cn(
    "flex h-12 touch-manipulation overflow-hidden rounded-2xl bg-white sm:h-14",
    isRecruit
      ? "focus-within:border-primary/40 border border-zinc-200"
      : "rounded-2xl border border-zinc-200 focus-within:border-zinc-400"
  );

  const selectClass = cn(
    "h-12 w-full cursor-pointer appearance-none rounded-2xl border bg-white px-4 pr-10 text-sm text-zinc-700 outline-none sm:h-14 sm:text-[15px]",
    isRecruit
      ? "focus-visible:border-primary/40 focus-visible:ring-primary/10 border-zinc-200 focus-visible:ring-2"
      : "rounded-2xl border-zinc-200 focus-visible:border-zinc-400 focus-visible:ring-2 focus-visible:ring-black/10"
  );

  return (
    <form
      aria-label={searchPlaceholder}
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className={cn("w-full", className)}
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3">
        <div className={fieldShell}>
          <label htmlFor={searchFieldId} className="sr-only">
            Từ khóa
          </label>

          <input
            id={searchFieldId}
            type="text"
            value={query}
            onChange={(event) => {
              onQueryChange(event.target.value);
            }}
            placeholder={searchPlaceholder}
            className={cn(
              "h-full min-w-0 flex-1 border-0 bg-transparent px-4 text-sm leading-none text-zinc-800 outline-none sm:px-5 sm:text-[15px]",
              "placeholder:text-zinc-400"
            )}
          />

          <button
            type="submit"
            className={cn(
              "inline-flex h-full shrink-0 items-center justify-center gap-2 px-4 text-sm font-semibold text-white transition-colors sm:px-5 sm:text-[15px]",
              isRecruit
                ? "bg-primary hover:bg-primary-hover my-1 mr-1 h-[calc(100%-0.5rem)] rounded-full"
                : "bg-primary hover:bg-primary-hover"
            )}
          >
            <MagnifyingGlass
              className="size-[1.125rem]"
              weight="bold"
              aria-hidden
            />
            <span>Tìm kiếm</span>
          </button>
        </div>

        <div className="relative">
          <label htmlFor={infoTypeFieldId} className="sr-only">
            Loại thông tin
          </label>

          <select
            id={infoTypeFieldId}
            value={infoType}
            onChange={(event) => {
              onInfoTypeChange(event.target.value);
            }}
            className={selectClass}
          >
            {infoTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <CaretDown
            className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-zinc-500 sm:right-4"
            weight="bold"
            aria-hidden
          />
        </div>

        <div className="relative">
          <label htmlFor={dateSortFieldId} className="sr-only">
            Sắp xếp thời gian
          </label>

          <select
            id={dateSortFieldId}
            value={dateSort}
            onChange={(event) => {
              onDateSortChange(event.target.value as ExamScheduleDateSortValue);
            }}
            className={selectClass}
          >
            {examScheduleDateSortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <CaretDown
            className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-zinc-500 sm:right-4"
            weight="bold"
            aria-hidden
          />
        </div>
      </div>
    </form>
  );
}
