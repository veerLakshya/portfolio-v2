import { experience } from "../data";
import { ExperienceRow } from "../cards/ExperienceRow";
import { SectionLabel } from "../ui/SectionLabel";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-[1400px] px-5 py-28 sm:px-10 lg:py-40 xl:px-20"
    >
      <SectionLabel>Professional History</SectionLabel>
      <div>
        {experience.map((item, index) => (
          <ExperienceRow key={item.company} item={item} isLast={index === experience.length - 1} />
        ))}
      </div>
    </section>
  );
}
