import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { PageBannerImage, PageBreadcrumbItem } from "../types";
import { PageBreadcrumb } from "./page-breadcrumb";
import { Typography } from "@/components/ui/typography";

const DEFAULT_HERO_IMAGE: PageBannerImage = {
  src: "/images/banner/collage/dnc-campus-hero.jpg",
  alt: "Khuôn viên Trường Đại học Nam Cần Thơ",
};

type PageWaveHeroProps = {
  title: string;
  description?: string;
  subtitle?: string;
  image?: PageBannerImage;
  breadcrumbs?: readonly PageBreadcrumbItem[];
  children?: ReactNode;
  className?: string;
};

/** Banner đơn giản — một ảnh full width, title + breadcrumb overlay. */
export function PageWaveHero({
  title,
  description,
  image = DEFAULT_HERO_IMAGE,
  breadcrumbs,
  children,
  className,
}: PageWaveHeroProps) {
  return (
    <section className={cn("site-chrome-offset bg-zinc-100", className)}>
      <div className="relative w-full">
        <div className="relative h-[min(36vh,16rem)] w-full sm:h-[min(40vh,20rem)] lg:h-[min(42vh,24rem)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center blur-xs"
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/35 to-zinc-950/15"
          />

          <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <div className="container flex flex-col space-y-4 sm:space-y-8">
              {breadcrumbs?.length ? (
                <PageBreadcrumb items={breadcrumbs} tone="onDark" />
              ) : null}

              <Typography
                variant="h1"
                className="max-w-4xl text-5xl leading-tight text-white drop-shadow-md sm:text-7xl"
              >
                {title}
              </Typography>

              {description ? (
                <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {children ? (
        <div className="container space-y-3 px-4 pt-6 pb-10 sm:pt-8 sm:pb-12">
          {children}
        </div>
      ) : null}
    </section>
  );
}
