"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarBlank,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import type { ExamScheduleItem } from "../../exam-schedule-data";
import { paginateExamScheduleItems } from "../../utils/filter-exam-schedule";
import {
  ExamScheduleItemCard,
  FeaturedExamScheduleCard,
} from "../exam-schedule-item-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PAGE_SIZE = 10;

type ExamScheduleV2BentoGridProps = {
  items: readonly ExamScheduleItem[];
};

function getPageWindow(page: number, totalPages: number) {
  const windowSize = 5;
  const half = Math.floor(windowSize / 2);
  let start = Math.max(1, page - half);
  const end = Math.min(totalPages, start + windowSize - 1);
  start = Math.max(1, end - windowSize + 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function ExamScheduleV2BentoGrid({
  items,
}: ExamScheduleV2BentoGridProps) {
  const [page, setPage] = useState(1);

  const {
    page: safePage,
    totalPages,
    items: pageItems,
  } = useMemo(
    () => paginateExamScheduleItems(items, page, PAGE_SIZE),
    [items, page]
  );

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-zinc-300 bg-white/50 py-24 text-center">
        <p className="text-lg font-semibold text-zinc-900">
          Không tìm thấy kết quả
        </p>
        <p className="text-sm text-zinc-500">
          Vui lòng thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.
        </p>
      </div>
    );
  }

  const pages = getPageWindow(safePage, totalPages);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pageItems.map((item, idx) => {
          if (idx === 0) {
            return (
              <div key={item.id}>
                <FeaturedExamScheduleCard item={item} />
              </div>
            );
          }
          return (
            <div key={item.id}>
              <ExamScheduleItemCard item={item} />
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div
          className="flex justify-center"
          onClick={(e) => {
            // Intercept clicks on pagination links to handle state instead of URL
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (link) {
              e.preventDefault();
              const url = new URL(link.href, window.location.href);
              const newPage = url.searchParams.get("page");
              if (newPage) setPage(Number(newPage));
            }
          }}
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={safePage > 1 ? `?page=${safePage - 1}` : "#"}
                  className={
                    safePage <= 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {pages.map((n) => (
                <PaginationItem key={n}>
                  <PaginationLink
                    href={`?page=${n}`}
                    isActive={n === safePage}
                    className={
                      n === safePage ? "text-primary hover:text-primary" : ""
                    }
                  >
                    {n}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href={safePage < totalPages ? `?page=${safePage + 1}` : "#"}
                  className={
                    safePage >= totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
