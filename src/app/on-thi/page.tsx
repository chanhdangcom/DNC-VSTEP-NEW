import type { Metadata } from "next";
import { ExamSchedulePage } from "@/features/exam-schedule";
import {
  examReviewPageBanner,
  examReviewPageBreadcrumbs,
} from "@/features/page-shell";

export const metadata: Metadata = {
  title: "Thông báo ôn thi | VSTEP",
  description:
    "Tra cứu thông báo mở lớp ôn thi VSTEP Bậc 3–5 — lịch khai giảng, học phí và hướng dẫn đăng ký.",
};

export default function OnThiRoute() {
  return (
    <ExamSchedulePage
      banner={examReviewPageBanner}
      breadcrumbs={examReviewPageBreadcrumbs}
    />
  );
}
