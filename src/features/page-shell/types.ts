export type PageBannerImage = {
  src: string;
  alt: string;
};

export type PageBannerTone = "dark" | "bright";

export type PageBannerProps = {
  /** Primary / hero tile (left, large). */
  image?: PageBannerImage;
  /**
   * Collage tiles for the grid banner.
   * Index 0 = hero (left). Indexes 1–3 = right column (top, bottom-left, bottom-right).
   * If omitted, falls back to `image` + shared collage fillers.
   */
  images?: readonly PageBannerImage[];
  /** Page title overlaid on the hero tile. */
  title?: string;
  /** Short supporting line under the title. */
  description?: string;
  /** Visual treatment reserved for future variants. */
  tone?: PageBannerTone;
  /** @deprecated Ignored — banner is a collage grid. */
  align?: "start" | "center";
  /** @deprecated Ignored — banner is a single collage frame. */
  panelCount?: number;
  className?: string;
};

export type PageBreadcrumbItem = {
  label: string;
  href?: string;
};
