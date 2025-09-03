import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensures Next.js traces files from the project workspace, not parent folders
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
