import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import {
  displayFont,
  fontHandwritten,
  geistMono,
  momoTrustSans,
} from "@/lib/fonts";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GlobalSearchUI } from "@/features/search/global-search-ui";
import "./globals.css";
import { Geist, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "VSTEP | Kỳ Thi Đánh Giá Năng Lực Tiếng Anh Chuẩn Quốc Gia",
  description: "Trung tâm Chuẩn đầu ra - Trường Đại học Nam Cần Thơ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={cn(
        momoTrustSans.variable,
        displayFont.variable,
        geistMono.variable,
        fontHandwritten.variable,
        "h-full antialiased",
        "font-sans",
        inter.variable
      )}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Momo+Signature&family=Momo+Trust+Display&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full font-sans">
        <TooltipProvider>
          {children}
          <ScrollToTop />
          <GlobalSearchUI />
        </TooltipProvider>
      </body>
    </html>
  );
}
