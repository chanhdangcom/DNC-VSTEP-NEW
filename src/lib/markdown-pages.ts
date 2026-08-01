import { buildAboutMarkdown } from "@/features/about/about-markdown";

const MARKDOWN_PAGES: Record<string, (origin?: string) => string> = {
  "gioi-thieu": buildAboutMarkdown,
};

export function getMarkdownPage(slug: string, origin?: string) {
  const builder = MARKDOWN_PAGES[slug];
  if (!builder) {
    return null;
  }

  return builder(origin);
}

export function listMarkdownPages() {
  return Object.keys(MARKDOWN_PAGES);
}
