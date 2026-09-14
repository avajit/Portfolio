import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network devices to receive hot reloads and dev resources
  experimental: {
    // Some Next.js versions put it here
    allowedRevalidateHeaderKeys: [],
  },
  // @ts-ignore
  allowedDevOrigins: ["192.168.1.7", "localhost:3000"],
};

export default nextConfig;
