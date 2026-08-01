import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type ContactCtaProps = {
  label: string;
  href: string;
};

export function ContactCta({ label, href }: ContactCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group bg-primary inline-flex items-center gap-2.5 rounded-full py-2 pr-2 pl-5 text-sm font-bold tracking-wide text-white sm:gap-3 sm:py-2.5 sm:pr-2.5 sm:pl-6",
        "hover:bg-primary-hover transition-colors duration-300"
      )}
    >
      {label}
      <span
        aria-hidden="true"
        className="inline-flex size-8 items-center justify-center rounded-full bg-white sm:size-9"
      >
        <ArrowRight
          className="text-primary size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 sm:size-4"
          weight="bold"
        />
      </span>
    </Link>
  );
}
