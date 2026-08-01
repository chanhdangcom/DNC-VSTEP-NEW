import { theme } from "@/lib/theme";

/** Header chrome aligned with brand primary. */
export const HEADER_RED = theme.primary;
export const HEADER_RED_HOVER = theme.primaryHover;

export const HEADER_CHROME = {
  surface: "bg-[#fff8f7]/82",
  surfaceSolid: "bg-[#fff8f7]",
  border: "border-[#f5d0ce]/70",
  shadow: "shadow-[0_8px_32px_-12px_rgba(200,30,30,0.12)]",
  pillBorder: "border-[#f5d0ce]/85",
  pillSurface: "bg-[#fff8f7]/88",
  muted: "text-[#6b4a4a]",
} as const;
