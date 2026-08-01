"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Kbd } from "@/components/ui/kbd";

import { Typography } from "@/components/ui/typography";

/** Top bar — clean, minimal dark strip. */
export function HeaderTopBar() {
  return (
    <div className="bg-primary text-primary-foreground/80 flex w-full shrink-0 items-center py-2">
      <div className="container flex h-full items-center justify-end gap-4">
        <Typography
          variant="small"
          className="min-w-0 truncate text-right tracking-[0.06em]"
        >
          <a
            href="https://nctu.edu.vn/"
            target="_blank"
            className="text-primary-foreground/90"
          >
            Trường Đại học Nam Cần Thơ
          </a>
          <span aria-hidden className="text-primary-foreground/50 mx-3">
            |
          </span>
          <a
            href="https://ttcdr.nctu.edu.vn/"
            target="_blank"
            className="text-primary-foreground/90"
          >
            Trung tâm Chuẩn đầu ra
          </a>
        </Typography>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-global-search"))}
          className="group text-primary-foreground/70 flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 text-xs transition-colors hover:bg-black/50 hover:text-white"
        >
          <MagnifyingGlass className="size-4" weight="regular" aria-hidden />
          <span className="hidden text-sm sm:inline-block">Tìm kiếm</span>
          <Kbd className="hidden border-none bg-black/30 font-sans text-white group-hover:bg-black/50 sm:inline-flex">
            Ctrl + F
          </Kbd>
        </button>
      </div>
    </div>
  );
}
