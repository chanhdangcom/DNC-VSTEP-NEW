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
};

export function PageAnimatedHero({
  banner,
  breadcrumbs,
}: PageAnimatedHeroProps) {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="site-chrome-offset to-primary relative flex flex-col overflow-hidden bg-gradient-to-br from-[#4a0000] via-[#7a0000]">
      {/* ── RICH GEOMETRIC ANIMATED BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]" />

        {/* 1. Giant Slowly Rotating Background Star/Cross */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 h-[150vw] w-[150vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
        >
          <div className="absolute top-1/2 left-0 h-[200px] w-full -translate-y-1/2 bg-white" />
          <div className="absolute top-0 left-1/2 h-full w-[200px] -translate-x-1/2 bg-white" />
          <div className="absolute top-1/2 left-0 h-[200px] w-full -translate-y-1/2 rotate-45 bg-white" />
          <div className="absolute top-0 left-1/2 h-full w-[200px] -translate-x-1/2 rotate-45 bg-white" />
        </motion.div>

        {/* 2. Floating Hollow Circle */}
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 h-80 w-80 rounded-full border-[30px] border-white/10 opacity-30"
        />

        {/* 3. Tumbling Triangle */}
        <motion.div
          animate={{
            x: [0, -150, 50, 0],
            y: [0, 150, -50, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] h-0 w-0 border-r-[80px] border-b-[120px] border-l-[80px] border-r-transparent border-b-white/10 border-l-transparent opacity-30"
        />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-red-400/20 blur-[80px]" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-orange-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center py-12 text-center sm:py-16 lg:py-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto flex max-w-4xl flex-col items-center gap-6 duration-700">
          {/* Breadcrumb (Glassmorphism Pill) */}
          {breadcrumbs?.length ? (
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-2 shadow-sm backdrop-blur-md">
              <Breadcrumb>
                <BreadcrumbList className="justify-center">
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
            className="text-5xl leading-tight font-black tracking-tight text-white drop-shadow-sm sm:text-6xl md:text-7xl"
          >
            {banner.title}{" "}
            {banner.titleHighlight && (
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                {banner.titleHighlight}
              </span>
            )}
          </Typography>

          {/* Subtitle description */}
          {banner.description && (
            <p className="max-w-2xl text-base leading-relaxed font-medium text-white/80 sm:text-lg sm:leading-relaxed">
              {banner.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
