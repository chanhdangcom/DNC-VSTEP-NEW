import { HeaderMain } from "@/features/main/header";
import { FooterMain } from "@/features/main/footer";
import { AboutContent } from "./components/about-content";
import { PageAnimatedHero, aboutPageBreadcrumbs } from "@/features/page-shell";

export function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-50">
      <HeaderMain solid />

      <main className="flex-1">
        <PageAnimatedHero
          banner={{
            title: "Về Kỳ Thi",
            titleHighlight: "VSTEP",
            description:
              "Kỳ thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam, đáp ứng nhu cầu chuẩn hóa tiếng Anh cho mọi đối tượng.",
          }}
          breadcrumbs={aboutPageBreadcrumbs}
        />
        <div className="container py-12 sm:py-16 lg:py-24">
          <AboutContent />
        </div>
      </main>

      <FooterMain />
    </div>
  );
}
