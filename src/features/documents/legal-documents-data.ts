export type LegalDocumentItem = {
  id: string;
  title: string;
  fileType?: string;
  reference?: string;
  href: string;
};

export const legalDocumentItems: readonly LegalDocumentItem[] = [
  {
    id: "quy-che-thi-dgnl",
    title: "Quy chế thi đánh giá năng lực ngoại ngữ",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "dinh-dang-de-thi",
    title: "Định dạng đề thi đánh giá năng lực ngoại ngữ (Bậc 3 – 5)",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "de-an-to-chuc-thi",
    title:
      "Đề án Tổ chức thi ĐGNL Tiếng Anh theo Khung NLNN 6 bậc dùng cho Việt Nam",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "cong-van-cho-phep-to-chuc-thi",
    title:
      "Công văn cho phép tổ chức thi ĐGNL Tiếng Anh theo Khung NLNN 6 bậc dùng cho Việt Nam",
    fileType: "PDF",
    href: "#",
  },
];
