"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useDeferredValue, useMemo, useState } from "react";
import {
  PageHubShell,
  type PageBannerProps,
  type PageBreadcrumbItem,
} from "@/features/page-shell";
import type { ExamScheduleItem } from "../exam-schedule-data";
import { getExamScheduleHubTabByPathname } from "../exam-schedule-hub-tab-data";
import type { ExamScheduleTypeValue } from "../exam-schedule-page-data";
import {
  filterExamScheduleItems,
  sortExamScheduleItems,
  type ExamScheduleDateSortValue,
} from "../utils/filter-exam-schedule";
import { ExamSchedulePlans } from "./exam-schedule-plans";
import { ExamScheduleSidebarPanel } from "./exam-schedule-sidebar-panel";

type ExamScheduleHubProps = {
  items: readonly ExamScheduleItem[];
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
};

export function ExamScheduleHub({
  items,
  banner,
  breadcrumbs,
}: ExamScheduleHubProps) {
  const pathname = usePathname();

  return (
    <Suspense fallback={null}>
      <ExamScheduleHubContent
        key={pathname}
        items={items}
        pathname={pathname}
        banner={banner}
        breadcrumbs={breadcrumbs}
      />
    </Suspense>
  );
}

type ExamScheduleHubContentProps = {
  items: readonly ExamScheduleItem[];
  pathname: string;
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
};

function ExamScheduleHubContent({
  items,
  pathname,
  banner,
  breadcrumbs,
}: ExamScheduleHubContentProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const activeTab = getExamScheduleHubTabByPathname(pathname);
  const [query, setQuery] = useState(initialQuery);
  const [dateSort, setDateSort] =
    useState<ExamScheduleDateSortValue>("default");

  const infoType = activeTab.typeValue as ExamScheduleTypeValue;

  const tabItems = useMemo(
    () => items.filter((item) => item.label === infoType),
    [items, infoType]
  );

  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const result = filterExamScheduleItems(tabItems, deferredQuery, infoType);
    return sortExamScheduleItems(result, dateSort);
  }, [tabItems, deferredQuery, infoType, dateSort]);

  const searchPlaceholder =
    activeTab.value === "on-thi"
      ? "Tìm thông báo ôn thi…"
      : activeTab.value === "ke-hoach-nam"
        ? "Tìm kế hoạch năm…"
        : "Tìm lịch thi…";

  const emptyMessage =
    activeTab.value === "on-thi"
      ? "Không tìm thấy thông báo ôn thi phù hợp."
      : activeTab.value === "ke-hoach-nam"
        ? "Không tìm thấy kế hoạch năm phù hợp."
        : "Không tìm thấy lịch thi phù hợp.";

  return (
    <PageHubShell
      banner={banner}
      breadcrumbs={breadcrumbs}
      sidebar={
        <ExamScheduleSidebarPanel
          activeTab={activeTab.value}
          query={query}
          onQueryChange={setQuery}
          dateSort={dateSort}
          onDateSortChange={setDateSort}
          searchPlaceholder={searchPlaceholder}
          resultCount={filtered.length}
        />
      }
    >
      <Suspense fallback={null}>
        <ExamSchedulePlans
          items={filtered}
          emptyMessage={emptyMessage}
          className="w-full"
        />
      </Suspense>
    </PageHubShell>
  );
}
