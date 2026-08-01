import Link from "next/link";
import { cn } from "@/lib/utils";
import { homeIntroContent } from "../home-intro-data";
import {
  HOME_INTRO_HEADLINE_GRADIENT,
  HOME_INTRO_QUOTE_ACCENT,
} from "../utils/home-intro-theme";

type HomeIntroContentProps = {
  className?: string;
};

export function HomeIntroContent({ className }: HomeIntroContentProps) {
  return (
    <div className={cn("w-full max-w-6xl space-y-6 sm:space-y-8", className)}>
      <div className="relative pl-5 sm:pl-7 lg:pl-9">
        <span
          aria-hidden="true"
          className="bg-primary absolute top-2 bottom-2 left-0 w-[4px] rounded-full"
        />

        <div className="space-y-2 sm:space-y-3">
          <h2
            className="text-primary text-6xl leading-[0.86] font-black tracking-[-0.04em] italic sm:text-7xl md:text-8xl lg:text-9xl"
            style={{
              background: HOME_INTRO_HEADLINE_GRADIENT,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            {homeIntroContent.headline}
          </h2>

          <p className="text-primary pl-8 text-xl font-bold sm:text-2xl md:text-3xl">
            {homeIntroContent.subheadline}
          </p>
        </div>
      </div>

      <div className="bg-primary border-primary/20 border p-6 shadow-xl sm:p-8 lg:p-10">
        <p className="text-base leading-relaxed font-semibold tracking-tight text-white sm:text-lg md:text-xl lg:text-2xl">
          <span className="text-white/80">&ldquo;</span>
          <span>{homeIntroContent.highlight.intro}</span>
          <span
            className="px-1 font-bold drop-shadow-xs"
            style={{ color: HOME_INTRO_QUOTE_ACCENT }}
          >
            {homeIntroContent.highlight.lead}
          </span>
          <span>{homeIntroContent.highlight.rest}</span>
          <span className="text-white/80">&rdquo;</span>
        </p>
      </div>

      <Link
        href={homeIntroContent.cta.href}
        className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg sm:px-8 sm:py-3.5"
      >
        {homeIntroContent.cta.label}
      </Link>
    </div>
  );
}
