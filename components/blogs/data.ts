import type { BlogArticle, FeaturedPost } from "./types";

export const blogFilters = ["All Posts", "React", "AI / ML", "Web3", "Career", "System Design"];

export const featuredPost: FeaturedPost = {
  date: "02 MAR 2024",
  readTime: "12 MIN READ",
  category: "ARCHITECTURE",
  title: "The transition from monolithic to micro-frontend architectures.",
  description:
    "Exploring the complexities of scaling large-scale React applications while maintaining developer velocity and deployment independence.",
  image:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
};

export const blogArticles: BlogArticle[] = [
  {
    date: "24 FEB 2024",
    readTime: "6 MIN",
    title: "Agentic Workflows in Production Environments",
    excerpt:
      "How we integrated LLM-based agents into automated enterprise compliance workflows without sacrificing reliability.",
  },
  {
    date: "15 FEB 2024",
    readTime: "8 MIN",
    title: "The Future of Web3 Interaction Patterns",
    excerpt:
      "Why account abstraction is the missing link for mainstream blockchain adoption and decentralized asset management.",
  },
  {
    date: "02 FEB 2024",
    readTime: "5 MIN",
    title: "Engineering Leadership: The First 90 Days",
    excerpt:
      "Reflecting on my transition from individual contributor to lead developer at Vercel and the lessons learned in technical mentorship.",
  },
  {
    date: "20 JAN 2024",
    readTime: "10 MIN",
    title: "Optimizing the Edge: Performance Beyond Borders",
    excerpt:
      "Deep dive into global latency reduction strategies and how to leverage Edge Functions for dynamic content.",
  },
  {
    date: "12 JAN 2024",
    readTime: "4 MIN",
    title: "Building Design Systems with Rust & WASM",
    excerpt:
      "Exploring the performance benefits of moving heavy UI computation to WebAssembly for complex data visualization components.",
  },
  {
    date: "05 JAN 2024",
    readTime: "7 MIN",
    title: "Atomic Design in Modern React Context",
    excerpt:
      "How to structure component libraries in 2024 to ensure maximum reusability across diverse product verticals.",
  },
];
