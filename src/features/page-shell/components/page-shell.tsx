import type { ReactNode } from "react";
import { FooterMain } from "@/features/main/footer";
import { HeaderMain } from "@/features/main/header";
import { cn } from "@/lib/utils";
import type { PageBannerProps, PageBreadcrumbItem } from "../types";
import { PageBanner } from "./page-banner";
import { PageWaveHero } from "./page-wave-hero";

type PageShellProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
  bannerOverlay?: ReactNode;
  /** `wave` = banner một ảnh đơn giản (lịch thi / tài liệu / liên hệ). */
  bannerVariant?: "collage" | "wave";
  children: React.ReactNode;
};

export function PageShell({
  banner,
  breadcrumbs,
  bannerOverlay,
  bannerVariant = "collage",
  children,
}: PageShellProps) {
  return (
    <div className="min-h-dvh bg-zinc-100">
      <HeaderMain solid />

      {bannerVariant === "wave" ? (
        <PageWaveHero
          title={banner.title ?? ""}
          description={banner.description}
          image={banner.image}
          breadcrumbs={breadcrumbs}
        />
      ) : (
        <PageBanner
          {...banner}
          breadcrumbs={breadcrumbs}
          overlay={bannerOverlay}
        />
      )}

      <main className={cn("relative z-[1]", bannerOverlay && "lg:pt-14")}>
        {children}
      </main>

      <FooterMain />
    </div>
  );
}
