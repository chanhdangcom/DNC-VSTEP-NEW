import { YearlyPlanBlock } from "./yearly-plan-block";

export function YearlyPlanSection() {
  return (
    <section
      id="ke-hoach-nam"
      className="relative scroll-mt-28 overflow-x-clip"
    >
      <div className="relative container max-w-7xl space-y-10 lg:space-y-12">
        <YearlyPlanBlock />
      </div>
    </section>
  );
}
