import { BrandMark } from "@/components/shared/BrandMark";
import { PageShell } from "@/components/shared/PageShell";
import { PillButton } from "@/components/shared/PillButton";
import Footer from "../shared/Footer";

export function ContactMePage() {
  return (
    <PageShell overlayOpacity={0.92} className="lg:h-screen lg:overflow-hidden">
      <header className="fixed top-0 left-0 z-[110] flex w-full items-center justify-between px-5 py-5 sm:px-10 sm:py-6 lg:px-20">
        <BrandMark />

        <PillButton
          href="/"
          className="hidden gap-2 border-none sm:inline-flex px-6"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          CLOSE
        </PillButton>
      </header>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col justify-between border-r-0 border-white/15 px-5 pb-10 pt-28 sm:px-10 lg:border-r lg:px-20 lg:pb-20 lg:pt-20">
          <div className="mt-10 lg:mt-[100px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.05em] text-[#2dd4bf]">
              <span className="contact-pulse h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_#2dd4bf]" />
              Available for projects
            </div>

            <h1 className="mb-6 text-[48px] leading-none tracking-[-0.04em] lg:text-[64px]">
              Let&apos;s start a
              <br />
              conversation.
            </h1>

            <p className="max-w-[400px] text-lg font-light text-white/70">
              Have a concept or a complex system that needs engineering? Drop a
              line.
            </p>
          </div>

          <Footer />
        </section>

        <section className="flex flex-col justify-center bg-white/[0.02] px-5 py-10 backdrop-blur-[10px] sm:px-10 lg:px-20">
          <div className="mx-auto w-full max-w-[500px]">
            <form>
              <div className="mb-8">
                <label className="mb-3 block text-[13px] text-white/40">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="What should I call you?"
                  className="w-full border-0 border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#d4b895]"
                />
              </div>

              <div className="mb-8">
                <label className="mb-3 block text-[13px] text-white/40">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="How can I reach you?"
                  className="w-full border-0 border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#d4b895]"
                />
              </div>

              <div className="mb-8">
                <label className="mb-3 block text-[13px] text-white/40">
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry, hello, etc."
                  className="w-full border-0 border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#d4b895]"
                />
              </div>

              <div className="mb-8">
                <label className="mb-3 block text-[13px] text-white/40">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none border-0 border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#d4b895]"
                />
              </div>

              <PillButton
                type="submit"
                variant="accent-outline"
                className="mt-5 px-12 py-4"
              >
                Send Message
              </PillButton>
            </form>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
