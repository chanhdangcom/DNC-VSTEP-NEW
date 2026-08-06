import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ExamScheduleItem } from "../exam-schedule-data";
import { formatScheduleDateBlock } from "../utils/format-list-date";
import { Typography } from "@/components/ui/typography";

type ExamScheduleItemCardProps = {
  item: ExamScheduleItem;
};

/** Card — improved visual hierarchy using Shadcn components */
export function ExamScheduleItemCard({ item }: ExamScheduleItemCardProps) {
  const displayDate = item.examDate ?? item.date;
  const dateBlock = formatScheduleDateBlock(displayDate);

  const day = dateBlock.dayMonth.split("/")[0];
  const month = dateBlock.dayMonth.split("/")[1];

  return (
    <article className="h-full">
      <Link
        href={item.href}
        className={cn(
          "group flex h-full gap-4 rounded-2xl bg-white p-1 shadow-sm ring-1 shadow-black/2 ring-black/6",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "focus-visible:ring-primary/30 focus-visible:ring-2 focus-visible:outline-none"
        )}
      >
        {/* Date Block (Left) */}
        <div className="flex self-stretch">
          <div className="group-hover:border-primary/30 flex h-full w-24 shrink-0 flex-col items-center justify-center rounded-xl to-transparent p-2 ring-1 ring-black/6">
            <span className="text-primary font-handwritten text-3xl leading-none font-bold tracking-tight sm:text-4xl">
              {day}
            </span>

            <span className="text-primary/70 text-center text-xs font-bold sm:mt-1 sm:text-sm">
              Tháng {month}
            </span>
          </div>
        </div>

        {/* Main Info Area */}
        <div className="min-w-0 flex-1 space-y-2.5 py-4 pr-4">
          {/* Title & Description */}
          <div>
            <Typography
              variant="h4"
              className="group-hover:text-primary m-0 line-clamp-2 text-balance transition-colors duration-200"
            >
              {item.title}
              {item.isNew && (
                <span className="bg-primary text-primary-foreground ml-2 inline-flex shrink-0 -translate-y-0.75 items-center rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide sm:text-xs">
                  Mới
                </span>
              )}
            </Typography>

            {item.description ? (
              <Typography
                variant="p"
                className="text-muted-foreground m-0 line-clamp-2 text-sm [&:not(:first-child)]:mt-2"
              >
                {item.description}
              </Typography>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
