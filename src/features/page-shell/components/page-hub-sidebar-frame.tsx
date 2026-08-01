import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHubSidebarFrameProps = {
  children: ReactNode;
  className?: string;
};

/** Khung sidebar hub — nội dung menu. */
export function PageHubSidebarFrame({
  children,
  className,
}: PageHubSidebarFrameProps) {
  return <aside className={cn(className)}>{children}</aside>;
}
