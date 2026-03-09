import type { Experience, Project, StackLayer, ValueItem } from "./types";

export const projects: Project[] = [
  {
    id: "01",
    title: "Vantage",
    description:
      "Real-time analytics dashboard for high-frequency trading platforms.",
    tags: ["React", "TypeScript", "WebSockets", "D3.js"],
  },
  {
    id: "02",
    title: "Styra AI",
    description:
      "Generative AI interface for automated enterprise compliance workflows.",
    tags: ["Next.js", "OpenAI API", "Tailwind", "Python"],
  },
  {
    id: "03",
    title: "Lumina",
    description:
      "Decentralized asset management protocol with focus on security.",
    tags: ["Solidity", "Rust", "Web3.js", "GraphQL"],
  },
];

export const stackLayers: StackLayer[] = [
  {
    id: "Layer 01",
    title: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconPath: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 18",
  },
  {
    id: "Layer 02",
    title: "Backend",
    items: ["Node.js / Express", "Python / Django", "PostgreSQL", "Redis"],
    iconPath:
      "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  },
  {
    id: "Layer 03",
    title: "DevOps",
    items: ["AWS / GCP", "Docker", "Kubernetes", "CI/CD Pipelines"],
    iconPath:
      "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  },
  {
    id: "Layer 04",
    title: "Tooling",
    items: ["Git / GitHub", "Figma", "Jest / Cypress", "Vercel"],
    iconPath:
      "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
];

export const values: ValueItem[] = [
  {
    title: "Clean.",
    text: "Maintainable codebases that scale with the product and survive technical debt.",
  },
  {
    title: "Fast.",
    text: "Obsessed with performance metrics, load times, and interaction fluidity.",
  },
  {
    title: "Intuitive.",
    text: "Bridging the gap between complex logic and simple, human interfaces.",
  }
];

export const experience: Experience[] = [
  {
    period: "Jun 2025 — PRES",
    role: "Frontend Intern",
    company: "Flam AI",
    companyUrl: "https://flamapp.ai",
    details:
      "Part of the core platform team. Re-architected multiple dashboards integrating AI-driven pipelines.",
  },
];
