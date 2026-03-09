import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  overlayOpacity?: number;
  className?: string;
};

const bgImages = ["clouds-2.jpg", "clouds-image.avif"];

const randomIndex = Math.floor(Math.random() * bgImages.length);

export function PageShell({
  children,
  overlayOpacity = 0.85,
  className = "",
}: PageShellProps) {
  const BACKGROUND_IMAGE = bgImages[randomIndex];
  console.log("Selected background image:", BACKGROUND_IMAGE);
  return (
    <main
      className={[
        "relative min-h-screen overflow-x-hidden bg-[#1a262b] font-sans text-white [background-attachment:fixe] [background-position:center] [background-size:cover]",
        className,
      ].join(" ")}
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
