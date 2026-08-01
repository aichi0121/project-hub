import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/project-hub" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/project-hub/" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
