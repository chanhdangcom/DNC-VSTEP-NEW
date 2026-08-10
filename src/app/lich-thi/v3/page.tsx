import type { Metadata } from "next";
import {
  examSchedulePageBanner,
  examSchedulePageBreadcrumbs,
} from "@/features/page-shell";
import { ExamScheduleV3Page } from "@/features/exam-schedule/components/v3/exam-schedule-v3-page";

export const metadata: Metadata = {
  title: "Lịch thi (V3) | VSTEP",
  description: "Trải nghiệm phiên bản hiển thị lịch thi trực quan 12 tháng.",
};

export default function LichThiV3Route() {
  return (
    <ExamScheduleV3Page
      banner={examSchedulePageBanner}
      breadcrumbs={examSchedulePageBreadcrumbs}
    />
  );
}
