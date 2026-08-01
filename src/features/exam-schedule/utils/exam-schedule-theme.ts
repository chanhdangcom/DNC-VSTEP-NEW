import { theme } from "@/lib/theme";

/** SOLU-inspired palette (primary / ink) — aliases of global theme. */
export const EXAM_SCHEDULE_RED = theme.primary;
export const EXAM_SCHEDULE_RED_HOVER = theme.primaryHover;
export const EXAM_SCHEDULE_INK = theme.foreground;

export const EXAM_SCHEDULE_SURFACE = {
  divider: "border-zinc-200",
  title: "text-zinc-950",
  muted: "text-zinc-700",
} as const;

/** Responsive type scale matched to JP news reference. */
export const EXAM_SCHEDULE_TYPE = {
  sideLabel: "text-xs leading-none text-zinc-700 sm:text-4xl",
  columnHeading:
    "text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl",
  cta: "text-sm leading-none font-bold",
  date: "text-sm font-semibold leading-none tracking-[0.02em] sm:text-base",
  tag: "inline-flex h-6 items-center rounded-md px-2 text-xs leading-none font-medium",
  rowTitle:
    "text-base leading-snug font-semibold tracking-tight sm:text-lg sm:leading-snug",
} as const;

const EXAM_SCHEDULE_LABEL_TAG_CLASS = {
  Mới: "text-primary",
  "Lịch thi": "text-sky-700",
  "Thông báo ôn thi": "text-emerald-700",
  "Kế hoạch năm": "text-amber-700",
} as const;

export function getExamScheduleLabelTagClass(label: string) {
  return (
    EXAM_SCHEDULE_LABEL_TAG_CLASS[
      label as keyof typeof EXAM_SCHEDULE_LABEL_TAG_CLASS
    ] ?? "text-zinc-600"
  );
}
