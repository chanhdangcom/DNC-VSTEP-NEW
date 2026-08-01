"use client";

import { CaretDown, MagnifyingGlass, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export type DocumentDateSortValue = "default" | "newest" | "oldest";

export const documentDateSortOptions: readonly {
  value: DocumentDateSortValue;
  label: string;
}[] = [
  { value: "default", label: "Sắp xếp mặc định" },
  { value: "newest", label: "Ngày mới nhất" },
  { value: "oldest", label: "Ngày cũ nhất" },
];

type DocumentTopSearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
  dateSort?: DocumentDateSortValue;
  onDateSortChange?: (value: DocumentDateSortValue) => void;
  searchPlaceholder: string;
  showDateSort?: boolean;
  className?: string;
};

const inputBaseStyle =
  "h-11 w-full rounded-2xl border border-zinc-200/80 bg-white text-sm font-medium text-zinc-900 shadow-2xs outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 sm:h-12";

/**
 * Thanh tìm kiếm & lọc biểu mẫu / văn bản pháp quy — 2 ô input giống hệt nhau về chiều cao, viền và kiểu dáng.
 */
export function DocumentTopSearch({
  query,
  onQueryChange,
  dateSort = "default",
  onDateSortChange,
  searchPlaceholder,
  showDateSort = true,
  className,
}: DocumentTopSearchProps) {
  return (
    <div className={cn("space-y-3.5 pb-2", className)}>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
        {/* Search Input Box */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="relative min-w-0 flex-1"
        >
          <label htmlFor="document-top-search-input" className="sr-only">
            {searchPlaceholder}
          </label>

          <input
            id="document-top-search-input"
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
        {showDateSort && onDateSortChange ? (
          <div className="relative w-full shrink-0 sm:w-48">
            <label htmlFor="document-top-date-sort" className="sr-only">
              Sắp xếp theo ngày
            </label>

            <select
              id="document-top-date-sort"
              value={dateSort}
              onChange={(event) => {
                onDateSortChange(event.target.value as DocumentDateSortValue);
              }}
              className={cn(
                inputBaseStyle,
                "cursor-pointer appearance-none px-4 pr-9 text-zinc-700"
              )}
            >
              {documentDateSortOptions.map((option) => (
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
        ) : null}
      </div>
    </div>
  );
}
