import type { Metadata } from "next";
import { AboutPage } from "@/features/about";

export const metadata: Metadata = {
  title: "Giới thiệu | VSTEP",
  description:
    "Giới thiệu Trung tâm Chuẩn đầu ra và kỳ thi chứng chỉ VSTEP tại Trường Đại học Nam Cần Thơ.",
};

export default function GioiThieuRoute() {
  return <AboutPage />;
}
