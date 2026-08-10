import type { ExamScheduleItem } from "./exam-schedule-data";

type ExamScheduleSeed = {
  examMonth: number;
  examYear: number;
  publishDay: number;
  publishMonth: number;
  publishYear: number;
  isNew?: boolean;
  isImportant?: boolean;
  /** Ví dụ: "(dự kiến)" — khớp tiêu đề trang gốc. */
  titleSuffix?: string;
};

/** Publish date = ~1 month before exam month (mock pattern from site). */
const EXAM_SCHEDULE_SEEDS: readonly ExamScheduleSeed[] = [
  {
    examMonth: 12,
    examYear: 2026,
    publishDay: 18,
    publishMonth: 11,
    publishYear: 2026,
    isNew: true,
    isImportant: true,
  },
  {
    examMonth: 11,
    examYear: 2026,
    publishDay: 15,
    publishMonth: 10,
    publishYear: 2026,
  },
  {
    examMonth: 10,
    examYear: 2026,
    publishDay: 20,
    publishMonth: 9,
    publishYear: 2026,
  },
  {
    examMonth: 9,
    examYear: 2026,
    publishDay: 12,
    publishMonth: 8,
    publishYear: 2026,
  },
  {
    examMonth: 8,
    examYear: 2026,
    publishDay: 10,
    publishMonth: 7,
    publishYear: 2026,
  },
  {
    examMonth: 7,
    examYear: 2026,
    publishDay: 29,
    publishMonth: 6,
    publishYear: 2026,
  },
  {
    examMonth: 6,
    examYear: 2026,
    publishDay: 18,
    publishMonth: 5,
    publishYear: 2026,
  },
  {
    examMonth: 5,
    examYear: 2026,
    publishDay: 10,
    publishMonth: 4,
    publishYear: 2026,
  },
  {
    examMonth: 4,
    examYear: 2026,
    publishDay: 21,
    publishMonth: 3,
    publishYear: 2026,
  },
  {
    examMonth: 3,
    examYear: 2026,
    publishDay: 24,
    publishMonth: 2,
    publishYear: 2026,
  },
  {
    examMonth: 2,
    examYear: 2026,
    publishDay: 15,
    publishMonth: 1,
    publishYear: 2026,
  },
  {
    examMonth: 1,
    examYear: 2026,
    publishDay: 5,
    publishMonth: 12,
    publishYear: 2025,
    titleSuffix: " (dự kiến)",
  },
  {
    examMonth: 12,
    examYear: 2025,
    publishDay: 18,
    publishMonth: 11,
    publishYear: 2025,
  },
  {
    examMonth: 11,
    examYear: 2025,
    publishDay: 16,
    publishMonth: 10,
    publishYear: 2025,
  },
  {
    examMonth: 10,
    examYear: 2025,
    publishDay: 14,
    publishMonth: 9,
    publishYear: 2025,
  },
  {
    examMonth: 9,
    examYear: 2025,
    publishDay: 12,
    publishMonth: 8,
    publishYear: 2025,
  },
  {
    examMonth: 8,
    examYear: 2025,
    publishDay: 10,
    publishMonth: 7,
    publishYear: 2025,
  },
  {
    examMonth: 7,
    examYear: 2025,
    publishDay: 28,
    publishMonth: 6,
    publishYear: 2025,
  },
  {
    examMonth: 6,
    examYear: 2025,
    publishDay: 22,
    publishMonth: 5,
    publishYear: 2025,
  },
  {
    examMonth: 5,
    examYear: 2025,
    publishDay: 15,
    publishMonth: 4,
    publishYear: 2025,
  },
  {
    examMonth: 4,
    examYear: 2025,
    publishDay: 20,
    publishMonth: 3,
    publishYear: 2025,
  },
  {
    examMonth: 3,
    examYear: 2025,
    publishDay: 12,
    publishMonth: 2,
    publishYear: 2025,
  },
  {
    examMonth: 2,
    examYear: 2025,
    publishDay: 10,
    publishMonth: 1,
    publishYear: 2025,
  },
  {
    examMonth: 1,
    examYear: 2025,
    publishDay: 18,
    publishMonth: 12,
    publishYear: 2024,
  },
  {
    examMonth: 12,
    examYear: 2024,
    publishDay: 16,
    publishMonth: 11,
    publishYear: 2024,
  },
  {
    examMonth: 11,
    examYear: 2024,
    publishDay: 14,
    publishMonth: 10,
    publishYear: 2024,
  },
  {
    examMonth: 10,
    examYear: 2024,
    publishDay: 12,
    publishMonth: 9,
    publishYear: 2024,
  },
  {
    examMonth: 9,
    examYear: 2024,
    publishDay: 8,
    publishMonth: 8,
    publishYear: 2024,
  },
  {
    examMonth: 8,
    examYear: 2024,
    publishDay: 10,
    publishMonth: 7,
    publishYear: 2024,
  },
  {
    examMonth: 7,
    examYear: 2024,
    publishDay: 25,
    publishMonth: 6,
    publishYear: 2024,
  },
  {
    examMonth: 6,
    examYear: 2024,
    publishDay: 20,
    publishMonth: 5,
    publishYear: 2024,
  },
  {
    examMonth: 5,
    examYear: 2024,
    publishDay: 15,
    publishMonth: 4,
    publishYear: 2024,
  },
  {
    examMonth: 4,
    examYear: 2024,
    publishDay: 18,
    publishMonth: 3,
    publishYear: 2024,
  },
  {
    examMonth: 3,
    examYear: 2024,
    publishDay: 10,
    publishMonth: 2,
    publishYear: 2024,
  },
  {
    examMonth: 2,
    examYear: 2024,
    publishDay: 12,
    publishMonth: 1,
    publishYear: 2024,
  },
  {
    examMonth: 1,
    examYear: 2024,
    publishDay: 15,
    publishMonth: 12,
    publishYear: 2023,
  },
  {
    examMonth: 11,
    examYear: 2023,
    publishDay: 29,
    publishMonth: 9,
    publishYear: 2023,
  },
  {
    examMonth: 9,
    examYear: 2023,
    publishDay: 19,
    publishMonth: 7,
    publishYear: 2023,
  },
  {
    examMonth: 7,
    examYear: 2023,
    publishDay: 25,
    publishMonth: 5,
    publishYear: 2023,
  },
  {
    examMonth: 5,
    examYear: 2023,
    publishDay: 6,
    publishMonth: 4,
    publishYear: 2023,
  },
  {
    examMonth: 3,
    examYear: 2023,
    publishDay: 17,
    publishMonth: 1,
    publishYear: 2023,
  },
];

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

