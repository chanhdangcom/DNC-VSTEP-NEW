import * as React from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterMain } from "@/features/main/footer";
import { HeaderMain } from "@/features/main/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { BannerCalendarArt } from "./banner-calendar-art";
import { BannerDocumentArt } from "./banner-document-art";
import { BannerContactArt } from "./banner-contact-art";
import { PageAnimatedHero } from "./page-animated-hero";
import { PageImageHero } from "./page-image-hero";
import type { PageBannerProps, PageBreadcrumbItem } from "../types";

type PageHubShellProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
  sidebar?: ReactNode;
  /** Full-bleed block giữa main và footer (vd. bản đồ liên hệ). */
  beforeFooter?: ReactNode;
  children: ReactNode;
};

/** Layout hub — hero + breadcrumb lơ lửng trên mép content + thẻ trắng. */
export function PageHubShell({
  banner,
  breadcrumbs,
  sidebar,
  beforeFooter,
  children,
}: PageHubShellProps) {
  const title = banner.title || "";
  const isImageHero =
    title === "Liên hệ" ||
    title === "Giới thiệu" ||
    banner.image?.src.includes("lienhe-banner");

  const imageUrl = banner.image?.src || "/images/banner/images.jfif";

  let art: React.ReactNode = null;
  if (title.includes("Lịch") || title.includes("kế hoạch") || title.includes("thi")) {
    art = (
      <div className="relative h-[300px] w-[350px] lg:h-[360px] lg:w-[430px] xl:h-[390px] xl:w-[470px]">
        <Image
          src="/images/banner/bo-dong-phuc-dnc-removebg-preview-Picsart-AiImageEnhancer.png"
          alt="Sinh viên đồng phục DNC"
          fill
          className="object-contain object-bottom drop-shadow-xl"
          priority
        />
      </div>
    );
  } else if (title.includes("Văn bản") || title.includes("Biểu mẫu")) {
    art = <BannerDocumentArt className="w-[240px] h-[180px] xl:w-[280px] xl:h-[215px] opacity-90 drop-shadow-md" />;
  }

  return (
    <div className="flex min-h-dvh flex-col bg-zinc-50">
      <HeaderMain solid />

      <main className="flex-1 pt-[var(--app-header-height)]">
        {isImageHero ? (
          <PageImageHero
            banner={banner}
            breadcrumbs={breadcrumbs}
            imageUrl={imageUrl}
          />
        ) : (
          <PageAnimatedHero banner={banner} breadcrumbs={breadcrumbs} art={art} />
        )}

        <div className="py-6 lg:py-8">
          <div className="container px-4">
            {sidebar ? (
              <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(0,17.5rem)_minmax(0,1fr)]">
                <div className="relative min-h-0 lg:pt-8">
                  <div className="lg:top-[calc(var(--app-header-height)+1.5rem)] lg:z-10">
                    <SidebarProvider className="min-h-0 w-full flex-col bg-transparent">
                      {sidebar}
                    </SidebarProvider>
                  </div>
                </div>

                <div className="min-w-0 md:py-8">{children}</div>
              </div>
            ) : (
              <div className="min-w-0">{children}</div>
            )}
          </div>
        </div>
      </main>

      {beforeFooter}

      <FooterMain />
    </div>
  );
}
