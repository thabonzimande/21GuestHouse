"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem, scaleIn } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldRule } from "@/components/ui/GoldRule";
import { Button } from "@/components/ui/Button";

export function WelcomeSection(): JSX.Element {
  return (
    <section className="bg-[var(--cream)]" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
      <div className="section-container grid items-center gap-12 md:grid-cols-[45fr_55fr]" style={{ gap: "clamp(48px, 6vw, 96px)" }}>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Image
            src="/Vases.jpg.jpeg"
            alt="@21 Guest House interior"
            width={640}
            height={800}
            className="w-full object-cover"
            style={{
              aspectRatio: "4 / 5",
              borderRadius: "var(--radius-md)",
              boxShadow: "20px 20px 0px var(--cream-dark)"
            }}
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute hidden select-none md:block"
            style={{
              top: "-20px",
              left: "-12px",
              fontSize: "9rem",
              color: "var(--gold)",
              opacity: 0.12,
              lineHeight: 1,
              fontFamily: "var(--font-display), serif"
            }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <motion.div variants={fadeUpItem}>
            <Eyebrow>Welcome</Eyebrow>
          </motion.div>

          <motion.h2 variants={fadeUpItem} className="text-h1 mt-3 text-[var(--text-primary)]">
            An unforgettable blend of comfort,<br />
            <em className="italic text-[var(--gold)]" style={{ fontFamily: "var(--font-display), serif" }}>
              luxury
            </em>
            , and care.
          </motion.h2>

          <motion.p variants={fadeUpItem} className="text-body mt-6">
            @21 Guest House offers premium stays with modern finishes, flexible check-in,
            24-hour front desk support, room service, complimentary parking, and a peaceful
            garden setting &mdash; all in the heart of Pietermaritzburg&apos;s Natal Midlands.
          </motion.p>

          <motion.div variants={fadeUpItem}>
            <GoldRule width={48} className="my-6" />
          </motion.div>

          <motion.p variants={fadeUpItem} className="text-body">
            Whether you&apos;re here for a weekend escape, a business trip, or a celebration
            worth remembering &mdash; every detail has been curated with you in mind.
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-4">
            <Button variant="tertiary" href="/about">Discover Our Story &rarr;</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
