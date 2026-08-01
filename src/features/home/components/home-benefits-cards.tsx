"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import type { HomeBenefitCard } from "../home-benefits-cards-data";
import { homeBenefitCards } from "../home-benefits-cards-data";
import {
  BENEFITS_EASE,
  BENEFITS_LIST_REVEAL,
  BENEFITS_VIEWPORT,
} from "../utils/home-benefits-motion";

const CARD_REVEAL = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: BENEFITS_EASE },
  },
} as const;

type BenefitCardProps = {
  card: HomeBenefitCard;
  index: number;
};

function BenefitCard({ card, index }: BenefitCardProps) {
  const shouldReduceMotion = useShouldReduceMotion();

  return (
    <motion.li
      variants={shouldReduceMotion ? undefined : CARD_REVEAL}
      className={cn(
        "group relative flex w-full flex-col overflow-hidden",
        "rounded-[1.35rem] bg-white text-zinc-900",
        "",
        "",
        "h-full pt-6 pb-2 sm:rounded-2xl",
        "lg:col-span-2",
        index === 3 && "lg:col-start-2"
      )}
    >
      <span
        aria-hidden="true"
        className="text-primary/10 pointer-events-none absolute top-2 right-1.5 rotate-180 text-5xl leading-none font-black tracking-[0.2em] uppercase italic [writing-mode:vertical-rl] sm:right-2 sm:text-6xl"
      >
        {card.watermark}
      </span>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="grid flex-1 grid-rows-[auto_auto_1fr] place-items-center gap-4">
          <h3 className="flex min-h-28 max-w-64 flex-col justify-center space-y-1.5 text-center text-pretty sm:min-h-32">
            <span className="block text-4xl leading-[1.2] font-bold tracking-[-0.02em] text-zinc-900 sm:text-4xl">
              {card.titleLead}
            </span>

            <span className="text-primary block text-4xl leading-tight font-bold tracking-[-0.015em] sm:text-4xl">
              {card.titleAccent}
            </span>
          </h3>

          <hr className="w-[72%] border-zinc-200" />

          <div className="flex min-h-36 items-start justify-center">
            <p className="max-w-66 text-center text-sm leading-[1.8] font-medium text-pretty text-zinc-600 sm:max-w-[18rem] sm:leading-[1.85]">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export function HomeBenefitsCards() {
  const shouldReduceMotion = useShouldReduceMotion();

  return (
    <div className="container max-w-7xl space-y-8 px-4 sm:space-y-10 sm:px-6 lg:px-8">
      <motion.ul
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={BENEFITS_VIEWPORT}
        variants={shouldReduceMotion ? undefined : BENEFITS_LIST_REVEAL}
        className="grid auto-rows-fr grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6 lg:gap-4"
      >
        {homeBenefitCards.map((card, index) => (
          <BenefitCard key={card.id} card={card} index={index} />
        ))}
      </motion.ul>
    </div>
  );
}
