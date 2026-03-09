import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/LenisProvider";
import type { Metadata } from "next";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <Analytics />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
