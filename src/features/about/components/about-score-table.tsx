import type { Icon } from "@phosphor-icons/react";
import {
  BookOpenText,
  Certificate,
  Medal,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import type { AboutScoreRow } from "../about-data";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

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
      <div className="container px-4">
        <Typography variant="h3" className="mb-12 text-center text-white">
          {title}
        </Typography>

        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col gap-4 sm:gap-5">
            {rows.map((row) => {
              const ScoreIcon = SCORE_ICONS[row.id] ?? Certificate;

              return (
                <Card
                  key={row.id}
                  className="relative overflow-hidden border-primary/40 p-5 shadow-xl shadow-primary/10 grid gap-4 sm:p-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-center lg:gap-6"
                >
                  {/* Watermark Icon */}
                  <div className="pointer-events-none absolute -bottom-8 -right-8 z-0">
                    <ScoreIcon
                      weight="fill"
                      className="size-48 -rotate-12 scale-110 text-primary opacity-5"
                    />
                  </div>

                  <div className="border-border relative z-10 flex w-full flex-col items-center gap-4 justify-self-center border-b pb-6 lg:justify-self-start lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0">
                    <ScoreIcon
                      weight="regular"
                      className="text-primary size-12 scale-110"
                      aria-hidden="true"
                    />

                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <h4 className="text-xl font-semibold leading-none tracking-tight text-primary">
                        {row.score}
                      </h4>

                      <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                        {row.level}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
                    {row.description}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
