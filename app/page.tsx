import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { getAbsoluteUrl, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: seo.siteTitle,
  description: seo.siteDescription,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seo.siteName,
    url: getAbsoluteUrl("/"),
    jobTitle: "Software Engineer",
    sameAs: [
      "https://www.github.com/veerlakshya",
      "https://www.linkedin.com/in/lakshyaveersingh",
      "https://www.twitter.com/veerlakshya",
    ],
    worksFor: {
      "@type": "Organization",
      name: seo.siteName,
    },
    description: seo.siteDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        src="https://flam-fantom-dev.vercel.app/v1/loader.js"
        data-project-id="69dded7f51ac02b5ed2d14bd"
        data-client-key="ak_a016544d601cec37"
        async
      ></script>

      <PortfolioPage />
    </>
  );
}
