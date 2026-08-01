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
  cefr?: string;
  bullets: readonly string[];
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
      "VSTEP (Vietnamese Standardized Test of English Proficiency) là bài thi đánh giá năng lực tiếng Anh chính thức do Bộ GD&ĐT Việt Nam ban hành.",
      "Được thiết kế dựa trên Khung năng lực ngoại ngữ 6 bậc, VSTEP là thước đo toàn diện và uy tín nhất, có giá trị quy đổi tương đương với các chuẩn quốc tế (A1-C2).",
    ],
  },
  {
    id: "chung-chi-vstep",
    title: "Giá trị Chứng chỉ VSTEP",
    paragraphs: [
      "Được ví như 'tấm hộ chiếu' thiết yếu để mở rộng con đường học vấn và thăng tiến sự nghiệp tại Việt Nam.",
      "Chứng chỉ được cấp trực tiếp bởi các trường Đại học danh tiếng được Bộ GD&ĐT ủy quyền, là điều kiện bắt buộc đối với sinh viên xét tốt nghiệp, nghiên cứu sinh và cán bộ công chức.",
    ],
  },
  {
    id: "chung-chi-can-cho-ai",
    title: "Chứng chỉ VSTEP cần cho ai?",
    bullets: [
      "Sinh viên các trường Đại học & Cao đẳng",
      "Học viên Sau đại học (Thạc sĩ, Tiến sĩ)",
      "Giáo viên giảng dạy Tiếng Anh",
      "Cán bộ, Công chức & Người đi làm",
    ],
  },
];

