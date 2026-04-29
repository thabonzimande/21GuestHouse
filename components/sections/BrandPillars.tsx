"use client";

import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";
import { GoldRule } from "@/components/ui/GoldRule";

const pillars = [
  { label: "Accommodation", text: "Elegant rooms with modern comfort and flexible check-in" },
  { label: "Events", text: "Bespoke hosting for private and corporate gatherings" },
  { label: "Culinary", text: "Thoughtful catering and memorable dining experiences" }
];

export function BrandPillars(): JSX.Element {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-white" style={{ padding: "44px 0" }}>
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="section-container grid md:grid-cols-3"
      >
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.label}
            variants={fadeUpItem}
            className={`px-6 md:px-12 ${
              i < pillars.length - 1 ? "border-b border-[var(--border)] pb-6 md:border-b-0 md:border-r md:pb-0" : ""
            } ${i > 0 ? "pt-6 md:pt-0" : ""} text-center md:text-left`}
          >
            <GoldRule className="mx-auto mb-4 md:mx-0" />
            <p className="text-eyebrow">{pillar.label}</p>
            <p
              className="mt-2 text-[0.875rem] leading-[1.65] text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              {pillar.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
