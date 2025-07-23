import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // disables all optimization and domain checks
  },
};

export default nextConfig;
