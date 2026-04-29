import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

import { Button } from "@/components/ui/Button";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams(): { slug: string }[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | @21 Guest House Blog`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps): JSX.Element {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden" style={{ height: "50vh" }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(to bottom, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.75) 100%)"
          }}
        />
        <div className="absolute inset-0 z-[2] flex items-end">
          <div className="section-container pb-16">
            <p className="text-eyebrow text-[var(--gold)]">{post.category}</p>
            <h1 className="text-h1 mt-2 max-w-[720px] text-white">{post.title}</h1>
            <p
              className="mt-3 text-[0.82rem] text-white/50"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              {new Date(post.date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <Section background="cream">
        <div className="mx-auto max-w-[720px]">
          <p className="text-body leading-[1.85]">
            {post.excerpt}
          </p>
          <p className="text-body mt-6 leading-[1.85]">
            This article is coming soon. In the meantime, reach out to our team for
            personalised recommendations and local insights during your stay at @21 Guest House.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">Contact Us</Button>
            <Button variant="tertiary" href="/blog">&larr; Back to Blog</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
