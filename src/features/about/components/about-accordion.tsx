"use client";

import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import {
  BookOpenText,
  CaretDown,
  CaretRightIcon,
  Headphones,
  Microphone,
  PencilSimpleLine,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useShouldReduceMotion } from "@/hooks/use-should-reduce-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AboutAccordionItem } from "../about-data";

type AboutAccordionProps = {
  items: readonly AboutAccordionItem[];
  className?: string;
  alwaysOpen?: boolean;
};

const ACCORDION_ITEM_ICONS: Record<string, Icon> = {
  nghe: Headphones,
  doc: BookOpenText,
  viet: PencilSimpleLine,
  noi: Microphone,
};

const SKILL_ICON_IMAGES: Record<string, string> = {
  nghe: "/images/skills/listening-svgrepo.svg",
  doc: "/images/skills/reading-noto.svg",
  viet: "/images/skills/writing-svgrepo.svg",
  noi: "/images/skills/speaking-flaticon.png",
};

const accordionItemShellClass =
  "ring-primary/30 overflow-hidden rounded-md  shadow-sm ring-1";

function AboutAccordionBody({
  item,
  className,
}: {
  item: AboutAccordionItem;
  className?: string;
}) {
  if (item.bullets?.length) {
    return (
      <ul className={cn("space-y-2.5", className)}>
        {item.bullets.map((bullet) => (
          <li key={bullet} className="relative pl-6">
            <span className="bg-primary absolute top-2.5 left-0 h-1.5 w-1.5 rounded-full" />
            <span className="text-foreground/90 leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (item.content) {
    return (
      <p className={cn("text-foreground/90 leading-relaxed", className)}>
        {item.content}
      </p>
    );
  }

  return null;
}

function AboutStaticCards({ items, className }: AboutAccordionProps) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-2", className)}>
      {items.map((item) => {
        const iconImage = SKILL_ICON_IMAGES[item.id];
        const ItemIcon = ACCORDION_ITEM_ICONS[item.id];

        return (
          <Card
            key={item.id}
            className="relative flex h-full flex-col overflow-hidden"
          >
            {/* Watermark Icon */}
            {ItemIcon ? (
              <div className="pointer-events-none absolute -right-8 -bottom-8 z-0">
                <ItemIcon
                  weight="fill"
                  className="text-primary size-48 scale-110 -rotate-12 opacity-5"
                />
              </div>
            ) : null}

            <CardHeader className="relative z-10 flex flex-row items-center gap-4 space-y-0">
              {iconImage ? (
                <div className="bg-primary/10 ring-primary/10 flex size-12 shrink-0 items-center justify-center rounded-md p-2.5 ring-1">
                  <Image
                    src={iconImage}
                    alt=""
                    width={40}
                    height={40}
                    className="scale-110 drop-shadow-sm"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
              <CardTitle className="text-primary text-lg">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex-1">
              <AboutAccordionBody item={item} />
            </CardContent>
            {iconImage ? (
              <CardFooter className="border-border/50 relative z-10 border-t pt-4">
                <a
                  href="https://vi.wikipedia.org/wiki/VSTEP#C%E1%BA%A5u_tr%C3%BAc_%C4%91%E1%BB%81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  <span>Xem thêm chi tiết</span>
                  <CaretRightIcon className="size-4 translate-x-1" />
                </a>
              </CardFooter>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}

/** Mobile: native <details> — no height animation. */
function AboutAccordionMobile({ items, className }: AboutAccordionProps) {
  return (
    <div className={cn("space-y-3 lg:hidden", className)}>
      {items.map((item) => {
        const ItemIcon = ACCORDION_ITEM_ICONS[item.id];

        return (
          <details
            key={item.id}
            className={cn("group", accordionItemShellClass)}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex min-w-0 items-center gap-2.5">
                {ItemIcon ? (
                  <ItemIcon
                    weight="fill"
                    className="text-primary pointer-events-none size-5 shrink-0"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="min-w-0 text-sm font-medium text-zinc-950">
                  {item.title}
                </span>
              </span>
              <CaretDown
                weight="bold"
                className="text-primary pointer-events-none size-4 shrink-0 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="border-primary/10 border-t px-6 py-4 text-sm leading-relaxed text-zinc-700">
              <AboutAccordionBody item={item} />
            </div>
          </details>
        );
      })}
    </div>
  );
}

function AboutAccordionDesktop({ items, className }: AboutAccordionProps) {
  return (
    <Accordion className={cn("hidden space-y-3 lg:block", className)}>
      {items.map((item) => {
        const ItemIcon = ACCORDION_ITEM_ICONS[item.id];

        return (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={accordionItemShellClass}
          >
            <AccordionTrigger className="hover:bg-white/50 hover:no-underline">
              <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                {ItemIcon ? (
                  <ItemIcon
                    weight="fill"
                    className="text-primary pointer-events-none size-5 shrink-0 sm:size-[1.35rem]"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="min-w-0 text-sm leading-[1.55] font-medium text-zinc-950 sm:text-base sm:leading-normal">
                  {item.title}
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent>
              <div className="border-primary/10 border-t px-6 py-4 text-sm leading-relaxed text-zinc-700 sm:px-8">
                <AboutAccordionBody item={item} />
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export function AboutAccordion({
  items,
  className,
  alwaysOpen = false,
}: AboutAccordionProps) {
  if (alwaysOpen) {
    return <AboutStaticCards items={items} className={className} />;
  }

  return (
    <>
      <AboutAccordionMobile items={items} className={className} />
      <AboutAccordionDesktop items={items} className={className} />
    </>
  );
}
