import type { Metadata } from "next";
import {
  examSchedulePageBanner,
  examSchedulePageBreadcrumbs,
} from "@/features/page-shell";
import { ExamScheduleV2Page } from "@/features/exam-schedule/components/v2/exam-schedule-v2-page";

export const metadata: Metadata = {
  title: "Lịch thi (V2) | VSTEP",
  description: "Trải nghiệm phiên bản hiển thị lịch thi mới.",
};

export default function LichThiV2Route() {
  return (
    <ExamScheduleV2Page
      banner={examSchedulePageBanner}
      breadcrumbs={examSchedulePageBreadcrumbs}
    />
  );
}
