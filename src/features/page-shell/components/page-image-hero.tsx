"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Typography } from "@/components/ui/typography";
import type { PageBannerProps, PageBreadcrumbItem } from "../types";

type PageImageHeroProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
  imageUrl: string;
};

export function PageImageHero({
  banner,
  breadcrumbs,
  imageUrl,
}: PageImageHeroProps) {
  return (
    <div className="site-chrome-offset relative flex min-h-[280px] flex-col justify-end overflow-hidden sm:min-h-[350px] lg:min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={banner.title || "Banner Image"}
          fill
          className="object-cover"
          priority
        />

        {/* Dark linear gradients focused tightly on the left side to highlight text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 via-40% to-transparent to-70%" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto pb-10 sm:pb-16 lg:pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 flex max-w-4xl flex-col gap-4 duration-700">
          {/* Breadcrumb */}
          {breadcrumbs?.length ? (
            <div className="inline-flex">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                      <React.Fragment key={`${item.label}-${index}`}>
                        {index > 0 && (
                          <BreadcrumbSeparator className="text-white/40" />
                        )}
                        <BreadcrumbItem>
                          {item.href && !isLast ? (
                            <BreadcrumbLink
                              render={<Link href={item.href} />}
                              className="text-xs font-medium text-white/70 transition-colors hover:text-white sm:text-sm"
                            >
                              {item.label}
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage className="text-xs font-semibold text-white sm:text-sm">
                              {item.label}
                            </BreadcrumbPage>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          ) : null}

          {/* Title */}
          <Typography
            variant="h1"
            className="text-4xl leading-tight font-black tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl"
          >
            {banner.title}{" "}
            {banner.titleHighlight && (
              <span className="text-amber-400">{banner.titleHighlight}</span>
            )}
          </Typography>

          {/* Subtitle description */}
          {banner.description && (
            <p className="mt-2 max-w-2xl text-base leading-relaxed font-medium text-white/90 drop-shadow-sm sm:text-lg sm:leading-relaxed">
              {banner.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
