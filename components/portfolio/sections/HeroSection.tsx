import { PillButton } from "../ui/PillButton";
import { SectionLabel } from "../ui/SectionLabel";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-screen w-full max-w-[1400px] items-center px-5 pt-24 sm:px-10 xl:px-20">
      <div className="grid w-full gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-[60px]">
        <div>
          <SectionLabel className="fade-in">Full-Stack Engineer</SectionLabel>
          <h1 className="fade-in delay-1 bg-gradient-to-b from-white to-[#dcdcdc] bg-clip-text text-[52px] leading-[0.95] tracking-[-0.03em] text-transparent sm:text-[70px] lg:text-[96px]">
            Building things
            <br />
            that matter.
          </h1>
        </div>
        <div className="fade-in delay-2 pb-3">
          <p className="mb-8 max-w-[400px] text-lg leading-8 text-white/70">
            Architecting digital experiences with precision, performance, and purpose. From silicon
            to screen.
          </p>
          <div className="flex flex-wrap gap-5">
            <PillButton href="#projects">View my work</PillButton>
            <PillButton href="#about" secondary>
              Read about me
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
