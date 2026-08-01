export type HeaderNavChild = {
  label: string;
  href: string;
};

export type HeaderNavItem = {
  label: string;
  href: string;
  /** Short English eyebrow shown in fullscreen menu. */
  eyebrow?: string;
  children?: readonly HeaderNavChild[];
};

export const headerNavItems: HeaderNavItem[] = [
  { label: "Giới thiệu", href: "/gioi-thieu", eyebrow: "ABOUT" },
  {
    label: "Thông tin",
    href: "/lich-thi",
    eyebrow: "INFO",
    children: [
      { label: "Lịch thi", href: "/lich-thi" },
      { label: "Thông báo ôn thi", href: "/on-thi" },
      { label: "Kế hoạch năm", href: "/ke-hoach-nam" },
    ],
  },
  {
    label: "Tra cứu",
    href: "/tra-cuu",
    eyebrow: "LOOKUP",
    children: [
      { label: "Tra cứu kết quả thi", href: "/tra-cuu/ket-qua-thi" },
      { label: "Tra cứu thông tin thí sinh", href: "/tra-cuu/thi-sinh" },
    ],
  },
  {
    label: "Văn bản",
    href: "/van-ban",
    eyebrow: "DOCS",
    children: [
      { label: "Văn bản – Biểu mẫu", href: "/van-ban/bieu-mau" },
      { label: "Văn bản pháp quy", href: "/van-ban/phap-quy" },
    ],
  },
  { label: "Liên hệ", href: "/lien-he", eyebrow: "CONTACT" },
];

export const headerFullscreenMenuItems: readonly HeaderNavItem[] =
  headerNavItems;

export function isHeaderNavItemActive(
  pathname: string,
  href: string,
  hash = ""
): boolean {
  const hashIndex = href.indexOf("#");
  const path = (hashIndex === -1 ? href : href.slice(0, hashIndex)) || "/";
  const expectedHash = hashIndex === -1 ? "" : href.slice(hashIndex);

  if (path === "/") {
    if (pathname !== "/") {
      return false;
    }

    if (expectedHash) {
      return hash === expectedHash;
    }

    return hash === "";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}
