import Link from "next/link";
import {
  ArrowRight,
  FileDoc,
  FilePdf,
  FileXls,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { DocumentFormItem } from "../documents-data";

type DocumentFormCardProps = {
  item: DocumentFormItem;
};

const FILE_TYPE_THEMES = {
  PDF: {
    icon: FilePdf,
    iconClass: "text-red-600 dark:text-red-400",
  },
  DOC: {
    icon: FileDoc,
    iconClass: "text-sky-600 dark:text-sky-400",
  },
  XLS: {
    icon: FileXls,
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
} as const;

/** Card biểu mẫu / quy trình — icon đổi màu theo loại file (DOC=Xanh dương, XLS=Xanh lá, PDF=Đỏ) */
export function DocumentFormCard({ item }: DocumentFormCardProps) {
  const theme = FILE_TYPE_THEMES[item.fileType] ?? FILE_TYPE_THEMES.PDF;
  const FileIcon = theme.icon;

  return (
    <article className="h-full">
      <Link
        href={item.href}
        className={cn(
          "group bg-card flex h-full gap-4 rounded-2xl p-1 shadow-xs ring-1 shadow-black/5 ring-black/3",
          "hover:border-primary/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "focus-visible:ring-primary/30 focus-visible:ring-2 focus-visible:outline-none"
        )}
      >
        {/* Icon & Format Block (Left) — Nền giữ nguyên như cũ, chỉ đổi màu Icon */}
        <div className="flex self-stretch">
          <div className="group-hover:border-primary/30 flex h-full w-20 shrink-0 flex-col items-center justify-center rounded-xl p-2 ring-1 ring-black/6 transition-colors duration-200">
            <FileIcon
              className={cn("size-8 shrink-0", theme.iconClass)}
              weight="light"
            />
          </div>
        </div>

        {/* Main Info Area */}
        <div className="flex min-w-0 flex-1 flex-col justify-center space-y-1 py-3.5 pr-2">
          <Typography
            variant="h4"
            className="group-hover:text-primary m-0 line-clamp-2 text-balance transition-colors duration-200"
          >
            {item.title}
          </Typography>

          {item.description ? (
            <Typography
              variant="p"
              className="text-muted-foreground m-0 line-clamp-2 text-sm [&:not(:first-child)]:mt-2"
            >
              {item.description}
            </Typography>
          ) : null}
        </div>

        {/* Action Arrow (Right) */}
        {/* <div className="hidden shrink-0 items-center justify-center pr-3.5 sm:flex">
          <span className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-primary/25 bg-muted/80 text-muted-foreground flex size-8 items-center justify-center rounded-full shadow-2xs transition-all duration-300 group-hover:translate-x-0.5 group-hover:shadow-md">
            <ArrowRight className="size-4" weight="bold" aria-hidden />
          </span>
        </div> */}
      </Link>
    </article>
  );
}
