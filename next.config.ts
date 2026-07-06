import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Load remote images directly in the browser instead of through Next's
    // server-side optimizer. The kitesola-north.si host blocks datacenter IPs
    // (incl. Vercel's optimizer) with a 403, which breaks every next/image.
    // Browsers are not blocked, so direct loading restores the real images.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.kitesola-north.si",
      },
    ],
  },
};

export default nextConfig;
