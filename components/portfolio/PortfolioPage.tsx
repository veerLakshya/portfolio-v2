import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { NavBar } from "./sections/NavBar";
import { ProjectsSection } from "./sections/ProjectsSection";
import { StackSection } from "./sections/StackSection";

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#1a262b] font-sans text-white [background-attachment:fixed] [background-image:linear-gradient(135deg,rgba(26,38,43,0.85)_0%,rgba(66,52,40,0.85)_100%),url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2565&auto=format&fit=crop')] [background-position:center] [background-size:cover]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
