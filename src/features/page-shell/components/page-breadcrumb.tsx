import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PageBreadcrumbItem } from "../types";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type PageBreadcrumbProps = {
  items: readonly PageBreadcrumbItem[];
  tone?: "light" | "onDark" | "plain" | "onDarkRule";
  className?: string;
};

export function PageBreadcrumb({
  items,
  tone = "plain",
  className,
}: PageBreadcrumbProps) {
  const onDark = tone === "onDark" || tone === "onDarkRule";

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 && <BreadcrumbSeparator className={cn(onDark && "text-white/50")} />}
              <BreadcrumbItem>
                {item.href && !isLast ? (
                  <BreadcrumbLink
                    render={<Link href={item.href} />}
                    className={cn(
                      "text-sm font-medium sm:text-base transition-colors",
                      onDark ? "text-white/70 hover:text-white" : ""
                    )}
                  >
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage 
                    className={cn(
                      "text-sm font-semibold sm:text-base", 
                      onDark ? "text-white" : ""
                    )}
                  >
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
