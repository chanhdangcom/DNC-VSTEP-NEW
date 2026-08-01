export type AboutFaqSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type AboutAccordionItem = {
  id: string;
  title: string;
  content?: string;
  bullets?: readonly string[];
};

export type AboutFrameworkLevel = {
  id: string;
  label: string;
  cefr: string;
};

export type AboutFrameworkCapability = {
  id: string;
  label: string;
  /** Index of the first level (0-based) that includes this capability. */
  fromLevel: number;
};

export type AboutScoreRow = {
  id: string;
  score: string;
  level: string;
  description: string;
};

export type AboutNavItem = {
  id: string;
  label: string;
};

/** Sidebar section nav — mirrors on-page anchors. */
export const aboutPageNav: readonly AboutNavItem[] = [
  { id: "vstep-la-gi", label: "VSTEP là gì?" },
  { id: "chung-chi-vstep", label: "Chứng chỉ VSTEP" },
  { id: "chung-chi-can-cho-ai", label: "Đối tượng" },
  { id: "khung-6-bac", label: "Khung 6 bậc" },
  { id: "bang-quy-doi", label: "Quy đổi điểm" },
  { id: "hinh-thuc-bai-thi", label: "Hình thức bài thi" },
] as const;

export const aboutFaqSections: AboutFaqSection[] = [
  {
    id: "vstep-la-gi",
    title: "VSTEP là gì?",
    paragraphs: [
      "VSTEP là viết tắt của cụm từ tiếng Anh “Vietnamese Standardized Test of English Proficiency” nghĩa là “Kỳ thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ (NLNN) 6 bậc dành cho Việt Nam (từ bậc 1 đến bậc 6) tương đương với trình độ A1, A2, B1, B2, C1, C2)”.",
    ],
  },
  {
    id: "chung-chi-vstep",
    title: "Chứng chỉ VSTEP là gì?",
    paragraphs: [
      "Chứng chỉ Vstep là chứng chỉ tiếng Anh được cấp cho các thí sinh đạt đủ các điều kiện về năng lực theo khung năng lực ngoại ngữ 6 bậc dành cho Việt Nam. Chứng chỉ được cấp bởi các trường được ủy quyền của Bộ Giáo dục và Đào tạo.",
    ],
  },
  {
    id: "chung-chi-can-cho-ai",
    title: "Chứng chỉ VSTEP cần cho ai?",
    bullets: [
      "Sinh viên các trường Đại học, Cao đẳng.",
      "Thí sinh trình độ sau đại học (Thạc sĩ và Tiến sĩ).",
      "Giáo viên tiếng Anh.",
      "Người đi làm tại các cơ quan, doanh nghiệp.",
    ],
  },
];

export type AboutFrameworkLadderLevel = {
  id: string;
  label: string;
  cefr: string;
  /** Sơ cấp / Trung cấp / Cao cấp */
  group: string;
  /** Tóm tắt năng lực nổi bật của bậc. */
  summary: string;
};

