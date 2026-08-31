"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem, scaleIn } from "@/lib/motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldRule } from "@/components/ui/GoldRule";

const team = [
  { name: "Mzi", role: "Operations & Guest Experience", initials: "M" },
  { name: "Brenda", role: "Events & Client Relations", initials: "B" },
  { name: "Sli", role: "Hospitality & Service Excellence", initials: "S" }
];

function IconFrame({ children }: { children: ReactNode }): JSX.Element {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function WarmthIcon(): JSX.Element {
  return (
    <IconFrame>
      <path d="M16 26s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 24 15c0 5.8-8 11-8 11z" />
    </IconFrame>
  );
}

function DetailIcon(): JSX.Element {
  return (
    <IconFrame>
      <circle cx="14" cy="14" r="6" />
      <path d="M19 19l5 5" />
      <path d="M12 14h4M14 12v4" />
    </IconFrame>
  );
}

function HospitalityIcon(): JSX.Element {
  return (
    <IconFrame>
      <path d="M6 26V14l10-8 10 8v12" />
      <path d="M12 26v-8h8v8" />
    </IconFrame>
  );
}

const values = [
  {
    icon: <WarmthIcon />,
    title: "Warmth",
    body: "We greet every guest like family, creating connections that make your stay feel like home."
  },
  {
    icon: <DetailIcon />,
    title: "Attention to Detail",
    body: "From sensor bathroom lighting to curated breakfast spreads — the little things matter."
  },
  {
    icon: <HospitalityIcon />,
    title: "Authentic Hospitality",
    body: "Rooted in KwaZulu-Natal tradition, we bring genuine care to every interaction."
  }
];

export function AboutContent(): JSX.Element {
  return (
    <>
      <Section background="cream">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUpItem}>
              <Eyebrow>Our Story</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeUpItem} className="text-h1 mt-2 text-[var(--text-primary)]">
              A Story Built on<br />
              <em className="italic text-[var(--gold)]" style={{ fontFamily: "var(--font-display), serif" }}>
                Warmth
              </em>{" "}
              and Detail
            </motion.h2>
            <motion.p variants={fadeUpItem} className="text-body mt-6">
              @21 Guest House is a boutique destination in the heart of Pietermaritzburg,
              where guests experience warm service, elegant spaces, and meaningful local connection.
              Built on a foundation of genuine hospitality, we&apos;ve created a space that feels
              both luxurious and welcoming.
            </motion.p>
            <motion.div variants={fadeUpItem}>
              <GoldRule width={48} className="my-6" />
            </motion.div>
            <motion.p variants={fadeUpItem} className="text-body">
              Our team — Mzi, Brenda, and Sli — brings years of dedication to personalized
              care. Every room, every meal, and every event is crafted with the same commitment
              to making your experience unforgettable.
            </motion.p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Image
              src="/Vases.jpg.jpeg"
              alt="@21 Guest House interior"
              width={640}
              height={800}
              className="w-full object-cover"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "var(--radius-md)",
                boxShadow: "20px 20px 0px var(--cream-dark)"
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center">
          <Eyebrow>Meet the Team</Eyebrow>
          <h2 className="text-h1 mt-2 text-[var(--text-primary)]">The people behind your experience</h2>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUpItem}
              className="text-center"
            >
              <div
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[var(--border)]"
                style={{ background: "var(--gold-pale)" }}
                aria-hidden="true"
              >
                <span
                  className="text-[2.5rem] font-light text-[var(--gold)]"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  {member.initials}
                </span>
              </div>
              <h3
                className="mt-5 text-[1.5rem] font-light text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                {member.name}
              </h3>
              <p
                className="mt-1 text-[0.82rem] text-[var(--text-secondary)]"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section background="cream-dark">
        <div className="text-center">
          <Eyebrow>Our Values</Eyebrow>
          <h2 className="text-h1 mt-2 text-[var(--text-primary)]">What guides us</h2>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUpItem}
              className="text-center"
            >
              <div className="flex justify-center text-[var(--gold)]">{v.icon}</div>
              <h3
                className="mt-3 text-[1.5rem] font-semibold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                {v.title}
              </h3>
              <p className="text-body mt-3">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
