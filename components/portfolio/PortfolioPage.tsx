import { PageShell } from "@/components/shared/PageShell";
import { SiteNav, type SiteNavItem } from "@/components/shared/SiteNav";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { StackSection } from "./sections/StackSection";

const homeNavLinks: SiteNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-me", label: "Contact Me" },
];

export function PortfolioPage() {
  return (
    <PageShell>
      <SiteNav links={homeNavLinks} activeHref="/" ctaHref="/contact-me" ctaLabel="Contact Me" />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ExperienceSection />
      <ContactSection />
    </PageShell>
  );
}
