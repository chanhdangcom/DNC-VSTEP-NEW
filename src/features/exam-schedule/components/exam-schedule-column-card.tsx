import { cn } from "@/lib/utils";
import type { ExamScheduleColumn } from "../exam-schedule-data";
import { ExamScheduleListRow } from "./exam-schedule-list-row";

type ExamScheduleColumnCardProps = {
  column: ExamScheduleColumn;
  columnIndex: number;
};

export function ExamScheduleColumnCard({
  column,
  columnIndex,
}: ExamScheduleColumnCardProps) {
  const indexLabel = String(columnIndex + 1).padStart(2, "0");

  return (
    <article className={cn("bg-background/55 pb-6 sm:pb-8")}>
      <header className="space-y-3 px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl leading-tight font-bold tracking-tight text-zinc-950 sm:text-3xl">
            {column.heading}
          </h3>

          <span className="text-primary text-xs font-semibold tracking-[0.22em]">
            {indexLabel}
          </span>
        </div>
      </header>

      <ul>
        {column.items.map((item, index) => (
          <ExamScheduleListRow key={item.id} item={item} index={index} />
        ))}
      </ul>

      <p className="sr-only">
        Cột {columnIndex + 1}: {column.heading}
      </p>
    </article>
  );
}
