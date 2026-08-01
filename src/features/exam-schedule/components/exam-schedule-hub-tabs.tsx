"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  examScheduleHubTabs,
  getExamScheduleHubTabByPathname,
} from "../exam-schedule-hub-tab-data";

export function ExamScheduleHubTabs() {
  const pathname = usePathname();
  const activeTab = getExamScheduleHubTabByPathname(pathname);

  const handlePlayAudio = () => {
    const audio = new Audio("https://cdn.chanhdang.com/sound_theme.MP3");
    audio.play();
  };

  return (
    <nav aria-label="Loại lịch" className="overflow-x-auto">
      <ul className="mx-auto flex w-fit min-w-full list-none items-end justify-center gap-4 px-2 sm:gap-8 sm:px-4">
        {examScheduleHubTabs.map((tab) => {
          const isActive = tab.href === activeTab.href;

          return (
            <li key={tab.value}>
              <Link
                href={tab.href}
                prefetch
                aria-current={isActive ? "page" : undefined}
                onClick={handlePlayAudio}
                className={cn(
                  "group relative flex min-w-[4.75rem] items-center gap-1 px-1 pb-2.5 sm:min-w-[5.5rem] sm:px-2",
                  !isActive && "opacity-75 hover:opacity-100"
                )}
              >
                {isActive && (
                  <span className="bg-primary absolute bottom-0 left-0 h-[3px] w-full rounded-full" />
                )}

                <Image
                  src={tab.iconSrc}
                  alt=""
                  width={64}
                  height={64}
                  unoptimized
                  className="size-11 object-contain transition-transform duration-200 group-hover:scale-105 sm:size-14"
                />

                <span
                  className={cn(
                    "text-xs whitespace-nowrap sm:text-sm",
                    isActive
                      ? "font-semibold text-zinc-900"
                      : "font-medium text-zinc-500"
                  )}
                >
                  {tab.label}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    "h-0.5 w-full max-w-14 rounded-full transition-colors sm:max-w-16",
                    isActive ? "bg-primary" : "bg-transparent"
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
