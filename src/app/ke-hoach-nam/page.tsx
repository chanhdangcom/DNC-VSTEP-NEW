import type { Metadata } from "next";
import { ExamSchedulePage } from "@/features/exam-schedule";
import {
  examYearlyPlanPageBanner,
  examYearlyPlanPageBreadcrumbs,
} from "@/features/page-shell";

export const metadata: Metadata = {
  title: "Kế hoạch năm | VSTEP",
  description:
    "Tra cứu kế hoạch năm VSTEP — tìm kiếm, lọc theo thời gian và xem thông tin chi tiết.",
};

export default function KeHoachNamRoute() {
  return (
    <ExamSchedulePage
      banner={examYearlyPlanPageBanner}
      breadcrumbs={examYearlyPlanPageBreadcrumbs}
    />
  );
}
