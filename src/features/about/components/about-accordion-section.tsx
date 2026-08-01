import { Typography } from "@/components/ui/typography";
import { AboutAccordion } from "./about-accordion";
import type { AboutAccordionItem } from "../about-data";

type AboutAccordionSectionProps = {
  id: string;
  title: string;
  items: readonly AboutAccordionItem[];
  alwaysOpen?: boolean;
};

export function AboutAccordionSection({
  id,
  title,
  items,
  alwaysOpen = false,
}: AboutAccordionSectionProps) {
  return (
    <section id={id} className="scroll-mt-40 space-y-5 sm:space-y-6">
      <Typography variant="h3" className="text-primary">
        {title}
      </Typography>

      <AboutAccordion items={items} alwaysOpen={alwaysOpen} />
    </section>
  );
}
