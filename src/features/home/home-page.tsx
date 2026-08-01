import { ContactSection } from "@/features/contact";
import { ExamScheduleSection } from "@/features/exam-schedule";
import { YearlyPlanSection } from "@/features/yearly-plan";
import { FooterMain } from "@/features/main/footer";
import { HeaderMain } from "@/features/main/header";
import { HomeBenefitsSection } from "./components/home-benefits-section";
import { HomeIntroScrollScene } from "./components/home-intro-scroll-scene";

export function HomePage() {
  return (
    <div className="home-page-rails min-h-dvh">
      <HeaderMain />

      <main className="mesh-bg">
        <HomeIntroScrollScene />
        <HomeBenefitsSection />

        <div className="bg-background space-y-16 py-16 lg:space-y-20 lg:py-20">
          <ExamScheduleSection />
          <YearlyPlanSection />
        </div>

        <ContactSection />
        <FooterMain />
      </main>
    </div>
  );
}
