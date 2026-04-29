"use client";

import { motion } from "framer-motion";
import { fadeUpContainer } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BlogCard } from "@/components/cards/BlogCard";
import { blogPosts } from "@/lib/constants";

export function BlogContent(): JSX.Element {
  return (
    <section
      className="bg-[var(--cream)]"
      style={{ paddingTop: "calc(80px + var(--space-section))", paddingBottom: "var(--space-section)" }}
    >
      <div className="section-container">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="text-h1 mt-2 text-[var(--text-primary)]">Stories from the Midlands</h1>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
