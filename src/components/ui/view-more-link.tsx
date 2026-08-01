import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewMoreLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
};

export function ViewMoreLink({
  className,
  children,
  ...props
}: ViewMoreLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant: "link" }),
        "text-primary h-auto p-0 text-sm font-semibold underline-offset-4 hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
