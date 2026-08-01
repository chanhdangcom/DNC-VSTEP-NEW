"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import {
  homeBannerBody,
  homeBannerRedSubhead,
  homeBannerTitleLines,
} from "../home-banner-data";
import {
  HOME_BANNER_MUTED,
  HOME_BANNER_TITLE_COLORS,
} from "../utils/home-banner-theme";
import { BANNER_EASE } from "../utils/home-banner-motion";

export function HomeBannerContent() {
  const shouldReduceMotion = useShouldReduceMotion();

  function reveal(delay: number) {
    if (shouldReduceMotion) {
      return {};
    }

    return {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.65,
        delay,
        ease: BANNER_EASE,
      },
    };
  }

  const title = homeBannerTitleLines.join("");

  return (
    <div className="relative z-40 mx-auto flex w-full max-w-2xl flex-col items-center space-y-5 pt-3 text-center sm:space-y-6">
      <h1
        lang="vi"
        className="relative z-40 inline-block px-[0.2em] py-[0.08em] text-6xl leading-none font-black tracking-[-0.04em] italic sm:text-7xl md:text-8xl lg:text-9xl"
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            style={{
              color:
                HOME_BANNER_TITLE_COLORS[
                  Math.min(index, HOME_BANNER_TITLE_COLORS.length - 1)
                ],
            }}
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 28, rotate: -4 }
            }
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.55,
              delay: shouldReduceMotion ? 0 : 0.08 + index * 0.07,
              ease: BANNER_EASE,
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="text-primary text-base font-bold tracking-[0.12em] uppercase sm:text-lg"
        {...reveal(0.45)}
      >
        {homeBannerRedSubhead}
      </motion.p>

      <motion.p
        className="max-w-[22rem] text-sm leading-relaxed sm:text-base sm:leading-[1.7]"
        style={{ color: HOME_BANNER_MUTED }}
        {...reveal(0.55)}
      >
        {homeBannerBody}
      </motion.p>

      <motion.div {...reveal(0.65)}>
        <Link
          href="/#lien-he"
          className="group hover:bg-primary-hover bg-primary inline-flex items-center gap-3 rounded-full py-2.5 pr-2.5 pl-6 text-sm font-bold tracking-wide text-white transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
        >
          Đăng ký thi và ôn
          <span
            aria-hidden="true"
            className="inline-flex size-9 items-center justify-center rounded-full bg-white"
          >
            <ArrowRight
              className="text-primary size-4 transition-transform duration-500 group-hover:translate-x-0.5"
              weight="bold"
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
