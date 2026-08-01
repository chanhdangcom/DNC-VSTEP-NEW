import type { ExamScheduleItem } from "../exam-schedule-data";

export type ExamScheduleDateSortValue = "default" | "nearest" | "furthest";

export const examScheduleDateSortOptions = [
  { value: "default", label: "Lọc theo ngày..." },
  { value: "nearest", label: "Gần nhất" },
  { value: "furthest", label: "Xa nhất" },
] as const satisfies readonly {
  value: ExamScheduleDateSortValue;
  label: string;
}[];

function parseExamScheduleDate(date: string) {
  const [day, month, year] = date.split(".").map(Number);
  return new Date(year, month - 1, day).getTime();
}

export function compareExamScheduleDates(a: string, b: string) {
  return parseExamScheduleDate(a) - parseExamScheduleDate(b);
}

export function sortExamScheduleItems(
  items: readonly ExamScheduleItem[],
  sort: ExamScheduleDateSortValue
): ExamScheduleItem[] {
  if (sort === "default") {
    return [...items];
  }

  const sorted = [...items];
  sorted.sort((a, b) => {
    const cmp = compareExamScheduleDates(a.date, b.date);
    return sort === "nearest" ? -cmp : cmp;
  });
  return sorted;
}

export function filterExamScheduleItems(
  items: readonly ExamScheduleItem[],
  query: string,
  type: string
): ExamScheduleItem[] {
  const normalized = query.trim().toLowerCase();

  return items.filter((item) => {
    if (item.label !== type) {
      return false;
    }

    if (!normalized) {
      return true;
    }

    const haystack = [item.title, item.description, item.code, item.label]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}

export function paginateExamScheduleItems<T>(
  items: readonly T[],
  page: number,
  pageSize: number
) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    page: safePage,
    total,
    totalPages,
    items: items.slice(start, start + pageSize),
  };
}
