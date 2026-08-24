const fallbackUrl = "https://agent-orange-kappa.vercel.app";

function normalizeSiteUrl(value: string | undefined) {
  return (value || fallbackUrl).replace(/\/$/, "");
}

export const siteConfig = {
  name: "Agent Orange",
  url: normalizeSiteUrl(process.env.SITE_URL),
  title: "Agent Orange — Developer Themes for Neovim, Warp & More",
  description:
    "A near-black developer theme for Neovim, Warp, Shadcn/UI, Expo, and ChatGPT Desktop, with orange focus and quiet semantic color.",
  githubUrl: "https://github.com/edwardma33/agent-orange",
  githubProfileUrl: "https://github.com/edwardma33",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export const openGraphImage = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: "Agent Orange developer themes for Neovim, Warp, Shadcn, Expo, and ChatGPT",
};

export const twitterImage = {
  url: absoluteUrl("/twitter-image"),
  width: 1200,
  height: 630,
  alt: openGraphImage.alt,
};
