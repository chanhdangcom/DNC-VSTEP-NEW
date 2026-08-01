import type { Metadata } from "next";
import { DocumentsPage } from "@/features/documents";
import {
  documentFormsPageBanner,
  documentFormsPageBreadcrumbs,
} from "@/features/page-shell";

export const metadata: Metadata = {
  title: "Văn bản – Biểu mẫu | VSTEP",
  description:
    "Tải về biểu mẫu đăng ký dự thi, phúc khảo, cấp lại chứng chỉ VSTEP và các văn bản dành cho thí sinh.",
};

export default function VanBanBieuMauRoute() {
  return (
    <DocumentsPage
      banner={documentFormsPageBanner}
      breadcrumbs={documentFormsPageBreadcrumbs}
      activeTab="bieu-mau"
    />
  );
}
