import Link from "next/link";

type BrandMarkProps = {
  href?: string;
  className?: string;
};

export function BrandMark({ href = "/", className = "" }: BrandMarkProps) {
  return (
    <Link href={href} className={`flex items-center gap-3 text-xl font-semibold tracking-[-0.02em] ${className}`}>
      LAKSHYA
      <span className="inline-block h-4 w-px bg-white/40" />
      <span className="text-base font-light opacity-70">VEER SINGH</span>
    </Link>
  );
}
