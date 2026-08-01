"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type ExamScheduleListRowActionProps = {
  /** `hover` = list (circle on hover); `soft` = light gray circle + primary arrow. */
  appearance?: "hover" | "soft";
};

export function ExamScheduleListRowAction({
  appearance = "hover",
}: ExamScheduleListRowActionProps) {
  if (appearance === "soft") {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "text-primary inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-100",
          "transition-[background-color,transform] duration-300",
          "ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-hover:translate-x-0.5 group-hover:bg-zinc-200",
          "sm:size-10"
        )}
      >
        <ArrowRight className="size-3.5 sm:size-4" weight="bold" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="relative inline-flex size-8 shrink-0 items-center justify-center sm:size-9"
    >
      <span
        className={cn(
          "bg-primary absolute inset-0 rounded-full",
          "scale-75 opacity-0 transition-[opacity,transform] duration-300",
          "ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-hover:scale-100 group-hover:opacity-100"
        )}
      />
      <ArrowRight
        className="text-primary relative z-10 size-3.5 transition-colors duration-300 group-hover:text-white sm:size-4"
        weight="bold"
      />
    </span>
  );
}
