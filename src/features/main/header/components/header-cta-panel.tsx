import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** CTA buttons — minimal, Apple-style solid buttons using Shadcn UI buttonVariants. */
export function HeaderCtaPanel() {
  return (
    <div className="hidden shrink-0 items-center gap-2 lg:flex">
      <Link
        href="/lien-he#dang-ky-thi"
        className={cn(
          buttonVariants({ size: "sm" }),
          "bg-primary hover:bg-primary/90 rounded-full px-4 text-sm font-medium text-white"
        )}
      >
        Đăng ký thi
      </Link>

      <Link
        href="/lien-he"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "border-border/80 text-foreground hover:bg-muted rounded-full bg-white px-4 text-sm font-medium"
        )}
      >
        Liên hệ
      </Link>
    </div>
  );
}
