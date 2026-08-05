import {
  buildBannerCollage,
  CONTACT_COLLAGE,
  DOCUMENT_FORMS_COLLAGE,
  EXAM_SCHEDULE_COLLAGE,
  LEGAL_DOCUMENTS_COLLAGE,
  PAGE_BANNER_COLLAGE,
} from "./banner-collage-data";
import type { PageBannerProps, PageBreadcrumbItem } from "./types";

export { PAGE_BANNER_COLLAGE };

export const PAGE_BANNER_IMAGE = {
  src: "/images/banner/images.jfif",
  alt: "Banner Giới thiệu VSTEP Trường Đại học Nam Cần Thơ",
} as const satisfies NonNullable<PageBannerProps["image"]>;

export const aboutPageBanner: PageBannerProps = {
  image: PAGE_BANNER_IMAGE,
  images: buildBannerCollage(PAGE_BANNER_IMAGE, [
    {
      src: "/images/banner/collage/dnc-library.jpg",
      alt: "Thư viện học tập Đại học Nam Cần Thơ",
    },
    {
      src: "/images/banner/collage/dnc-students.jpg",
      alt: "Sinh viên Trường Đại học Nam Cần Thơ",
    },
    {
      src: "/images/banner/collage/dnc-campus-05.jpg",
      alt: "Giảng đường Đại học Nam Cần Thơ",
    },
  ]),
  title: "Giới thiệu",
  description:
    "Tìm hiểu về chương trình đánh giá năng lực tiếng Anh VSTEP và Trung tâm Chuẩn đầu ra tại Trường Đại học Nam Cần Thơ.",
};

export const aboutPageBreadcrumbs: PageBreadcrumbItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu" },
];

export const EXAM_SCHEDULE_BANNER_IMAGE = {
  src: "/images/banner/dnc-building-c.jpg",
  alt: "Dãy giảng đường & phòng thi VSTEP (Khu C) Trường Đại học Nam Cần Thơ",
} as const satisfies NonNullable<PageBannerProps["image"]>;

export const examSchedulePageBanner: PageBannerProps = {
  image: EXAM_SCHEDULE_BANNER_IMAGE,
  images: EXAM_SCHEDULE_COLLAGE,
  title: "Lịch thi",
  description:
    "Theo dõi lịch thi đánh giá năng lực ngoại ngữ VSTEP Bậc 3–5 được cập nhật chính thức và mới nhất.",
};

export const examSchedulePageBreadcrumbs: PageBreadcrumbItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Thông tin", href: "/lich-thi" },
  { label: "Lịch thi" },
];

export const EXAM_REVIEW_BANNER_IMAGE = {
  src: "/images/banner/dnc-main-building.jpg",
  alt: "Tòa nhà chính Trường Đại học Nam Cần Thơ",
} as const satisfies NonNullable<PageBannerProps["image"]>;

export const examReviewPageBanner: PageBannerProps = {
  image: EXAM_REVIEW_BANNER_IMAGE,
  images: buildBannerCollage(EXAM_REVIEW_BANNER_IMAGE, [
    {
      src: "/images/banner/collage/dnc-library.jpg",
      alt: "Không gian thư viện Đại học Nam Cần Thơ",
    },
    {
      src: "/images/banner/collage/dnc-campus-02.jpg",
      alt: "Giảng đường Đại học Nam Cần Thơ",
    },
    {
      src: "/images/banner/collage/dnc-campus-01.jpg",
      alt: "Toàn cảnh Nam Cần Thơ",
    },
  ]),
  title: "Thông báo ôn thi",
  description:
    "Theo dõi các thông báo ôn luyện, hướng dẫn chuẩn bị trước kỳ thi VSTEP được cập nhật thường xuyên.",
};

export const examReviewPageBreadcrumbs: PageBreadcrumbItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Thông tin", href: "/lich-thi" },
  { label: "Thông báo ôn thi" },
];

