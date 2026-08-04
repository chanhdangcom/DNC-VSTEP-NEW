import { HeaderMain } from "@/features/main/header";
import { FooterMain } from "@/features/main/footer";
import { AboutContent } from "./components/about-content";
import { PageImageHero, aboutPageBreadcrumbs } from "@/features/page-shell";

export function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-50">
      <HeaderMain solid />

      <main className="flex-1 pt-[var(--app-header-height)]">
        <PageImageHero
          imageUrl="/images/banner/gioithieu.jfif"
          banner={{
            title: "Về Kỳ Thi",
            titleHighlight: "VSTEP",
            description:
              "Kỳ thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam, đáp ứng nhu cầu chuẩn hóa tiếng Anh cho mọi đối tượng.",
          }}
          breadcrumbs={aboutPageBreadcrumbs}
        />
        <div className="container py-8 lg:py-12">
          <AboutContent />
        </div>
      </main>

      <FooterMain />
    </div>
  );
}
