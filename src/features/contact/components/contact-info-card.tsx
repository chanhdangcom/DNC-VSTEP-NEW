import React from "react";
import { Typography } from "@/components/ui/typography";

export type ContactInfoCardProps = {
  icon: React.ReactNode;
  watermarkIcon?: React.ReactNode;
  title: string;
  variant: "rose" | "sky" | "emerald" | "amber" | "violet" | "zinc";
  children: React.ReactNode;
};

const variants = {
  rose: {
    iconBg: "bg-rose-100 text-rose-700",
    iconRing: "ring-rose-200",
    iconShadow: "shadow-none",
    cardBg:
      "bg-white bg-gradient-to-br from-white to-rose-100/40 hover:to-rose-100 hover:shadow-rose-500/10",
    cardRing: "ring-rose-300/60",
    titleColor: "text-rose-700",
    watermark: "text-rose-500/5",
    divider: "sm:border-rose-300 dark:sm:border-rose-800",
  },
  sky: {
    iconBg: "bg-sky-100 text-sky-700",
    iconRing: "ring-sky-200",
    iconShadow: "shadow-none",
    cardBg:
      "bg-white bg-gradient-to-br from-white to-sky-100/40 hover:to-sky-100 hover:shadow-sky-500/10",
    cardRing: "ring-sky-300/60",
    titleColor: "text-sky-700",
    watermark: "text-sky-500/5",
    divider: "sm:border-sky-300 dark:sm:border-sky-800",
  },
  emerald: {
    iconBg: "bg-emerald-100 text-emerald-700",
    iconRing: "ring-emerald-200",
    iconShadow: "shadow-none",
    cardBg:
      "bg-white bg-gradient-to-br from-white to-emerald-100/40 hover:to-emerald-100 hover:shadow-emerald-500/10",
    cardRing: "ring-emerald-300/60",
    titleColor: "text-emerald-700",
    watermark: "text-emerald-500/5",
    divider: "sm:border-emerald-300 dark:sm:border-emerald-800",
  },
  amber: {
    iconBg: "bg-amber-100 text-amber-700",
    iconRing: "ring-amber-200",
    iconShadow: "shadow-none",
    cardBg:
      "bg-white bg-gradient-to-br from-white to-amber-100/40 hover:to-amber-100 hover:shadow-amber-500/10",
    cardRing: "ring-amber-300/60",
    titleColor: "text-amber-700",
    watermark: "text-amber-500/5",
    divider: "sm:border-amber-300 dark:sm:border-amber-800",
  },
  violet: {
    iconBg: "bg-violet-100 text-violet-700",
    iconRing: "ring-violet-200",
    iconShadow: "shadow-none",
    cardBg:
      "bg-white bg-gradient-to-br from-white to-violet-100/40 hover:to-violet-100 hover:shadow-violet-500/10",
    cardRing: "ring-violet-300/60",
    titleColor: "text-violet-700",
    watermark: "text-violet-500/5",
    divider: "sm:border-violet-300 dark:sm:border-violet-800",
  },
  zinc: {
    iconBg: "bg-zinc-200 text-zinc-800",
    iconRing: "ring-zinc-300",
    iconShadow: "shadow-none",
    cardBg:
      "bg-white bg-gradient-to-br from-white to-zinc-100 hover:to-zinc-200/80 hover:shadow-zinc-500/5",
    cardRing: "ring-zinc-300/60",
    titleColor: "text-zinc-800",
    watermark: "text-zinc-500/5",
    divider: "sm:border-zinc-300 dark:sm:border-zinc-700",
  },
};

export function ContactInfoCard({
  icon,
  watermarkIcon,
  title,
  variant,
  children,
}: ContactInfoCardProps) {
  const v = variants[variant];

  const actualWatermark = watermarkIcon || icon;
  const clonedWatermark = React.isValidElement(actualWatermark)
    ? React.cloneElement(actualWatermark as React.ReactElement<any>, {
        className: "size-56",
      })
    : null;

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl px-5 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${v.cardBg} ${v.cardRing}`}
    >
      {/* Watermark */}
      <div
        className={`absolute -right-8 -bottom-10 z-0 -rotate-12 select-none ${v.watermark}`}
      >
        {clonedWatermark}
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        <div className="flex items-center gap-3 pt-4 sm:w-[150px] sm:shrink-0 sm:py-4 sm:pr-6">
          <div
            className={`flex size-9 shrink-0 items-center justify-center rounded-full shadow-sm ring-1 ring-inset ${v.iconBg} ${v.iconRing} ${v.iconShadow}`}
          >
            {icon}
          </div>
          <p
            className={`m-0 text-sm font-bold tracking-wider uppercase ${v.titleColor}`}
          >
            {title}
          </p>
        </div>
        <div
          className={`flex flex-1 flex-col justify-center pb-4 sm:border-l sm:border-dashed sm:py-4 sm:pl-6 ${v.divider}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
