import type { NextConfig } from "next";

const markdownPages = ["gioi-thieu"] as const;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85, 90, 95, 100],
  },
  async rewrites() {
    return {
      beforeFiles: markdownPages.map((slug) => ({
        source: `/${slug}.md`,
        destination: `/api/markdown/${slug}`,
      })),
    };
  },
};

export default nextConfig;
