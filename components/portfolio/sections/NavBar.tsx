import { navLinks } from "../data";
import { PillButton } from "../ui/PillButton";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between px-5 py-8 mix-blend-overlay transition-[padding] duration-300 sm:px-10 sm:py-10 xl:px-20">
      <div className="flex items-center gap-3 text-xl font-semibold tracking-[-0.02em]">
        ALEX
        <span className="inline-block h-4 w-px bg-white/40" />
        <span className="text-base font-light opacity-70">CHEN</span>
      </div>
      <div className="hidden gap-8 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
      <PillButton href="#contact">View Resume</PillButton>
    </nav>
  );
}
