import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";

interface EventTypeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
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
      <div className="text-[var(--gold)]" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-h3 mt-4 text-[var(--text-primary)]">{title}</h3>
      <p className="text-body mt-2">{description}</p>
    </motion.article>
  );
}
