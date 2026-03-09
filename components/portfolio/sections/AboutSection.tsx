import { values } from "../data";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1400px] px-5 py-28 sm:px-10 lg:py-40 xl:px-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <SectionLabel>About Me</SectionLabel>
        <div>
          <h2 className="mb-8 text-4xl leading-[1.1] tracking-[-0.03em] lg:text-5xl">
            Engineer by trade,
            <br />
            Problem solver by heart.
          </h2>
          <p className="max-w-[680px] text-lg leading-8 text-white/70">
            I don&apos;t just write code; I build systems. Navigating the complexity of modern software engineering requires more than syntax, it requires structure, intuition, and a
            relentless focus on the user experience.
          </p>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-10 border-t border-white/15 pt-10 lg:flex-row lg:justify-between">
        {values.map((value) => (
          <div key={value.title} className="flex-1 pr-0 lg:pr-10">
            <h3 className="mb-4 text-2xl text-[#d4b895]">{value.title}</h3>
            <p className="max-w-[300px] text-sm leading-7 text-white/70">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
