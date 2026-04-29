"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem, scaleIn } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import type { Room } from "@/lib/constants";

interface AccommodationContentProps {
  rooms: Room[];
}

export function AccommodationContent({ rooms }: AccommodationContentProps): JSX.Element {
  return (
    <section className="bg-[var(--cream)]" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
      <div className="section-container space-y-24">
        {rooms.map((room, index) => {
          const reversed = index % 2 !== 0;
          return (
            <div
              key={room.slug}
              className={`grid items-center gap-12 md:grid-cols-2 ${reversed ? "md:[direction:rtl]" : ""}`}
            >
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="md:[direction:ltr]"
              >
                <Image
                  src={room.image}
                  alt={room.name}
                  width={1000}
                  height={750}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius-md)" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                variants={fadeUpContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="md:[direction:ltr]"
              >
                <motion.div variants={fadeUpItem}>
                  <Eyebrow>{room.name}</Eyebrow>
                </motion.div>

                <motion.h2 variants={fadeUpItem} className="text-h1 mt-2 text-[var(--text-primary)]">
                  {room.name}
                </motion.h2>

                <motion.p variants={fadeUpItem} className="text-body mt-2">
                  {room.units} unit(s) &nbsp;|&nbsp; {room.priceFrom}
                </motion.p>

                <motion.p variants={fadeUpItem} className="text-body mt-4">
                  {room.description}
                </motion.p>

                <motion.ul variants={fadeUpItem} className="mt-6 space-y-2">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-[0.875rem] leading-[1.9] text-[var(--text-secondary)]"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}
                    >
                      <span className="text-[var(--gold)]">&mdash;</span> {feature}
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUpItem} className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary" href="/contact">Book This Room</Button>
                  <Button variant="tertiary" href="/gallery">View Gallery</Button>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
