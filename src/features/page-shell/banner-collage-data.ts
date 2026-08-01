import type { PageBannerImage } from "./types";

/** DNC shared campus fillers. */
export const PAGE_BANNER_COLLAGE = [
  {
    src: "/images/banner/collage/dnc-campus-hero.jpg",
    alt: "Toàn cảnh khuôn viên Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-library.jpg",
    alt: "Không gian thư viện Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-students.jpg",
    alt: "Sinh viên Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-campus-exterior.jpg",
    alt: "Khuôn viên ngoài trời Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-campus-01.jpg",
    alt: "Giảng đường Trường Đại học Nam Cần Thơ",
  },
] as const satisfies readonly PageBannerImage[];

export const DOCUMENT_FORMS_COLLAGE = [
  {
    src: "/images/banner/van-ban-banner-v3.jpg",
    alt: "Sổ ghi chú và biểu mẫu làm việc VSTEP DNC",
  },
  {
    src: "/images/banner/collage/dnc-library.jpg",
    alt: "Thư viện học tập Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/docs-papers.jpg",
    alt: "Tài liệu biểu mẫu VSTEP",
  },
  {
    src: "/images/banner/collage/dnc-students.jpg",
    alt: "Thí sinh tra cứu tài liệu VSTEP tại Đại học Nam Cần Thơ",
  },
] as const satisfies readonly [
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
];

export const LEGAL_DOCUMENTS_COLLAGE = [
  {
    src: "/images/banner/phap-quy-banner-v5.jpg",
    alt: "Tư liệu văn bản quy chế thi VSTEP",
  },
  {
    src: "/images/banner/collage/docs-bookshelf.jpg",
    alt: "Kệ sách văn bản tư liệu",
  },
  {
    src: "/images/banner/collage/dnc-campus-hero.jpg",
    alt: "Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/docs-library-aisle.jpg",
    alt: "Không gian thư viện học thuật",
  },
] as const satisfies readonly [
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
];

export const EXAM_SCHEDULE_COLLAGE = [
  {
    src: "/images/banner/dnc-building-c.jpg",
    alt: "Khu giảng đường & phòng thi Khu C Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-campus-02.jpg",
    alt: "Khuôn viên Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-campus-exterior.jpg",
    alt: "Khuôn viên ngoài trời Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-library.jpg",
    alt: "Không gian thư viện học tập tại Đại học Nam Cần Thơ",
  },
] as const satisfies readonly [
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
];

export const CONTACT_COLLAGE = [
  {
    src: "/images/banner/lien-he-banner-v4.jpg",
    alt: "Văn phòng Trung tâm Chuẩn đầu ra Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-campus-04.jpg",
    alt: "Khu hành chính C2-14 Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-students.jpg",
    alt: "Sinh viên tư vấn Trường Đại học Nam Cần Thơ",
  },
  {
    src: "/images/banner/collage/dnc-campus-hero.jpg",
    alt: "Toàn cảnh Trường Đại học Nam Cần Thơ",
  },
] as const satisfies readonly [
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
];

/** Build a 4-tile collage: hero first, then unique fillers. */
export function buildBannerCollage(
  hero: PageBannerImage,
  extras: readonly PageBannerImage[] = []
): readonly [
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
  PageBannerImage,
] {
  const pool = [hero, ...extras, ...PAGE_BANNER_COLLAGE];
  const unique: PageBannerImage[] = [];

  for (const item of pool) {
    if (!unique.some((u) => u.src === item.src)) {
      unique.push(item);
    }
    if (unique.length >= 4) break;
  }

  return [unique[0]!, unique[1]!, unique[2]!, unique[3]!];
}
