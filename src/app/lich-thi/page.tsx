import type { Metadata } from "next";
import { ExamSchedulePage } from "@/features/exam-schedule";
import {
  examSchedulePageBanner,
  examSchedulePageBreadcrumbs,
} from "@/features/page-shell";

export const metadata: Metadata = {
  title: "Lịch thi | VSTEP",
  description:
    "Tra cứu lịch thi VSTEP công khai tại Trường Đại học Nam Cần Thơ — tìm kiếm, lọc theo tháng và xem chi tiết kế hoạch thi.",
};

export default function LichThiRoute() {
  return (
    <ExamSchedulePage
      banner={examSchedulePageBanner}
      breadcrumbs={examSchedulePageBreadcrumbs}
    />
  );
}
