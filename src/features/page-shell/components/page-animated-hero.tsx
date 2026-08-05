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
    <div className="relative flex min-h-[300px] flex-col justify-center overflow-hidden border-b border-zinc-200/80 bg-zinc-50 sm:min-h-[360px] lg:min-h-[400px]">
      {/* ── RICH GEOMETRIC ANIMATED BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Extremely Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]" />

        {/* 1. Giant Slowly Rotating Background Star/Cross */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 h-[150vw] w-[150vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.015]"
        >
          <div className="absolute top-1/2 left-0 h-[200px] w-full -translate-y-1/2 bg-zinc-900" />
          <div className="absolute top-0 left-1/2 h-full w-[200px] -translate-x-1/2 bg-zinc-900" />
          <div className="absolute top-1/2 left-0 h-[200px] w-full -translate-y-1/2 rotate-45 bg-zinc-900" />
          <div className="absolute top-0 left-1/2 h-full w-[200px] -translate-x-1/2 rotate-45 bg-zinc-900" />
        </motion.div>

        {/* 2. Floating Hollow Circle */}
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 h-80 w-80 rounded-full border-[20px] border-zinc-200/30 opacity-20"
        />

        {/* 3. Tumbling Triangle */}
        <motion.div
          animate={{
            x: [0, -150, 50, 0],
            y: [0, 150, -50, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] h-0 w-0 border-r-[80px] border-b-[120px] border-l-[80px] border-r-transparent border-b-zinc-200/30 border-l-transparent opacity-20"
        />

        {/* Subtle Ambient Glowing Orbs */}
        <div className="bg-primary/4 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-rose-400/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto my-auto flex h-full items-center justify-between gap-8 py-8 sm:py-10 lg:py-12">
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
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl"
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
            <p className="max-w-xl text-left text-base leading-relaxed text-zinc-600 sm:text-lg sm:leading-relaxed lg:max-w-2xl">
              {banner.description}
            </p>
          )}
        </div>
      </div>

      {art && (
        <div className="animate-in fade-in slide-in-from-bottom-6 pointer-events-none absolute right-6 bottom-0 z-10 hidden duration-700 lg:right-16 lg:block xl:right-24 2xl:right-60">
          {art}
        </div>
      )}
    </div>
  );
}
