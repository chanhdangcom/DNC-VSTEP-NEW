import type { ExamScheduleItem } from "../exam-schedule-data";
import { ExamScheduleItemCard } from "./exam-schedule-item-card";

type ExamScheduleResultsGridProps = {
  items: readonly ExamScheduleItem[];
};

export function ExamScheduleResultsGrid({
  items,
}: ExamScheduleResultsGridProps) {
  return (
    <ul className="grid grid-cols-1 items-stretch gap-y-4 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
      {items.map((item) => (
        <li key={item.id} className="h-full">
          <ExamScheduleItemCard item={item} />
        </li>
      ))}
    </ul>
  );
}
