import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortPage } from "@/components/port-page";
import { getThemePort, themePorts } from "@/lib/ports";
import { absoluteUrl, openGraphImage, twitterImage } from "@/lib/site";

type ThemePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return themePorts.map((port) => ({ slug: port.slug }));
}

export async function generateMetadata({ params }: ThemePageProps): Promise<Metadata> {
  const { slug } = await params;
  const port = getThemePort(slug);

  if (!port) {
    return {};
  }

  return {
    title: port.seoTitle,
    description: port.seoDescription,
    alternates: {
      canonical: port.pagePath,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(port.pagePath),
      title: `${port.seoTitle} | Agent Orange`,
      description: port.seoDescription,
      siteName: "Agent Orange",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${port.seoTitle} | Agent Orange`,
      description: port.seoDescription,
      images: [twitterImage],
    },
  };
}

export default async function ThemePage({ params }: ThemePageProps) {
  const { slug } = await params;
  const port = getThemePort(slug);

  if (!port) {
    notFound();
  }

  return <PortPage port={port} />;
}
