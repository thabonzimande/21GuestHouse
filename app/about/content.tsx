"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem, scaleIn } from "@/lib/motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldRule } from "@/components/ui/GoldRule";

const team = [
  { name: "Mzi", role: "Operations & Guest Experience", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Brenda", role: "Events & Client Relations", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
  { name: "Sli", role: "Hospitality & Service Excellence", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" }
];

const values = [
  { icon: "🤝", title: "Warmth", body: "We greet every guest like family, creating connections that make your stay feel like home." },
  { icon: "✨", title: "Attention to Detail", body: "From sensor bathroom lighting to curated breakfast spreads — the little things matter." },
  { icon: "🏡", title: "Authentic Hospitality", body: "Rooted in KwaZulu-Natal tradition, we bring genuine care to every interaction." }
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
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
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
              <span className="text-[2rem] text-[var(--gold)]">{v.icon}</span>
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
