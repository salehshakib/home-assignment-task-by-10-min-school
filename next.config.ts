import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.10minuteschool.com'],
    // Optional: configure image quality and formats
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // 60 seconds
  },
};

export default nextConfig;
