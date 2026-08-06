import Link from "next/link";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import {
  footerCenterSection,
  footerLinkColumns,
  footerUniversitySection,
} from "../footer-data";
import { HeaderLogoLink } from "../../header/components/header-logo-link";

type FooterMainProps = {
  className?: string;
};

export function FooterMain({ className }: FooterMainProps) {
  return (
    <footer
      className={cn(
        "relative w-full overflow-hidden border-t bg-white pt-16 pb-12 sm:pt-24",
        className
      )}
    >
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-16 px-4 lg:flex-row lg:justify-center lg:gap-32">
        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto_auto] lg:gap-x-16 lg:gap-y-0">
          {/* Column 1: Trường ĐH Nam Cần Thơ */}
          <div className="flex flex-col gap-4 lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:grid lg:grid-rows-subgrid lg:gap-y-4">
            <Typography
              variant="h4"
              className="text-primary text-balance uppercase"
            >
              {footerUniversitySection.title}
            </Typography>

            {footerUniversitySection.contacts.map((contact, i) => (
              <div key={i} className="text-muted-foreground">
                {contact.lines.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Column 2: Trung tâm */}
          <div className="flex flex-col gap-4 lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:grid lg:grid-rows-subgrid lg:gap-y-4">
            <Typography variant="h4" className="text-primary uppercase">
              TT Đào Tạo & PTNNL
            </Typography>

            {footerCenterSection.contacts.map((contact, i) => (
              <div key={i} className="text-muted-foreground">
                {contact.lines.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Column 3: Liên kết */}
          <div className="flex flex-col gap-4 lg:col-start-3 lg:row-span-5 lg:row-start-1 lg:grid lg:grid-rows-subgrid lg:gap-y-4">
            <Typography variant="h4" className="text-primary uppercase">
              Liên kết
            </Typography>

            <div className="grid grid-cols-2 gap-4">
              {footerLinkColumns.flat().map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground gap-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Giant Watermark Text */}
      <div className="pointer-events-none z-0 mt-12 flex w-full items-end justify-center overflow-hidden leading-none select-none">
        <span className="-mb-[1vw] bg-gradient-to-b from-zinc-200/80 to-transparent bg-clip-text text-center font-sans text-[13vw] font-black tracking-tighter whitespace-nowrap text-transparent uppercase">
          NAM CAN THO
        </span>
      </div>
    </footer>
  );
}
