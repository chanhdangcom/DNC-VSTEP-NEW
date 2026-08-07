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
import { ExamScheduleV2Filters } from "./exam-schedule-v2-filters";
import { ExamScheduleV2BentoGrid } from "./exam-schedule-v2-bento-grid";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";

export type V2ExamScheduleType =
  | "Lịch thi"
  | "Thông báo ôn thi"
  | "Kế hoạch năm";

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

    // Filter by type (since "Tất cả" is removed, we always filter by the selected type)
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
    <PageHubShell
      banner={banner}
      breadcrumbs={breadcrumbs}
      // No sidebar, passing null/undefined means it uses full width
    >
      <div className="mx-auto flex w-full flex-col gap-8">
        {/* <div className="flex w-full flex-col gap-8 md:gap-16">
     
          <section className="flex flex-col items-center justify-center text-center">
            <div className="inline-flex flex-col items-center space-y-8">
              <span className="font-signature text-primary text-md mb-4 underline">
                Lịch thi & Ôn luyện
              </span>

              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                Tìm kiếm thông tin
              </h1>

              <p className="text-md mx-auto text-zinc-600">
                Cập nhật những thông tin mới nhất bao gồm{" "}
                <strong className="font-semibold text-zinc-900">
                  kế hoạch thi
                </strong>
                ,{" "}
                <strong className="font-semibold text-zinc-900">
                  lịch khai giảng lớp ôn
                </strong>{" "}
                giúp bạn tự tin chinh phục chứng chỉ{" "}
                <strong className="font-semibold text-zinc-900">VSTEP</strong>.
              </p>

            </div>
          </section>

          <div className="relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] h-px w-screen bg-zinc-200" />
        </div> */}

        {/* Bento Grid Section */}
        <section className="space-y-8">
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

          <ExamScheduleV2BentoGrid items={filteredItems} />
        </section>
      </div>
    </PageHubShell>
  );
}
