import { theme } from "@/lib/theme";

/** Home banner palette — aliases of global theme. */
export const HOME_BANNER_RED = "var(--primary)";
export const HOME_BANNER_RED_HOVER = "var(--primary)";

export const HOME_BANNER_CANVAS = theme.background;
export const HOME_BANNER_INK = theme.foreground;
export const HOME_BANNER_MUTED = "#52525b";

export const HOME_BANNER_HEADLINE_GRADIENT = `linear-gradient(90deg, #3f3f46 0%, #3f3f46 38%, var(--primary) 72%, var(--primary) 100%)`;

/** High-end letter blend: Slate (V-S) → 3-tier primary color depth hierarchy (T-E-P). */
export const HOME_BANNER_TITLE_COLORS = [
  "#0f172a",
  "#1e293b",
  "color-mix(in oklch, var(--primary) 82%, black 18%)",
  "var(--primary)",
  "color-mix(in oklch, var(--primary) 84%, white 16%)",
] as const;

/** Legacy tokens kept for unused banner experiments still in the tree. */
export const HOME_BANNER_ORGANIC = {
  primary: "#f5d0ce",
  secondary: "#fde8e6",
  accent: "#f9c4c0",
  wash: "#fff5f4",
} as const;
export const HOME_BANNER_BG = HOME_BANNER_CANVAS;
export const HOME_BANNER_SURFACE = "#fff8f7";
export const HOME_BANNER_TEXT = HOME_BANNER_INK;
export const HOME_BANNER_TEXT_MUTED = HOME_BANNER_MUTED;
export const HOME_BANNER_RED_DEEP = theme.secondary;