/** Ngày thi mock: khoảng cuối tháng thi (ngày 25–28). */
function examDateOf(examMonth: number, examYear: number, publishDay: number) {
  const day = 25 + (publishDay % 4);
  return `${pad2(day)}.${pad2(examMonth)}.${examYear}`;
}

function registrationDeadlineOf(
  examMonth: number,
  examYear: number,
  publishDay: number
) {
  const day = Math.min(15, 8 + (publishDay % 8));
  return `Hết ngày ${pad2(day)}/${pad2(examMonth)}/${examYear} (hoặc dừng khi đủ hồ sơ)`;
}

function examDateRangeOf(
  examMonth: number,
  examYear: number,
  publishDay: number
) {
  const start = 25 + (publishDay % 4);
  const end = Math.min(start + 1, 31);
  return `${pad2(start)}/${pad2(examMonth)} – ${pad2(end)}/${pad2(examMonth)}/${examYear}`;
}

function buildExamPreview(
  examMonth: number,
  examYear: number,
  publishDay: number
) {
  return {
    rows: [
      {
        kind: "date" as const,
        label: "Ngày thi",
        value: examDateRangeOf(examMonth, examYear, publishDay),
      },
      {
        kind: "deadline" as const,
        label: "Hạn đăng ký",
        value: registrationDeadlineOf(examMonth, examYear, publishDay),
      },
      {
        kind: "info" as const,
        label: "Chứng chỉ",
        value: "VSTEP Bậc 3 – 5 (thi 4 kỹ năng trên máy tính)",
      },
      {
        kind: "fees" as const,
        label: "Lệ phí",
        fees: [
          { label: "Nội bộ (DNC)", amount: "1.300.000 VNĐ" },
          { label: "Tự do", amount: "1.500.000 VNĐ" },
        ],
      },
      {
        kind: "location" as const,
        label: "Địa điểm",
        value: "Tầng 4, Khu C, Trường ĐH Nam Cần Thơ",
      },
    ],
  };
}

