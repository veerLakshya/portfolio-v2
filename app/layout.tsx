import type { Metadata } from "next";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Chen | Full-stack Developer",
  description: "Portfolio of Alex Chen, full-stack engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
