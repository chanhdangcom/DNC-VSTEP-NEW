import Link from "next/link";
import { ArrowRight, FilePdf } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { LegalDocumentItem } from "../legal-documents-data";

type LegalDocumentCardProps = {
  item: LegalDocumentItem;
};

/** Card văn bản pháp quy — đồng bộ 100% giao diện ô Icon định dạng như Lịch thi */
export function LegalDocumentCard({ item }: LegalDocumentCardProps) {
  const fileType = item.fileType ?? "PDF";

  return (
    <article className="h-full">
      <Link
        href={item.href}
        className={cn(
          "group bg-card ring-border/80 flex h-full gap-4 rounded-2xl p-1 shadow-md ring-1 shadow-black/5",
          "hover:border-primary/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg",
          "focus-visible:ring-primary/30 focus-visible:ring-2 focus-visible:outline-none"
        )}
      >
        {/* Icon & Format Block (Left) — Icon FilePdf màu đỏ đồng bộ */}
        <div className="flex self-stretch">
          <div className="group-hover:border-primary/30 flex h-full w-20 shrink-0 flex-col items-center justify-center rounded-xl p-2 ring-1 ring-black/6 transition-colors duration-200">
            <FilePdf
              className="size-8 shrink-0 text-red-600 dark:text-red-400"
              weight="fill"
            />
          </div>
        </div>

        {/* Main Info Area */}
        <div className="flex min-w-0 flex-1 items-center py-3.5 pr-2">
          <Typography 
            variant="h4" 
            className="group-hover:text-primary m-0 line-clamp-2 text-balance transition-colors duration-200"
          >
            {item.title}
          </Typography>
        </div>

        {/* Action Arrow (Right) */}
        <div className="hidden shrink-0 items-center justify-center pr-3.5 sm:flex">
          <span className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-primary/25 bg-muted/80 text-muted-foreground flex size-8 items-center justify-center rounded-full shadow-2xs transition-all duration-300 group-hover:translate-x-0.5 group-hover:shadow-md">
            <ArrowRight className="size-4" weight="bold" aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  );
}
