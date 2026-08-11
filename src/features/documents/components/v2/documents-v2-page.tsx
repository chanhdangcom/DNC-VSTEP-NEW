"use client";

import { useSearchParams } from "next/navigation";
import { useState, useDeferredValue, useMemo } from "react";
import {
  PageHubShell,
  type PageBannerProps,
  type PageBreadcrumbItem,
} from "@/features/page-shell";
import { documentFormItems, type DocumentCategory } from "../../documents-data";
import { sortDocumentFormItems } from "../../utils/filter-documents";
import type { DocumentDateSortValue } from "../document-top-search";
import { DocumentFormCard } from "../document-form-card";

const documentSections = [
  { category: "process", title: "Quy trình", id: "quy-trinh" },
  { category: "guide", title: "Hướng dẫn", id: "huong-dan" },
  { category: "form", title: "Biểu mẫu", id: "bieu-mau" },
] as const satisfies readonly {
  category: DocumentCategory;
  title: string;
  id: string;
}[];

type DocumentsV2PageProps = {
  banner: PageBannerProps;
  breadcrumbs?: readonly PageBreadcrumbItem[];
};

export function DocumentsV2Page({ banner, breadcrumbs }: DocumentsV2PageProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [dateSort, setDateSort] = useState<DocumentDateSortValue>("default");

  const deferredQuery = useDeferredValue(query);

  const filteredItems = useMemo(() => {
    let result = documentFormItems;

    // Filter by search query
    const normalized = deferredQuery.trim().toLowerCase();
    if (normalized) {
      result = result.filter((item) => {
        const haystack = [item.title, item.description, item.category]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalized);
      });
    }

    // Sort
    return sortDocumentFormItems(result, dateSort);
  }, [deferredQuery, dateSort]);

  const hasAnyItems = filteredItems.length > 0;

  return (
    <PageHubShell banner={banner} breadcrumbs={breadcrumbs}>
      <div className="mx-auto flex w-full flex-col gap-8">
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
                  className="scroll-mt-28 space-y-4"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                    {section.title}
                  </h2>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {sectionItems.map((item) => (
                      <div key={item.id} className="h-full min-h-0">
                        <DocumentFormCard item={item} />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })
          ) : (
            <p className="rounded-2xl border border-dashed border-zinc-300 bg-white/50 px-6 py-24 text-center text-sm font-medium text-zinc-600">
              Không tìm thấy văn bản, biểu mẫu phù hợp.
            </p>
          )}
        </div>
      </div>
    </PageHubShell>
  );
}
