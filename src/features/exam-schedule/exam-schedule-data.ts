export type ExamSchedulePreviewFee = {
  label: string;
  amount: string;
};

export type ExamSchedulePreviewRow = {
  kind: "date" | "deadline" | "info" | "fees" | "location";
  label: string;
  value?: string;
  fees?: readonly ExamSchedulePreviewFee[];
};

/** Chi tiết rút gọn hiện khi hover card thông báo. */
export type ExamSchedulePreview = {
  rows: readonly ExamSchedulePreviewRow[];
};

export type ExamScheduleItem = {
  id: string;
  code: string;
  label: string;
  /** Ngày đăng thông báo (DD.MM.YYYY). */
  date: string;
  /** Ngày thi dự kiến trên lịch (DD.MM.YYYY) — thường cuối tháng thi. */
  examDate?: string;
  title: string;
  description: string;
  watermark: string;
  href: string;
  isNew?: boolean;
  isImportant?: boolean;
  preview?: ExamSchedulePreview;
};

export type ExamScheduleColumn = {
  id: string;
  heading: string;
  moreHref: string;
  moreLabel: string;
  items: ExamScheduleItem[];
};

export const examScheduleSection = {
  tag: "Lịch & ôn luyện",
  heading: "Lịch thi & Ôn Thi",
  moreHref: "/lich-thi",
  moreLabel: "Xem thêm",
} as const;

export const examScheduleColumns: ExamScheduleColumn[] = [
  {
    id: "lich-thi",
    heading: "Lịch thi",
    moreHref: "/lich-thi",
    moreLabel: "Xem thêm lịch thi",
    items: [
      {
        id: "lich-thi-07-2026",
        code: "LICH-001",
        label: "Lịch thi",
        date: "29.06.2026",
        title: "Thông báo kế hoạch thi tháng 07/2026",
        description:
          "Thông báo lịch thi VSTEP Bậc 3–5 tháng 07/2026 tại điểm thi Ngoại ngữ — đăng ký trước hạn theo quy định.",
        watermark: "LỊCH THI",
        href: "/lich-thi/thang-07-2026",
        isNew: true,
        isImportant: true,
      },
      {
        id: "lich-thi-06-2026",
        code: "LICH-002",
        label: "Lịch thi",
        date: "18.05.2026",
        title: "Thông báo kế hoạch thi tháng 06/2026",
        description:
          "Thông báo lịch thi VSTEP Bậc 3–5 tháng 06/2026 — hướng dẫn hồ sơ, phí thi và thời gian nộp đăng ký.",
        watermark: "LỊCH THI",
        href: "/lich-thi/thang-06-2026",
      },
      {
        id: "lich-thi-05-2026",
        code: "LICH-003",
        label: "Lịch thi",
        date: "10.04.2026",
        title: "Thông báo kế hoạch thi tháng 05/2026",
        description:
          "Thông báo lịch thi VSTEP Bậc 3–5 tháng 05/2026 tại điểm thi Ngoại ngữ.",
        watermark: "LỊCH THI",
        href: "/lich-thi/thang-05-2026",
      },
      {
        id: "lich-thi-04-2026",
        code: "LICH-004",
        label: "Lịch thi",
        date: "21.03.2026",
        title: "Thông báo kế hoạch thi tháng 04/2026",
        description:
          "Thông báo lịch thi VSTEP Bậc 3–5 tháng 04/2026 — chi tiết ca thi và quy trình đăng ký.",
        watermark: "LỊCH THI",
        href: "/lich-thi/thang-04-2026",
      },
    ],
  },
  {
    id: "on-thi",
    heading: "Ôn thi",
    moreHref: "/on-thi",
    moreLabel: "Xem thêm thông báo ôn thi",
    items: [
      {
        id: "on-thi-07-2026",
        code: "ON-001",
        label: "Thông báo ôn thi",
        date: "29.06.2026",
        title: "Thông báo mở lớp ôn thi VSTEP Bậc 3-5 (07/2026)",
        description:
          "Thông báo khai giảng chương trình ôn thi VSTEP Bậc 3–5 tháng 07/2026 — 75 tiết, học trực tiếp, học phí và ưu đãi theo quy định.",
        watermark: "ÔN THI",
        href: "/on-thi/thang-07-2026",
        isNew: true,
        isImportant: true,
      },
      {
        id: "on-thi-06-2026",
        code: "ON-002",
        label: "Thông báo ôn thi",
        date: "18.05.2026",
        title: "Thông báo mở lớp ôn thi VSTEP Bậc 3-5 (06/2026)",
        description:
          "Thông báo khai giảng chương trình ôn thi VSTEP Bậc 3–5 tháng 06/2026 — nội dung ôn luyện bốn kỹ năng.",
        watermark: "ÔN THI",
        href: "/on-thi/thang-06-2026",
      },
      {
        id: "on-thi-05-2026",
        code: "ON-003",
        label: "Thông báo ôn thi",
        date: "10.04.2026",
        title: "Thông báo mở lớp ôn thi VSTEP Bậc 3-5 (05/2026)",
        description:
          "Thông báo khai giảng chương trình ôn thi VSTEP Bậc 3–5 tháng 05/2026 tại Trung tâm Ngoại ngữ.",
        watermark: "ÔN THI",
        href: "/on-thi/thang-05-2026",
      },
      {
        id: "on-thi-04-2026",
        code: "ON-004",
        label: "Thông báo ôn thi",
        date: "21.03.2026",
        title: "Thông báo mở lớp ôn thi VSTEP Bậc 3-5 (04/2026)",
        description:
          "Thông báo khai giảng chương trình ôn thi VSTEP Bậc 3–5 tháng 04/2026 — hướng dẫn đăng ký và lịch khai giảng.",
        watermark: "ÔN THI",
        href: "/on-thi/thang-04-2026",
      },
    ],
  },
];
