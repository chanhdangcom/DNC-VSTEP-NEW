import Image from "next/image";
import {
  Briefcase,
  ChalkboardTeacher,
  GraduationCap,
  Student,
  BookOpen,
  Certificate,
} from "@phosphor-icons/react/dist/ssr";
import type { AboutFaqSection } from "../about-data";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type AboutFaqBlocksProps = {
  sections: readonly AboutFaqSection[];
};

export function AboutFaqBlocks({ sections }: AboutFaqBlocksProps) {
  // Extract specific sections for bespoke rendering
  const vstepDef = sections.find((s) => s.id === "vstep-la-gi");
  const certDef = sections.find((s) => s.id === "chung-chi-vstep");
  const audience = sections.find((s) => s.id === "chung-chi-can-cho-ai");

  return (
    <div className="space-y-12">
      {/* ── SPLIT LAYOUT: Định nghĩa VSTEP & Chứng chỉ VSTEP ── */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* VSTEP là gì? */}
        {vstepDef && (
          <section id={vstepDef.id} className="scroll-mt-40 space-y-6">
            <Typography
              variant="h2"
              className="text-primary mb-6 border-none text-3xl font-bold sm:text-4xl"
            >
              {vstepDef.title}
            </Typography>
            <div className="space-y-4 text-zinc-600">
              {vstepDef.paragraphs?.map((p, i) => (
                <Typography
                  variant="p"
                  key={i}
                  className={cn(
                    "text-base leading-relaxed sm:text-lg",
                    i === 0 && "font-semibold text-zinc-800"
                  )}
                >
                  {p}
                </Typography>
              ))}
            </div>
          </section>
        )}

        {/* Chứng chỉ VSTEP */}
        {certDef && (
          <section id={certDef.id} className="scroll-mt-40 space-y-6">
            <Typography
              variant="h2"
              className="text-primary mb-6 border-none text-3xl font-bold sm:text-4xl"
            >
              {certDef.title}
            </Typography>
            <div className="space-y-4 text-zinc-600">
              {certDef.paragraphs?.map((p, i) => (
                <Typography
                  variant="p"
                  key={i}
                  className={cn(
                    "text-base leading-relaxed sm:text-lg",
                    i === 0 && "font-semibold text-zinc-800"
                  )}
                >
                  {p}
                </Typography>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── SECTION: Đối tượng (Tinh tế / Refined Glassmorphism) ── */}
      {audience && (
        <section id={audience.id} className="scroll-mt-40 space-y-4">
          <div className="space-y-4">
            <Typography
              variant="h2"
              className="text-primary mb-6 border-none text-3xl font-bold sm:text-4xl"
            >
              {audience.title}
            </Typography>

            <Typography
              variant="p"
              className="text-muted-foreground text-base leading-relaxed sm:text-lg"
            >
              Chứng chỉ VSTEP là chuẩn mực đánh giá năng lực ngoại ngữ uy tín,
              đáp ứng nhu cầu thiết yếu cho nhiều nhóm đối tượng trên toàn quốc.
            </Typography>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(280px,auto)] lg:grid-cols-3">
            {audience.bullets?.map((item, index) => {
              const AUDIENCE_DATA = [
                {
                  tag: "Đại học & Cao đẳng",
                  icon: Student,
                  image: "/images/banner/tan-sinh-vien.jpg",
                  fitMode: "object-cover object-[center_15%]",
                },
                {
                  tag: "Sau đại học",
                  icon: GraduationCap,
                  image: "/images/banner/thacsi.png",
                  fitMode: "object-cover object-center",
                },
                {
                  tag: "Giáo viên ngoại ngữ",
                  icon: ChalkboardTeacher,
                  image: "/images/banner/NTL_3773-scaled.jpg",
                  fitMode: "object-cover",
                },
                {
                  tag: "Cán bộ & Doanh nghiệp",
                  icon: Briefcase,
                  image: "/images/banner/nguoi-di-lam.webp",
                  fitMode: "object-cover",
                },
              ];

              const data = AUDIENCE_DATA[index] ?? AUDIENCE_DATA[0]!;
              const Icon = data.icon;

              // Staggered 3-column Bento Grid Layout
              const BENTO_CLASSES = [
                "lg:col-span-2 lg:row-span-1", // 0: Wide Top Left
                "lg:col-span-1 lg:row-span-2", // 1: Tall Right
                "lg:col-span-1 lg:row-span-1", // 2: Square Bottom Left
                "lg:col-span-1 lg:row-span-1", // 3: Square Bottom Middle
              ];
              const bentoClass = BENTO_CLASSES[index] || "";

              return (
                <div
                  key={item}
                  className={cn(
                    "group relative flex min-h-[240px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:min-h-[280px] lg:min-h-0",
                    bentoClass
                  )}
                >
                  {/* Absolute Fill Image Area */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={data.image}
                      alt={item}
                      fill
                      className={cn(
                        "transition-transform duration-700 group-hover:scale-105",
                        data.fitMode
                      )}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Floating Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-md">
                    <Icon weight="duotone" className="size-6" />

                    <span>{data.tag}</span>
                  </div>

                  {/* Title Content Area (Absolute Bottom) */}
                  <div className="absolute bottom-0 left-0 z-20 flex w-full p-5 sm:p-6 lg:p-8">
                    {/* Watermark Icon */}
                    <Icon
                      weight="fill"
                      className="absolute -right-4 -bottom-4 z-0 size-32 -rotate-12 text-white/10 transition-transform duration-500 group-hover:scale-110"
                    />

                    <h4 className="relative z-10 text-xl leading-snug font-bold whitespace-pre-line text-white drop-shadow-md sm:text-xl">
                      {item}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
