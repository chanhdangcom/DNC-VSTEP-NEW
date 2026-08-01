export type YearlyPlanItem = {
  id: string;
  code: string;
  label: string;
  title: string;
  description: string;
  date: string;
  href: string;
  featured?: boolean;
  isNew?: boolean;
};

export const yearlyPlanSection = {
  tag: "Kế hoạch năm",
  heading: "Kế hoạch năm",
  moreHref: "/ke-hoach-nam",
  moreLabel: "Xem thêm",
} as const;

export const yearlyPlanItems: YearlyPlanItem[] = [
  {
    id: "plan-on-2026",
    code: "PLAN-001",
    label: "Ôn & đánh giá",
    title: "Kế hoạch ôn đánh giá năng lực Ngoại ngữ 6 Bậc năm 2026",
    description:
      "Lộ trình mở lớp ôn, lịch khai giảng và mốc đánh giá năng lực Ngoại ngữ 6 Bậc trong năm 2026.",
    date: "09.01.2026",
    href: "/ke-hoach-nam/on-danh-gia-2026",
    isNew: true,
  },
  {
    id: "plan-thi-2026",
    code: "PLAN-002",
    label: "Thi VSTEP",
    title: "Kế hoạch thi VSTEP năm 2026",
    description:
      "Tổng hợp các đợt thi VSTEP Bậc 3–5, hạn đăng ký và điểm thi dự kiến trong năm 2026.",
    date: "09.01.2026",
    href: "/ke-hoach-nam/thi-vstep-2026",
    isNew: true,
  },
  {
    id: "plan-on-2025",
    code: "PLAN-003",
    label: "Ôn & đánh giá",
    title: "Kế hoạch ôn đánh giá năng lực Ngoại ngữ 6 Bậc năm 2025",
    description:
      "Kế hoạch ôn luyện và đánh giá năng lực Ngoại ngữ 6 Bậc đã triển khai năm 2025.",
    date: "09.01.2025",
    href: "/ke-hoach-nam/on-danh-gia-2025",
  },
  {
    id: "plan-thi-2025",
    code: "PLAN-004",
    label: "Thi VSTEP",
    title: "Kế hoạch thi VSTEP năm 2025",
    description:
      "Lịch thi VSTEP các tháng, quy trình đăng ký và công bố kết quả năm 2025.",
    date: "09.01.2025",
    href: "/ke-hoach-nam/thi-vstep-2025",
  },
  {
    id: "plan-tong-hop-2024",
    code: "PLAN-005",
    label: "Tổng hợp",
    title: "Tổng hợp kế hoạch Ngoại ngữ năm 2024",
    description:
      "Báo cáo tổng kết hoạt động thi, ôn và đánh giá năng lực Ngoại ngữ năm 2024.",
    date: "15.12.2024",
    href: "/ke-hoach-nam/tong-hop-2024",
  },
];
