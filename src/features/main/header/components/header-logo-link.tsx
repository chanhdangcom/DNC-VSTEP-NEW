import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HeaderLogoSize = "sm" | "lg" | "xl";

type HeaderLogoLinkProps = {
  className?: string;
  imageClassName?: string;
  size?: HeaderLogoSize;
  showLabel?: boolean;
};

const logoSizeStyles: Record<
  HeaderLogoSize,
  { image: string; separator: string; label: string; container: string }
> = {
  sm: {
    image: "h-9",
    separator: "h-5",
    label: "text-sm",
    container: "h-9",
  },
  lg: {
    image: "h-12",
    separator: "h-8",
    label: "text-sm",
    container: "h-12",
  },
  xl: {
    image: "h-12 lg:h-16", // Perfectly balanced for 64px mobile and 72px desktop headers
    separator: "h-8",
    label: "text-sm",
    container: "h-12 lg:h-16",
  },
};

export function HeaderLogoLink({
  className,
  imageClassName,
  size = "sm",
}: HeaderLogoLinkProps) {
  const styles = logoSizeStyles[size];

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex max-h-full min-w-0 items-center gap-2",
        styles.container,
        className
      )}
    >
      <Image
        src="/images/logo_truong.png"
        alt="logo"
        width={1000}
        height={1000}
        quality={100}
        className={cn(
          "block max-h-full w-auto shrink-0 object-contain object-left",
          styles.image,
          imageClassName
        )}
        priority
      />

      {/* <span
        className={cn(
          "bg-red-500 transition-all duration-500",
          styles.separator,
          showLabel ? "mr-1 w-[1.5px] opacity-100" : "mr-0 w-0 opacity-0",
        )}
        aria-hidden={!showLabel}
      /> */}

      {/* <div
        className={cn(
          "min-w-0 overflow-hidden transition-all duration-500",
          showLabel ? "max-w-[9rem] opacity-100" : "max-w-0 opacity-0",
        )}
        aria-hidden={!showLabel}
      >
        <p
          className={cn(
            "truncate leading-tight font-semibold tracking-tight text-red-700 uppercase",
            styles.label,
          )}
        >
          Chuẩn đầu ra
        </p>
      </div> */}
    </Link>
  );
}