/** Biểu đồ bậc thang 6 bậc — bản tóm gọn của khung năng lực. */
export const aboutFrameworkLadder = {
  id: "khung-6-bac",
  title: "Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam",
  vstepRange: { from: 2, to: 4, label: "Phạm vi bài thi VSTEP 3–5" },
  groups: ["Sơ cấp", "Trung cấp", "Cao cấp"],
  levels: [
    {
      id: "bac-1",
      label: "Bậc 1",
      cefr: "A1",
      group: "Sơ cấp",
      summary:
        "Hiểu và sử dụng các từ, câu quen thuộc trong đời sống hằng ngày. Có thể tự giới thiệu, hỏi đáp thông tin cá nhân và giao tiếp đơn giản khi người đối thoại nói chậm, rõ.",
    },
    {
      id: "bac-2",
      label: "Bậc 2",
      cefr: "A2",
      group: "Sơ cấp",
      summary:
        "Hiểu các câu và cách diễn đạt thường gặp về gia đình, mua sắm, công việc và địa phương. Có thể trao đổi ngắn về chủ đề quen thuộc, mô tả bản thân và nhu cầu thiết yếu.",
    },
    {
      id: "bac-3",
      label: "Bậc 3",
      cefr: "B1",
      group: "Trung cấp",
      summary:
        "Hiểu ý chính của nội dung rõ ràng về học tập, công việc và đời sống. Có thể xử lý tình huống thường gặp, kể trải nghiệm, trình bày kế hoạch và viết đoạn văn đơn giản có liên kết.",
    },
    {
      id: "bac-4",
      label: "Bậc 4",
      cefr: "B2",
      group: "Trung cấp",
      summary:
        "Hiểu ý chính của văn bản phức tạp, kể cả nội dung chuyên môn quen thuộc. Có thể giao tiếp khá trôi chảy, viết rõ ràng, chi tiết và trình bày quan điểm với lập luận phù hợp.",
    },
    {
      id: "bac-5",
      label: "Bậc 5",
      cefr: "C1",
      group: "Cao cấp",
      summary:
        "Hiểu văn bản dài, khó và nhận biết được hàm ý. Có thể diễn đạt lưu loát, linh hoạt trong môi trường xã hội, học thuật và chuyên môn; viết nội dung chặt chẽ, có cấu trúc.",
    },
    {
      id: "bac-6",
      label: "Bậc 6",
      cefr: "C2",
      group: "Cao cấp",
      summary:
        "Hiểu gần như toàn bộ nội dung nghe và đọc một cách dễ dàng. Có thể tổng hợp thông tin từ nhiều nguồn, lập luận mạch lạc và diễn đạt chính xác, tự nhiên với những sắc thái tinh tế.",
    },
  ] as const satisfies readonly AboutFrameworkLadderLevel[],
} as const;

export const aboutFrameworkSection = {
  id: "khung-6-bac",
  title: "Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam",
  categoryLabel: "Năng lực",
  levels: [
    { id: "bac-1", label: "Bậc 1", cefr: "A1" },
    { id: "bac-2", label: "Bậc 2", cefr: "A2" },
    { id: "bac-3", label: "Bậc 3", cefr: "B1" },
    { id: "bac-4", label: "Bậc 4", cefr: "B2" },
    { id: "bac-5", label: "Bậc 5", cefr: "C1" },
    { id: "bac-6", label: "Bậc 6", cefr: "C2" },
  ] as const satisfies readonly AboutFrameworkLevel[],
  capabilities: [
    {
      id: "giao-tiep-co-ban",
      label: "Câu & từ ngữ quen thuộc hàng ngày",
      fromLevel: 0,
    },
    {
      id: "tu-gioi-thieu",
      label: "Tự giới thiệu; hỏi đáp thông tin cá nhân",
      fromLevel: 0,
    },
    {
      id: "chu-de-quen-thuoc",
      label: "Trao đổi chủ đề quen thuộc",
      fromLevel: 1,
    },
    {
      id: "mo-ta-don-gian",
      label: "Mô tả bản thân & nhu cầu thiết yếu",
      fromLevel: 1,
    },
    {
      id: "y-chinh-tinh-huong",
      label: "Hiểu ý chính; xử lý tình huống du lịch",
      fromLevel: 2,
    },
    {
      id: "viet-ke-hoach",
      label: "Viết đoạn văn; trình bày trải nghiệm & kế hoạch",
      fromLevel: 2,
    },
    {
      id: "van-phuc-tap",
      label: "Hiểu văn bản phức tạp / chuyên môn",
      fromLevel: 3,
    },
    {
      id: "giao-tiep-ban-ngu",
      label: "Giao tiếp trôi chảy với người bản ngữ",
      fromLevel: 3,
    },
    {
      id: "viet-lap-luan",
      label: "Viết chi tiết; nêu ưu–nhược điểm",
      fromLevel: 3,
    },
    {
      id: "ham-y",
      label: "Hiểu văn dài & hàm ý",
      fromLevel: 4,
    },
    {
      id: "linh-hoat",
      label: "Diễn đạt linh hoạt (xã hội, học thuật, chuyên môn)",
      fromLevel: 4,
    },
    {
      id: "viet-phuc-tap",
      label: "Viết chặt chẽ về chủ đề phức tạp",
      fromLevel: 4,
    },
    {
      id: "hieu-hau-het",
      label: "Hiểu hầu hết văn nói & viết",
      fromLevel: 5,
    },
    {
      id: "tom-tat",
      label: "Tóm tắt & trình bày lại nhiều nguồn",
      fromLevel: 5,
    },
    {
      id: "tinh-te",
      label: "Diễn đạt chính xác, sắc thái tinh tế",
      fromLevel: 5,
    },
  ] as const satisfies readonly AboutFrameworkCapability[],
} as const;

