import { stackLayers } from "../data";
import { StackCell } from "../cards/StackCell";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function StackSection() {
  return (
    <section id="stack" className="mx-auto w-full max-w-[1400px] px-5 py-28 sm:px-10 lg:py-40 xl:px-20">
      <SectionLabel>Technical Architecture</SectionLabel>
      <h2 className="text-4xl leading-[1.1] tracking-[-0.03em] lg:text-5xl">The Stack</h2>
      <div className="mt-15 grid grid-cols-1 gap-px border border-white/15 bg-black/20 p-px sm:grid-cols-2 xl:grid-cols-4">
        {stackLayers.map((layer) => (
          <StackCell key={layer.title} layer={layer} />
        ))}
      </div>
    </section>
  );
}
