"use client";

import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import {
  headerFullscreenMenuItems,
  type HeaderNavItem,
} from "../header-navigation";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type HeaderFullscreenMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isScrolled?: boolean;
};

/** Desktop fullscreen menu — CSS `hidden lg:contents` keeps it off mobile. */
export function HeaderFullscreenMenu({
  open,
  onOpenChange,
  isScrolled = false,
}: HeaderFullscreenMenuProps) {
  const shouldReduceMotion = useShouldReduceMotion();

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
            <div
              className={cn(
                "relative flex h-full flex-col pb-5 sm:pb-6 lg:pb-8 transition-[padding] duration-300 ease-in-out",
                isScrolled
                  ? "pt-(--app-header-main-height)"
                  : "pt-(--app-header-height)"
              )}
            >
              <div className="container flex min-h-0 flex-1 items-start justify-end overflow-y-auto pt-6 sm:pt-8">
                <nav
                  aria-label="Menu chính"
                  className="flex w-full flex-col items-stretch pb-8 lg:items-end"
                >
                  <Accordion className="w-full max-w-md space-y-6 pr-8 text-left sm:space-y-8 sm:pr-9 lg:ml-auto lg:pr-10 lg:text-right">
                    {headerFullscreenMenuItems.map((item, index) => (
                      <MenuNavItem
                        key={item.href}
                        item={item}
                        index={index}
                        shouldReduceMotion={!!shouldReduceMotion}
                        onNavigate={() => onOpenChange(false)}
                      />
                    ))}
                  </Accordion>
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
  onNavigate: () => void;
};

function MenuNavItem({
  item,
  index,
  shouldReduceMotion,
  onNavigate,
}: MenuNavItemProps) {
  const hasChildren = Boolean(item.children?.length);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : 0.12 + index * 0.045,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      {hasChildren ? (
        <AccordionItem value={item.href} className="border-none">
          <AccordionTrigger
            className={cn(
              "group/nav-trigger w-full justify-start text-left hover:no-underline lg:justify-end lg:text-right",
              "text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl",
              "hover:text-primary transition-colors duration-200",
              "p-0 py-0 focus-visible:ring-0 [&_[data-slot=accordion-trigger-icon]]:hidden"
            )}
          >
            <span className="relative inline-flex items-center">
              {item.label}
              <CaretDown
                className={cn(
                  "absolute top-1/2 left-full ml-3 size-5 shrink-0 -translate-y-1/2 transition-transform duration-300 sm:ml-4 sm:size-6",
                  "group-hover/nav-trigger:text-primary text-white/50",
                  "group-aria-expanded/accordion-trigger:rotate-180"
                )}
                weight="bold"
                aria-hidden
              />
            </span>
          </AccordionTrigger>
          <AccordionContent className="[&_a]:hover:text-primary pb-0 text-base [&_a]:no-underline">
            <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
              {item.children?.map((child) => (
                <li key={child.href + child.label} className="lg:text-right">
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    className="inline-block text-3xl leading-tight font-medium tracking-tight text-white/70 transition-colors sm:text-4xl"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ) : (
        <Link
          href={item.href}
          onClick={onNavigate}
          className="hover:text-primary inline-block text-3xl leading-tight font-semibold tracking-tight text-white transition-colors duration-200 sm:text-4xl"
        >
          {item.label}
        </Link>
      )}
    </motion.div>
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
