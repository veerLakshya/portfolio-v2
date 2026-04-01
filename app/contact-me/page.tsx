import type { Metadata } from "next";
import { ContactMePage } from "@/components/contact/ContactMePage";
import { getAbsoluteUrl, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lakshya Veer Singh for software engineering projects, collaborations, and consulting.",
  alternates: {
    canonical: "/contact-me",
  },
  openGraph: {
    title: `Contact | ${seo.siteName}`,
    description:
      "Get in touch with Lakshya Veer Singh for software engineering projects, collaborations, and consulting.",
    url: getAbsoluteUrl("/contact-me"),
    type: "website",
    images: [
      {
        url: getAbsoluteUrl(seo.defaultOgImage),
        width: 1200,
        height: 630,
        alt: `${seo.siteName} contact page preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${seo.siteName}`,
    description:
      "Get in touch with Lakshya Veer Singh for software engineering projects, collaborations, and consulting.",
    images: [getAbsoluteUrl(seo.defaultOgImage)],
  },
};

export default function ContactMeRoute() {
  return <ContactMePage />;
}
