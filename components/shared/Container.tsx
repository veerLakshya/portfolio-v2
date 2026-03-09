import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-10 xl:px-20 ${className}`}>{children}</div>;
}
