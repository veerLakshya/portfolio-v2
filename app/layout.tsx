import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/LenisProvider";
import type { Metadata } from "next";
import { getAbsoluteUrl, getSiteUrl, seo } from "@/lib/seo";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seo.siteTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.siteDescription,
  keywords: [
    "Lakshya Veer Singh",
    "software engineer",
    "full-stack developer",
    "portfolio",
    "Next.js developer",
    "web performance",
  ],
  authors: [{ name: seo.siteName, url: getSiteUrl() }],
  creator: seo.siteName,
  publisher: seo.siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getSiteUrl(),
    siteName: seo.siteName,
    title: seo.siteTitle,
    description: seo.siteDescription,
    images: [
      {
        url: getAbsoluteUrl(seo.defaultOgImage),
        width: 1200,
        height: 630,
        alt: `${seo.siteName} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: seo.siteHandle,
    title: seo.siteTitle,
    description: seo.siteDescription,
    images: [getAbsoluteUrl(seo.defaultOgImage)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <Analytics />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
