import type { Metadata } from "next";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshya Veer Singh | Software Engineer",
  description: "Portfolio of Lakshya Veer Singh, software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Analytics />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
