import { Geist_Mono, Momo_Trust_Sans, Nunito } from "next/font/google";
import { Caveat } from "next/font/google";

export const momoTrustSans = Momo_Trust_Sans({
  variable: "--font-momo-trust-sans",
  subsets: ["latin", "vietnamese"],
  weight: "variable",
  adjustFontFallback: false,
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fontHandwritten = Caveat({
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
});

/**
 * Display title — Nunito (đầu chữ bo tròn, hỗ trợ tiếng Việt).
 * Gắn bằng `.className` trên <h1>.
 */
export const displayFont = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-display-face",
});
