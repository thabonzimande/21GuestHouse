"use client";

import { motion } from "framer-motion";

interface FormSuccessProps {
  title: string;
  message: string;
}

export function FormSuccess({ title, message }: FormSuccessProps): JSX.Element {
  return (
    <motion.div
      ref={(node: HTMLDivElement | null) => node?.scrollIntoView({ behavior: "smooth", block: "center" })}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="status"
      aria-live="polite"
      className="mt-12"
    >
      <p className="text-[2rem] text-[var(--gold)]">&#10003;</p>
      <p className="text-h3 mt-4 text-[var(--text-primary)]">{title}</p>
      <p className="text-body mt-2">{message}</p>
    </motion.div>
  );
}
