import {
  aboutExamFormatSection,
  aboutFaqSections,
  aboutFrameworkSection,
  aboutScoreSection,
} from "./about-data";

function capabilityMatrixMarkdown() {
  const { levels, capabilities, categoryLabel } = aboutFrameworkSection;
  const header = `| ${categoryLabel} | ${levels.map((level) => level.label).join(" | ")} |`;
  const separator = `| --- | ${levels.map(() => ":---:").join(" | ")} |`;
  const cefrRow = `| CEFR | ${levels.map((level) => level.cefr).join(" | ")} |`;
  const rows = capabilities.map((capability) => {
    const checks = levels
      .map((_, index) => (index >= capability.fromLevel ? "✓" : ""))
      .join(" | ");
    return `| ${capability.label} | ${checks} |`;
  });

  return [header, separator, cefrRow, ...rows].join("\n");
}

/**
 * AI-friendly Markdown for /gioi-thieu.md (Mintlify-style alternate representation).
 */
export function buildAboutMarkdown(siteOrigin?: string) {
  const origin = siteOrigin?.replace(/\/$/, "") ?? "";
  const llmsUrl = origin ? `${origin}/llms.txt` : "/llms.txt";
  const htmlUrl = origin ? `${origin}/gioi-thieu` : "/gioi-thieu";

  const faqBlocks = aboutFaqSections
    .map((section) => {
      const parts: string[] = [...(section.paragraphs ?? [])];

      if (section.bullets?.length) {
        parts.push(section.bullets.map((item) => `- ${item}`).join("\n"));
      }

      return `## ${section.title}\n\n${parts.join("\n\n")}`;
    })
    .join("\n\n");

  const scoreRows = aboutScoreSection.rows
    .map((row) => `| ${row.score} | ${row.level} | ${row.bullets.join("; ")} |`)
    .join("\n");

  const examBlocks = aboutExamFormatSection.items
    .map((item) => {
      const bullets = (item.bullets ?? [])
        .map((bullet) => `- ${bullet}`)
        .join("\n");
      return `### ${item.title}\n\n${bullets}`;
    })
    .join("\n\n");

  return `> ## Documentation Index
>
> Fetch the complete documentation index at: ${llmsUrl}
> Use this file to discover all available pages before exploring further.

# Giới thiệu VSTEP

> Trang giới thiệu kỳ thi đánh giá năng lực tiếng Anh VSTEP theo Khung NLNN 6 bậc dành cho Việt Nam.

Trang HTML: ${htmlUrl}

${faqBlocks}

## ${aboutFrameworkSection.title}

Bảng so sánh năng lực theo bậc (✓ = đạt từ bậc đó trở lên):

${capabilityMatrixMarkdown()}

## ${aboutScoreSection.title}

| Điểm | Bậc | Mô tả |
| --- | --- | --- |
${scoreRows}

## ${aboutExamFormatSection.title}

${examBlocks}
`;
}
