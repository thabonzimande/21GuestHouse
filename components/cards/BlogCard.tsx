"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import type { BlogPost } from "@/lib/constants";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps): JSX.Element {
  return (
    <motion.article
      variants={fadeUpItem}
      className="group cursor-pointer overflow-hidden border border-[var(--border-subtle)] bg-white transition-all duration-[var(--duration-base)]"
      style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}
      whileHover={{
        y: -6,
        boxShadow: "var(--shadow-card-hover)",
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-luxury)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-eyebrow">{post.category}</p>
        <h3 className="text-h3 mt-2 text-[var(--text-primary)]">{post.title}</h3>
        <p className="text-body mt-3">{post.excerpt}</p>
        <p className="text-caption mt-3">{new Date(post.date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}</p>
        <div className="mt-4">
          <Button variant="tertiary" href={`/blog/${post.slug}`}>
            Read More
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
