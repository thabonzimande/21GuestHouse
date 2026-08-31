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
              className={`grid items-start gap-8 md:grid-cols-[minmax(280px,400px)_1fr] md:gap-10 lg:gap-12 ${reversed ? "md:[direction:rtl]" : ""}`}
            >
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex w-full max-w-[400px] flex-col gap-4 md:[direction:ltr]"
              >
                {room.images.map((src, imageIndex) => (
                  <div
                    key={src}
                    className="relative h-52 w-full overflow-hidden sm:h-56"
                    style={{ borderRadius: "var(--radius-md)" }}
                  >
                    <Image
                      src={src}
                      alt={`${room.name} — photo ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="400px"
                      priority={imageIndex === 0}
                    />
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUpContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="min-w-0 md:[direction:ltr]"
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
