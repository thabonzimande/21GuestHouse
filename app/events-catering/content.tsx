"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { fadeUpContainer, fadeUpItem, scaleIn } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { EventTypeCard } from "@/components/cards/EventTypeCard";

const eventTypes = [
  { title: "Birthday Celebrations", description: "Make your milestone unforgettable", icon: "🎂" },
  { title: "Baby Showers", description: "Celebrate new beginnings in style", icon: "🍼" },
  { title: "Corporate Functions", description: "Professional spaces for business events", icon: "💼" },
  { title: "Private Dinners", description: "Intimate dining experiences curated for you", icon: "🍷" },
  { title: "Anniversaries", description: "Mark your special moments together", icon: "💍" },
  { title: "Year-End Functions", description: "Close the year with celebration", icon: "🎉" }
];

const eventFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  eventType: z.string().min(1, "Please select an event type"),
  guestCount: z.string().min(1, "Expected guest count is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  details: z.string().optional()
});

type EventFormValues = z.infer<typeof eventFormSchema>;

const inputStyles = [
  "w-full border-0 border-b border-[var(--border)] bg-transparent py-3",
  "text-[1.1rem] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]",
  "transition-colors duration-[var(--duration-fast)]",
  "focus:border-b-[var(--gold)] focus:outline-none"
].join(" ");

const labelStyles = "block text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[var(--gold)]";

export function EventsCateringContent(): JSX.Element {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema)
  });

  const onSubmit = async (values: EventFormValues): Promise<void> => {
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
    <>
      <section className="bg-[var(--cream-dark)]" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="section-container">
          <div className="text-center">
            <Eyebrow>What We Host</Eyebrow>
            <h2 className="text-h1 mt-2 text-[var(--text-primary)]">Events for every occasion</h2>
          </div>

          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {eventTypes.map((et) => (
              <EventTypeCard key={et.title} {...et} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--cream)]" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="section-container grid items-center gap-16 md:grid-cols-2">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Image
              src="/Wine glasses.jpeg"
              alt="Catering at @21 Guest House"
              width={800}
              height={600}
              className="w-full object-cover"
              style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius-md)" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUpItem}>
              <Eyebrow>Catering</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeUpItem} className="text-h1 mt-2 text-[var(--text-primary)]">
              Culinary excellence,{" "}
              <em className="italic text-[var(--gold)]" style={{ fontFamily: "var(--font-display), serif" }}>
                crafted
              </em>{" "}
              for your guests
            </motion.h2>
            <motion.p variants={fadeUpItem} className="text-body mt-4">
              Our in-house chefs create bespoke menus tailored to your event style,
              guest count, and dietary requirements. From plated dinners to buffet spreads,
              every dish reflects our commitment to quality and presentation.
            </motion.p>
            <motion.div variants={fadeUpItem} className="mt-6">
              <Button variant="tertiary" href="/contact">Discuss Your Menu &rarr;</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="section-container mx-auto max-w-[680px]">
          <div className="text-center">
            <Eyebrow>Event Inquiry</Eyebrow>
            <h2 className="text-h1 mt-2 text-[var(--text-primary)]">Plan your event</h2>
          </div>

          {status === "success" ? (
            <div className="mt-12 text-center">
              <p className="text-[2rem] text-[var(--gold)]">&#10003;</p>
              <p className="text-h3 mt-4 text-[var(--text-primary)]">Thank you!</p>
              <p className="text-body mt-2">
                We&apos;ve received your inquiry and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(async (values) => {
                try {
                  await onSubmit(values);
                } catch {
                  setStatus("error");
                }
              })}
              className="mt-12 space-y-8"
            >
              <div>
                <label htmlFor="fullName" className={labelStyles}>Full Name</label>
                <input id="fullName" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("fullName")} />
                {errors.fullName && <p className="mt-1 text-[0.75rem] text-red-600">{errors.fullName.message}</p>}
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelStyles}>Email</label>
                  <input id="email" type="email" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("email")} />
                  {errors.email && <p className="mt-1 text-[0.75rem] text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelStyles}>Phone</label>
                  <input id="phone" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("phone")} />
                  {errors.phone && <p className="mt-1 text-[0.75rem] text-red-600">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="eventType" className={labelStyles}>Event Type</label>
                  <select id="eventType" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("eventType")}>
                    <option value="">Select type</option>
                    {eventTypes.map((et) => (
                      <option key={et.title} value={et.title}>{et.title}</option>
                    ))}
                  </select>
                  {errors.eventType && <p className="mt-1 text-[0.75rem] text-red-600">{errors.eventType.message}</p>}
                </div>
                <div>
                  <label htmlFor="guestCount" className={labelStyles}>Expected Guests</label>
                  <input id="guestCount" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("guestCount")} />
                  {errors.guestCount && <p className="mt-1 text-[0.75rem] text-red-600">{errors.guestCount.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className={labelStyles}>Preferred Date</label>
                <input id="preferredDate" type="date" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("preferredDate")} />
                {errors.preferredDate && <p className="mt-1 text-[0.75rem] text-red-600">{errors.preferredDate.message}</p>}
              </div>

              <div>
                <label htmlFor="details" className={labelStyles}>Additional Details</label>
                <textarea id="details" rows={4} className={`${inputStyles} resize-none`} style={{ fontFamily: "var(--font-display), serif" }} {...register("details")} />
              </div>

              <Button variant="primary" type="submit" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>

              {status === "error" && (
                <p className="text-center text-[0.75rem] text-red-600">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  );
}
