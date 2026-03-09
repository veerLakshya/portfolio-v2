import type { ReactNode } from "react";
import type { MouseEventHandler } from "react";

type PillButtonVariant = "glass" | "accent-outline";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
  variant?: PillButtonVariant;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function PillButton({
  href,
  children,
  secondary = false,
  className = "",
  variant = "glass",
  onClick,
}: PillButtonProps) {
  const variantClass =
    variant === "accent-outline"
      ? "border border-[#d4b895] bg-transparent text-[#d4b895] hover:-translate-y-0.5 hover:bg-[#d4b895] hover:text-[#1a262b] hover:shadow-[0_10px_30px_-10px_rgba(212,184,149,0.3)]"
      : secondary
        ? "border border-transparent bg-transparent px-6 text-white/70 hover:translate-y-0 hover:border-transparent hover:bg-transparent hover:text-white hover:shadow-none"
        : "border border-white/30 bg-white/[0.05] text-white hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]";

  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-sm font-medium transition-all duration-500 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)]",
        variantClass,
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}
