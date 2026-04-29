"use client";

import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";
import type { Testimonial } from "@/lib/constants";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps): JSX.Element {
  return (
    <motion.article
      variants={fadeUpItem}
      className="relative border border-[var(--border-subtle)] bg-white"
      style={{
        borderRadius: "var(--radius-md)",
        padding: "36px 32px"
      }}
    >
      <div
        className="pointer-events-none absolute select-none text-[5rem] leading-none text-[var(--gold)] opacity-[0.12]"
        style={{ top: "12px", left: "20px", fontFamily: "var(--font-display), serif" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <p className="text-[0.7rem] tracking-[0.15em] text-[var(--gold)]">&#9733;&#9733;&#9733;&#9733;&#9733;</p>

      <p
        className="mt-4 text-[1.05rem] italic leading-[1.75] text-[var(--text-primary)]"
        style={{ fontFamily: "var(--font-display), serif" }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <hr className="my-5 border-t border-[var(--border-subtle)]" />

      <p
        className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {testimonial.name}
      </p>
      <p
        className="mt-1 text-[0.7rem] text-[var(--gold)]"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {testimonial.rating}
      </p>
    </motion.article>
  );
}
