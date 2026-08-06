"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

import { Typography } from "@/components/ui/typography";

/** Top bar — clean, minimal dark strip. */
export function HeaderTopBar() {
  return (
    <div className="flex h-full w-full shrink-0 items-center bg-amber-300 text-amber-900">
      <div className="container flex h-full items-center justify-end gap-4">
        <Typography
          variant="small"
          className="min-w-0 truncate text-right tracking-[0.04em]"
        >
          <a
            href="https://nctu.edu.vn/"
            target="_blank"
            className="font-semibold text-amber-950 transition-colors hover:text-rose-700"
          >
            Trường Đại học Nam Cần Thơ
          </a>
          <span aria-hidden className="mx-3 text-amber-400">
            |
          </span>
          <a
            href="https://ttcdr.nctu.edu.vn/"
            target="_blank"
            className="font-semibold text-amber-950 transition-colors hover:text-rose-700"
          >
            Trung tâm Chuẩn đầu ra
          </a>
        </Typography>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-global-search"))}
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-amber-900 shadow-sm ring-1 ring-amber-300/50 transition-all hover:bg-amber-50"
        >
          <MagnifyingGlass className="size-4" weight="bold" aria-hidden />
          <span className="hidden text-sm sm:inline-block">Tìm kiếm</span>
          <KbdGroup>
            <Kbd className="hidden border-none bg-amber-100 font-sans font-bold text-amber-700 group-hover:bg-amber-200 group-hover:text-amber-950 sm:inline-flex">
              /
            </Kbd>
          </KbdGroup>
        </button>
      </div>
    </div>
  );
}
