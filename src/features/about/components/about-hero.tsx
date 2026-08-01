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
import { aboutPageBreadcrumbs } from "@/features/page-shell";
import { Typography } from "@/components/ui/typography";

export function AboutHero() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section className="site-chrome-offset to-primary relative flex flex-col overflow-hidden bg-gradient-to-br from-[#4a0000] via-[#7a0000]">
      {/* ── RICH GEOMETRIC ANIMATED BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
          className="absolute -top-20 -left-20 h-80 w-80 rounded-full border-[30px] border-white/10 opacity-50"
        />

        {/* 3. Tumbling Triangle */}
        <motion.div
          animate={{
            x: [0, -150, 50, 0],
            y: [0, 150, -50, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] h-0 w-0 border-r-[80px] border-b-[120px] border-l-[80px] border-r-transparent border-b-white/10 border-l-transparent opacity-50"
        />

        {/* 4. Pulsing Plus Sign */}
        {/* <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-[20%] opacity-5"
        >
          <div className="relative h-32 w-32">
            <div className="absolute top-1/2 left-0 h-8 w-full -translate-y-1/2 rounded-full bg-white" />
            <div className="absolute top-0 left-1/2 h-full w-8 -translate-x-1/2 rounded-full bg-white" />
          </div>
        </motion.div> */}

        {/* 5. Drifting Diagonal Beams */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -left-[50%] h-[2px] w-[200%] -rotate-12 bg-white/10 opacity-50"
        />
        <motion.div
          initial={{ x: "200%" }}
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[70%] -left-[50%] h-[2px] w-[200%] -rotate-12 bg-white/10 opacity-50"
        />
      </div>

      <div className="relative z-10 container flex h-full flex-col items-center justify-center py-16 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto flex max-w-4xl flex-col items-center gap-8 duration-700">
          {/* Breadcrumb (Centered) */}
          <Breadcrumb className="">
            <BreadcrumbList className="justify-center">
              {aboutPageBreadcrumbs.map((item, index) => {
                const isLast = index === aboutPageBreadcrumbs.length - 1;
                return (
                  <React.Fragment key={`${item.label}-${index}`}>
                    {index > 0 && (
                      <BreadcrumbSeparator className="text-white/50" />
                    )}
                    <BreadcrumbItem>
                      {item.href && !isLast ? (
                        <BreadcrumbLink
                          render={<Link href={item.href} />}
                          className="text-sm font-medium text-white/70 transition-colors hover:text-white sm:text-base"
                        >
                          {item.label}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="text-sm font-semibold text-white sm:text-base">
                          {item.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>

          <Typography variant="h1" className="text-5xl leading-tight text-white sm:text-7xl">
            Giới thiệu
          </Typography>

          {/* Subtitle / Icon Row */}
          {/* <div className="mt-8 flex items-center gap-4">
            <div className="w-4 h-4 bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] rotate-45" />
            <span className="text-xl font-bold tracking-[0.3em] text-white/90 uppercase">
              Về Chúng Tôi
            </span>
            <div className="w-4 h-4 bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] rotate-45" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