/** Ngày khai giảng lớp ôn: đầu tháng thi (ngày 6–8). */
function reviewStartDateOf(
  examMonth: number,
  examYear: number,
  publishDay: number
) {
  const day = 6 + (publishDay % 3);
  return `${pad2(day)}.${pad2(examMonth)}.${examYear}`;
}

function reviewOpeningRangeOf(
  examMonth: number,
  examYear: number,
  publishDay: number
) {
  const start = 6 + (publishDay % 3);
  const end = Math.min(start + 1, 28);
  return `${pad2(start)}/${pad2(examMonth)} – ${pad2(end)}/${pad2(examMonth)}/${examYear} (18h30 – 20h45)`;
}

function buildExamReviewPreview(
  examMonth: number,
  examYear: number,
  publishDay: number
) {
  return {
    rows: [
      {
        kind: "date" as const,
        label: "Khai giảng",
        value: reviewOpeningRangeOf(examMonth, examYear, publishDay),
      },
      {
        kind: "info" as const,
        label: "Thời lượng",
        value: "75 tiết (48 tiết GV + 27 tiết tự học)",
      },
      {
        kind: "info" as const,
        label: "Thời gian học",
        value: "3 buổi/tuần (2-4-6 hoặc 3-5-7)",
      },
      {
        kind: "info" as const,
        label: "Hình thức",
        value: "Học trực tiếp",
      },
      {
        kind: "fees" as const,
        label: "Học phí",
        fees: [
          { label: "Khóa học", amount: "1.300.000 VNĐ" },
          { label: "CBGV DNC", amount: "Giảm 20%" },
          { label: "Nhóm 3+", amount: "Giảm 5%" },
          { label: "Nhóm 5+", amount: "Giảm 10%" },
          { label: "Nhóm 10+", amount: "Giảm 15%" },
        ],
      },
      {
        kind: "location" as const,
        label: "Địa điểm đăng ký",
        value: "Trung tâm ĐTCĐR & PTNNL – Khu C, Trường ĐH Nam Cần Thơ",
      },
    ],
  };
}

function buildExamScheduleItem(
  seed: ExamScheduleSeed,
  index: number
): ExamScheduleItem {
  const mm = pad2(seed.examMonth);
  const yy = seed.examYear;
  const pub = `${pad2(seed.publishDay)}.${pad2(seed.publishMonth)}.${seed.publishYear}`;

  return {
    id: `lich-thi-${mm}-${yy}`,
    code: `LICH-${String(index + 1).padStart(3, "0")}`,
    label: "Lịch thi",
    date: pub,
    examDate: examDateOf(seed.examMonth, seed.examYear, seed.publishDay),
    title: `Thông báo kế hoạch thi tháng ${mm}/${yy}${seed.titleSuffix ?? ""}`,
    description: `Thông báo kế hoạch thi VSTEP Bậc 3–5 tháng ${mm}/${yy} tại điểm thi Ngoại ngữ — đăng ký trước hạn theo quy định.`,
    watermark: "LỊCH THI",
    href: `/lich-thi/thang-${mm}-${yy}`,
    preview: buildExamPreview(seed.examMonth, seed.examYear, seed.publishDay),
    ...(seed.isNew ? { isNew: true } : {}),
    ...(seed.isImportant ? { isImportant: true } : {}),
  };
}

