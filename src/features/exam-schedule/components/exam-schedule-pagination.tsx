"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type ExamSchedulePaginationProps = {
  page: number;
  totalPages: number;
  className?: string;
};

function pageWindow(page: number, totalPages: number) {
  const windowSize = 5;
  const half = Math.floor(windowSize / 2);
  let start = Math.max(1, page - half);
  const end = Math.min(totalPages, start + windowSize - 1);
  start = Math.max(1, end - windowSize + 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

const itemClass = cn(
  "border-primary/15 inline-flex size-9 shrink-0 touch-manipulation items-center justify-center rounded-full border bg-white text-sm font-semibold text-zinc-800 sm:size-10",
  "transition-colors"
);

/**
 * Phân trang bằng thẻ <a> thuần (không onClick React) —
 * cùng pattern menu mobile / accordion đã chạy ổn trên thiết bị này.
 */
export function ExamSchedulePagination({
  page,
  totalPages,
  className,
}: ExamSchedulePaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  function hrefForPage(next: number) {
    const params = new URLSearchParams(searchParams.toString());
    if (next <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(next));
    }
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }

  const pages = pageWindow(page, totalPages);

  return (
    <nav
      aria-label="Phân trang lịch thi"
      className={cn(
        "relative z-50 flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2",
        className
      )}
    >
      {page <= 1 ? (
        <span
          aria-hidden
          className={cn(itemClass, "pointer-events-none opacity-35")}
        >
          <CaretLeft className="size-4" weight="bold" />
        </span>
      ) : (
        <a
          href={hrefForPage(page - 1)}
          aria-label="Trang trước"
          className={cn(
            itemClass,
            "hover:border-primary/45 hover:text-primary"
          )}
        >
          <CaretLeft className="size-4" weight="bold" aria-hidden />
        </a>
      )}

      {pages.map((n) => {
        const active = n === page;

        return (
          <a
            key={n}
            href={hrefForPage(n)}
            aria-label={`Trang ${n}`}
            aria-current={active ? "page" : undefined}
            className={cn(
              itemClass,
              active
                ? "bg-primary border-transparent text-white"
                : "hover:border-primary/45 hover:text-primary"
            )}
          >
            {n}
          </a>
        );
      })}

      {page >= totalPages ? (
        <span
          aria-hidden
          className={cn(itemClass, "pointer-events-none opacity-35")}
        >
          <CaretRight className="size-4" weight="bold" />
        </span>
      ) : (
        <a
          href={hrefForPage(page + 1)}
          aria-label="Trang sau"
          className={cn(
            itemClass,
            "hover:border-primary/45 hover:text-primary"
          )}
        >
          <CaretRight className="size-4" weight="bold" aria-hidden />
        </a>
      )}
    </nav>
  );
}
