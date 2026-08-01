"use client";

import Link from "next/link";
import {
  BellRinging,
  BookBookmark,
  CalendarBlank,
  CalendarPlus,
  Compass,
  FileText,
  GraduationCap,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  examScheduleHubTabs,
  type ExamScheduleHubTabValue,
} from "../exam-schedule-hub-tab-data";
import {
  examScheduleDateSortOptions,
  type ExamScheduleDateSortValue,
} from "../utils/filter-exam-schedule";

type ExamScheduleSidebarPanelProps = {
  activeTab: ExamScheduleHubTabValue;
  query?: string;
  onQueryChange?: (value: string) => void;
  dateSort?: ExamScheduleDateSortValue;
  onDateSortChange?: (value: ExamScheduleDateSortValue) => void;
  searchPlaceholder?: string;
  resultCount?: number;
  className?: string;
};

const TAB_ICONS: Record<string, typeof CalendarBlank> = {
  "lich-thi": CalendarBlank,
  "on-thi": BellRinging,
  "ke-hoach-nam": CalendarPlus,
};

const QUICK_LINKS = [
  { href: "/van-ban/bieu-mau", label: "Biểu mẫu đăng ký", Icon: FileText },
  { href: "/lien-he", label: "Hướng dẫn nộp hồ sơ", Icon: BookBookmark },
  { href: "/gioi-thieu", label: "Quy chế thi VSTEP", Icon: GraduationCap },
] as const;

export function ExamScheduleSidebarPanel({
  activeTab,
  query = "",
  onQueryChange,
  dateSort = "default",
  onDateSortChange,
  searchPlaceholder = "Tìm lịch thi...",
  className,
}: ExamScheduleSidebarPanelProps) {
  const currentSortLabel =
    examScheduleDateSortOptions.find((opt) => opt.value === dateSort)?.label ??
    "Lọc theo ngày...";

  return (
    <div className={cn("w-full shrink-0 lg:w-64", className)}>
      {/* ── Mobile View ── */}
      <div className="bg-card ring-border rounded-2xl p-4 shadow-xs ring-1 lg:hidden">
        <nav aria-label="Danh mục mobile" className="-mx-1 overflow-x-auto">
          <ul className="flex w-max min-w-full gap-2 px-1">
            {examScheduleHubTabs.map((tab) => {
              const isActive = tab.value === activeTab;
              const IconComponent = TAB_ICONS[tab.value] ?? Compass;

              return (
                <li key={tab.value}>
                  <Link
                    href={tab.href}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground font-normal"
                    )}
                  >
                    <IconComponent
                      className="size-4 shrink-0"
                      weight={isActive ? "fill" : "regular"}
                    />
                    {tab.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {onQueryChange ? (
          <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row">
            <div className="relative min-w-0 flex-1">
              <Input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder={searchPlaceholder}
                className="bg-background border-border/80 h-10! w-full rounded-full pr-8 pl-9 text-sm shadow-2xs"
              />
              <MagnifyingGlass className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              {query ? (
                <button
                  type="button"
                  onClick={() => onQueryChange("")}
                  aria-label="Xóa từ khóa tìm kiếm"
                  className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2.5 -translate-y-1/2 rounded-full p-1"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>

            {onDateSortChange ? (
              <div className="min-w-[140px]">
                <Select
                  value={dateSort}
                  onValueChange={(val) =>
                    onDateSortChange(val as ExamScheduleDateSortValue)
                  }
                >
                  <SelectTrigger className="bg-background border-border/80 h-10! w-full rounded-full px-3.5 text-sm shadow-2xs">
                    <SelectValue placeholder="Lọc theo ngày...">
                      {currentSortLabel}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {examScheduleDateSortOptions.map((opt) => (
                      <SelectItem
                        key={opt.value}
                        value={opt.value}
                        label={opt.label}
                      >
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* ── Desktop View (Official Shadcn Sidebar & Controls) ── */}
      <div className="hidden space-y-4 lg:block">
        {/* Search Input & Date Filter Select (Strictly Equal Height h-11!) */}
        {onQueryChange ? (
          <div className="space-y-2.5">
            <div className="relative">
              <Input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder={searchPlaceholder}
                className="border-border/80 bg-card focus-visible:ring-primary/20 h-11! w-full rounded-2xl border pr-8 pl-10 text-sm shadow-2xs transition-colors"
              />
              <MagnifyingGlass className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
              {query ? (
                <button
                  type="button"
                  onClick={() => onQueryChange("")}
                  aria-label="Xóa từ khóa tìm kiếm"
                  className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2.5 -translate-y-1/2 rounded-full p-1"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>

            {onDateSortChange ? (
              <Select
                value={dateSort}
                onValueChange={(val) =>
                  onDateSortChange(val as ExamScheduleDateSortValue)
                }
              >
                <SelectTrigger className="border-border/80 bg-card text-foreground h-11! w-full rounded-2xl border px-3.5 text-sm shadow-2xs transition-colors">
                  <SelectValue placeholder="Lọc theo ngày...">
                    {currentSortLabel}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {examScheduleDateSortOptions.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      label={opt.label}
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : null}
          </div>
        ) : null}

        <SidebarSeparator className="my-3" />

        {/* Shadcn Sidebar Group 1: DANH MỤC */}
        <SidebarGroup className="px-0 py-0">
          <SidebarGroupLabel className="text-muted-foreground/80 px-3 pb-1 text-[0.75rem] font-bold tracking-wider uppercase">
            DANH MỤC
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {examScheduleHubTabs.map((tab) => {
                const isActive = tab.value === activeTab;
                const IconComponent = TAB_ICONS[tab.value] ?? Compass;

                return (
                  <SidebarMenuItem key={tab.value}>
                    <SidebarMenuButton
                      render={<Link href={tab.href} />}
                      isActive={isActive}
                      className={cn(
                        "h-11 rounded-2xl px-4 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary dark:bg-primary/20 dark:text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:bg-muted/80 hover:text-foreground font-normal"
                      )}
                    >
                      <IconComponent
                        className={cn(
                          "size-5 shrink-0 transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )}
                        weight={isActive ? "fill" : "regular"}
                      />
                      <span>{tab.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-3" />

        {/* Shadcn Sidebar Group 2: LIÊN KẾT HỮU ÍCH */}
        <SidebarGroup className="px-0 py-0">
          <SidebarGroupLabel className="text-muted-foreground/80 px-3 pb-1 text-[0.75rem] font-bold tracking-wider uppercase">
            LIÊN KẾT HỮU ÍCH
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {QUICK_LINKS.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    render={<Link href={link.href} />}
                    className="text-muted-foreground hover:bg-muted/80 hover:text-foreground h-11 rounded-2xl px-4 text-sm font-normal transition-all duration-200"
                  >
                    <link.Icon
                      className="text-muted-foreground group-hover:text-foreground size-5 shrink-0 transition-colors"
                      weight="regular"
                    />
                    <span>{link.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>
    </div>
  );
}
