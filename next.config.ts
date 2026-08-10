import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Next.js bundles its small polyfill-module into the main client chunk
      // unconditionally. Our browserslist target is modern (Next.js 16 default),
      // so none of these polyfills are needed. Replace it with an empty module.
      "../build/polyfills/polyfill-module": "./polyfill-module-empty.js",
    },
  },
};

export default nextConfig;
