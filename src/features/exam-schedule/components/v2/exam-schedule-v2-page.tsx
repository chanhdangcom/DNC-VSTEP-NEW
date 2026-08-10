"use client";

import { useSearchParams } from "next/navigation";
import { useState, useDeferredValue, useMemo } from "react";
import {
  PageHubShell,
  type PageBannerProps,
  type PageBreadcrumbItem,
} from "@/features/page-shell";
import { examSchedulePageItems } from "../../exam-schedule-page-data";
import {
  sortExamScheduleItems,
  type ExamScheduleDateSortValue,
} from "../../utils/filter-exam-schedule";
import { ExamScheduleV2BentoGrid } from "./exam-schedule-v2-bento-grid";
import { ExamScheduleV2Filters } from "./exam-schedule-v2-filters";

export type V2ExamScheduleType =
  "Lịch thi" | "Thông báo ôn thi" | "Kế hoạch năm";

type ExamScheduleV2PageProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
};

export function ExamScheduleV2Page({
  banner,
  breadcrumbs,
}: ExamScheduleV2PageProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState<V2ExamScheduleType>("Lịch thi");
  const [dateSort, setDateSort] =
    useState<ExamScheduleDateSortValue>("default");

  const deferredQuery = useDeferredValue(query);

  const filteredItems = useMemo(() => {
    let result = examSchedulePageItems;

    // Filter by type
    result = result.filter((item) => item.label === type);

    // Filter by search query
    const normalized = deferredQuery.trim().toLowerCase();
    if (normalized) {
      result = result.filter((item) => {
        const haystack = [item.title, item.description, item.code, item.label]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalized);
      });
    }

    // Sort
    return sortExamScheduleItems(result, dateSort);
  }, [type, deferredQuery, dateSort]);

  return (
    <PageHubShell banner={banner} breadcrumbs={breadcrumbs}>
      <div className="mx-auto flex w-full flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ExamScheduleV2Filters
            query={query}
            onQueryChange={setQuery}
            type={type}
            onTypeChange={setType}
            dateSort={dateSort}
            onDateSortChange={setDateSort}
          />
        </div>

        {/* Header Kết quả tìm kiếm */}

        {/* <div className="text-muted-foreground text-md flex items-center gap-2 font-medium">
          Tìm thấy{" "}
          <strong className="text-primary">{filteredItems.length}</strong> kết
          quả
        </div> */}

        <ExamScheduleV2BentoGrid items={filteredItems} />
      </div>
    </PageHubShell>
  );
}
