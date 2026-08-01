import type { DocumentFormItem } from "../documents-data";
import type { LegalDocumentItem } from "../legal-documents-data";
import type { DocumentDateSortValue } from "../components/document-top-search";

function parseDocumentDate(dateStr: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.split(".").map(Number);
  if (parts.length !== 3) return 0;
  const [day, month, year] = parts;
  return new Date(year, month - 1, day).getTime();
}

export function filterDocumentFormItems(
  items: readonly DocumentFormItem[],
  query: string
): DocumentFormItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [...items];

  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.fileType.toLowerCase().includes(normalizedQuery)
  );
}

export function sortDocumentFormItems(
  items: readonly DocumentFormItem[],
  sort: DocumentDateSortValue
): DocumentFormItem[] {
  if (sort === "default") return [...items];

  return [...items].sort((a, b) => {
    const timeA = parseDocumentDate(a.date);
    const timeB = parseDocumentDate(b.date);

    if (sort === "newest") {
      return timeB - timeA;
    }
    return timeA - timeB;
  });
}

export function filterLegalDocumentItems(
  items: readonly LegalDocumentItem[],
  query: string
): LegalDocumentItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [...items];

  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      (item.reference && item.reference.toLowerCase().includes(normalizedQuery))
  );
}
