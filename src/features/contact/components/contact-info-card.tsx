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
    iconBg: "bg-white text-rose-600",
    iconRing: "ring-rose-100",
    iconShadow: "shadow-sm",
    cardBg: "bg-rose-50/50 hover:bg-rose-50 hover:shadow-rose-500/10",
    cardRing: "ring-black/10",
    titleColor: "text-rose-700",
    watermark: "text-rose-500/5",
    divider: "sm:border-rose-200 dark:sm:border-rose-800",
  },
  sky: {
    iconBg: "bg-white text-sky-600",
    iconRing: "ring-sky-100",
    iconShadow: "shadow-sm",
    cardBg: "bg-sky-50/50 hover:bg-sky-50 hover:shadow-sky-500/10",
    cardRing: "ring-black/10",
    titleColor: "text-sky-700",
    watermark: "text-sky-500/5",
    divider: "sm:border-sky-200 dark:sm:border-sky-800",
  },
  emerald: {
    iconBg: "bg-white text-emerald-600",
    iconRing: "ring-emerald-100",
    iconShadow: "shadow-sm",
    cardBg: "bg-emerald-50/50 hover:bg-emerald-50 hover:shadow-emerald-500/10",
    cardRing: "ring-black/10",
    titleColor: "text-emerald-700",
    watermark: "text-emerald-500/5",
    divider: "sm:border-emerald-200 dark:sm:border-emerald-800",
  },
  amber: {
    iconBg: "bg-white text-amber-600",
    iconRing: "ring-amber-100",
    iconShadow: "shadow-sm",
    cardBg: "bg-amber-50/50 hover:bg-amber-50 hover:shadow-amber-500/10",
    cardRing: "ring-black/10",
    titleColor: "text-amber-700",
    watermark: "text-amber-500/5",
    divider: "sm:border-amber-200 dark:sm:border-amber-800",
  },
  violet: {
    iconBg: "bg-white text-violet-600",
    iconRing: "ring-violet-100",
    iconShadow: "shadow-sm",
    cardBg: "bg-violet-50/50 hover:bg-violet-50 hover:shadow-violet-500/10",
    cardRing: "ring-black/10",
    titleColor: "text-violet-700",
    watermark: "text-violet-500/5",
    divider: "sm:border-violet-200 dark:sm:border-violet-800",
  },
  zinc: {
    iconBg: "bg-white text-zinc-600",
    iconRing: "ring-zinc-200",
    iconShadow: "shadow-sm",
    cardBg: "bg-zinc-50/50 hover:bg-zinc-50 hover:shadow-zinc-500/10",
    cardRing: "ring-black/10",
    titleColor: "text-zinc-700",
    watermark: "text-zinc-500/5",
    divider: "sm:border-zinc-200 dark:sm:border-zinc-800",
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
    <div className="group relative flex h-full flex-col sm:flex-row gap-2 sm:gap-4 rounded-2xl bg-white p-1 shadow-md ring-1 shadow-black/5 ring-black/6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Left Block (Icon & Title) */}
      <div className="flex self-stretch">
        <div
          className={`flex w-full sm:w-[150px] shrink-0 flex-row sm:flex-col items-center sm:justify-center gap-3 sm:gap-2 rounded-xl p-3 ring-1 ring-black/6 transition-colors duration-300 ${v.cardBg}`}
        >
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-inset shadow-sm ${v.iconRing} ${v.titleColor}`}
          >
            {icon}
          </div>
          <p
            className={`m-0 text-sm font-bold tracking-wider uppercase text-center ${v.titleColor}`}
          >
            {title}
          </p>
        </div>
      </div>

      {/* Right Block (Content) */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-4 py-4 sm:px-0 sm:pr-4 overflow-hidden">
        {/* Watermark (moved to right block to not overlap outer ring) */}
        <div
          className={`absolute -right-4 -bottom-6 z-0 -rotate-12 opacity-50 transition-transform duration-500 select-none group-hover:scale-110 ${v.watermark}`}
        >
          {clonedWatermark}
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
