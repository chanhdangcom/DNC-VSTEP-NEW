import { examScheduleSection } from "../exam-schedule-data";
import { ViewMoreLink } from "@/components/ui/view-more-link";
import { ExamScheduleGrid } from "./exam-schedule-grid";

export function ExamScheduleSection() {
  return (
    <section
      id="lich-thi-on-thi"
      className="relative scroll-mt-28 overflow-x-clip"
    >
      <div className="relative container max-w-7xl space-y-10 lg:space-y-12">
        <header>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {examScheduleSection.heading}
          </h2>
        </header>

        <ExamScheduleGrid />

        <div className="flex justify-center">
          <ViewMoreLink href={examScheduleSection.moreHref}>
            {examScheduleSection.moreLabel}
          </ViewMoreLink>
        </div>
      </div>
    </section>
  );
}
