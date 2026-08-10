import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ExamScheduleItem } from "../exam-schedule-data";
import { formatScheduleDateBlock } from "../utils/format-list-date";
import { Typography } from "@/components/ui/typography";

type ExamScheduleItemCardProps = {
  item: ExamScheduleItem;
};

/** Card — standard white card */
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
          "group flex h-full gap-4 rounded-2xl bg-white p-1 shadow-xs ring-1 ring-black/3",
          "transition-all duration-300 ease-out hover:shadow-md",
          "focus-visible:ring-primary focus-visible:ring-2 focus-visible:outline-none"
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
          <div>
            <Typography
              variant="h4"
              className="group-hover:text-primary m-0 line-clamp-2 text-balance transition-colors duration-200"
            >
              {item.title}
              {item.isNew && (
                <span className="bg-primary text-primary-foreground ml-2 inline-flex shrink-0 -translate-y-1 items-center rounded-full px-2 py-0.5 text-xs font-semibold tracking-wide">
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

/** Featured card — same layout, blue background */
export function FeaturedExamScheduleCard({ item }: ExamScheduleItemCardProps) {
  const displayDate = item.examDate ?? item.date;
  const dateBlock = formatScheduleDateBlock(displayDate);

  const day = dateBlock.dayMonth.split("/")[0];
  const month = dateBlock.dayMonth.split("/")[1];

  return (
    <article className="h-full">
      <Link
        href={item.href}
        className={cn(
          "group relative flex h-full gap-4 overflow-hidden rounded-2xl bg-white p-1 shadow-xs ring-1 shadow-black/5 ring-black/3"
        )}
      >
        {/* Corner ribbon — perfectly centered on the diagonal */}
        {item.isNew && (
          <div className="pointer-events-none absolute top-4 -right-12 z-10 w-40 rotate-45 bg-red-700 p-0.5 text-center select-none">
            <span className="font-signature text-xs tracking-wider text-white drop-shadow-sm">
              Mới
            </span>
          </div>
        )}

        {/* Date Block (Left) */}
        <div className="flex self-stretch">
          <div className="flex h-full w-24 shrink-0 flex-col items-center justify-center rounded-xl p-2 ring-1 ring-black/6">
            <span className="font-handwritten text-primary text-3xl leading-none font-bold tracking-tight sm:text-4xl">
              {day}
            </span>
            <span className="text-primary/80 mt-1 text-center text-xs font-bold sm:text-sm">
              Tháng {month}
            </span>
          </div>
        </div>

        {/* Main Info Area */}
        <div
          className={cn(
            "min-w-0 flex-1 space-y-2.5 py-4",
            item.isNew ? "pr-12" : "pr-4"
          )}
        >
          <div>
            <Typography
              variant="h4"
              className="group-hover:text-primary m-0 line-clamp-2 text-balance"
            >
              {item.title}
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
