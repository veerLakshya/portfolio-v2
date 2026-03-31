import Image from "next/image";
import { ArticleCard } from "./cards/ArticleCard";
import { blogArticles, blogFilters, featuredPost } from "./data";
import { Container } from "@/components/shared/Container";
import { PageShell } from "@/components/shared/PageShell";
import { PillButton } from "@/components/shared/PillButton";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SiteNav } from "@/components/shared/SiteNav";
import { blogNavLinks } from "@/constants/navbar";

export function BlogsPage() {
  return (
    <PageShell overlayOpacity={0.9} bgIndex={1}>
      <SiteNav links={blogNavLinks} activeHref="/blogs" />

      <Container className="pb-24 pt-45">
        <SectionLabel>Editorial / Insights</SectionLabel>

        <section className="grid grid-cols-1 items-center gap-10 rounded-sm border border-white/15 bg-white/3 p-8 backdrop-blur-xl lg:grid-cols-[1.2fr_1fr] lg:gap-15 lg:p-15">
          <div>
            <div className="mb-4 flex gap-5 font-mono text-xs text-[#d4b895]">
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
              <span className="opacity-50">- {featuredPost.category}</span>
            </div>
            <h1 className="mb-6 text-[40px] leading-[1.1] tracking-[-0.03em] lg:text-[64px]">
              {featuredPost.title}
            </h1>
            <p className="mb-8 text-lg leading-8 text-white/70">
              {featuredPost.description}
            </p>
            <PillButton href="#">Read full article</PillButton>
          </div>

          <div className="min-h-75 overflow-hidden border border-white/15 bg-black/20">
            <Image
              src={featuredPost.image}
              alt="Code Visualization"
              width={1200}
              height={900}
              className="h-full w-full object-cover opacity-60"
            />
          </div>
        </section>

        <section className="mt-24">
          <div className="flex flex-wrap gap-3 border-b border-white/15 pb-5">
            {blogFilters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={[
                  "cursor-pointer rounded-full border px-5 py-2 font-mono text-xs transition-all duration-300",
                  index === 0
                    ? "border-[#d4b895] bg-[#d4b895]/5 text-[#d4b895]"
                    : "border-white/15 bg-transparent text-white/70 hover:border-[#d4b895] hover:bg-[#d4b895]/5 hover:text-[#d4b895]",
                ].join(" ")}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-15 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogArticles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </section>

        <div className="my-24 flex justify-center gap-5">
          <PillButton href="#" secondary>
            Older Posts
          </PillButton>
        </div>
      </Container>

      <Container className="pb-16">
        <footer className="flex items-center justify-between border-t border-white/15 pt-10">
          <div className="text-xl font-semibold tracking-[-0.02em] opacity-50">
            LAKSHYA
          </div>
          <p className="font-mono text-xs text-white/70">
            © 2024 / ARCHITECTING DIGITAL EXPERIENCES
          </p>
        </footer>
      </Container>
    </PageShell>
  );
}