function buildExamReviewItem(
  seed: ExamScheduleSeed,
  index: number
): ExamScheduleItem {
  const mm = pad2(seed.examMonth);
  const yy = seed.examYear;
  const pub = `${pad2(seed.publishDay)}.${pad2(seed.publishMonth)}.${seed.publishYear}`;

  return {
    id: `on-thi-${mm}-${yy}`,
    code: `ON-${String(index + 1).padStart(3, "0")}`,
    label: "Thông báo ôn thi",
    date: pub,
    examDate: reviewStartDateOf(seed.examMonth, seed.examYear, seed.publishDay),
    title: `Thông báo mở lớp ôn thi VSTEP Bậc 3-5 (${mm}/${yy})${seed.titleSuffix ?? ""}`,
    description: `Thông báo khai giảng chương trình ôn thi VSTEP Bậc 3–5 tháng ${mm}/${yy} — 75 tiết, học trực tiếp, học phí và ưu đãi theo quy định.`,
    watermark: "ÔN THI",
    href: `/on-thi/thang-${mm}-${yy}`,
    preview: buildExamReviewPreview(
      seed.examMonth,
      seed.examYear,
      seed.publishDay
    ),
    ...(seed.isNew ? { isNew: true } : {}),
    ...(seed.isImportant ? { isImportant: true } : {}),
  };
}

const YEARLY_PLAN_SEEDS = [
  {
    year: 2026,
    kind: "on",
    publishDay: 9,
    publishMonth: 1,
    publishYear: 2026,
    isNew: true,
    isImportant: true,
  },
  {
    year: 2026,
    kind: "thi",
    publishDay: 22,
    publishMonth: 12,
    publishYear: 2025,
    isImportant: true,
  },
  {
    year: 2025,
    kind: "on",
    publishDay: 17,
    publishMonth: 1,
    publishYear: 2025,
  },
  {
    year: 2025,
    kind: "thi",
    publishDay: 20,
    publishMonth: 12,
    publishYear: 2024,
  },
  {
    year: 2024,
    kind: "on",
    publishDay: 16,
    publishMonth: 5,
    publishYear: 2024,
  },
  {
    year: 2024,
    kind: "thi",
    publishDay: 11,
    publishMonth: 12,
    publishYear: 2023,
  },
  {
    year: 2023,
    kind: "thi",
    publishDay: 11,
    publishMonth: 2,
    publishYear: 2023,
  },
  {
    year: 2022,
    kind: "thi",
    publishDay: 10,
    publishMonth: 11,
    publishYear: 2022,
  },
] as const;

function buildYearlyExamPlanPreview(year: number) {
  return {
    rows: [
      {
        kind: "date" as const,
        label: "Phạm vi",
        value: `Kế hoạch tổ chức thi VSTEP năm ${year}`,
      },
      {
        kind: "info" as const,
        label: "Chứng chỉ",
        value: "VSTEP Bậc 3 – 5 (thi 4 kỹ năng trên máy tính)",
      },
      {
        kind: "info" as const,
        label: "Hình thức",
        value: "Thi trên máy tính tại điểm thi ĐH Nam Cần Thơ",
      },
      {
        kind: "fees" as const,
        label: "Lệ phí dự kiến",
        fees: [
          { label: "Nội bộ (DNC)", amount: "1.300.000 VNĐ" },
          { label: "Tự do", amount: "1.500.000 VNĐ" },
        ],
      },
      {
        kind: "location" as const,
        label: "Địa điểm",
        value: "Tầng 4, Khu C, Trường ĐH Nam Cần Thơ",
      },
    ],
  };
}

