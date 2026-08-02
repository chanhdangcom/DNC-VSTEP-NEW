"use client";

import { useEffect, useState } from "react";
import {
  Certificate,
  ChartBar,
  Compass,
  FileText,
  Question,
  Scales,
  Users,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import type { AboutNavItem } from "../about-data";

type AboutSideMenuProps = {
  items: readonly AboutNavItem[];
  className?: string;
};

const ITEM_ICONS: Record<string, typeof Question> = {
  "vstep-la-gi": Question,
  "chung-chi-vstep": Certificate,
  "doi-tuong": Users,
  "khung-6-bac": ChartBar,
  "quy-doi-diem": Scales,
  "hinh-thuc-bai-thi": FileText,
};

function getScrollOffset() {
  const raw =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement)
          .getPropertyValue("--app-header-height")
          .trim()
      : "72px";
  const headerPx = raw.endsWith("rem")
    ? Number.parseFloat(raw) * 16
    : Number.parseFloat(raw) || 72;
  return headerPx + 24;
}

export function AboutSideMenu({ items, className }: AboutSideMenuProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    function updateActiveFromScroll() {
      const offset = getScrollOffset();
      let nextId = items[0]?.id ?? "";

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          nextId = item.id;
        }
      }

      setActiveId((prev) => (prev === nextId ? prev : nextId));
    }

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [items]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);
    const top =
      window.scrollY + el.getBoundingClientRect().top - getScrollOffset() + 4;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <SidebarProvider className="min-h-0 w-full flex-col bg-transparent">
      <aside className={cn("w-full shrink-0 space-y-4 lg:w-64", className)}>
        {/* ── Mobile Navigation ── */}
        <div className="bg-card ring-border space-y-3 rounded-2xl p-4 shadow-xs ring-1 lg:hidden">
          <nav aria-label="Mục lục mobile" className="-mx-1 overflow-x-auto">
            <ul className="flex w-max min-w-full gap-2 px-1 pb-1">
              {items.map((item) => {
                const isActive = activeId === item.id;
                const IconComponent = ITEM_ICONS[item.id] ?? Compass;

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => handleClick(event, item.id)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground font-normal"
                      )}
                    >
                      <IconComponent
                        className="size-4 shrink-0"
                        weight={isActive ? "fill" : "regular"}
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* ── Desktop View (Creative Modern Menu) ── */}
        <div className="hidden space-y-4 lg:block">
          <div className="px-3 pb-2 text-[0.75rem] font-bold tracking-wider text-zinc-400 uppercase">
            Mục lục Giới thiệu
          </div>

          <nav className="relative flex flex-col gap-1">
            {items.map((item) => {
              const isActive = activeId === item.id;
              const IconComponent = ITEM_ICONS[item.id] ?? Compass;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleClick(event, item.id)}
                  className={cn(
                    "relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-primary"
                      : "text-zinc-500 hover:text-zinc-900"
                  )}
                >
                  {/* Floating active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSideMenuDesktop"
                      className="absolute inset-0 rounded-2xl bg-zinc-100/80"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Left accent line (optional, for extra creativity) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSideMenuAccent"
                      className="bg-primary absolute top-1/2 left-0 h-1/2 w-1 -translate-y-1/2 rounded-r-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center justify-center">
                    <IconComponent
                      className="size-5"
                      weight={isActive ? "fill" : "regular"}
                    />
                  </span>
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </SidebarProvider>
  );
}
