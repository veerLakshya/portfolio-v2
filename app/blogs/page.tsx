import type { Metadata } from "next";
import { BlogsPage } from "@/components/blogs/BlogsPage";

export const metadata: Metadata = {
  title: "Insights | Lakshya Veer Singh | Full-stack Developer",
  description: "Editorial insights and technical writing by Lakshya Veer Singh.",
};

export default function BlogsRoute() {
  return <BlogsPage />;
}
