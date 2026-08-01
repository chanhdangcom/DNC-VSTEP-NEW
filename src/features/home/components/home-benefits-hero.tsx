"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import { homeBenefitsHero } from "../home-benefits-data";
import { BENEFITS_EASE, BENEFITS_STAGGER } from "../utils/home-benefits-motion";

const HERO_IMAGE = "/images/banner/NTL_3773-scaled.jpg";

export function HomeBenefitsHero() {
  const shouldReduceMotion = useShouldReduceMotion();
  const [displayPrefix, ...displayLevels] = homeBenefitsHero.display.split(" ");

  function reveal(delayStep: number) {
    if (shouldReduceMotion) {
      return {};
    }

    return {
      initial: { opacity: 0, y: 32 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.8,
        delay: delayStep * BENEFITS_STAGGER,
        ease: BENEFITS_EASE,
      },
    };
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[64vh] min-h-120 w-full lg:h-[72vh]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          aria-hidden="true"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-zinc-900/70 via-zinc-900/30 to-zinc-900/40"
        />

        {/* <div
          aria-hidden="true"
          className="bg-primary/70 absolute inset-y-0 left-0 hidden w-14 items-center justify-center lg:flex"
        >
          <span className="rotate-180 text-xs font-bold tracking-[0.4em] text-white/90 uppercase [writing-mode:vertical-rl]">
            Lợi ích chứng chỉ VSTEP
          </span>
        </div> */}

        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-10 lg:pb-14">
          <div className="container max-w-7xl space-y-3 px-4 sm:space-y-5 sm:px-6 lg:px-8">
            <motion.span
              {...reveal(0)}
              className="bg-primary/70 inline-flex w-fit items-center px-4 py-1.5 text-xs font-bold tracking-[0.28em] text-white uppercase sm:text-sm"
            >
              {homeBenefitsHero.tag}
            </motion.span>

            <motion.p
              {...reveal(1)}
              className="text-5xl leading-[0.95] font-semibold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {homeBenefitsHero.displayLead}
            </motion.p>

            <motion.h2
              {...reveal(2)}
              className="w-full text-5xl leading-tight font-bold tracking-tight text-balance text-zinc-50 sm:text-5xl lg:absolute lg:-bottom-14 lg:w-auto lg:text-left lg:text-9xl lg:leading-[0.85] lg:font-black lg:tracking-[-0.02em] lg:uppercase"
            >
              <span className="block lg:inline">{displayPrefix}</span>
              <span className="block whitespace-nowrap lg:ml-[0.25em] lg:inline">
                {displayLevels.join(" ")}
              </span>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="container hidden h-14 max-w-7xl px-4 sm:px-6 lg:block lg:px-8" />
    </section>
  );
}
