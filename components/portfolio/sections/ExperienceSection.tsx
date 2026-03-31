import { myExperience } from "@/constants/experience";
import { ExperienceRow } from "../cards/ExperienceRow";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-350 px-5 py-28 sm:px-10 lg:py-40 xl:px-20"
    >
      <SectionLabel>Professional History</SectionLabel>
      <div>
        {myExperience.map((item, index) => (
          <ExperienceRow
            key={item.company}
            item={item}
            isLast={index === myExperience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
