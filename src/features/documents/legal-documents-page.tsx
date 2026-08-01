"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useDeferredValue, useMemo, useState } from "react";
import {
  PageHubShell,
  type PageBannerProps,
  type PageBreadcrumbItem,
} from "@/features/page-shell";
import { LegalDocumentCard } from "./components/legal-document-card";
import { DocumentsSidebarPanel } from "./components/documents-sidebar-panel";
import { legalDocumentItems } from "./legal-documents-data";
import { filterLegalDocumentItems } from "./utils/filter-documents";

type LegalDocumentsPageProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
};

export function LegalDocumentsPage({
  banner,
  breadcrumbs,
}: LegalDocumentsPageProps) {
  return (
    <Suspense fallback={null}>
      <LegalDocumentsPageContent banner={banner} breadcrumbs={breadcrumbs} />
    </Suspense>
  );
}

function LegalDocumentsPageContent({
  banner,
  breadcrumbs,
}: LegalDocumentsPageProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const deferredQuery = useDeferredValue(query);

  const filteredItems = useMemo(() => {
    return filterLegalDocumentItems(legalDocumentItems, deferredQuery);
  }, [deferredQuery]);

  return (
    <PageHubShell
      banner={banner}
      breadcrumbs={breadcrumbs}
      sidebar={
        <DocumentsSidebarPanel
          activeTab="phap-quy"
          query={query}
          onQueryChange={setQuery}
          showDateSort={false}
          searchPlaceholder="Tìm văn bản pháp quy, thông tư, quyết định…"
          resultCount={filteredItems.length}
        />
      }
    >
      <div>
        {filteredItems.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredItems.map((item) => (
              <li key={item.id} className="h-full min-h-0">
                <LegalDocumentCard item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-10 text-center text-sm text-zinc-600">
            Không tìm thấy văn bản pháp quy phù hợp.
          </p>
        )}
      </div>
    </PageHubShell>
  );
}
