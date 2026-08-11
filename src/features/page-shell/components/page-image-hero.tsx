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
    <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={banner.title || "Banner Image"}
          fill
          className="object-cover"
          priority
        />

        {/* Standard Shadcn Dark Fade */}
        <div className="absolute inset-0 bg-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto py-10 sm:py-12 lg:py-16">
        <div className="animate-in fade-in slide-in-from-bottom-4 flex max-w-3xl flex-col gap-6 duration-700">
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
                          <BreadcrumbSeparator className="text-zinc-500" />
                        )}
                        <BreadcrumbItem className="text-lg">
                          {item.href && !isLast ? (
                            <BreadcrumbLink
                              render={<Link href={item.href} />}
                              className="text-zinc-400 hover:text-zinc-100"
                            >
                              {item.label}
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage className="font-medium text-zinc-200">
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
            className="font-bold tracking-tight text-zinc-100 lg:text-5xl"
          >
            {banner.title}
          </Typography>

          {/* Subtitle description */}
          {banner.description && (
            <Typography
              variant="lead"
              className="text-lg text-balance text-zinc-400"
            >
              {banner.description}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}
