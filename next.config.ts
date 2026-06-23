import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "waterhill.com.tr",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