export const aboutScoreSection = {
  id: "bang-quy-doi",
  title: "Bảng quy đổi điểm bài thi VSTEP bậc 3-5 sang các bậc năng lực",
  rows: [
    {
      id: "duoi-4",
      score: "Dưới 4,0",
      level: "Không xét",
      description: "Không xét khi sử dụng định dạng đề thi này.",
    },
    {
      id: "bac-3",
      score: "4,0 – 5,5",
      level: "Bậc 3",
      description:
        "Hiểu được ý chính về các chủ đề quen thuộc trong công việc, học tập và đời sống. Có thể xử lý các tình huống giao tiếp thông thường, viết văn bản đơn giản, mô tả trải nghiệm và trình bày ngắn gọn kế hoạch cá nhân.",
    },
    {
      id: "bac-4",
      score: "6,0 – 8,0",
      level: "Bậc 4",
      description:
        "Hiểu được văn bản phức tạp về các chủ đề cụ thể, trừu tượng và chuyên môn. Có thể giao tiếp trôi chảy với người bản ngữ, viết nội dung rõ ràng, chi tiết và trình bày quan điểm cùng ưu, nhược điểm của từng lựa chọn.",
    },
    {
      id: "bac-5",
      score: "8,5 – 10",
      level: "Bậc 5",
      description:
        "Hiểu được các văn bản dài, phức tạp và nhận biết hàm ý. Có thể diễn đạt lưu loát, sử dụng ngôn ngữ linh hoạt trong môi trường xã hội, học thuật và chuyên môn, đồng thời viết nội dung chặt chẽ về những chủ đề khó.",
    },
  ] as const satisfies readonly AboutScoreRow[],
} as const;

export const aboutExamFormatSection = {
  id: "hinh-thuc-bai-thi",
  title: "Hình thức bài thi VSTEP bậc 3 – 5",
  items: [
    {
      id: "nghe",
      title: "Kỹ năng nghe hiểu",
      bullets: [
        "Thời gian khoảng 40 phút, khoảng 35 câu hỏi",
        "Nghe hội thoại, thông báo và bài nói ngắn/dài",
        "Chọn đáp án đúng theo nội dung nghe",
        "Thang điểm 0–10, làm tròn đến 0,5",
      ],
    },
    {
      id: "doc",
      title: "Kỹ năng đọc hiểu",
      bullets: [
        "Thời gian khoảng 60 phút, khoảng 40 câu hỏi",
        "Đọc đoạn văn học thuật và phổ thông",
        "Trả lời câu hỏi về ý chính, chi tiết, từ vựng, suy luận",
        "Thang điểm 0–10, làm tròn đến 0,5",
      ],
    },
    {
      id: "viet",
      title: "Kỹ năng viết",
      bullets: [
        "Thời gian khoảng 60 phút, gồm 2 phần",
        "Viết thư/email hoặc đoạn văn ngắn theo tình huống",
        "Viết bài luận trình bày quan điểm có lập luận",
        "Thang điểm 0–10, làm tròn đến 0,5",
      ],
    },
    {
      id: "noi",
      title: "Kỹ năng nói",
      bullets: [
        "Thời gian khoảng 12 phút",
        "Giới thiệu / tương tác xã hội",
        "Giải quyết tình huống",
        "Trình bày quan điểm theo chủ đề",
        "Thang điểm 0–10, làm tròn đến 0,5",
      ],
    },
  ] as const satisfies readonly AboutAccordionItem[],
} as const;
