"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { PillButton } from "./PillButton";
import { SiteNavItem } from "@/types/navbar";

type SiteNavProps = {
  links: SiteNavItem[];
  activeHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  blendOverlay?: boolean;
};

export function SiteNav({
  links,
  activeHref,
  ctaHref = "#contact",
  ctaLabel = "View Resume",
  blendOverlay = false,
}: SiteNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={[
        "fixed top-0 left-0 z-[100] w-full",
        blendOverlay ? "mix-blend-overlay" : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-10 sm:py-6 lg:px-20">
        <BrandMark />

        <div className="hidden gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "text-sm transition-colors",
                  isActive ? "text-white" : "text-white/70 hover:text-white",
                ].join(" ")}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <PillButton className="border-none" href={ctaHref}>
            {ctaLabel}
          </PillButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#1a262b]/95 px-5 py-4 backdrop-blur-md md:hidden sm:px-10">
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-sm transition-colors",
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  ].join(" ")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <PillButton
              href={ctaHref}
              className="mt-3 w-fit border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {ctaLabel}
            </PillButton>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
