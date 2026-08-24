import type { MetadataRoute } from "next";
import { allPorts } from "@/lib/ports";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/") },
    ...allPorts.map((port) => ({ url: absoluteUrl(port.pagePath) })),
  ];
}
