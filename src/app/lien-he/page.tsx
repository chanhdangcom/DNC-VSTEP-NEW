import type { Metadata } from "next";
import { ContactPage } from "@/features/contact";

export const metadata: Metadata = {
  title: "Liên hệ | VSTEP",
  description:
    "Địa chỉ, điện thoại, email và giờ làm việc của Trung tâm Đào tạo Chuẩn đầu ra & Phát triển nguồn nhân lực – Trường Đại học Nam Cần Thơ.",
};

export default function LienHeRoute() {
  return <ContactPage />;
}
