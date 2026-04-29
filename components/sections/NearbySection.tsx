"use client";

import { motion } from "framer-motion";
import { slideInLeft, scaleIn } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { nearbyAttractions } from "@/lib/constants";

const iconMap: Record<string, string> = {
  shopping: "🛍",
  nature: "🌿",
  dining: "🍽",
  activities: "🏎"
};

export function NearbySection(): JSX.Element {
  return (
    <section className="bg-white" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
      <div className="section-container grid items-start gap-16 md:grid-cols-[55fr_45fr]">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Eyebrow>Location</Eyebrow>
          <h2 className="text-h2 mt-2 text-[var(--text-primary)]">Perfectly placed in the Natal Midlands</h2>
          <p className="text-body mt-4 mb-9">
            21 Mayors Walk Road puts you within easy reach of Pietermaritzburg&apos;s
            best attractions, shopping, dining, and nature.
          </p>

          {nearbyAttractions.map((category) => (
            <div key={category.heading} className="mb-6">
              <p
                className="mb-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[var(--text-tertiary)]"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                {category.heading}
              </p>
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b border-[var(--border-subtle)] py-[10px]"
                >
                  <span className="flex items-center gap-2 text-[0.875rem] text-[var(--text-primary)]" style={{ fontFamily: "var(--font-body), sans-serif" }}>
                    <span className="text-[var(--gold)]">{iconMap[category.icon]}</span>
                    {item.name}
                  </span>
                  <span className="text-[0.75rem] text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-body), sans-serif" }}>
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <iframe
            title="@21 Guest House location"
            src="https://www.google.com/maps?q=21+Mayors+Walk+Road,+Pietermaritzburg,+South+Africa&output=embed"
            className="w-full border border-[var(--border-subtle)]"
            style={{
              aspectRatio: "1 / 1",
              borderRadius: "var(--radius-lg)"
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
