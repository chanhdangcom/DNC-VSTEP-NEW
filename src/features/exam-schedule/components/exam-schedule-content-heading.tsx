import { cn } from "@/lib/utils";
import { PAGE_HUB_NAVY } from "@/features/page-shell";

type ExamScheduleContentHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

/** Tiêu đề vùng nội dung — vạch dọc + gạch ngang kiểu Fuji. */
export function ExamScheduleContentHeading({
  title,
  description,
  className,
}: ExamScheduleContentHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-start gap-4">
        <div
          aria-hidden
          className="mt-1 h-10 w-1 shrink-0 rounded-full bg-linear-to-b from-sky-500 via-cyan-400 to-blue-700"
        />
        <div className="min-w-0 flex-1 space-y-3">
          <h1
            className="text-xl font-bold tracking-tight sm:text-2xl"
            style={{ color: PAGE_HUB_NAVY }}
          >
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
