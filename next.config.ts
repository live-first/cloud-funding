import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://livefirst.s3.ap-northeast-1.amazonaws.com/**')],
    unoptimized: true,
  },
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig
