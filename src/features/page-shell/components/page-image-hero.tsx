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
    <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden sm:min-h-[360px] lg:min-h-[400px]">
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

      <div className="relative z-10 container mx-auto py-10 sm:py-12 lg:py-16">
        <div className="animate-in fade-in slide-in-from-bottom-4 flex max-w-3xl flex-col gap-8 duration-700">
          {/* Breadcrumb */}
          {breadcrumbs?.length ? (
            <div className="mb-1 inline-flex">
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
                              className="text-lg font-medium text-white/70 transition-colors hover:text-white"
                            >
                              {item.label}
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage className="text-lg font-semibold text-white">
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
            className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {banner.title}{" "}
            {banner.titleHighlight && (
              <span className="text-amber-400">{banner.titleHighlight}</span>
            )}
          </Typography>

          {/* Subtitle description */}
          {banner.description && (
            <p className="max-w-2xl text-base leading-relaxed text-zinc-200 drop-shadow-xs sm:text-lg sm:leading-relaxed">
              {banner.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
