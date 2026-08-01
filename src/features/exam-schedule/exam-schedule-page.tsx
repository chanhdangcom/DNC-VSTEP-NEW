import type {
  PageBannerProps,
  PageBreadcrumbItem,
} from "@/features/page-shell";
import { ExamScheduleHub } from "./components/exam-schedule-hub";
import { examSchedulePageItems } from "./exam-schedule-page-data";

type ExamSchedulePageProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
};

export function ExamSchedulePage({
  banner,
  breadcrumbs,
}: ExamSchedulePageProps) {
  return (
    <ExamScheduleHub
      items={examSchedulePageItems}
      banner={banner}
      breadcrumbs={breadcrumbs}
    />
  );
}
