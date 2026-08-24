import type { Metadata } from "next";
import { PortPage } from "@/components/port-page";
import { skillPort } from "@/lib/ports";
import { absoluteUrl, openGraphImage, twitterImage } from "@/lib/site";

export const metadata: Metadata = {
  title: skillPort.seoTitle,
  description: skillPort.seoDescription,
  alternates: {
    canonical: skillPort.pagePath,
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(skillPort.pagePath),
    title: `${skillPort.seoTitle} | Agent Orange`,
    description: skillPort.seoDescription,
    siteName: "Agent Orange",
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${skillPort.seoTitle} | Agent Orange`,
    description: skillPort.seoDescription,
    images: [twitterImage],
  },
};

export default function SkillPage() {
  return <PortPage port={skillPort} />;
}
