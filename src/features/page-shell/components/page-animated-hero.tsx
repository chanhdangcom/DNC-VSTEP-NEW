"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
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

type PageAnimatedHeroProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
  art?: React.ReactNode;
};

export function PageAnimatedHero({
  banner,
  breadcrumbs,
  art,
}: PageAnimatedHeroProps) {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden border-b border-zinc-200/80 bg-zinc-100 py-8">
      {/* ── RICH GEOMETRIC ANIMATED BACKGROUND ── */}

      <div className="relative z-10 container mx-auto flex items-center justify-between gap-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 flex max-w-xl flex-1 flex-col items-start gap-4 text-left duration-700 sm:gap-6 lg:max-w-2xl">
          {/* Breadcrumb (Clean inline matching PageImageHero) */}
          {breadcrumbs?.length ? (
            <div className="inline-flex">
              <Breadcrumb>
                <BreadcrumbList className="justify-start">
                  {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                      <React.Fragment key={`${item.label}-${index}`}>
                        {index > 0 && (
                          <BreadcrumbSeparator className="text-zinc-400" />
                        )}
                        <BreadcrumbItem>
                          {item.href && !isLast ? (
                            <BreadcrumbLink
                              render={<Link href={item.href} />}
                              className="text-base font-medium text-zinc-500 transition-colors hover:text-zinc-900"
                            >
                              {item.label}
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage className="text-base font-bold text-zinc-900">
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
            className="text-primary text-6xl text-balance"
          >
            {banner.title}{" "}
            {banner.titleHighlight && (
              <span className="font-bold text-amber-500">
                {banner.titleHighlight}
              </span>
            )}
          </Typography>

          {/* Subtitle description */}
          {banner.description && (
            <p className="max-w-xl text-left text-base leading-relaxed text-balance text-zinc-600 sm:leading-relaxed lg:max-w-2xl">
              {banner.description}
            </p>
          )}
        </div>
      </div>

      {art && (
        <div className="animate-in fade-in slide-in-from-bottom-6 pointer-events-none absolute top-1/2 right-24 z-10 hidden -translate-y-1/2 duration-700 lg:right-24 lg:block xl:right-36 2xl:right-80">
          {art}
        </div>
      )}
    </div>
  );
}
