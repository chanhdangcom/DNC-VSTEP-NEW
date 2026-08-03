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
      "Học viên Sau đại học\n(Thạc sĩ, Tiến sĩ)",
      "Giáo viên giảng dạy Tiếng Anh",
      "Cán bộ, Công chức & Người đi làm",
    ],
  },
];

export type AboutFrameworkKeyPoint = {
  title: string;
  detail: string;
};

export type AboutFrameworkLadderLevel = {
  id: string;
  label: string;
  cefr: string;
  group: string;
  fullDescription: string;
  capabilities: readonly string[];
  keyPoints: readonly AboutFrameworkKeyPoint[];
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
      fullDescription:
        "Có thể hiểu và sử dụng thành thạo các cấu trúc ngôn ngữ quen thuộc thường nhật cùng những từ vựng cơ bản nhất để đáp ứng các nhu cầu giao tiếp cụ thể. Có thể tự giới thiệu bản thân, giới thiệu người khác và trả lời những thông tin cá nhân cơ bản như nơi sinh sống, người thân, bạn bè. Có thể tự tin giao tiếp ở mức độ đơn giản nếu người đối thoại nói chậm rãi, phát âm thật rõ ràng và luôn sẵn sàng hỗ trợ.",
      capabilities: [
        "Hiểu & sử dụng các cấu trúc quen thuộc thường nhật; từ ngữ cơ bản đáp ứng nhu cầu giao tiếp cụ thể.",
        "Tự giới thiệu bản thân, người khác & trả lời các thông tin cá nhân (nơi ở, người thân/bạn bè...).",
        "Giao tiếp đơn giản nếu người đối thoại nói chậm, rõ ràng và sẵn sàng hợp tác giúp đỡ.",
      ],
      keyPoints: [
        {
          title: "Hiểu & Sử dụng",
          detail:
            "Các cấu trúc quen thuộc thường nhật; các từ ngữ cơ bản đáp ứng nhu cầu giao tiếp cụ thể.",
        },
        {
          title: "Tự giới thiệu",
          detail:
            "Bản thân và người khác; trả lời các thông tin cá nhân như nơi sinh sống, người thân/bạn bè...",
        },
        {
          title: "Giao tiếp cơ bản",
          detail:
            "Thực hiện được nếu người đối thoại nói chậm, rõ ràng và sẵn sàng hợp tác giúp đỡ.",
        },
      ],
    },
    {
      id: "bac-2",
      label: "Bậc 2",
      cefr: "A2",
      group: "Sơ cấp",
      fullDescription:
        "Có thể hiểu được các câu và cấu trúc ngôn ngữ được sử dụng thường xuyên liên quan trực tiếp đến nhu cầu giao tiếp cơ bản (như thông tin cá nhân, gia đình, mua sắm, hỏi đường, việc làm). Có thể trao đổi thông tin về những chủ đề đơn giản và quen thuộc trong đời sống hằng ngày. Có thể tự tin mô tả khái quát về bản thân, môi trường xung quanh và chia sẻ chi tiết về những vấn đề thuộc nhu cầu thiết yếu nhất.",
      capabilities: [
        "Hiểu các câu & cấu trúc thường xuyên liên quan nhu cầu cơ bản (gia đình, bản thân, mua hàng, hỏi đường, việc làm).",
        "Trao đổi thông tin về những chủ đề đơn giản, quen thuộc hằng ngày.",
        "Mô tả đơn giản về bản thân, môi trường xung quanh và những vấn đề thuộc nhu cầu thiết yếu.",
      ],
      keyPoints: [
        {
          title: "Hiểu câu & cấu trúc",
          detail:
            "Sử dụng thường xuyên liên quan nhu cầu cơ bản (gia đình, bản thân, mua hàng, hỏi đường, việc làm).",
        },
        {
          title: "Trao đổi chủ đề",
          detail:
            "Tự tin trao đổi thông tin trực tiếp về những chủ đề đơn giản, quen thuộc trong đời sống hằng ngày.",
        },
        {
          title: "Mô tả đơn giản",
          detail:
            "Mô tả về bản thân, môi trường xung quanh và các vấn đề thuộc nhu cầu thiết yếu hằng ngày.",
        },
      ],
    },
    {
      id: "bac-3",
      label: "Bậc 3",
      cefr: "B1",
      group: "Trung cấp",
      fullDescription:
        "Có thể hiểu rõ các ý chính của một đoạn văn hay bài phát biểu chuẩn mực về các chủ đề quen thuộc trong công việc, học tập và giải trí. Có thể tự tin xử lý hầu hết các tình huống phát sinh khi di chuyển đến khu vực có sử dụng ngôn ngữ đó. Có thể viết đoạn văn đơn giản về các chủ đề cá nhân quan tâm, mô tả chi tiết những trải nghiệm, ước mơ của bản thân và chủ động giải thích ngắn gọn các dự định, kế hoạch.",
      capabilities: [
        "Hiểu ý chính của một đoạn văn hay bài phát biểu chuẩn mực, rõ ràng về các chủ đề quen thuộc (công việc, trường học, giải trí...).",
        "Xử lý hầu hết các tình huống xảy ra khi đến khu vực có sử dụng ngôn ngữ đó.",
        "Viết đoạn văn đơn giản liên quan đến các chủ đề quen thuộc hoặc cá nhân quan tâm.",
        "Mô tả kinh nghiệm, sự kiện, giấc mơ, hy vọng, hoài bão & trình bày ngắn gọn lý do, giải thích ý kiến và kế hoạch.",
      ],
      keyPoints: [
        {
          title: "Hiểu ý chính",
          detail:
            "Nắm bắt trọn vẹn văn bản, bài phát biểu chuẩn mực về chủ đề quen thuộc (công việc, học tập, giải trí...).",
        },
        {
          title: "Xử lý tình huống",
          detail:
            "Giao tiếp & xử lý tốt hầu hết các tình huống thực tế xảy ra khi đến khu vực sử dụng tiếng Anh.",
        },
        {
          title: "Viết & Trình bày",
          detail:
            "Viết đoạn văn, mô tả kinh nghiệm, ước mơ và giải thích ngắn gọn ý kiến, kế hoạch cá nhân.",
        },
      ],
    },
    {
      id: "bac-4",
      label: "Bậc 4",
      cefr: "B2",
      group: "Trung cấp",
      fullDescription:
        "Có thể hiểu trọn vẹn ý chính của một văn bản phức tạp về các chủ đề cụ thể lẫn trừu tượng, bao gồm cả những trao đổi kỹ thuật thuộc chuyên môn của bản thân. Có thể giao tiếp ở mức độ trôi chảy, hoàn toàn tự nhiên và thoải mái với người bản ngữ. Có thể viết các văn bản rõ ràng, chi tiết về nhiều chủ đề đa dạng trong cuộc sống, đồng thời phân tích cực kỳ sắc bén về ưu và nhược điểm của các phương án lựa chọn.",
      capabilities: [
        "Hiểu ý chính của một văn bản phức tạp về chủ đề cụ thể & trừu tượng, kể cả trao đổi kỹ thuật thuộc lĩnh vực chuyên môn.",
        "Giao tiếp ở mức độ trôi chảy, tự nhiên với người bản ngữ.",
        "Viết được các văn bản rõ ràng, chi tiết với nhiều chủ đề khác nhau.",
        "Giải thích quan điểm bản thân & nêu ra ưu điểm, nhược điểm của các phương án lựa chọn khác nhau.",
      ],
      keyPoints: [
        {
          title: "Hiểu văn bản phức tạp",
          detail:
            "Nắm vững ý chính các chủ đề cụ thể và trừu tượng, kể cả trao đổi kỹ thuật thuộc chuyên môn.",
        },
        {
          title: "Giao tiếp trôi chảy",
          detail:
            "Giao tiếp ở mức độ tự nhiên, linh hoạt và không gặp bất kỳ trở ngại nào với người bản ngữ.",
        },
        {
          title: "Viết & Lập luận",
          detail:
            "Viết văn bản rõ ràng, chi tiết nhiều chủ đề; giải thích quan điểm, nêu ưu và nhược điểm sắc bén.",
        },
      ],
    },
    {
      id: "bac-5",
      label: "Bậc 5",
      cefr: "C1",
      group: "Cao cấp",
      fullDescription:
        "Có thể đọc hiểu dễ dàng và nhận biết sâu sắc hàm ý ẩn dụ của các văn bản dài với phạm vi chủ đề cực kỳ rộng rãi. Có thể diễn đạt trôi chảy, tức thì và không gặp bất kỳ khó khăn nào trong việc tìm kiếm từ ngữ phù hợp. Có thể sử dụng ngôn ngữ linh hoạt, mang lại hiệu quả cao cho các mục đích xã hội, học thuật, chuyên môn. Có thể viết rõ ràng, chặt chẽ về các chủ đề phức tạp với kỹ năng tổ chức rất xuất sắc.",
      capabilities: [
        "Hiểu và nhận biết được hàm ý của các văn bản dài với phạm vi rộng.",
        "Diễn đạt trôi chảy, tức thì, không gặp khó khăn trong việc tìm từ ngữ diễn đạt.",
        "Sử dụng ngôn ngữ linh hoạt và hiệu quả phục vụ các mục đích xã hội, học thuật và chuyên môn.",
        "Viết rõ ràng, chặt chẽ, chi tiết về các chủ đề phức tạp; thể hiện tốt khả năng tổ chức văn bản & công cụ liên kết.",
      ],
      keyPoints: [
        {
          title: "Hiểu hàm ý & văn dài",
          detail:
            "Đọc hiểu dễ dàng và nhận biết sâu sắc hàm ý của các văn bản dài với phạm vi chủ đề rộng rãi.",
        },
        {
          title: "Diễn đạt linh hoạt",
          detail:
            "Diễn đạt trôi chảy, tức thì; sử dụng ngôn ngữ linh hoạt cho xã hội, học thuật và chuyên môn.",
        },
        {
          title: "Viết chặt chẽ",
          detail:
            "Viết rõ ràng, chi tiết các chủ đề phức tạp với khả năng tổ chức văn bản và sử dụng từ nối xuất sắc.",
        },
      ],
    },
    {
      id: "bac-6",
      label: "Bậc 6",
      cefr: "C2",
      group: "Cao cấp",
      fullDescription:
        "Có thể thấu hiểu một cách dễ dàng và trọn vẹn hầu hết tất cả các nguồn thông tin bằng văn bản nói và văn bản viết. Có thể tóm tắt hiệu quả các nguồn thông tin, tự tin sắp xếp lại các lập luận và trình bày một cách logic, thuyết phục. Có thể diễn đạt tức thì, cực kỳ trôi chảy và chính xác tuyệt đối, đồng thời phân biệt được những sắc thái ý nghĩa tinh tế nhất ngay cả trong các tình huống giao tiếp phức tạp.",
      capabilities: [
        "Hiểu một cách dễ dàng hầu hết văn nói và viết.",
        "Tóm tắt các nguồn thông tin nói hoặc viết, sắp xếp lại thông tin và trình bày lại một cách logic.",
        "Diễn đạt tức thì, rất trôi chảy và chính xác, phân biệt được các ý nghĩa tinh tế khác nhau trong các tình huống phức tạp.",
      ],
      keyPoints: [
        {
          title: "Hiểu đa dạng thông tin",
          detail:
            "Thấu hiểu một cách dễ dàng, trọn vẹn hầu hết tất cả các nguồn thông tin bằng văn nói và văn viết.",
        },
        {
          title: "Tóm tắt & Trình bày",
          detail:
            "Tóm tắt hiệu quả các nguồn thông tin, tự tin sắp xếp lại và trình bày một cách logic, thuyết phục.",
        },
        {
          title: "Diễn đạt tinh tế",
          detail:
            "Diễn đạt tức thì, trôi chảy, chính xác tuyệt đối; phân biệt sắc thái nghĩa tinh tế trong tình huống phức tạp.",
        },
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
