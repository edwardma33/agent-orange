import { createSocialImage } from "@/lib/social-image";

export const alt = "Agent Orange developer themes for Neovim, Warp, Shadcn, Expo, and ChatGPT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage();
}
