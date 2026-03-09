import Link from "next/link";
import type { Experience } from "../../../types/types";

type ExperienceRowProps = {
  item: Experience;
  isLast: boolean;
};

export function ExperienceRow({ item, isLast }: ExperienceRowProps) {
  return (
    <article
      className={[
        "grid items-baseline gap-4 border-t border-white/15 py-10 transition hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.03),transparent)] lg:grid-cols-[140px_2fr_3fr]",
        isLast ? "border-b border-white/15" : "",
      ].join(" ")}
    >
      <p className="font-mono text-sm text-[#d4b895]/80">{item.period}</p>
      <h3 className="text-[24px] leading-[1.1] tracking-[-0.03em]">
        {item.role}
      </h3>
      <p className="text-base leading-7 text-white/70">
        <Link href={item?.companyUrl} target="_blank" rel="noopener noreferrer">
          {" "}
          <strong className="font-semibold text-white">
            {item.company}
          </strong>{" "}
        </Link>
        - {item.details}
      </p>
    </article>
  );
}
