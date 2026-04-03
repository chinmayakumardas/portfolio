import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


// this part dlete thta not dleete added in top 
  images: {
    domains: ["deifkwefumgah.cloudfront.net"],
     remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.shadcnstudio.com",
    },
  ],
  },
};

export default nextConfig;
