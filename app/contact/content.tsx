"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { contact } from "@/lib/constants";

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputStyles = [
  "w-full border-0 border-b border-[var(--border)] bg-transparent py-3",
  "text-[1.1rem] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]",
  "transition-colors duration-[var(--duration-fast)]",
  "focus:border-b-[var(--gold)] focus:outline-none"
].join(" ");

const labelStyles = "block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[var(--gold)]";

const contactItems = [
  { icon: "📍", label: "Address", value: contact.address },
  { icon: "📞", label: "Phone", value: `${contact.phones[0]} | ${contact.phones[1]}` },
  { icon: "✉", label: "Email", value: contact.email },
  { icon: "🕐", label: "Check-in", value: "Flexible — contact us for arrangements" },
  { icon: "🅿", label: "Parking", value: "Complimentary private parking" }
];

export function ContactContent(): JSX.Element {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (values: ContactFormValues): Promise<void> => {
    const response = await fetch("https://formspree.io/f/REPLACE", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      throw new Error("Failed to submit");
    }

    setStatus("success");
    reset();
  };

  return (
    <Section background="cream" className="!pt-[calc(80px+var(--space-section))]">
      <div className="grid items-start gap-16 md:grid-cols-2">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUpItem}>
            <Eyebrow>Get In Touch</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUpItem} className="text-h1 mt-2 text-[var(--text-primary)]">
            We&apos;d love to hear from you
          </motion.h2>

          {status === "success" ? (
            <motion.div variants={fadeUpItem} className="mt-12">
              <p className="text-[2rem] text-[var(--gold)]">&#10003;</p>
              <p className="text-h3 mt-4 text-[var(--text-primary)]">Message sent!</p>
              <p className="text-body mt-2">
                We&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(async (values) => {
                try {
                  await onSubmit(values);
                } catch {
                  setStatus("error");
                }
              })}
              className="mt-10 space-y-8"
            >
              <div>
                <label htmlFor="fullName" className={labelStyles}>Full Name</label>
                <input id="fullName" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("fullName")} />
                {errors.fullName && <p className="mt-1 text-[0.75rem] text-red-600">{errors.fullName.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className={labelStyles}>Email</label>
                <input id="email" type="email" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("email")} />
                {errors.email && <p className="mt-1 text-[0.75rem] text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className={labelStyles}>Phone (optional)</label>
                <input id="phone" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("phone")} />
              </div>

              <div>
                <label htmlFor="message" className={labelStyles}>Message</label>
                <textarea id="message" rows={4} className={`${inputStyles} resize-none`} style={{ fontFamily: "var(--font-display), serif" }} {...register("message")} />
                {errors.message && <p className="mt-1 text-[0.75rem] text-red-600">{errors.message.message}</p>}
              </div>

              <Button variant="primary" type="submit" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="text-center text-[0.75rem] text-red-600">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          )}
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="space-y-6">
            {contactItems.map((item) => (
              <motion.div key={item.label} variants={fadeUpItem} className="flex items-start gap-4">
                <span className="mt-1 text-[1.25rem] text-[var(--gold)]">{item.icon}</span>
                <div>
                  <p className="text-eyebrow">{item.label}</p>
                  <p
                    className="mt-1 text-[0.875rem] text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <iframe
              title="@21 Guest House location"
              src="https://www.google.com/maps?q=21+Mayors+Walk+Road,+Pietermaritzburg,+South+Africa&output=embed"
              className="w-full border border-[var(--border-subtle)]"
              style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius-lg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
