import { PageShell } from "@/components/shared/PageShell";
import Footer from "../shared/Footer";
import { SiteNav } from "../shared/SiteNav";
import { homeNavLinks } from "@/constants/navbar";
import { ContactForm } from "./ContactForm";

export function ContactMePage() {
  return (
    <PageShell
      overlayOpacity={0.92}
      className="lg:h-screen lg:overflow-hidden"
      bgCover={true}
      bgIndex={0}
    >
      {/* <header className="fixed top-0 left-0 z-[110] flex w-full items-center justify-between px-5 py-5 sm:px-10 sm:py-6 lg:px-20">
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
      </header> */}
      <SiteNav hideLinks activeHref="/contact-me" links={homeNavLinks} />

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col justify-between border-r-0 border-white/15 px-5 pb-10 pt-28 sm:px-10 lg:border-r lg:px-20 lg:pb-20 lg:pt-20">
          <div className="mt-10 lg:mt-25">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.05em] text-[#2dd4bf]">
              <span className="contact-pulse h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_#2dd4bf]" />
              Available for projects
            </div>

            <h1 className="mb-6 text-[48px] leading-none tracking-[-0.04em] lg:text-[64px]">
              Let&apos;s start a
              <br />
              conversation.
            </h1>

            <p className="max-w-100 text-lg font-light text-white/70">
              Have a concept or a complex system that needs engineering? Drop a
              line.
            </p>
          </div>

          <Footer />
        </section>

        <section className="flex flex-col justify-center bg-white/2 px-5 py-10 backdrop-blur-[10px] sm:px-10 lg:px-20">
          <div className="mx-auto w-full max-w-125">
            <ContactForm />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
