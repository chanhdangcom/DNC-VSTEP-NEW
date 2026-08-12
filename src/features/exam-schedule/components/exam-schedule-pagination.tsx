"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
    <div className={className}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={page > 1 ? hrefForPage(page - 1) : "#"}
              className={page <= 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {pages.map((n) => (
            <PaginationItem key={n}>
              <PaginationLink
                href={hrefForPage(n)}
                isActive={n === page}
                className={
                  n === page ? "text-primary hover:text-primary" : ""
                }
              >
                {n}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href={page < totalPages ? hrefForPage(page + 1) : "#"}
              className={page >= totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
