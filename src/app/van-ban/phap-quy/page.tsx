import type { Metadata } from "next";
import { LegalDocumentsPage } from "@/features/documents";
import {
  legalDocumentsPageBanner,
  legalDocumentsPageBreadcrumbs,
} from "@/features/page-shell";

export const metadata: Metadata = {
  title: "Văn bản pháp quy | VSTEP",
  description:
    "Quy chế thi, định dạng đề thi và các văn bản pháp quy về tổ chức thi đánh giá năng lực ngoại ngữ theo Khung NLNN 6 bậc dùng cho Việt Nam.",
};

export default function VanBanPhapQuyRoute() {
  return (
    <LegalDocumentsPage
      banner={legalDocumentsPageBanner}
      breadcrumbs={legalDocumentsPageBreadcrumbs}
    />
  );
}
