import type { NextConfig } from "next";
import path from "node:path";


const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'societies.b-cdn.net' },
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
      }
    }
  }
};

export default nextConfig;
