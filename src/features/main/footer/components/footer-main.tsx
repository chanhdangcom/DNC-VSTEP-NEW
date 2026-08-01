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
        {/* Brand & Copyright */}
        <div className="flex max-w-sm flex-col space-y-6">
          <HeaderLogoLink
            size="xl"
            className="min-w-0 shrink"
            imageClassName="max-w-full"
          />
          <Typography
            variant="p"
            className="m-0 text-sm leading-relaxed font-medium text-zinc-500"
          >
            © {new Date().getFullYear()} Trung tâm Đào tạo Chuẩn đầu ra & Phát
            triển nguồn nhân lực, Trường Đại học Nam Cần Thơ. All rights
            reserved.
          </Typography>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Column 1: Trường ĐH Nam Cần Thơ */}
          <div>
            <Typography
              variant="h4"
              className="m-0 mb-4 text-sm tracking-wider text-zinc-900 uppercase"
            >
              {footerUniversitySection.title}
            </Typography>

            <ul className="space-y-4">
              {footerUniversitySection.contacts.map((contact, i) => (
                <li
                  key={i}
                  className="space-y-4 text-sm leading-relaxed font-medium text-zinc-500"
                >
                  {contact.lines.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Trung tâm */}
          <div>
            <Typography
              variant="h4"
              className="m-0 mb-4 text-sm tracking-wider text-zinc-900 uppercase"
            >
              TT Đào Tạo & PTNNL
            </Typography>
            <ul className="space-y-4">
              {footerCenterSection.contacts.map((contact, i) => (
                <li
                  key={i}
                  className="space-y-4 text-sm leading-relaxed font-medium text-zinc-500"
                >
                  {contact.lines.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Liên kết */}
          <div>
            <Typography
              variant="h4"
              className="m-0 mb-4 text-sm tracking-wider text-zinc-900 uppercase"
            >
              Liên kết
            </Typography>
            <ul className="space-y-4">
              {footerLinkColumns.flat().map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm font-medium text-zinc-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
