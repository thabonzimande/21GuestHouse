"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUpItem, fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function Hero(): JSX.Element {
  const { scrollY } = useScroll();
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setShowChevron(y < 100);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <section className="relative overflow-hidden" style={{ height: "100svh" }}>
      <Image
        src="/Hero1.jpeg"
        alt="@21 Guest House luxury interior"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(105deg, rgba(18,18,18,0.87) 0%, rgba(18,18,18,0.48) 55%, rgba(18,18,18,0.12) 100%)"
        }}
      />
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(8,6,3,0.45) 100%)"
        }}
      />

      <div
        className="absolute z-10"
        style={{
          bottom: "clamp(60px, 8vw, 100px)",
          left: "clamp(24px, 6vw, 120px)",
          maxWidth: "720px"
        }}
      >
        <motion.p
          variants={fadeUpItem}
          initial="hidden"
          animate="visible"
          className="mb-5 text-[0.65rem] font-medium tracking-[0.28em] uppercase"
          style={{
            color: "rgba(240, 235, 226, 0.55)",
            fontFamily: "var(--font-body), sans-serif"
          }}
        >
          Pietermaritzburg, KwaZulu-Natal
        </motion.p>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute hidden md:block"
            style={{
              left: "-20px",
              top: 0,
              height: "64px",
              width: "2px",
              background: "var(--gold)",
              transformOrigin: "bottom"
            }}
          />

          <div className="text-display text-white">
            <motion.span
              className="block"
              variants={fadeUpItem}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.08 }}
            >
              Where Every Stay
            </motion.span>
            <motion.span
              className="block"
              variants={fadeUpItem}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.16 }}
            >
              Becomes a Story
            </motion.span>
          </div>
        </div>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="mt-5 max-w-[460px] text-[1rem] font-normal leading-[1.65]"
          style={{
            color: "rgba(240, 235, 226, 0.72)",
            fontFamily: "var(--font-body), sans-serif"
          }}
        >
          A boutique guesthouse blending warm{" "}
          <em className="italic text-[var(--gold)]" style={{ fontFamily: "var(--font-display), serif" }}>
            luxury
          </em>{" "}
          with contemporary African sophistication.
        </motion.p>

        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button variant="primary" href="/contact">Book Your Stay</Button>
          <Button variant="secondary" href="/events-catering">Explore Events</Button>
        </motion.div>
      </div>

      {showChevron && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M2 5l6 6 6-6" />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
