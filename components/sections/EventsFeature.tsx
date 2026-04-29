"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function EventsFeature(): JSX.Element {
  return (
    <section
      className="relative overflow-hidden border-t-[3px] border-[var(--gold)]"
      style={{ minHeight: "60vh" }}
    >
      <Image
        src="/Wine glasses.jpeg"
        alt="Events and catering at @21"
        fill
        className="object-cover"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(18,18,18,0.94) 0%, rgba(18,18,18,0.94) 38%, rgba(18,18,18,0.6) 65%, rgba(18,18,18,0.18) 100%)"
        }}
      />

      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-[2]"
        style={{
          padding: "var(--space-section) clamp(24px, 6vw, 120px)"
        }}
      >
        <div className="max-w-[560px]">
          <motion.div variants={fadeUpItem}>
            <Eyebrow>Events &amp; Catering</Eyebrow>
          </motion.div>

          <motion.h2 variants={fadeUpItem} className="text-h1 mt-3 text-white">
            Moments made<br />beautifully memorable.
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="mt-5 text-[0.9375rem] leading-[1.75]"
            style={{ color: "rgba(255,255,255,0.68)", fontFamily: "var(--font-body), sans-serif" }}
          >
            From intimate celebrations to corporate functions, our events and catering
            team delivers elegant spaces, curated menus, and the kind of attention to
            detail that turns occasions into memories.
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-8">
            <Button variant="primary" href="/events-catering">Plan Your Event</Button>
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            className="mt-5 text-[0.68rem] tracking-[0.22em] uppercase"
            style={{ color: "rgba(240, 235, 226, 0.38)", fontFamily: "var(--font-body), sans-serif" }}
          >
            Birthdays &nbsp;&middot;&nbsp; Baby Showers &nbsp;&middot;&nbsp; Corporate Functions &nbsp;&middot;&nbsp; Private Dinners
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
