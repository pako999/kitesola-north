import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve remote images directly to the browser instead of routing them
    // through Next's server-side optimizer, which cannot reach the remote
    // WordPress host in this deploy environment (breaks logo + photos).
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
