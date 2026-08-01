export const documentsHubTabs = [
  {
    value: "bieu-mau",
    label: "Văn bản – Biểu mẫu",
    href: "/van-ban/bieu-mau",
  },
  {
    value: "phap-quy",
    label: "Văn bản pháp quy",
    href: "/van-ban/phap-quy",
  },
] as const;

export type DocumentsHubTabValue = (typeof documentsHubTabs)[number]["value"];

export const documentSectionAnchors = [
  { id: "quy-trinh", label: "Quy trình" },
  { id: "huong-dan", label: "Hướng dẫn" },
  { id: "bieu-mau", label: "Biểu mẫu" },
] as const;

export function getDocumentsHubTabByPathname(pathname: string) {
  return (
    documentsHubTabs.find((tab) => tab.href === pathname) ?? documentsHubTabs[0]
  );
}
