import {
  aboutFaqSections,
  aboutFrameworkLadder,
  aboutExamFormatSection,
  aboutScoreSection,
} from "../about-data";
import { AboutFaqBlocks } from "./about-faq-blocks";
import { AboutFrameworkLadder } from "./about-framework-ladder";
import { AboutScoreTable } from "./about-score-table";
import { AboutExamPaper } from "./about-exam-paper";

export function AboutContent() {
  return (
    <div className="mx-auto space-y-12 sm:space-y-14 lg:space-y-28">
      <AboutFaqBlocks sections={aboutFaqSections} />

      <div className="to-primary relative left-1/2 flex w-screen -translate-x-1/2 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#8a0000] via-[#5a0000] py-20 sm:py-24">
        {/* ── Họa tiết trang trí phá cách: Typography & Diagonal Lines ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Chữ VSTEP khổng lồ mờ nhạt (Watermark) */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            <span className="pointer-events-none text-[20rem] leading-none font-black tracking-tighter text-white/[0.02] md:text-[30rem] lg:text-[40rem]">
              VSTEP
            </span>
          </div>

          {/* Các đường line chéo (Diagonal slashes) */}
          <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[150%] w-[4px] rotate-[35deg] bg-white/5 blur-[1px]" />
          <div className="pointer-events-none absolute -top-[20%] right-[10%] h-[150%] w-[2px] rotate-[35deg] bg-white/5" />
          <div className="pointer-events-none absolute top-[40%] -right-[5%] h-[150%] w-[6px] rotate-[35deg] bg-white/[0.02] blur-[2px]" />
        </div>

        <div className="mx-auto w-full">
          <AboutFrameworkLadder
            id={aboutFrameworkLadder.id}
            title={aboutFrameworkLadder.title}
            levels={aboutFrameworkLadder.levels}
            vstepRange={aboutFrameworkLadder.vstepRange}
          />
        </div>
      </div>

      <AboutScoreTable
        id={aboutScoreSection.id}
        title={aboutScoreSection.title}
        rows={aboutScoreSection.rows}
      />

      <AboutExamPaper
        id={aboutExamFormatSection.id}
        title={aboutExamFormatSection.title}
        items={aboutExamFormatSection.items}
      />
    </div>
  );
}