export type AboutFrameworkLadderLevel = {
  id: string;
  label: string;
  cefr: string;
  group: string;
  features: readonly string[];
};

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
      features: [
        "Ngôn từ: Sử dụng từ/câu quen thuộc hằng ngày.",
        "Giao tiếp: Tự giới thiệu, hỏi đáp cá nhân đơn giản.",
        "Điều kiện: Người đối thoại cần nói chậm và rõ.",
      ],
    },
    {
      id: "bac-2",
      label: "Bậc 2",
      cefr: "A2",
      group: "Sơ cấp",
      features: [
        "Chủ đề: Hiểu cách diễn đạt về gia đình, công việc.",
        "Giao tiếp: Trao đổi ngắn gọn các chủ đề quen thuộc.",
        "Mô tả: Tự mô tả bản thân và nhu cầu thiết yếu.",
      ],
    },
    {
      id: "bac-3",
      label: "Bậc 3",
      cefr: "B1",
      group: "Trung cấp",
      features: [
        "Đọc hiểu: Nắm bắt ý chính học tập, công việc.",
        "Giao tiếp: Xử lý tốt các tình huống thường gặp.",
        "Kỹ năng: Kể trải nghiệm, trình bày kế hoạch.",
        "Viết: Soạn thảo đoạn văn đơn giản có liên kết.",
      ],
    },
    {
      id: "bac-4",
      label: "Bậc 4",
      cefr: "B2",
      group: "Trung cấp",
      features: [
        "Đọc hiểu: Xử lý văn bản phức tạp & chuyên môn.",
        "Giao tiếp: Trôi chảy, trao đổi tự nhiên.",
        "Viết: Soạn thảo rõ ràng, chi tiết đa dạng chủ đề.",
        "Lập luận: Trình bày quan điểm logic, phù hợp.",
      ],
    },
    {
      id: "bac-5",
      label: "Bậc 5",
      cefr: "C1",
      group: "Cao cấp",
      features: [
        "Đọc hiểu: Xử lý văn bản dài, khó & hiểu hàm ý.",
        "Giao tiếp: Lưu loát, linh hoạt trong nhiều môi trường.",
        "Ứng dụng: Giao tiếp xã hội, học thuật, chuyên môn.",
        "Viết: Nội dung chặt chẽ, cấu trúc logic hoàn hảo.",
      ],
    },
    {
      id: "bac-6",
      label: "Bậc 6",
      cefr: "C2",
      group: "Cao cấp",
      features: [
        "Đọc/Nghe: Hiểu gần như toàn bộ một cách dễ dàng.",
        "Kỹ năng: Tổng hợp thông tin từ nhiều nguồn.",
        "Lập luận: Mạch lạc, logic và sắc bén.",
        "Diễn đạt: Chính xác, tự nhiên với sắc thái tinh tế.",
      ],
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
      bullets: [
        "Chưa đạt yêu cầu tối thiểu (Bậc 3).",
        "Cần trau dồi thêm kỹ năng nền tảng.",
        "Khuyến nghị thi bậc 2 (A2).",
      ],
    },
    {
      id: "bac-3",
      score: "4,0 – 5,5",
      level: "Bậc 3",
      cefr: "B1",
      bullets: [
        "Đọc hiểu: Nắm bắt ý chính chủ đề quen thuộc.",
        "Giao tiếp: Xử lý tốt các tình huống hàng ngày.",
        "Viết: Soạn văn bản đơn giản, có liên kết.",
        "Diễn đạt: Mô tả lưu loát sự kiện, kế hoạch.",
      ],
    },
    {
      id: "bac-4",
      score: "6,0 – 8,0",
      level: "Bậc 4",
      cefr: "B2",
      bullets: [
        "Đọc hiểu: Hiểu văn bản phức tạp, chuyên môn.",
        "Giao tiếp: Trôi chảy, tự nhiên với người bản ngữ.",
        "Viết: Trình bày rõ ràng, chi tiết nhiều chủ đề.",
        "Diễn đạt: Phân tích đa chiều, nêu bật ưu/nhược.",
      ],
    },
    {
      id: "bac-5",
      score: "8,5 – 10",
      level: "Bậc 5",
      cefr: "C1",
      bullets: [
        "Đọc hiểu: Nhận biết hàm ý sâu xa và ẩn dụ.",
        "Giao tiếp: Phản xạ tức thì, trôi chảy xuất sắc.",
        "Ngôn ngữ: Uyển chuyển trong học thuật & công việc.",
        "Viết: Cấu trúc chặt chẽ, từ vựng bậc cao.",
      ],
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
        "Thời gian: Khoảng 40 phút.",
        "Số lượng: Khoảng 35 câu hỏi trắc nghiệm.",
        "Nội dung: Nghe hội thoại, thông báo và bài nói ngắn/dài.",
        "Chấm điểm: Thang điểm 0–10, làm tròn đến 0,5.",
      ],
    },
    {
      id: "doc",
      title: "Kỹ năng đọc hiểu",
      bullets: [
        "Thời gian: Khoảng 60 phút.",
        "Số lượng: Khoảng 40 câu hỏi trắc nghiệm.",
        "Nội dung: Đọc các đoạn văn học thuật và phổ thông.",
        "Yêu cầu: Trả lời câu hỏi về ý chính, chi tiết, từ vựng, suy luận.",
      ],
    },
    {
      id: "viet",
      title: "Kỹ năng viết",
      bullets: [
        "Thời gian: Khoảng 60 phút, bao gồm 2 phần thi.",
        "Phần 1: Viết thư/email hoặc đoạn văn ngắn theo tình huống.",
        "Phần 2: Viết bài luận trình bày quan điểm có lập luận.",
        "Chấm điểm: Thang điểm 0–10, làm tròn đến 0,5.",
      ],
    },
    {
      id: "noi",
      title: "Kỹ năng nói",
      bullets: [
        "Thời gian: Khoảng 12 phút.",
        "Phần 1: Tương tác xã hội (tự giới thiệu, trả lời câu hỏi).",
        "Phần 2: Thảo luận giải pháp cho một tình huống.",
        "Phần 3: Trình bày quan điểm theo chủ đề bốc thăm.",
      ],
    },
  ] as const satisfies readonly AboutAccordionItem[],
} as const;
