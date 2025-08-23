
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
    ],
  },
};

const devConfig: NextConfig = {
  ...baseConfig,
  // START: DEV CONFIG
  // The following properties are set for development only.
  // They will be removed in production builds.
  experimental: {
    ...baseConfig.experimental,
    // This is needed to allow the Next.js dev server to be accessed from the Firebase Studio preview.
    allowedDevOrigins: [
      '*.cloudworkstations.dev',
      '*.firebase.studio',
    ],
  },
  // END: DEV CONFIG
};

const nextConfig = process.env.NODE_ENV === 'development' ? devConfig : baseConfig;

export default nextConfig;
