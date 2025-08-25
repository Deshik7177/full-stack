
import type {NextConfig} from 'next';

const baseConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }
    ],
  },
};

let nextConfig: NextConfig = baseConfig;

if (process.env.NODE_ENV === 'development') {
  nextConfig = {
    ...baseConfig,
    // This is needed to allow the Next.js dev server to be accessed from the Firebase Studio preview.
    experimental: {
      ...baseConfig.experimental,
    },
    allowedDevOrigins: [
      '*.cloudworkstations.dev',
      '*.firebase.studio',
    ],
  };
}

export default nextConfig;
