"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  numericEnd: number;
  suffix: string;
}

const stats: Stat[] = [
  { value: "9+", label: "Rooms Available", numericEnd: 9, suffix: "+" },
  { value: "5★", label: "Average Guest Rating", numericEnd: 5, suffix: "★" },
  { value: "3", label: "Service Categories", numericEnd: 3, suffix: "" },
  { value: "24hr", label: "Front Desk Support", numericEnd: 24, suffix: "hr" }
];

function AnimatedStat({ stat }: { stat: Stat }): JSX.Element {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const duration = 1200;

          const tick = (now: number): void => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * stat.numericEnd));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.numericEnd]);

  return (
    <div ref={ref} className="text-center">
      <p
        className="text-[3rem] font-light text-[var(--charcoal)]"
        style={{ fontFamily: "var(--font-display), serif" }}
      >
        {count}{stat.suffix}
      </p>
      <p
        className="mt-[6px] text-[0.7rem] font-medium tracking-[0.2em] uppercase"
        style={{ color: "rgba(26, 26, 26, 0.65)", fontFamily: "var(--font-body), sans-serif" }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export function StatBar(): JSX.Element {
  return (
    <section className="bg-[var(--gold)]" style={{ padding: "48px 0" }}>
      <div className="section-container grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center ${
              i < stats.length - 1
                ? "border-b border-[rgba(26,26,26,0.15)] pb-8 md:border-b-0 md:border-r md:pb-0"
                : ""
            }`}
          >
            <AnimatedStat stat={stat} />
          </div>
        ))}
      </div>
    </section>
  );
}
