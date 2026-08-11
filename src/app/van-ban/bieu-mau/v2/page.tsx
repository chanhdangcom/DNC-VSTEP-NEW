import type { Metadata } from "next";
import { DocumentsV2Page } from "@/features/documents";
import {
  documentFormsPageBanner,
  documentFormsPageBreadcrumbs,
} from "@/features/page-shell";

export const metadata: Metadata = {
  title: "Văn bản – Biểu mẫu V2 | VSTEP",
  description:
    "Giao diện mới (V2) - Tải về biểu mẫu đăng ký dự thi, phúc khảo, cấp lại chứng chỉ VSTEP và các văn bản dành cho thí sinh.",
};

export default function VanBanBieuMauV2Route() {
  return (
    <DocumentsV2Page
      banner={documentFormsPageBanner}
      breadcrumbs={documentFormsPageBreadcrumbs}
    />
  );
}
