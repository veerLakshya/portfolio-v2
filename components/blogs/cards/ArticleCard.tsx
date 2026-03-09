import type { BlogArticle } from "../types";

type ArticleCardProps = {
  article: BlogArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <a
      href="#"
      className="flex min-h-[380px] flex-col justify-between border border-white/15 bg-white/[0.03] p-8 text-inherit no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08]"
    >
      <div>
        <div className="mb-4 flex gap-5 font-mono text-xs text-[#d4b895]">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="mb-4 text-2xl leading-[1.3] tracking-[-0.02em] text-white">{article.title}</h3>
        <p className="mb-6 text-sm leading-7 text-white/70">{article.excerpt}</p>
      </div>
      <div className="font-mono text-[11px] text-[#d4b895]">READ MORE -&gt;</div>
    </a>
  );
}
