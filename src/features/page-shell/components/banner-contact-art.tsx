import * as React from "react";

type BannerContactArtProps = {
  className?: string;
};

/**
 * Minh họa phong thư / hộp thư isometric tinh gọn.
 * Dùng cho trang Liên hệ.
 */
export function BannerContactArt({ className }: BannerContactArtProps) {
  const iso = "0.866 0.5 -0.866 0.5";

  return (
    <svg viewBox="0 0 290 215" fill="none" aria-hidden className={className}>
      <defs>
        <filter
          id="banner-contact-shadow"
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
          x="15"
          y="15"
          width="130"
          height="110"
          rx="12"
          className="fill-zinc-400"
          fillOpacity="0.25"
          filter="url(#banner-contact-shadow)"
        />
      </g>

      {/* Envelope slab thickness */}
      <g transform={`matrix(${iso} 145 38)`}>
        <rect
          x="15"
          y="15"
          width="130"
          height="110"
          rx="12"
          className="fill-zinc-300"
        />
      </g>

      {/* Envelope body (back face) */}
      <g transform={`matrix(${iso} 145 30)`}>
        <rect
          x="15"
          y="15"
          width="130"
          height="110"
          rx="12"
          className="fill-zinc-100"
        />

        {/* Paper letter slipping out slightly */}
        <rect
          x="25"
          y="5"
          width="110"
          height="90"
          rx="4"
          className="fill-white shadow-sm"
        />
        {/* Soft text lines on the letter */}
        <g className="fill-zinc-200">
          <rect x="35" y="20" width="60" height="5" rx="2.5" />
          <rect x="35" y="32" width="80" height="5" rx="2.5" />
          <rect x="35" y="44" width="70" height="5" rx="2.5" />
        </g>
      </g>

      {/* Envelope front fold (isometric overlap) */}
      <g transform={`matrix(${iso} 145 28)`}>
        {/* We simulate the front pocket of the envelope using path */}
        <path
          d="M 15 70 L 80 100 L 145 70 L 145 125 L 15 125 Z"
          className="fill-zinc-200"
        />
        <path
          d="M 15 15 L 80 70 L 145 15"
          className="stroke-zinc-300"
          strokeWidth="2"
          fill="none"
        />
        {/* Left and right side folds */}
        <path d="M 15 15 L 65 70 L 15 125 Z" className="fill-zinc-100/60" />
        <path d="M 145 15 L 95 70 L 145 125 Z" className="fill-zinc-100/60" />
      </g>

      {/* Telephone / Speech Bubble Circle Badge Extrusion */}
      <g transform={`matrix(${iso} 145 24)`}>
        <circle cx="116" cy="116" r="20" className="fill-primary-hover" />
      </g>
      <g transform={`matrix(${iso} 145 22)`}>
        <circle cx="116" cy="116" r="20" className="fill-primary-hover" />
      </g>

      {/* Badge Face */}
      <g transform={`matrix(${iso} 145 20)`}>
        <circle cx="116" cy="116" r="20" className="fill-primary" />
        {/* Inner Ring */}
        <circle
          cx="116"
          cy="116"
          r="14"
          className="stroke-white"
          strokeWidth="2"
          strokeOpacity="0.3"
          fill="none"
        />
        {/* Phone Receiver Icon */}
        <path
          d="M109 111 C109 110 110 109 111 109 H113 C114 109 115 110 115 111 L116 113 C116 114 115 115 114 115 L113 116 C114 118 116 120 118 121 L119 120 C119 119 120 118 121 118 L123 119 C124 119 125 120 125 121 V123 C125 124 124 125 123 125 C115 125 109 119 109 111 Z"
          className="fill-white"
        />
      </g>
    </svg>
  );
}
