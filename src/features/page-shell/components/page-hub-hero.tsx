import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PageBannerImage, PageBreadcrumbItem } from "../types";

const DEFAULT_IMAGE: PageBannerImage = {
  src: "/images/banner/bg-gioi-thieu.jfif",
  alt: "Banner VSTEP Trường Đại học Nam Cần Thơ",
};

export const PAGE_HUB_NAVY = "#1a2744";
export const PAGE_HUB_BLUE = "#1a4b8c";

type PageHubHeroProps = {
  title: string;
  description?: string;
  /** Kept for API compat — breadcrumb floats on shell seam. */
  breadcrumbs?: readonly PageBreadcrumbItem[];
  image?: PageBannerImage;
  className?: string;
};

/** Banner — cinematic with dramatic overlay, refined typography. */
export function PageHubHero({
  title,
  description,
  image = DEFAULT_IMAGE,
  className,
}: PageHubHeroProps) {
  return (
    <section className={cn("site-chrome-offset", className)}>
      <div className="relative h-64 w-full sm:h-72 lg:h-[22rem] xl:h-[24rem]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={1000}

          sizes="1000"
          className="object-cover object-[center_30%]"
        />

        {/* Premium academic gradient overlays */}
        <div
          aria-hidden
          className="absolute inset-0 bg-zinc-950/30 mix-blend-multiply"
        />
        <div aria-hidden className="absolute inset-0 bg-zinc-950/50" />
        <div aria-hidden className="absolute inset-0 backdrop-blur-xs" />

        {/* Padding bottom compensates EXACTLY for the overlapping card (-mt-10, -12, -14) so Flexbox centers perfectly in the visible portion */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-10 text-center sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
          <div className="container flex flex-col items-center space-y-4 sm:space-y-5">
            <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-white drop-shadow-md sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
              {title}
            </h1>

            {description ? (
              <p className="max-w-2xl text-center text-[0.9375rem] leading-relaxed font-medium text-blue-50/90 drop-shadow-sm sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
