import { HeaderMain } from "@/features/main/header";
import { FooterMain } from "@/features/main/footer";
import { AboutContent } from "./components/about-content";
import { AboutHero } from "./components/about-hero";

export function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-zinc-50">
      <HeaderMain solid />
      
      <main className="flex-1">
        <AboutHero />
        <div className="container py-12 sm:py-16 lg:py-24">
          <AboutContent />
        </div>
      </main>

      <FooterMain />
    </div>
  );
}
