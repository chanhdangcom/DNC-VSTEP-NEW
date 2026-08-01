import { yearlyPlanSection } from "../yearly-plan-data";
import { ViewMoreLink } from "@/components/ui/view-more-link";
import { YearlyPlanGrid } from "./yearly-plan-grid";

export function YearlyPlanBlock() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl leading-tight font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
          {yearlyPlanSection.heading}
        </h2>

        <ViewMoreLink href={yearlyPlanSection.moreHref}>
          {yearlyPlanSection.moreLabel}
        </ViewMoreLink>
      </div>

      <YearlyPlanGrid />
    </div>
  );
}
