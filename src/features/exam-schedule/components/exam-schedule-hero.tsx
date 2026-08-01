import type { ReactNode } from "react";
import {
  PageWaveHero,
  type PageBannerImage,
  type PageBreadcrumbItem,
} from "@/features/page-shell";

type ExamScheduleHeroProps = {
  title: string;
  description?: string;
  image?: PageBannerImage;
  breadcrumbs?: readonly PageBreadcrumbItem[];
  children?: ReactNode;
  className?: string;
};

/** Banner lịch thi — một ảnh đơn giản. */
export function ExamScheduleHero(props: ExamScheduleHeroProps) {
  return <PageWaveHero {...props} />;
}
