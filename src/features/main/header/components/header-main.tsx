"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HeaderLogoLink } from "./header-logo-link";
import {
  HeaderFullscreenMenu,
  HeaderMenuTrigger,
} from "./header-fullscreen-menu";
import { HeaderMobileMenu } from "./header-mobile-menu";
import { HeaderCtaPanel } from "./header-cta-panel";
import { HeaderTopBar } from "./header-top-bar";
import { useLocationHash } from "../hooks/use-location-hash";

type HeaderMainProps = {
  sideRailsInset?: boolean;
  /** Solid bar behind logo/CTAs (page shell). Home keeps transparent overlay. */
  solid?: boolean;
};

export function HeaderMain({
  sideRailsInset = false,
  solid = false,
}: HeaderMainProps) {
  usePathname();
  useLocationHash();
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 flex flex-col overflow-visible bg-white shadow ring-1 ring-black/5",
          solid && "",
          isDesktopMenuOpen ? "z-[310]" : "z-[100]",
          "",
          sideRailsInset ? "home-page-rails-header" : "inset-x-0"
        )}
      >
        <div
          className={cn(
            "hidden origin-top overflow-hidden transition-all duration-300 ease-in-out sm:block",
            isScrolled
              ? "h-0 opacity-0"
              : "h-[var(--app-header-top-height)] opacity-100"
          )}
        >
          <HeaderTopBar />
        </div>

        <div className="flex h-(--app-header-main-height) w-full shrink-0 items-center">
          <div className="container h-full">
            <div className="relative z-[110] flex h-full items-center justify-between gap-3 lg:hidden">
              <HeaderLogoLink
                size="xl"
                className="max-w-[calc(100%-4rem)] min-w-0 shrink"
                imageClassName=" max-w-full"
              />
              <HeaderMobileMenu />
            </div>

            <div className="relative hidden h-full items-center justify-between gap-6 lg:flex">
              <HeaderLogoLink size="xl" />

              <div className="flex h-10 items-center gap-2.5">
                <HeaderCtaPanel />

                <HeaderMenuTrigger
                  open={isDesktopMenuOpen}
                  onOpenChange={setIsDesktopMenuOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderFullscreenMenu
        open={isDesktopMenuOpen}
        onOpenChange={setIsDesktopMenuOpen}
      />
    </>
  );
}