function buildYearlyReviewPlanPreview(year: number) {
  return {
    rows: [
      {
        kind: "date" as const,
        label: "Phạm vi",
        value: `Kế hoạch các khóa ôn Đánh giá NLNN 6 Bậc năm ${year}`,
      },
      {
        kind: "info" as const,
        label: "Hình thức học",
        value: "Trực tiếp / Trực tuyến tại Trường ĐH Nam Cần Thơ",
      },
      {
        kind: "info" as const,
        label: "Chương trình",
        value: "Ôn luyện theo khung 6 bậc, hướng tới mục tiêu B1–B2",
      },
      {
        kind: "fees" as const,
        label: "Học phí & ưu đãi",
        fees: [
          { label: "CBGV DNC", amount: "Giảm 20%" },
          { label: "Nhóm 3+", amount: "Giảm 5%" },
          { label: "Nhóm 5+", amount: "Giảm 10%" },
          { label: "Nhóm 10+", amount: "Giảm 15%" },
        ],
      },
      {
        kind: "location" as const,
        label: "Địa điểm",
        value: "Trung tâm ĐTCĐR & PTNNL – Khu C, ĐH Nam Cần Thơ",
      },
    ],
  };
}

function buildYearlyPlanItem(
  seed: (typeof YEARLY_PLAN_SEEDS)[number],
  index: number
): ExamScheduleItem {
  const pub = `${pad2(seed.publishDay)}.${pad2(seed.publishMonth)}.${seed.publishYear}`;
  const isReview = seed.kind === "on";

  return {
    id: `ke-hoach-nam-${seed.kind}-${seed.year}`,
    code: `KH-${String(index + 1).padStart(3, "0")}`,
    label: "Kế hoạch năm",
    date: pub,
    title: isReview
      ? `Kế hoạch ôn đánh giá năng lực Ngoại ngữ 6 Bậc năm ${seed.year}`
      : `Kế hoạch thi VSTEP năm ${seed.year}`,
    description: isReview
      ? `Dự kiến thời gian tổ chức các khóa ôn Đánh giá năng lực Ngoại ngữ 6 Bậc năm ${seed.year} tại Trường Đại học Nam Cần Thơ.`
      : `Thông báo kế hoạch tổ chức thi VSTEP Bậc 3–5 trong năm ${seed.year} — lịch thi dự kiến, điểm thi và hướng dẫn đăng ký.`,
    watermark: isReview ? "KẾ HOẠCH ÔN" : "KẾ HOẠCH THI",
    href: `/ke-hoach-nam/${seed.kind}-${seed.year}`,
    preview: isReview
      ? buildYearlyReviewPlanPreview(seed.year)
      : buildYearlyExamPlanPreview(seed.year),
    ...("isNew" in seed && seed.isNew ? { isNew: true } : {}),
    ...("isImportant" in seed && seed.isImportant ? { isImportant: true } : {}),
  };
}

/** Full listing for `/lich-thi` (mock — enough for search + pagination). */
export const examSchedulePageItems: ExamScheduleItem[] = [
  ...EXAM_SCHEDULE_SEEDS.map(buildExamScheduleItem),
  ...EXAM_SCHEDULE_SEEDS.slice(0, 12).map(buildExamReviewItem),
  ...YEARLY_PLAN_SEEDS.map(buildYearlyPlanItem),
];

/** Danh sách card ngang — 7 mục / trang. */
export const EXAM_SCHEDULE_COLUMN_ROWS = 8;
export const EXAM_SCHEDULE_PAGE_SIZE = EXAM_SCHEDULE_COLUMN_ROWS;
export const EXAM_SCHEDULE_MOBILE_PAGE_SIZE = EXAM_SCHEDULE_COLUMN_ROWS;

export const examScheduleTypeOptions = [
  { value: "Lịch thi", label: "Lịch thi" },
  { value: "Thông báo ôn thi", label: "Thông báo ôn thi" },
  { value: "Kế hoạch năm", label: "Kế hoạch năm" },
] as const;

export type ExamScheduleTypeValue =
  (typeof examScheduleTypeOptions)[number]["value"];
