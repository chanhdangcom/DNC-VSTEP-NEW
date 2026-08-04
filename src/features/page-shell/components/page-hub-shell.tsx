import * as React from "react";
import type { ReactNode } from "react";
import Link from "next/link";
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
  return (
    <div className="min-h-dvh flex flex-col bg-zinc-50">
      <HeaderMain solid />

      {/* <PageHubHero
        title={banner.title ?? ""}
        description={banner.description}
        image={banner.image}
      /> */}

      {/* Page Banner */}
      <div className="pt-[var(--app-header-height)]">
        <PageImageHero
          banner={banner}
          breadcrumbs={breadcrumbs}
          imageUrl={banner.image?.src ?? ""}
        />
      </div>

      <main className="flex-1 py-6 lg:py-8">
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
            children
          )}
        </div>
      </main>

      {beforeFooter}

      <FooterMain />
    </div>
  );
}
