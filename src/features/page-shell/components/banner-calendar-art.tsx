import * as React from "react";

type BannerCalendarArtProps = {
  className?: string;
};

/**
 * Minh họa lịch isometric cho banner — tấm lịch nghiêng 30°,
 * ô ngày thi được đùn nổi 3D bằng màu primary, bóng đổ mềm bên dưới.
 */
export function BannerCalendarArt({ className }: BannerCalendarArtProps) {
  // Ma trận isometric: u → (0.866, 0.5), v → (−0.866, 0.5)
  const iso = "0.866 0.5 -0.866 0.5";

  return (
    <svg viewBox="0 0 290 215" fill="none" aria-hidden className={className}>
      <defs>
        <clipPath id="banner-cal-face">
          <rect x="0" y="0" width="160" height="140" rx="12" />
        </clipPath>
        <filter
          id="banner-cal-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Soft floor shadow */}
      <g transform={`matrix(${iso} 145 46)`}>
        <rect
          width="160"
          height="140"
          rx="12"
          className="fill-zinc-400"
          fillOpacity="0.25"
          filter="url(#banner-cal-shadow)"
        />
      </g>

      {/* Slab thickness */}
      <g transform={`matrix(${iso} 145 38)`}>
        <rect width="160" height="140" rx="12" className="fill-zinc-300" />
      </g>

      {/* Calendar face (isometric plane) */}
      <g transform={`matrix(${iso} 145 30)`}>
        <g clipPath="url(#banner-cal-face)">
          <rect width="160" height="140" className="fill-white" />
          {/* Header band */}
          <rect width="160" height="26" className="fill-primary" />
          {/* Header label */}
          <rect
            x="12"
            y="9"
            width="36"
            height="8"
            rx="4"
            className="fill-white"
            fillOpacity="0.85"
          />

          {/* Imprint under the raised tile */}
          <rect
            x="40"
            y="42"
            width="36"
            height="24"
            rx="6"
            className="fill-zinc-100"
          />

          {/* Other grid days */}
          <g className="fill-zinc-200" opacity="0.6">
            <rect x="12" y="42" width="22" height="16" rx="4" />
            <rect x="12" y="64" width="22" height="16" rx="4" />
            <rect x="12" y="86" width="22" height="16" rx="4" />
            <rect x="12" y="108" width="22" height="16" rx="4" />

            <rect x="40" y="70" width="22" height="16" rx="4" />
            <rect x="40" y="92" width="22" height="16" rx="4" />
            <rect x="40" y="114" width="22" height="16" rx="4" />

            <rect x="68" y="42" width="22" height="16" rx="4" />
            <rect x="68" y="64" width="22" height="16" rx="4" />
            <rect x="68" y="86" width="22" height="16" rx="4" />
            <rect x="68" y="108" width="22" height="16" rx="4" />

            <rect x="96" y="42" width="22" height="16" rx="4" />
            <rect x="96" y="64" width="22" height="16" rx="4" />
            <rect x="96" y="86" width="22" height="16" rx="4" />
            <rect x="96" y="108" width="22" height="16" rx="4" />

            <rect x="124" y="42" width="22" height="16" rx="4" />
            <rect x="124" y="64" width="22" height="16" rx="4" />
            <rect x="124" y="86" width="22" height="16" rx="4" />
            <rect x="124" y="108" width="22" height="16" rx="4" />
          </g>
        </g>
      </g>

      {/* Extruded Tile (active day) */}
      {/* 3D Sides of the active day tile */}
      <g transform={`matrix(${iso} 145 26)`}>
        <rect
          x="40"
          y="42"
          width="36"
          height="24"
          rx="6"
          className="fill-primary-hover"
        />
      </g>
      <g transform={`matrix(${iso} 145 24)`}>
        <rect
          x="40"
          y="42"
          width="36"
          height="24"
          rx="6"
          className="fill-primary-hover"
        />
      </g>

      {/* Raised active day tile (top face) */}
      <g transform={`matrix(${iso} 145 22)`}>
        <rect
          x="40"
          y="42"
          width="36"
          height="24"
          rx="6"
          className="fill-primary shadow-sm"
        />
        {/* Simple checkmark on the tile */}
        <path
          d="M50 54 L55 59 L63 50"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Floating abstract rings/decorations for modern depth */}
    </svg>
  );
}
