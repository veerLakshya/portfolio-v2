import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={[
        "mb-6 flex flex-col items-start gap-3 text-sm tracking-[0.02em] text-white/40 before:block before:h-px before:w-10 before:bg-white/40 before:content-['']",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
