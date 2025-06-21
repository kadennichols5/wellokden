import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({
  // MDX options go here
});

export default withMDX(nextConfig);
