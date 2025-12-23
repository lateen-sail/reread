import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/reread",
  assetPrefix: "/reread/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
