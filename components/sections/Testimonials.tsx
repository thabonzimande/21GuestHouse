"use client";

import { motion } from "framer-motion";
import { fadeUpContainer } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function Testimonials(): JSX.Element {
  return (
    <section className="bg-[var(--cream)]" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
      <div className="section-container">
        <div className="text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="text-h1 mt-2 text-[var(--text-primary)]">What our guests say</h2>
          <p className="mt-3 text-[0.9rem] tracking-[0.25em] text-[var(--gold)]">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
