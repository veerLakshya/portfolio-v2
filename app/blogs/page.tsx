import type { Metadata } from "next";
import { BlogsPage } from "@/components/blogs/BlogsPage";
import { getAbsoluteUrl, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights",
  description: "Technical writing, engineering notes, and editorial insights by Lakshya Veer Singh.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: `Insights | ${seo.siteName}`,
    description:
      "Technical writing, engineering notes, and editorial insights by Lakshya Veer Singh.",
    url: getAbsoluteUrl("/blogs"),
    type: "website",
    images: [
      {
        url: getAbsoluteUrl(seo.defaultOgImage),
        width: 1200,
        height: 630,
        alt: `${seo.siteName} blog preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Insights | ${seo.siteName}`,
    description:
      "Technical writing, engineering notes, and editorial insights by Lakshya Veer Singh.",
    images: [getAbsoluteUrl(seo.defaultOgImage)],
  },
};

export default function BlogsRoute() {
  return <BlogsPage />;
}
