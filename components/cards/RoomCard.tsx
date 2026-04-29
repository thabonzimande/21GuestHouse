"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import type { Room } from "@/lib/constants";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps): JSX.Element {
  return (
    <motion.article
      variants={fadeUpItem}
      className="group cursor-pointer overflow-hidden border border-[var(--border-subtle)] bg-white transition-all duration-[var(--duration-base)]"
      style={{
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-card)"
      }}
      whileHover={{
        y: -6,
        boxShadow: "var(--shadow-card-hover)",
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-luxury)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-7 pb-6">
        <h3 className="text-h3 text-[var(--text-primary)]">{room.name}</h3>
        <p
          className="mt-1 text-[0.75rem] tracking-[0.04em] text-[var(--text-tertiary)]"
          style={{ fontFamily: "var(--font-body), sans-serif" }}
        >
          {room.priceFrom}
        </p>

        <hr className="my-[18px] border-t border-[var(--border-subtle)]" />

        <ul className="space-y-1">
          {room.features.slice(0, 5).map((feature) => (
            <li
              key={feature}
              className="text-[0.875rem] leading-[1.9] text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              <span className="text-[var(--gold)]">&mdash;</span> {feature}
            </li>
          ))}
        </ul>

        <hr className="my-[18px] border-t border-[var(--border-subtle)]" />

        <Button variant="tertiary" href={`/accommodation/${room.slug}`}>
          View Room
        </Button>
      </div>
    </motion.article>
  );
}
