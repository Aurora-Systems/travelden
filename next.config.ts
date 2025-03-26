import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ngratesc.sirv.com',
        port: '',
        pathname: '/Travel%20Den/*',
        search: '',
      },
    ],
  },
};

export default nextConfig;
