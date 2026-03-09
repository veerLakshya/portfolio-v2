import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  overlayOpacity?: number;
  className?: string;
};

const BACKGROUND_IMAGE =
  // "/20231225_165050-1.jpg"
  "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2565&auto=format&fit=crop";

export function PageShell({
  children,
  overlayOpacity = 0.85,
  className = "",
}: PageShellProps) {
  return (
    <main
      className={[
        "relative min-h-screen overflow-x-hidden bg-[#1a262b] font-sans text-white [background-attachment:fixed] [background-position:center] [background-size:cover]",
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