export const EXAM_YEARLY_PLAN_BANNER_IMAGE = {
  src: "/images/banner/dnc-aerial-campus.jpg",
  alt: "Toàn cảnh khuôn viên Trường Đại học Nam Cần Thơ từ trên cao",
} as const satisfies NonNullable<PageBannerProps["image"]>;

export const examYearlyPlanPageBanner: PageBannerProps = {
  image: EXAM_YEARLY_PLAN_BANNER_IMAGE,
  images: buildBannerCollage(EXAM_YEARLY_PLAN_BANNER_IMAGE, [
    {
      src: "/images/banner/ke-hoach-nam-banner.jpg",
      alt: "Sổ lịch kế hoạch tháng mở trên bàn",
    },
    {
      src: "/images/banner/collage/dnc-campus-hero.jpg",
      alt: "Khuôn viên Đại học Nam Cần Thơ",
    },
    {
      src: "/images/banner/collage/dnc-library.jpg",
      alt: "Thư viện Đại học Nam Cần Thơ",
    },
  ]),
  title: "Kế hoạch năm",
  description:
    "Xem kế hoạch tổ chức thi VSTEP theo năm để chủ động sắp xếp lịch học và đăng ký dự thi.",
};

export const examYearlyPlanPageBreadcrumbs: PageBreadcrumbItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Thông tin", href: "/lich-thi" },
  { label: "Kế hoạch năm" },
];

export const DOCUMENT_FORMS_BANNER_IMAGE = {
  src: "/images/banner/van-ban-banner-v3.jpg",
  alt: "Tài liệu biểu mẫu VSTEP Trường Đại học Nam Cần Thơ",
} as const satisfies NonNullable<PageBannerProps["image"]>;

export const documentFormsPageBanner: PageBannerProps = {
  image: DOCUMENT_FORMS_BANNER_IMAGE,
  images: DOCUMENT_FORMS_COLLAGE,
  title: "Văn bản – Biểu mẫu",
  description:
    "Tải quy trình, hướng dẫn và biểu mẫu đăng ký dự thi, phúc khảo, cấp lại chứng chỉ VSTEP dành cho thí sinh.",
};

export const documentFormsPageBreadcrumbs: PageBreadcrumbItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Văn bản", href: "/van-ban/bieu-mau" },
  { label: "Biểu mẫu đăng ký" },
];

export const LEGAL_DOCUMENTS_BANNER_IMAGE = {
  src: "/images/banner/phap-quy-banner-v5.jpg",
  alt: "Văn bản quy chế thi VSTEP Trường Đại học Nam Cần Thơ",
} as const satisfies NonNullable<PageBannerProps["image"]>;

export const legalDocumentsPageBanner: PageBannerProps = {
  image: LEGAL_DOCUMENTS_BANNER_IMAGE,
  images: LEGAL_DOCUMENTS_COLLAGE,
  title: "Văn bản pháp quy",
  description:
    "Tra cứu các văn bản quy định, quy chế và công văn liên quan đến tổ chức thi đánh giá năng lực ngoại ngữ VSTEP.",
};

export const legalDocumentsPageBreadcrumbs: PageBreadcrumbItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Văn bản", href: "/van-ban/phap-quy" },
  { label: "Văn bản pháp quy" },
];

export const CONTACT_BANNER_IMAGE = {
  src: "/images/banner/lienhe-banner.jpg",
  alt: "Trung tâm Chuẩn đầu ra Trường Đại học Nam Cần Thơ",
} as const satisfies NonNullable<PageBannerProps["image"]>;

export const contactPageBanner: PageBannerProps = {
  image: CONTACT_BANNER_IMAGE,
  images: CONTACT_COLLAGE,
  title: "Liên hệ",
  description:
    "Kết nối với Trung tâm Chuẩn đầu ra — địa chỉ, điện thoại, Zalo và email hỗ trợ thí sinh VSTEP.",
};

export const contactPageBreadcrumbs: PageBreadcrumbItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Liên hệ" },
];
