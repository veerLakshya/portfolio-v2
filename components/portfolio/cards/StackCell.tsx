import type { StackLayer } from "../types";

type StackCellProps = {
  layer: StackLayer;
};

export function StackCell({ layer }: StackCellProps) {
  return (
    <article className="flex flex-col gap-4 bg-[#1a262b66] px-6 py-10 backdrop-blur-[5px] transition-colors hover:bg-white/[0.05]">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#d4b895]">{layer.id}</p>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#d4b895]">
        <div className="h-5 w-5">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={layer.iconPath} />
          </svg>
        </div>
      </div>
      <h4 className="text-xl font-normal tracking-[-0.02em]">{layer.title}</h4>
      <ul className="mt-2 flex flex-col gap-2">
        {layer.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-[13px] text-white/70">
            <span className="h-1 w-1 rounded-full bg-white/40" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
