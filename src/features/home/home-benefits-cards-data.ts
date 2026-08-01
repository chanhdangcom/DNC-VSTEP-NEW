export type HomeBenefitCard = {
  id: string;
  /** First line — dark brand sans. */
  titleLead: string;
  /** Second line — brand-red emphasis. */
  titleAccent: string;
  description: string;
  watermark: string;
};

export const homeBenefitsSection = {
  index: "01",
  tag: "Lợi ích chứng chỉ",
  heading: "Có chứng chỉ VSTEP B1–B2–C1, bạn sẽ được gì?",
} as const;

export const homeBenefitCards: HomeBenefitCard[] = [
  {
    id: "benefit-master",
    titleLead: "Học",
    titleAccent: "Thạc sĩ, Tiến sĩ",
    description:
      "Một trong các điều kiện bắt buộc đầu vào khi học tập lên thạc sĩ, tiến sĩ.",
    watermark: "PhD",
  },
  {
    id: "benefit-career",
    titleLead: "Cơ Hội",
    titleAccent: "Việc Làm",
    description:
      "Thuận lợi ứng tuyển vào các công ty, tập đoàn đa quốc gia, nhà nước mà mọi người mơ ước. Dễ dàng có thu nhập nghìn đô.",
    watermark: "JOB",
  },
  {
    id: "benefit-growth",
    titleLead: "Con Đường",
    titleAccent: "Thăng Tiến",
    description:
      "Con đường thăng tiến rộng mở, có nhiều cơ hội được nắm giữ các vị trí chủ chốt trong những dự án trọng điểm của công ty.",
    watermark: "PRO",
  },
  {
    id: "benefit-knowledge",
    titleLead: "Kiến Thức",
    titleAccent: "Chuyên Môn",
    description:
      "Chủ động học hỏi kiến thức chuyên môn một cách dễ dàng từ nhiều nguồn học liệu uy tín trên toàn thế giới mà không cần nhờ sự hỗ trợ của các công cụ dịch.",
    watermark: "LEARN",
  },
  {
    id: "benefit-graduate",
    titleLead: "Điều Kiện",
    titleAccent: "Ra Trường",
    description:
      "Một trong những điều kiện ra trường đối với sinh viên DNC và các trường đại học khác, khi có chứng chỉ VSTEP Bậc 3 trở lên bạn sẽ được miễn chuẩn đầu ra tiếng Anh tại Trường.",
    watermark: "GRAD",
  },
];
