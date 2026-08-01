export type DocumentCategory = "process" | "guide" | "form";

export type DocumentFormItem = {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  /** Ngày ban hành, định dạng dd.MM.yyyy. */
  date: string;
  fileType: "PDF" | "DOC" | "XLS";
  href: string;
};

export const documentFormItems: readonly DocumentFormItem[] = [
  {
    id: "quy-trinh-dang-ky-du-thi",
    title: "Quy trình đăng ký dự thi",
    description:
      "Các bước chuẩn bị hồ sơ, đăng ký, nộp lệ phí và nhận thông tin dự thi VSTEP.",
    category: "process",
    date: "02.06.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "quy-trinh-nhan-chung-chi",
    title: "Quy trình nhận chứng chỉ",
    description:
      "Hướng dẫn tra cứu kết quả, xác nhận thông tin và nhận chứng chỉ sau kỳ thi.",
    category: "process",
    date: "02.06.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "quy-trinh-phuc-khao",
    title: "Quy trình phúc khảo bài thi",
    description:
      "Trình tự tiếp nhận, xử lý hồ sơ và thông báo kết quả phúc khảo bài thi VSTEP.",
    category: "process",
    date: "02.06.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "noi-quy-phong-thi",
    title: "Nội quy phòng thi đánh giá năng lực ngoại ngữ",
    description:
      "Những quy định thí sinh cần tuân thủ trước, trong và sau thời gian làm bài.",
    category: "guide",
    date: "15.04.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "luu-y-trong-qua-trinh-thi",
    title: "Những điều cần lưu ý trong quá trình thi",
    description:
      "Các lưu ý quan trọng về giấy tờ, thời gian có mặt và xử lý tình huống tại điểm thi.",
    category: "guide",
    date: "15.04.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "huong-dan-lam-bai-thi",
    title: "Hướng dẫn các bước làm bài thi VSTEP",
    description:
      "Hướng dẫn thao tác và phân bổ thời gian cho từng kỹ năng trong bài thi.",
    category: "guide",
    date: "15.04.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "don-dang-ky-du-thi",
    title: "Đơn đăng ký dự thi VSTEP",
    description:
      "Mẫu đơn đăng ký dự thi đánh giá năng lực tiếng Anh VSTEP Bậc 3-5 dành cho thí sinh tự do và sinh viên.",
    category: "form",
    date: "02.06.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "don-phuc-khao",
    title: "Đơn xin phúc khảo bài thi",
    description:
      "Mẫu đơn đề nghị phúc khảo kết quả bài thi VSTEP, nộp trong vòng 15 ngày kể từ ngày công bố kết quả.",
    category: "form",
    date: "02.06.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "don-cap-lai-chung-chi",
    title: "Đơn đề nghị cấp lại chứng chỉ",
    description:
      "Dành cho thí sinh bị mất hoặc hư hỏng chứng chỉ VSTEP, kèm hướng dẫn hồ sơ và lệ phí cấp lại.",
    category: "form",
    date: "15.04.2026",
    fileType: "DOC",
    href: "#",
  },
  {
    id: "don-hoan-thi",
    title: "Đơn xin hoãn thi / bảo lưu lệ phí",
    description:
      "Mẫu đơn xin hoãn thi sang đợt kế tiếp và bảo lưu lệ phí dự thi với lý do chính đáng.",
    category: "form",
    date: "15.04.2026",
    fileType: "DOC",
    href: "#",
  },
  {
    id: "giay-cam-ket-thong-tin",
    title: "Giấy cam kết thông tin thí sinh",
    description:
      "Cam kết tính chính xác của thông tin cá nhân dùng để in chứng chỉ, nộp kèm hồ sơ đăng ký dự thi.",
    category: "form",
    date: "10.01.2026",
    fileType: "PDF",
    href: "#",
  },
  {
    id: "danh-sach-dang-ky-don-vi",
    title: "Danh sách đăng ký dự thi theo đơn vị",
    description:
      "Biểu mẫu tổng hợp danh sách thí sinh đăng ký dự thi dành cho các khoa, trung tâm và đơn vị liên kết.",
    category: "form",
    date: "10.01.2026",
    fileType: "XLS",
    href: "#",
  },
];
