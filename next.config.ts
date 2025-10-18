import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    // Tell Next.js explicitly that this is the project root
    root: __dirname,
  },
  /* other config options here */
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
