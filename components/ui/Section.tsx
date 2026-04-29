import type { ReactNode } from "react";

type SectionBackground = "cream" | "cream-dark" | "cream-mid" | "white" | "charcoal" | "transparent";

interface SectionProps {
  background?: SectionBackground;
  className?: string;
  children: ReactNode;
  id?: string;
}

const bgMap: Record<SectionBackground, string> = {
  cream: "bg-[var(--cream)]",
  "cream-dark": "bg-[var(--cream-dark)]",
  "cream-mid": "bg-[var(--cream-mid)]",
  white: "bg-white",
  charcoal: "bg-[var(--charcoal)]",
  transparent: "bg-transparent"
};

export function Section({ background = "cream", className, children, id }: SectionProps): JSX.Element {
  return (
    <section
      id={id}
      className={`${bgMap[background]}${className ? ` ${className}` : ""}`}
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}
