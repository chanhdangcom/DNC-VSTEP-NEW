"use client";

import {
  CalendarBlank,
  Clock,
  CurrencyCircleDollar,
  MapPin,
  Notebook,
  Target,
  type Icon,
} from "@phosphor-icons/react";
import Link from "next/link";
import type {
  ExamScheduleItem,
  ExamSchedulePreviewRow,
} from "../exam-schedule-data";
import { cn } from "@/lib/utils";

type ExamScheduleHoverPreviewProps = {
  item: ExamScheduleItem;
  className?: string;
};

const ROW_ICON: Record<
  ExamSchedulePreviewRow["kind"],
  { Icon: Icon; className: string }
> = {
  date: { Icon: CalendarBlank, className: "text-primary" },
  deadline: { Icon: Clock, className: "text-amber-500" },
  info: { Icon: Target, className: "text-sky-500" },
  fees: { Icon: CurrencyCircleDollar, className: "text-emerald-600" },
  location: { Icon: MapPin, className: "text-primary" },
};

function rowIcon(row: ExamSchedulePreviewRow) {
  if (
    row.kind === "info" &&
    /thời lượng|thời gian học|hình thức/i.test(row.label)
  ) {
    return { Icon: Notebook, className: "text-sky-500" };
  }
  return ROW_ICON[row.kind];
}

export function ExamScheduleHoverPreview({
  item,
  className,
}: ExamScheduleHoverPreviewProps) {
  const preview = item.preview;

  if (!preview) {
    return (
      <div className={cn("space-y-2", className)}>
        <Link
          href={item.href}
          className="text-sm font-semibold text-sky-600 underline-offset-2 hover:underline"
        >
          {item.title}
        </Link>
        <p className="text-sm leading-relaxed text-zinc-600">
          {item.description}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <Link
        href={item.href}
        className="block text-sm leading-snug font-semibold text-sky-600 underline-offset-2 hover:underline"
      >
        {item.title}
      </Link>

      <ul className="space-y-2.5 text-sm text-zinc-700">
        {preview.rows.map((row) => {
          const { Icon, className: iconClass } = rowIcon(row);

          return (
            <li key={`${row.kind}-${row.label}`} className="flex gap-2.5">
              <Icon
                className={cn("mt-0.5 size-4 shrink-0", iconClass)}
                weight="duotone"
                aria-hidden
              />

              {row.kind === "fees" && row.fees ? (
                <div className="min-w-0 space-y-1">
                  <p className="font-semibold text-zinc-900">{row.label}:</p>
                  <ul className="space-y-0.5 pl-0.5">
                    {row.fees.map((fee) => (
                      <li key={fee.label} className="text-zinc-600">
                        <span className="italic">{fee.label}:</span>{" "}
                        {fee.amount}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>
                  <span className="font-semibold text-zinc-900">
                    {row.label}:{" "}
                  </span>
                  {row.value}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
