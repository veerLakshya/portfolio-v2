import { projects } from "../data";
import { ProjectCard } from "../cards/ProjectCard";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-[1400px] px-5 py-28 sm:px-10 lg:py-40 xl:px-20"
    >
      <SectionLabel>Selected Work</SectionLabel>
      <div className="mt-15 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
