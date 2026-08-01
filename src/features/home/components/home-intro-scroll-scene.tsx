import { HomeBanner } from "./home-banner";
import { HomeIntroContent } from "./home-intro-content";

export function HomeIntroScrollScene() {
  return (
    <section id="vstep-intro" className="relative scroll-mt-28">
      <HomeBanner />

      <section className="relative flex min-h-dvh items-center overflow-hidden bg-white">
        <div className="container w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-14 xl:px-16">
          <HomeIntroContent />
        </div>
      </section>
    </section>
  );
}
