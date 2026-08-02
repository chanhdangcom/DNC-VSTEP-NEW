"use client";

import { useEffect, useState } from "react";
import {
  Certificate,
  ChartBar,
  FileText,
  Question,
  Scales,
  Users,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import type { AboutNavItem } from "../about-data";

type AboutStickyNavProps = {
  items: readonly AboutNavItem[];
};

const ITEM_ICONS: Record<string, typeof Question> = {
  "vstep-la-gi": Question,
  "chung-chi-vstep": Certificate,
  "chung-chi-can-cho-ai": Users,
  "khung-6-bac": ChartBar,
  "bang-quy-doi": Scales,
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
  // header + sticky nav height (~48) + breathing room
  return headerPx + 64;
}

export function AboutStickyNav({ items }: AboutStickyNavProps) {
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
    <div className="sticky top-[var(--app-header-height)] z-30 border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm">
      <div className="container px-4">
        <nav aria-label="Mục lục giới thiệu" className="-mx-1 overflow-x-auto">
          <ul className="flex min-w-max gap-1 py-2">
            {items.map((item) => {
              const isActive = activeId === item.id;
              const IconComponent = ITEM_ICONS[item.id] ?? Question;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(event) => handleClick(event, item.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "font-medium text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
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
    </div>
  );
}
