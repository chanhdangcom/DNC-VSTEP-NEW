import * as React from "react";

type BannerDocumentArtProps = {
  className?: string;
};

/**
 * Minh họa tài liệu/biểu mẫu isometric tinh gọn.
 * Dùng cho trang Văn bản, Biểu mẫu, Liên hệ.
 */
export function BannerDocumentArt({ className }: BannerDocumentArtProps) {
  const iso = "0.866 0.5 -0.866 0.5";

  return (
    <svg viewBox="0 0 290 215" fill="none" aria-hidden className={className}>
      <defs>
        <filter
          id="banner-doc-shadow"
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
          x="20"
          y="0"
          width="130"
          height="160"
          rx="12"
          className="fill-zinc-400"
          fillOpacity="0.25"
          filter="url(#banner-doc-shadow)"
        />
      </g>

      {/* Clipboard slab thickness */}
      <g transform={`matrix(${iso} 145 38)`}>
        <rect
          x="20"
          y="0"
          width="130"
          height="160"
          rx="12"
          className="fill-zinc-300"
        />
      </g>

      {/* Clipboard face */}
      <g transform={`matrix(${iso} 145 30)`}>
        <rect
          x="20"
          y="0"
          width="130"
          height="160"
          rx="12"
          className="fill-zinc-100"
        />

        {/* Paper slab thickness */}
        <rect
          x="28"
          y="12"
          width="114"
          height="140"
          rx="4"
          className="fill-zinc-200"
        />
      </g>

      {/* Paper face */}
      <g transform={`matrix(${iso} 145 28)`}>
        <rect
          x="28"
          y="12"
          width="114"
          height="140"
          rx="4"
          className="fill-white"
        />

        {/* Header line */}
        <rect
          x="40"
          y="24"
          width="74"
          height="16"
          rx="4"
          className="fill-primary"
          fillOpacity="0.1"
        />
        <rect
          x="44"
          y="28"
          width="40"
          height="8"
          rx="4"
          className="fill-primary"
          fillOpacity="0.6"
        />

        {/* Text Lines */}
        <g className="fill-zinc-200">
          <rect x="40" y="52" width="90" height="6" rx="3" />
          <rect x="40" y="66" width="70" height="6" rx="3" />
          <rect x="40" y="80" width="80" height="6" rx="3" />
          <rect x="40" y="94" width="50" height="6" rx="3" />
          <rect x="40" y="108" width="60" height="6" rx="3" />
        </g>
      </g>

      {/* Clipboard Metal Clip Thickness */}
      <g transform={`matrix(${iso} 145 26)`}>
        <rect
          x="55"
          y="-6"
          width="60"
          height="18"
          rx="4"
          className="fill-zinc-400"
        />
      </g>
      {/* Clipboard Metal Clip Face */}
      <g transform={`matrix(${iso} 145 22)`}>
        <rect
          x="55"
          y="-6"
          width="60"
          height="18"
          rx="4"
          className="fill-zinc-200"
        />
        <rect
          x="65"
          y="-2"
          width="40"
          height="4"
          rx="2"
          className="fill-zinc-400"
        />
      </g>

      {/* Extruded Seal Sides */}
      <g transform={`matrix(${iso} 145 24)`}>
        <circle cx="116" cy="116" r="20" className="fill-primary-hover" />
      </g>
      <g transform={`matrix(${iso} 145 22)`}>
        <circle cx="116" cy="116" r="20" className="fill-primary-hover" />
      </g>

      {/* Seal Face */}
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
        {/* Checkmark */}
        <path
          d="M109 116 L114 121 L123 110"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
