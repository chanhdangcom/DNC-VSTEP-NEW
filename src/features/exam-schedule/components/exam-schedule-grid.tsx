import {
  examScheduleColumns,
  type ExamScheduleColumn,
} from "../exam-schedule-data";
import { cn } from "@/lib/utils";
import { ExamScheduleColumnCard } from "./exam-schedule-column-card";

type ExamScheduleGridProps = {
  columns?: readonly ExamScheduleColumn[];
};

/** Home section grid: Lịch thi | Ôn thi with column headers. */
export function ExamScheduleGrid({
  columns = examScheduleColumns,
}: ExamScheduleGridProps) {
  return (
    <div
      className={cn(
        "ring-primary/40 grid grid-cols-1 overflow-hidden bg-white/40 shadow-lg ring-1",
        columns.length > 1 && "lg:grid-cols-2"
      )}
    >
      {columns.map((column, index) => (
        <div
          key={column.id}
          className="border-primary/20 border-t first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0"
        >
          <ExamScheduleColumnCard column={column} columnIndex={index} />
        </div>
      ))}
    </div>
  );
}
