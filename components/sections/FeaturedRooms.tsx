"use client";

import { motion } from "framer-motion";
import { fadeUpContainer } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RoomCard } from "@/components/cards/RoomCard";
import { rooms } from "@/lib/constants";

export function FeaturedRooms(): JSX.Element {
  return (
    <section className="bg-[var(--cream-dark)]" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Featured Rooms</Eyebrow>
            <h2 className="text-h1 mt-2 text-[var(--text-primary)]">Stay in refined comfort</h2>
          </div>
          <Button variant="tertiary" href="/accommodation">View all rooms &rarr;</Button>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-8 md:grid-cols-2"
        >
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
