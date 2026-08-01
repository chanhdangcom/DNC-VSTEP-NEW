import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buildBannerCollage } from "../banner-collage-data";
import type {
  PageBannerImage,
  PageBannerProps,
  PageBreadcrumbItem,
} from "../types";
import { PageBreadcrumb } from "./page-breadcrumb";

type PageBannerAllProps = PageBannerProps & {
  breadcrumbs?: readonly PageBreadcrumbItem[];
  overlay?: ReactNode;
};

function BannerTile({
  media,
  className,
  sizes,
}: {
  media: PageBannerImage;
  className?: string;
  sizes: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-md", className)}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        quality={100}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

/**
 * Collage grid banner: large hero (left) with title/description overlay,
 * three supporting tiles on the right.
 */
export function PageBanner({
  image,
  images,
  title,
  description,
  breadcrumbs,
  overlay,
  className,
}: PageBannerAllProps) {
  const tiles =
    images && images.length >= 4
      ? ([images[0], images[1], images[2], images[3]] as const)
      : image
        ? buildBannerCollage(image, images)
        : null;

  if (!tiles) {
    return null;
  }

  const [hero, topRight, bottomLeft, bottomRight] = tiles;

  return (
    <section
      className={cn(
        "page-banner site-chrome-offset relative z-0",
        overlay && "lg:pb-14",
        className
      )}
    >
      <div className="p-2 pt-0">
        <div
          className={cn(
            "grid gap-3 sm:gap-2",
            "lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]",
            "lg:h-[min(42vw,22rem)] xl:h-[min(36vw,24rem)]"
          )}
        >
          <div className="relative min-h-56 overflow-hidden rounded-md sm:min-h-64 lg:min-h-0">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/35 to-zinc-950/15"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 lg:p-8">
              <div className="max-w-xl space-y-3 sm:space-y-4">
                {breadcrumbs?.length ? (
                  <PageBreadcrumb items={breadcrumbs} tone="onDark" />
                ) : null}

                {title ? (
                  <h1 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                    {title}
                  </h1>
                ) : null}

                {description ? (
                  <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="hidden min-h-0 grid-rows-[1.05fr_1fr] gap-3 sm:gap-2 lg:grid">
            <BannerTile
              media={topRight}
              className="min-h-0"
              sizes="(max-width: 1280px) 35vw, 28vw"
            />

            <div className="grid min-h-0 grid-cols-2 gap-3 sm:gap-2">
              <BannerTile
                media={bottomLeft}
                className="min-h-0"
                sizes="(max-width: 1280px) 18vw, 14vw"
              />
              <BannerTile
                media={bottomRight}
                className="min-h-0"
                sizes="(max-width: 1280px) 18vw, 14vw"
              />
            </div>
          </div>
        </div>
      </div>

      {overlay ? (
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-30 hidden translate-y-1/2 lg:block">
          <div className="pointer-events-auto container">{overlay}</div>
        </div>
      ) : null}
    </section>
  );
}
