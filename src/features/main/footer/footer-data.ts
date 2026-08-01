export type FooterContactItem = {
  lines: string[];
};

export type FooterLinkItem = {
  label: string;
  href: string;
};

export const footerUniversitySection = {
  title: "Trường Đại học Nam Cần Thơ",
  contacts: [
    {
      lines: ["168, Nguyễn Văn Cừ (nối dài), P.An Bình, TP.Cần Thơ"],
    },
    {
      lines: ["(0292) 3 798 222 - 3 798 668"],
    },
    {
      lines: ["dnc@moet.edu.vn"],
    },
  ] satisfies FooterContactItem[],
};

export const footerCenterSection = {
  title: "TT Đào tạo Chuẩn đầu ra & PTNNL",
  contacts: [
    {
      lines: [
        "Phòng C2-14 - (Khu C)",
        "168, Nguyễn Văn Cừ (nối dài), P.An Bình, TP.Cần Thơ",
      ],
    },
    {
      lines: ["02923 798 789 - 0901 012 365"],
    },
    {
      lines: ["vstepdhnamcantho@nctu.edu.vn"],
    },
  ] satisfies FooterContactItem[],
};

export const footerLinkColumns: FooterLinkItem[][] = [
  [
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Liên hệ", href: "/#lien-he" },
  ],
  [
    { label: "Biểu mẫu", href: "/van-ban/bieu-mau" },
    { label: "Tra cứu", href: "/tra-cuu" },
  ],
];
