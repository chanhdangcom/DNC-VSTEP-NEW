"use client";

import Link from "next/link";
import {
  FileText,
  MagnifyingGlass,
  Scales,
  X,
  FileDoc,
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
  documentSectionAnchors,
  documentsHubTabs,
  type DocumentsHubTabValue,
} from "../documents-hub-data";
import {
  documentDateSortOptions,
  type DocumentDateSortValue,
} from "./document-top-search";

type DocumentsSidebarPanelProps = {
  activeTab: DocumentsHubTabValue;
  showSectionAnchors?: boolean;
  query?: string;
  onQueryChange?: (value: string) => void;
  dateSort?: DocumentDateSortValue;
  onDateSortChange?: (value: DocumentDateSortValue) => void;
  searchPlaceholder?: string;
  showDateSort?: boolean;
  resultCount?: number;
  className?: string;
};

const TAB_ICONS: Record<string, typeof FileText> = {
  "bieu-mau": FileText,
  "phap-quy": Scales,
};

export function DocumentsSidebarPanel({
  activeTab,
  showSectionAnchors = false,
  query = "",
  onQueryChange,
  dateSort = "default",
  onDateSortChange,
  searchPlaceholder = "Tìm kiếm văn bản…",
  showDateSort = true,
  className,
}: DocumentsSidebarPanelProps) {
  const currentSortLabel =
    documentDateSortOptions.find((opt) => opt.value === dateSort)?.label ??
    "Lọc theo ngày...";

  return (
    <SidebarProvider className="min-h-0 w-full flex-col bg-transparent">
      <aside className={cn("w-full shrink-0 space-y-4 lg:w-64", className)}>
        {/* ── Mobile View ── */}
        <div className="bg-card ring-border space-y-3 rounded-2xl p-4 shadow-xs ring-1 lg:hidden">
          <nav
            aria-label="Loại văn bản mobile"
            className="-mx-1 overflow-x-auto"
          >
            <ul className="flex w-max min-w-full gap-2 px-1 pb-1">
              {documentsHubTabs.map((tab) => {
                const isActive = tab.value === activeTab;
                const IconComponent = TAB_ICONS[tab.value] ?? FileText;

                return (
                  <li key={tab.value}>
                    <Link
                      href={tab.href}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-red-50 font-semibold text-red-600 dark:bg-red-950/50 dark:text-red-400"
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
            <div className="flex flex-col gap-2.5 sm:flex-row">
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

              {showDateSort && onDateSortChange ? (
                <div className="min-w-[140px]">
                  <Select
                    value={dateSort}
                    onValueChange={(val) =>
                      onDateSortChange(val as DocumentDateSortValue)
                    }
                  >
                    <SelectTrigger className="bg-background border-border/80 h-10! w-full rounded-full px-3.5 text-sm shadow-2xs">
                      <SelectValue placeholder="Lọc theo ngày...">
                        {currentSortLabel}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {documentDateSortOptions.map((opt) => (
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
          {/* Search Input & Date Filter Select */}
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

              {showDateSort && onDateSortChange ? (
                <Select
                  value={dateSort}
                  onValueChange={(val) =>
                    onDateSortChange(val as DocumentDateSortValue)
                  }
                >
                  <SelectTrigger className="border-border/80 bg-card text-foreground h-11! w-full rounded-2xl border px-3.5 text-sm shadow-2xs transition-colors">
                    <SelectValue placeholder="Lọc theo ngày...">
                      {currentSortLabel}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {documentDateSortOptions.map((opt) => (
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
                {documentsHubTabs.map((tab) => {
                  const isActive = tab.value === activeTab;
                  const IconComponent = TAB_ICONS[tab.value] ?? FileText;

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

          {showSectionAnchors ? (
            <>
              <SidebarSeparator className="my-3" />
              <SidebarGroup className="px-0 py-0">
                <SidebarGroupLabel className="text-muted-foreground/80 px-3 pb-1 text-[0.75rem] font-bold tracking-wider uppercase">
                  DANH MỤC BIỂU MẪU
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-1">
                    {documentSectionAnchors.map((section) => (
                      <SidebarMenuItem key={section.id}>
                        <SidebarMenuButton
                          render={<a href={`#${section.id}`} />}
                          className="text-muted-foreground hover:bg-muted/80 hover:text-foreground h-11 rounded-2xl px-4 text-sm font-normal transition-all duration-200"
                        >
                          <FileDoc
                            className="text-muted-foreground group-hover:text-foreground size-5 shrink-0 transition-colors"
                            weight="regular"
                          />
                          <span>{section.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </>
          ) : null}
        </div>
      </aside>
    </SidebarProvider>
  );
}
