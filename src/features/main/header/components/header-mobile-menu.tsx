"use client";

import Link from "next/link";
import { List } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { headerFullscreenMenuItems } from "../header-navigation";

type HeaderMobileMenuProps = {
  className?: string;
};

/**
 * Mobile menu with native <details> only — no useState / onClick.
 * Matches the pattern that already works on this device (about accordion).
 */
export function HeaderMobileMenu({ className }: HeaderMobileMenuProps) {
  return (
    <details className={cn("relative", className)}>
      <summary
        className={cn(
          "bg-primary hover:bg-primary-hover flex size-10 cursor-pointer touch-manipulation list-none items-center justify-center rounded-full text-white transition-all",
          "marker:content-none [&::-webkit-details-marker]:hidden"
        )}
      >
        <List className="size-5" weight="bold" aria-hidden />
        <span className="sr-only">Menu</span>
      </summary>

      <div className="absolute top-full right-0 z-[400] mt-2 w-52 overflow-hidden rounded-3xl bg-zinc-50 shadow-lg ring-1 ring-black/10 sm:w-48">
        <nav
          aria-label="Menu chính"
          className="max-h-[70vh] overflow-y-auto py-1"
        >
          <ul>
            {headerFullscreenMenuItems.map((item, index) => {
              const hasChildren = Boolean(item.children?.length);
              const itemClassName =
                index > 0 ? "border-t border-zinc-200" : undefined;

              if (!hasChildren) {
                return (
                  <li key={item.href} className={itemClassName}>
                    <Link
                      href={item.href}
                      className="block px-8 py-3 text-sm font-medium text-zinc-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.href} className={itemClassName}>
                  <details>
                    <summary
                      className={cn(
                        "flex cursor-pointer touch-manipulation list-none items-center justify-between gap-2 px-8 py-3",
                        "text-sm font-medium text-zinc-900",
                        "marker:content-none [&::-webkit-details-marker]:hidden"
                      )}
                    >
                      {item.label}

                      <span className="text-zinc-400" aria-hidden>
                        +
                      </span>
                    </summary>

                    <ul className="border-t border-white/10 bg-zinc-50 pb-1">
                      {item.children?.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="block py-2.5 pl-12 text-sm text-zinc-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </details>
  );
}
