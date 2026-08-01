import { listMarkdownPages } from "@/lib/markdown-pages";

const PAGE_TITLES: Record<string, string> = {
  "gioi-thieu":
    "Giới thiệu VSTEP — kỳ thi đánh giá năng lực tiếng Anh theo khung NLNN 6 bậc",
};

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const lines = [
    "# VSTEP — Trung tâm Chuẩn đầu ra",
    "",
    "> Tài liệu thân thiện với AI. Mỗi trang có bản Markdown tại URL tương ứng thêm đuôi `.md`.",
    "",
    "## Pages",
    "",
    ...listMarkdownPages().map((slug) => {
      const title = PAGE_TITLES[slug] ?? slug;
      return `- [${title}](${origin}/${slug}.md): ${title}`;
    }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
