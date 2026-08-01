"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { AboutNavItem } from "../about-data";

type AboutTopNavProps = {
  items: readonly AboutNavItem[];
};

export function AboutTopNav({ items }: AboutTopNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updateActiveFromScroll() {
      // Header is ~72px, top nav is ~64px -> Offset ~140px
      const offset = 150;
      let nextId = items[0]?.id ?? "";

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          nextId = item.id;
        }
      }

      setActiveId(nextId);
      setIsScrolled(window.scrollY > 100);
    }

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
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

    // Header 72px + Top Nav 64px = 136px offset
    const offset = 140;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <div
      className={cn(
        "sticky z-40 -mx-4 mb-10 px-4 transition-all duration-300 sm:-mx-8 sm:px-8",
        // Position below main header (assuming it's sticky).
        // Main header is roughly 72px tall. 
        "top-[72px]", 
        isScrolled 
          ? "border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl py-3 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <nav
        aria-label="Mục lục Giới thiệu"
        className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
      >
        <ul className="flex min-w-max items-center gap-1 sm:gap-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleClick(event, item.id)}
                  className={cn(
                    "inline-block whitespace-nowrap rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-all duration-200",
                    isActive
                      ? "bg-zinc-900 text-white shadow-md"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
