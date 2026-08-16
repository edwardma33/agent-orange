import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.simpleicons.org/**")],
  },
  outputFileTracingIncludes: {
    "/api/themes/*": ["./.agents/skills/agent-orange/SKILL.md"],
  },
};

export default nextConfig;
