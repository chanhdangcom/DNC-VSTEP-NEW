"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useDeferredValue, useMemo, useState } from "react";
import {
  PageHubShell,
  type PageBannerProps,
  type PageBreadcrumbItem,
} from "@/features/page-shell";
import { DocumentFormCard } from "./components/document-form-card";
import { DocumentsSidebarPanel } from "./components/documents-sidebar-panel";
import type { DocumentDateSortValue } from "./components/document-top-search";
import { documentFormItems, type DocumentCategory } from "./documents-data";
import type { DocumentsHubTabValue } from "./documents-hub-data";
import {
  filterDocumentFormItems,
  sortDocumentFormItems,
} from "./utils/filter-documents";

const documentSections = [
  { category: "process", title: "Quy trình", id: "quy-trinh" },
  { category: "guide", title: "Hướng dẫn", id: "huong-dan" },
  { category: "form", title: "Biểu mẫu", id: "bieu-mau" },
] as const satisfies readonly {
  category: DocumentCategory;
  title: string;
  id: string;
}[];

type DocumentsPageProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
  activeTab: DocumentsHubTabValue;
};

export function DocumentsPage({
  banner,
  breadcrumbs,
  activeTab,
}: DocumentsPageProps) {
  return (
    <Suspense fallback={null}>
      <DocumentsPageContent
        banner={banner}
        breadcrumbs={breadcrumbs}
        activeTab={activeTab}
      />
    </Suspense>
  );
}

function DocumentsPageContent({
  banner,
  breadcrumbs,
  activeTab,
}: DocumentsPageProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const [dateSort, setDateSort] = useState<DocumentDateSortValue>("default");

  const deferredQuery = useDeferredValue(query);

  const filteredItems = useMemo(() => {
    const filtered = filterDocumentFormItems(documentFormItems, deferredQuery);
    return sortDocumentFormItems(filtered, dateSort);
  }, [deferredQuery, dateSort]);

  const hasAnyItems = filteredItems.length > 0;

  return (
    <PageHubShell
      banner={banner}
      breadcrumbs={breadcrumbs}
      sidebar={
        <DocumentsSidebarPanel
          activeTab={activeTab}
          showSectionAnchors
          query={query}
          onQueryChange={setQuery}
          dateSort={dateSort}
          onDateSortChange={setDateSort}
          searchPlaceholder="Tìm văn bản, quy trình, biểu mẫu…"
          resultCount={filteredItems.length}
        />
      }
    >
      <div className="space-y-6 sm:space-y-8">
        {hasAnyItems ? (
          documentSections.map((section) => {
            const sectionItems = filteredItems.filter(
              (item) => item.category === section.category
            );

            if (sectionItems.length === 0) return null;

            return (
              <section
                key={section.category}
                id={section.id}
                className="scroll-mt-28 space-y-3.5"
              >
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
                  {section.title}
                </h2>

                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {sectionItems.map((item) => (
                    <li key={item.id} className="h-full min-h-0">
                      <DocumentFormCard item={item} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })
        ) : (
          <p className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-10 text-center text-sm text-zinc-600">
            Không tìm thấy văn bản, biểu mẫu phù hợp.
          </p>
        )}
      </div>
    </PageHubShell>
  );
}
