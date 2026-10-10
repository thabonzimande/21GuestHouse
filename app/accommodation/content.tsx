"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem, scaleIn } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { dinnerBedBreakfast, formatRand, formatRoomPrice } from "@/lib/constants";
import type { Room } from "@/lib/constants";

interface AccommodationContentProps {
  rooms: Room[];
}

export function AccommodationContent({ rooms }: AccommodationContentProps): JSX.Element {
  return (
    <section className="bg-[var(--cream)]" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
      <div className="section-container space-y-24">
        {rooms.length === 0 && (
          <p className="text-body text-center">
            Room details are unavailable right now. Please contact us for rates and availability.
          </p>
        )}
        {rooms.map((room, index) => {
          const reversed = index % 2 !== 0;

          return (
            <div
              key={room.id}
              id={room.slug}
              className={`grid scroll-mt-28 items-start gap-8 md:grid-cols-[minmax(300px,520px)_1fr] md:gap-10 lg:gap-12 ${reversed ? "md:[direction:rtl]" : ""}`}
            >
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex w-full max-w-[520px] flex-col gap-4 md:[direction:ltr]"
              >
                {room.images.map((src, imageIndex) => (
                  <div
                    key={src}
                    className="relative h-64 w-full overflow-hidden sm:h-80"
                    style={{ borderRadius: "var(--radius-md)" }}
                  >
                    <Image
                      src={src}
                      alt={`${room.name} — photo ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 520px"
                      unoptimized={src.startsWith("http")}
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
                  {room.units !== null && <>{room.units} unit(s) &nbsp;|&nbsp; </>}
                  {room.beds !== null && <>{room.beds} bed(s) &nbsp;|&nbsp; </>}
                  {room.sizeSqm !== null && <>{room.sizeSqm} m² &nbsp;|&nbsp; </>}
                  {formatRoomPrice(room)}
                </motion.p>

                <motion.p variants={fadeUpItem} className="text-body mt-4">
                  {room.description}
                </motion.p>

                <motion.div variants={fadeUpItem} className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {room.amenities.map((category) => (
                    <div key={category.heading}>
                      <p className="text-eyebrow">{category.heading}</p>
                      <ul className="mt-2">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="text-[0.875rem] leading-[1.9] text-[var(--text-secondary)]"
                            style={{ fontFamily: "var(--font-body), sans-serif" }}
                          >
                            <span className="text-[var(--gold)]">&mdash;</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUpItem} className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary" href="/book">Book This Room</Button>
                  <Button variant="tertiary" href="/gallery">View Gallery</Button>
                </motion.div>
              </motion.div>
            </div>
          );
        })}

        <div className="border border-[var(--border)] bg-white p-8 md:flex md:items-center md:justify-between md:gap-8" style={{ borderRadius: "var(--radius-md)" }}>
          <div>
            <Eyebrow>Package Rate</Eyebrow>
            <h3 className="text-h2 mt-2 text-[var(--text-primary)]">{dinnerBedBreakfast.name}</h3>
            <p className="text-body mt-2">{dinnerBedBreakfast.description}</p>
          </div>
          <div className="mt-6 shrink-0 md:mt-0 md:text-right">
            <p className="text-h2 text-[var(--text-primary)]">
              {formatRand(dinnerBedBreakfast.price)}
              {dinnerBedBreakfast.unit ? ` ${dinnerBedBreakfast.unit}` : ""}
            </p>
            <div className="mt-4">
              <Button variant="primary" href="/contact">Enquire</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
