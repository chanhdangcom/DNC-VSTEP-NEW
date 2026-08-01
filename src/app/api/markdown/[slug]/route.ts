import { getMarkdownPage } from "@/lib/markdown-pages";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

function getRequestOrigin(request: Request) {
  const url = new URL(request.url);
  return url.origin;
}

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const markdown = getMarkdownPage(slug, getRequestOrigin(request));

  if (!markdown) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
