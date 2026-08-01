import { cn } from "@/lib/utils";

const MARQUEE_WORD = "VSTEP";
/** Enough copies for a seamless -50% loop on wide screens. */
const REPEAT = 12;

export function HomeBannerMarquee() {
  const track = Array.from({ length: REPEAT }, () => MARQUEE_WORD);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] overflow-hidden py-0"
    >
      <div className="overflow-hidden">
        <div className="banner-vstep-marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {track.map((word, index) => (
                <span
                  key={`${copy}-${word}-${index}`}
                  className={cn(
                    "px-[0.12em] text-7xl leading-none font-black tracking-[-0.06em] italic select-none md:text-8xl lg:text-9xl",
                    index % 2 === 0 ? "text-primary/20" : "text-zinc-300"
                  )}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
