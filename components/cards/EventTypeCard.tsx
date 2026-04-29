"use client";

import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";

interface EventTypeCardProps {
  title: string;
  description: string;
  icon: string;
}

export function EventTypeCard({ title, description, icon }: EventTypeCardProps): JSX.Element {
  return (
    <motion.article
      variants={fadeUpItem}
      className="group border border-[var(--border-subtle)] bg-white p-8 transition-all duration-[var(--duration-base)]"
      style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}
      whileHover={{
        y: -4,
        boxShadow: "var(--shadow-card-hover)",
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <span className="text-[2rem] text-[var(--gold)]">{icon}</span>
      <h3 className="text-h3 mt-3 text-[var(--text-primary)]">{title}</h3>
      <p className="text-body mt-2">{description}</p>
    </motion.article>
  );
}
