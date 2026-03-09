import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageShellProps = {
  bgIndex?: number;
  children: ReactNode;
  fixedBg?: boolean;
  bgCover?: boolean;
  overlayOpacity?: number;
  className?: string;
};

const bgImages = ["clouds-2.jpg", "clouds-image.avif"];

export function PageShell({
  children,
  overlayOpacity = 0.85,
  bgIndex = 0,
  className = "",
  fixedBg = false,
  bgCover = false,
}: PageShellProps) {
  if (bgIndex < 0 || bgIndex >= bgImages.length) {
    bgIndex = 0;
  }
  const BACKGROUND_IMAGE = bgImages[bgIndex];
  console.log("Selected background image:", BACKGROUND_IMAGE);
  return (
    <main
      className={cn(
        "relative min-h-screen overflow-x-hidden bg-[#1a262b] font-sans text-white",
        fixedBg ? "[background-attachment:fixed]" : "",
        bgCover
          ? "[background-position:center]"
          : "[background-position:cover]",
        "[background-size:cover]",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 38, 43, ${overlayOpacity}) 0%, rgba(66, 52, 40, ${
          overlayOpacity
        }) 100%), url('${BACKGROUND_IMAGE}')`,
      }}
    >
      {children}
    </main>
  );
}
