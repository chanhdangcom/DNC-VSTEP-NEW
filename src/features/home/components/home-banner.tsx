import { HOME_BANNER_CANVAS } from "../utils/home-banner-theme";
import { HomeBannerContent } from "./home-banner-content";
import { HomeBannerDecor } from "./home-banner-decor";
import { HomeBannerHeroMedia } from "./home-banner-hero-media";
import { HomeBannerMarquee } from "./home-banner-marquee";

export function HomeBanner() {
  return (
    <section
      id="home-banner"
      className="site-chrome-offset relative flex min-h-dvh flex-col overflow-x-clip lg:h-dvh lg:min-h-0"
      style={{ backgroundColor: HOME_BANNER_CANVAS }}
    >
      <HomeBannerDecor />

      <HomeBannerMarquee />

      <div className="relative z-10 flex min-h-0 flex-1 overflow-visible">
        <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col gap-6 overflow-visible pb-6 lg:block lg:gap-0 lg:pb-0">
          {/* Text above image so italic never sits under the photo layer */}
          <div className="relative z-40 order-1 flex flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[52%] lg:py-20 lg:pr-8 lg:pl-16 xl:w-[50%] xl:pr-10 xl:pl-20">
            <HomeBannerContent />
          </div>

          <HomeBannerHeroMedia className="pointer-events-none relative z-20 order-2 mx-0 hidden min-h-72 flex-1 sm:min-h-80 lg:absolute lg:top-[4%] lg:right-0 lg:bottom-0 lg:left-[48%] lg:block lg:min-h-0 xl:left-[50%]" />
        </div>
      </div>
    </section>
  );
}
