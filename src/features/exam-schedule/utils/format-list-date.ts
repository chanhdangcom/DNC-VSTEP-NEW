/** Input: `DD.MM.YYYY` from mock data → display `d/m/y` */
export function formatListDate(date: string) {
  const [day, month, year] = date.split(".");
  return `${day}/${month}/${year}`;
}

/** Input: `DD.MM.YYYY` → ISO `YYYY-MM-DD` for `<time dateTime>` */
export function toListDateTime(date: string) {
  const [day, month, year] = date.split(".");
  return `${year}-${month}-${day}`;
}

const WEEKDAY_SHORT = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"] as const;

const WEEKDAY_FULL = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
] as const;

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

function parseDotDate(date: string) {
  const [day, month, year] = date.split(".");
  return {
    day: Number(day),
    month: Number(month),
    year: Number(year),
  };
}

export type ScheduleDateBlock = {
  /** `dd/mm` — ngày/tháng theo chuẩn Việt Nam */
  dayMonth: string;
  /** Viết tắt: CN, T2–T7 */
  weekday: string;
  /** Đầy đủ: Thứ hai, Chủ nhật, … */
  weekdayFull: string;
  year: string;
  iso: string;
  ariaLabel: string;
};

/**
 * Cột ngày trái (hub list) — quy tắc hiển thị:
 * 1. Dòng 1: ngày/tháng `dd/mm` (in đậm, cỡ lớn)
 * 2. Dòng 2: năm `yyyy`
 *
 * Nguồn dữ liệu: chuỗi `DD.MM.YYYY`.
 */
export function formatScheduleDateBlock(date: string): ScheduleDateBlock {
  const { day, month, year } = parseDotDate(date);
  const weekdayIndex = new Date(year, month - 1, day).getDay();
  const weekday = WEEKDAY_SHORT[weekdayIndex] ?? "";
  const weekdayFull = WEEKDAY_FULL[weekdayIndex] ?? weekday;

  return {
    dayMonth: `${pad2(day)}/${pad2(month)}`,
    weekday,
    weekdayFull,
    year: String(year),
    iso: toListDateTime(date),
    ariaLabel: `Ngày ${day} tháng ${month} năm ${year}, ${weekdayFull}`,
  };
}

/** Lấy giờ từ chuỗi preview nếu có, ví dụ `(18h30 – 20h45)`. */
export function extractPreviewTime(value: string | undefined) {
  if (!value) return undefined;
  const match = value.match(/\(([^)]+)\)/);
  return match?.[1];
}
