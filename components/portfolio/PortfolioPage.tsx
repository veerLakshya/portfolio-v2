import { PageShell } from "@/components/shared/PageShell";
import { SiteNav } from "@/components/shared/SiteNav";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { StackSection } from "./sections/StackSection";
import { homeNavLinks } from "@/constants/navbar";
import Footer from "../shared/Footer";

export function PortfolioPage() {
  return (
    <PageShell bgIndex={1} bgCover={true}>
      <div className="max-w-350 mx-auto">
        <SiteNav
          links={homeNavLinks}
          activeHref="/"
          // ctaHref="/contact-me"
          // ctaLabel="Contact Me"
        />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StackSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </PageShell>
  );
}
