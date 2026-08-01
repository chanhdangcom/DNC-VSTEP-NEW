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
      {/* ── SIMPLE TEXT: Định nghĩa VSTEP ── */}
      <div className="space-y-12">
        {/* VSTEP là gì? */}
        {vstepDef && (
          <section id={vstepDef.id} className="scroll-mt-40 space-y-4">
            <Typography variant="h3" className="text-primary">
              {vstepDef.title}
            </Typography>
            <div className="text-muted-foreground">
              {vstepDef.paragraphs?.map((p, i) => (
                <Typography variant="p" key={i}>
                  {p}
                </Typography>
              ))}
            </div>
          </section>
        )}

        {/* Chứng chỉ VSTEP là gì? */}
        {certDef && (
          <section id={certDef.id} className="scroll-mt-40 space-y-4">
            <Typography variant="h3" className="text-primary">
              {certDef.title}
            </Typography>
            <div className="text-muted-foreground">
              {certDef.paragraphs?.map((p, i) => (
                <Typography variant="p" key={i}>
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
            <Typography variant="h3" className="text-primary">
              {audience.title}
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Chứng chỉ VSTEP là chuẩn mực đánh giá năng lực ngoại ngữ uy tín,
              đáp ứng nhu cầu thiết yếu cho nhiều nhóm đối tượng trên toàn quốc.
            </Typography>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.bullets?.map((item, index) => {
              const AUDIENCE_DATA = [
                {
                  tag: "Đại học & Cao đẳng",
                  icon: Student,
                  image: "/images/banner/tan-sinh-vien-removebg-preview.png",
                  fitMode: "object-cover",
                },
                {
                  tag: "Sau đại học",
                  icon: GraduationCap,
                  image: "/images/banner/tiensi-removebg-preview.png",
                  fitMode: "object-cover object-top",
                },
                {
                  tag: "Giáo viên ngoại ngữ",
                  icon: ChalkboardTeacher,
                  image: "/images/banner/NTL_3773-scaled-removebg-preview.png",
                  fitMode: "object-cover",
                },
                {
                  tag: "Cán bộ & Doanh nghiệp",
                  icon: Briefcase,
                  image:
                    "/images/banner/tieng-anh-cong-so-3-scaled-1-removebg-preview.png",
                  fitMode: "object-cover",
                },
              ];

              const data = AUDIENCE_DATA[index] ?? AUDIENCE_DATA[0]!;
              const Icon = data.icon;

              return (
                <div
                  key={item}
                  className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
                >
                  {/* Full-width Image Area (Edge-to-Edge) */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden border-b border-zinc-100 bg-zinc-50/60">
                    {/* Floating Glassmorphism Badge */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
                      <Icon weight="duotone" className="size-4" />
                      <span>{data.tag}</span>
                    </div>

                    {/* Image with zoom on hover */}
                    <div className="relative size-full transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={data.image}
                        alt={item}
                        fill
                        className={cn(data.fitMode)}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  </div>

                  {/* Title Content Area */}
                  <div className="relative z-10 flex flex-1 items-center justify-center p-5 text-center sm:p-6">
                    {/* Watermark Icon */}
                    <Icon
                      weight="fill"
                      className="pointer-events-none absolute -bottom-4 -right-4 z-0 size-28 -rotate-12 text-primary/5 transition-transform duration-500 group-hover:scale-110"
                    />

                    <h4 className="relative z-10 text-base font-bold leading-snug text-zinc-900 transition-colors group-hover:text-primary sm:text-lg">
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
