import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex min-h-[340px] flex-col justify-between border border-white/15 bg-white/[0.03] p-10 backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.08] lg:h-[400px]">
      <div className="w-fit rounded border border-white/30 px-2 py-1 font-mono text-xs text-white/50">
        {project.id}
      </div>
      <div>
        <h3 className="text-[32px] leading-[1.1] tracking-[-0.03em]">{project.title}</h3>
        <p className="mt-4 max-w-[340px] text-sm leading-7 text-white/70">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] tracking-[-0.02em] text-[#d4b895]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
