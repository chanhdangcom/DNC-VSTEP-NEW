import type { Icon } from "@phosphor-icons/react";
import {
  BookOpenText,
  Certificate,
  Medal,
  Trophy,
  CheckCircle,
  XCircle,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import type { AboutScoreRow } from "../about-data";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AboutScoreTableProps = {
  id: string;
  title: string;
  rows: readonly AboutScoreRow[];
};

const SCORE_ICONS: Record<string, Icon> = {
  "duoi-4": BookOpenText,
  "bac-3": Certificate,
  "bac-4": Medal,
  "bac-5": Trophy,
};

export function AboutScoreTable({ id, title, rows }: AboutScoreTableProps) {
  return (
    <section id={id} className="scroll-mt-40">
      <div className="">
        <Typography
          variant="h2"
          className="text-primary mb-12 border-none text-center text-3xl font-bold sm:text-4xl"
        >
          {title}
        </Typography>

        <div className="mx-auto w-full">
          {/* SaaS Pricing Tier Layout */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-center">
            {rows.map((row) => {
              const ScoreIcon = SCORE_ICONS[row.id] ?? Certificate;
              const isBasic = row.id === "duoi-4";
              const isPopular = row.id === "bac-4";
              const isPremium = row.id === "bac-5";

              return (
                <div
                  key={row.id}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
                    isPopular
                      ? "ring-primary to-primary/[0.02] bg-gradient-to-b from-white shadow-lg xl:z-10 xl:h-[105%]"
                      : "hover:ring-primary/40 ring-black/10",
                    isBasic && "opacity-90 hover:opacity-100",
                    isPremium &&
                      "bg-gradient-to-b from-white to-amber-50/30 ring-amber-400"
                  )}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="bg-primary absolute inset-x-0 top-0 flex h-8 items-center justify-center text-xs font-bold tracking-widest text-white uppercase">
                      Phổ biến nhất
                    </div>
                  )}
                  {/* Premium Badge */}
                  {isPremium && (
                    <div className="absolute inset-x-0 top-0 flex h-8 items-center justify-center bg-amber-400 text-xs font-bold tracking-widest text-amber-950 uppercase">
                      Chuyên gia
                    </div>
                  )}

                  <div
                    className={cn(
                      "flex flex-1 flex-col p-6 sm:p-8",
                      (isPopular || isPremium) && "pt-12 sm:pt-16"
                    )}
                  >
                    {/* Header */}
                    <div className="mb-6 flex flex-col items-center border-b border-zinc-100 pb-6 text-center">
                      <div
                        className={cn(
                          "mb-6 flex size-16 items-center justify-center rounded-full shadow-lg ring-1",
                          isPremium
                            ? "bg-amber-50 text-amber-500 shadow-amber-500/30 ring-amber-200"
                            : isPopular
                              ? "text-primary shadow-primary/30 bg-red-50 ring-red-200"
                              : isBasic
                                ? "bg-zinc-50 text-zinc-400 shadow-zinc-900/5 ring-zinc-200"
                                : "text-primary bg-white shadow-red-500/10 ring-red-100"
                        )}
                      >
                        <ScoreIcon weight="duotone" className="size-8" />
                      </div>
                      <h4
                        className={cn(
                          "mb-2 text-4xl font-extrabold tracking-tight",
                          isPremium ? "text-amber-600" : "text-primary"
                        )}
                      >
                        {row.score}
                      </h4>
                      <p className="text-lg font-bold tracking-wider text-zinc-900 uppercase">
                        {row.level}
                      </p>
                      {row.cefr && (
                        <span
                          className={cn(
                            "mt-3 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase",
                            isPremium
                              ? "bg-amber-100 text-amber-800"
                              : "bg-primary/10 text-primary"
                          )}
                        >
                          CEFR: {row.cefr}
                        </span>
                      )}
                    </div>

                    {/* Features List */}
                    <ul className="flex-1 space-y-4">
                      {row.bullets.map((bullet, i) => {
                        const [title, ...rest] = bullet.split(":");
                        const hasTitle = rest.length > 0;
                        const ListIcon = isBasic
                          ? XCircle
                          : isPremium
                            ? Star
                            : CheckCircle;

                        return (
                          <li key={i} className="flex items-start gap-3">
                            <ListIcon
                              weight="fill"
                              className={cn(
                                "mt-1 size-5 shrink-0",
                                isBasic
                                  ? "text-zinc-300"
                                  : isPremium
                                    ? "text-amber-500"
                                    : "text-primary/80"
                              )}
                            />
                            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                              {hasTitle ? (
                                <>
                                  <strong className="font-semibold text-zinc-900">
                                    {title}:
                                  </strong>
                                  {rest.join(":")}
                                </>
                              ) : (
                                bullet
                              )}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
