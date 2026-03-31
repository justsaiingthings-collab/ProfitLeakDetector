/** @type {import('next').NextConfig} */
const repo = "ProfitLeakDetector";

const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`
};

export default nextConfig;
