const siteName = "Lakshya Veer Singh";
const siteTitle = "Lakshya Veer Singh | Software Engineer";
const siteDescription =
  "Portfolio of Lakshya Veer Singh, software engineer focused on performance, product engineering, and modern web systems.";
const siteHandle = "@veerlakshya";
const defaultOgImage = "/20231225_165050-1.jpg";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (!configuredUrl) {
    return "http://localhost:3000";
  }

  if (configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://")) {
    return trimTrailingSlash(configuredUrl);
  }

  return `https://${trimTrailingSlash(configuredUrl)}`;
}

export function getAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export const seo = {
  siteName,
  siteTitle,
  siteDescription,
  siteHandle,
  defaultOgImage,
};
