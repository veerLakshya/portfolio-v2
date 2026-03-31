import { PillButton } from "@/components/shared/PillButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto mb-20 flex w-full max-w-350 flex-col items-center gap-10 border border-white/15 bg-white/3 px-5 py-20 text-center backdrop-blur-xl sm:px-10 lg:py-30 xl:px-20"
    >
      <h2 className="text-4xl leading-[1.1] tracking-[-0.03em] lg:text-5xl">
        Ready to build something?
      </h2>
      <p className="max-w-125text-lg leading-8 text-white/70">
        Currently open for new opportunities and interesting collaborations.
        Let&apos;s create the future.
      </p>
      <div className="flex flex-wrap gap-5">
        <PillButton href="/contact-me">Get in touch</PillButton>
        <PillButton href="#" secondary>
          Download CV
        </PillButton>
      </div>
    </section>
  );
}
