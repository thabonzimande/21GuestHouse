import type { Metadata } from "next";
import { BlogContent } from "./content";

export const metadata: Metadata = {
  title: "Blog | @21 Guest House",
  description: "Stories, guides, and local inspiration from @21 Guest House in Pietermaritzburg."
};

export default function BlogPage(): JSX.Element {
  return <BlogContent />;
}
