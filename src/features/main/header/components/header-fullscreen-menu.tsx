"use client";

import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import {
  headerFullscreenMenuItems,
  type HeaderNavItem,
} from "../header-navigation";

type HeaderFullscreenMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/** Desktop fullscreen menu — CSS `hidden lg:contents` keeps it off mobile. */
export function HeaderFullscreenMenu({
  open,
  onOpenChange,
}: HeaderFullscreenMenuProps) {
  const shouldReduceMotion = useShouldReduceMotion();
  const [expandedHrefs, setExpandedHrefs] = useState<Set<string>>(
    () => new Set()
  );
  const [wasOpen, setWasOpen] = useState(open);

  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setExpandedHrefs(new Set());
    }
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    // Only lock scroll on desktop viewport — mobile menu owns lock below lg.
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery.matches) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  function toggleExpanded(href: string) {
    setExpandedHrefs((current) => {
      const next = new Set(current);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  }

  return (
    <div className="hidden lg:contents">
      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu điều hướng"
            className="fixed inset-0 z-[200] overflow-hidden bg-zinc-950/78 backdrop-blur-md"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="relative flex h-full flex-col pt-(--app-header-height) pb-5 sm:pb-6 lg:pb-8">
              <div className="container flex min-h-0 flex-1 items-start justify-end overflow-y-auto pt-6 sm:pt-8 lg:pt-10">
                <nav
                  aria-label="Menu chính"
                  className="flex w-full flex-col items-stretch pb-8 lg:items-end"
                >
                  <ul className="w-full max-w-md space-y-5 pr-8 text-left sm:space-y-6 sm:pr-9 lg:ml-auto lg:pr-10 lg:text-right">
                    {headerFullscreenMenuItems.map((item, index) => (
                      <MenuNavItem
                        key={item.href}
                        item={item}
                        index={index}
                        shouldReduceMotion={!!shouldReduceMotion}
                        expanded={expandedHrefs.has(item.href)}
                        onToggle={() => toggleExpanded(item.href)}
                        onNavigate={() => onOpenChange(false)}
                      />
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

type MenuNavItemProps = {
  item: HeaderNavItem;
  index: number;
  shouldReduceMotion: boolean;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

function MenuNavItem({
  item,
  index,
  shouldReduceMotion,
  expanded,
  onToggle,
  onNavigate,
}: MenuNavItemProps) {
  const hasChildren = Boolean(item.children?.length);

  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : 0.12 + index * 0.045,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="space-y-3"
    >
      {hasChildren ? (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={onToggle}
          className={cn(
            "group inline-flex w-full items-center justify-start text-left lg:justify-end lg:text-right",
            "text-2xl leading-tight font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl",
            "hover:text-primary transition-colors",
            expanded && "text-primary"
          )}
        >
          <span className="relative inline-flex items-center">
            {item.label}
            <CaretDown
              className={cn(
                "absolute top-1/2 left-full ml-2 size-5 shrink-0 -translate-y-1/2 transition-transform duration-200 sm:ml-2.5 sm:size-6",
                expanded && "rotate-180"
              )}
              weight="bold"
              aria-hidden
            />
          </span>
        </button>
      ) : (
        <Link
          href={item.href}
          onClick={onNavigate}
          className="hover:text-primary inline-block text-2xl leading-tight font-semibold tracking-tight text-white transition-colors sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {item.label}
        </Link>
      )}

      <AnimatePresence initial={false}>
        {hasChildren && expanded ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 sm:space-y-3.5">
              {item.children?.map((child) => (
                <li key={child.href + child.label} className="lg:text-right">
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    className="hover:text-primary inline-block text-lg leading-[1.1] font-semibold tracking-tight text-white/80 transition-colors sm:text-xl md:text-2xl"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.li>
  );
}

type HeaderMenuTriggerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

export function HeaderMenuTrigger({
  open,
  onOpenChange,
  className,
}: HeaderMenuTriggerProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Đóng menu" : "Mở menu"}
      aria-expanded={open}
      onClick={() => onOpenChange(!open)}
      className={cn(
        "bg-primary hover:bg-primary-hover relative z-[310] inline-flex size-9 shrink-0 touch-manipulation items-center justify-center rounded-full text-white transition-all duration-200",
        className
      )}
    >
      <span className="relative h-3.5 w-[18px]" aria-hidden="true">
        <span
          className={cn(
            "absolute left-0 h-0.5 w-full origin-center bg-current max-lg:transition-none lg:transition-all lg:duration-300 lg:ease-[cubic-bezier(0.32,0.72,0,1)]",
            open ? "top-[6px] rotate-45" : "top-[2px]"
          )}
        />
        <span
          className={cn(
            "absolute left-0 h-0.5 w-full origin-center bg-current max-lg:transition-none lg:transition-all lg:duration-300 lg:ease-[cubic-bezier(0.32,0.72,0,1)]",
            open ? "top-[6px] -rotate-45" : "top-[10px]"
          )}
        />
      </span>
    </button>
  );
}
