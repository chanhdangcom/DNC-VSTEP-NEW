import Link from "next/link";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import type { YearlyPlanItem } from "../yearly-plan-data";
import {
  formatListDate,
  toListDateTime,
} from "@/features/exam-schedule/utils/format-list-date";

type YearlyPlanCardProps = {
  item: YearlyPlanItem;
};

export function YearlyPlanCard({ item }: YearlyPlanCardProps) {
  return (
    <div className="relative h-full">
      <Link
        href={item.href}
        className={cn(
          "group ring-primary/40 bg-background/55 relative flex h-full flex-col overflow-hidden rounded-xl shadow-sm ring-1",
          "origin-center transform-gpu backface-hidden",
          "transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]",
          "will-change-transform",
          "hover:z-10 hover:scale-[1.02]"
        )}
      >
        <div className="flex min-h-[13.5rem] flex-1 flex-col space-y-3 px-6 py-8 sm:min-h-[14.5rem] sm:px-7 sm:py-9">
          <div className="flex min-w-0 flex-nowrap items-center gap-2 text-sm font-medium">
            <span className="text-primary truncate font-semibold whitespace-nowrap">
              Kế hoạch năm
            </span>

            <span aria-hidden="true" className="text-rose-300">
              |
            </span>

            <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-zinc-800">
              <CalendarBlank className="text-primary size-4" aria-hidden />
              <time
                dateTime={toListDateTime(item.date)}
                className="font-semibold text-zinc-900"
              >
                {formatListDate(item.date)}
              </time>
            </span>
          </div>

          <h3 className="line-clamp-3 text-base leading-snug font-semibold tracking-tight text-balance text-zinc-950 sm:text-lg">
            {item.title}
          </h3>

          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600">
            {item.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
