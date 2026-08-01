/** Canonical brand / semantic colors — keep in sync with `src/app/globals.css`. */
export const theme = {
  background: "#f3f2ee",
  foreground: "#0b1220",
  primary: "#c81e1e",
  primaryForeground: "#ffffff",
  primaryHover: "#a81818",
  secondary: "#9f1239",
  secondaryForeground: "#ffffff",
} as const;

export type ThemeColor = (typeof theme)[keyof typeof theme];
