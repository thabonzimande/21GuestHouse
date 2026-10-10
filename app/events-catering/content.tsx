"use client";

import type { ReactNode } from "react";
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
import { FormSuccess } from "@/components/ui/FormSuccess";
import {
  conferencePackages,
  conferencePriceUnit,
  eventsGoogleForm,
  eventTypeOptions,
  expectedGuestOptions,
  formatRand
} from "@/lib/constants";
import { inputStyles, labelStyles } from "@/lib/form-styles";
import { googleFormOtherOption, submitGoogleForm } from "@/lib/google-forms";

function IconFrame({ children }: { children: ReactNode }): JSX.Element {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

function BirthdayIcon(): JSX.Element {
  return (
    <IconFrame>
      <path d="M10 14h12v12H10z" />
      <path d="M10 20h12" />
      <path d="M16 8v4" />
      <path d="M16 6.5c0-.8.4-1.5 0-1.5s0 .7 0 1.5" />
      <path d="M12 11h8" />
    </IconFrame>
  );
}

function BabyShowerIcon(): JSX.Element {
  return (
    <IconFrame>
      <circle cx="16" cy="12" r="4" />
      <path d="M10 26c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M12 16.5c-2.2.8-3.5 2.4-3.5 4.5" />
      <path d="M20 16.5c2.2.8 3.5 2.4 3.5 4.5" />
    </IconFrame>
  );
}

function CorporateIcon(): JSX.Element {
  return (
    <IconFrame>
      <rect x="8" y="12" width="16" height="12" rx="1" />
      <path d="M12 12V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <path d="M8 18h16" />
      <path d="M14 16v2M18 16v2" />
    </IconFrame>
  );
}

function DinnerIcon(): JSX.Element {
  return (
    <IconFrame>
      <path d="M12 6v12" />
      <path d="M10 6c0 2.2 1 4 2 4s2-1.8 2-4" />
      <path d="M12 18v6M10 24h4" />
      <path d="M20 6v8a2 2 0 0 0 2 2" />
      <path d="M22 16v8M20 24h4" />
    </IconFrame>
  );
}

function AnniversaryIcon(): JSX.Element {
  return (
    <IconFrame>
      <path d="M16 26s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 24 15c0 5.8-8 11-8 11z" />
    </IconFrame>
  );
}

function YearEndIcon(): JSX.Element {
  return (
    <IconFrame>
      <circle cx="16" cy="16" r="7" />
      <path d="M16 9v7l4 2" />
      <path d="M16 4v3M16 25v3M4 16h3M25 16h3" />
    </IconFrame>
  );
}

interface EventType {
  title: string;
  description: string;
  icon: ReactNode;
}

const eventTypes: EventType[] = [
  { title: "Birthday Celebrations", description: "Make your milestone unforgettable", icon: <BirthdayIcon /> },
  { title: "Baby Showers", description: "Celebrate new beginnings in style", icon: <BabyShowerIcon /> },
  { title: "Corporate Functions", description: "Professional spaces for business events", icon: <CorporateIcon /> },
  { title: "Private Dinners", description: "Intimate dining experiences curated for you", icon: <DinnerIcon /> },
  { title: "Anniversaries", description: "Mark your special moments together", icon: <AnniversaryIcon /> },
  { title: "Year-End Functions", description: "Close the year with celebration", icon: <YearEndIcon /> }
];

const eventFormSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    email: z.string().email("Valid email is required"),
    eventType: z.string(),
    eventTypeOther: z.string(),
    date: z.string(),
    phone: z.string(),
    guests: z.string(),
    details: z.string()
  })
  .refine((values) => values.eventType !== googleFormOtherOption || values.eventTypeOther.trim().length > 0, {
    message: "Please describe your event",
    path: ["eventTypeOther"]
  });

type EventFormValues = z.infer<typeof eventFormSchema>;

export function EventsCateringContent(): JSX.Element {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    // eventTypeOther is only mounted when "Other" is selected, so it needs an initial value to pass validation.
    defaultValues: { name: "", surname: "", email: "", eventType: "", eventTypeOther: "", date: "", phone: "", guests: "", details: "" }
  });
  const isOtherEventType: boolean = watch("eventType") === googleFormOtherOption;

  const onSubmit = async (values: EventFormValues): Promise<void> => {
    await submitGoogleForm(eventsGoogleForm, {
      ...values,
      eventTypeOther: values.eventType === googleFormOtherOption ? values.eventTypeOther : ""
    });
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
              <EventTypeCard key={et.title} title={et.title} description={et.description} icon={et.icon} />
            ))}
          </motion.div>

          <div className="mt-24 text-center">
            <Eyebrow>Conference Booking</Eyebrow>
            <h2 className="text-h1 mt-2 text-[var(--text-primary)]">Conference packages</h2>
          </div>

          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mt-14 grid max-w-[820px] gap-6 sm:grid-cols-2"
          >
            {conferencePackages.map((pkg) => (
              <motion.article
                key={pkg.price}
                variants={fadeUpItem}
                className="border border-[var(--border-subtle)] bg-white p-8 text-center"
                style={{ borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}
              >
                <p className="text-h2 text-[var(--text-primary)]">
                  {formatRand(pkg.price)}{" "}
                  <span className="text-eyebrow align-middle">{conferencePriceUnit}</span>
                </p>
                <p className="text-body mt-3">{pkg.includes}</p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button variant="tertiary" href="#event-inquiry">Book a Conference &rarr;</Button>
          </div>
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
              src="/Hospitality.jpg"
              alt="Hospitality and catering at @21 Guest House"
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

      <section id="event-inquiry" className="scroll-mt-20 bg-white" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="section-container mx-auto max-w-[680px]">
          <div className="text-center">
            <Eyebrow>Event Booking</Eyebrow>
            <h2 className="text-h1 mt-2 text-[var(--text-primary)]">Plan your event</h2>
          </div>

          {status === "success" ? (
            <div className="text-center">
              <FormSuccess
                title="Thank you! Your event booking request has been sent."
                message="We'll be in touch shortly to plan the details with you."
              />
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
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="eventName" className={labelStyles}>Name</label>
                  <input id="eventName" autoComplete="given-name" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("name")} />
                  {errors.name && <p className="mt-1 text-[0.75rem] text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="eventSurname" className={labelStyles}>Surname</label>
                  <input id="eventSurname" autoComplete="family-name" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("surname")} />
                  {errors.surname && <p className="mt-1 text-[0.75rem] text-red-600">{errors.surname.message}</p>}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelStyles}>Email</label>
                  <input id="email" type="email" autoComplete="email" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("email")} />
                  {errors.email && <p className="mt-1 text-[0.75rem] text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelStyles}>Phone (optional)</label>
                  <input id="phone" type="tel" autoComplete="tel" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("phone")} />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="eventType" className={labelStyles}>Event Type (optional)</label>
                  <select id="eventType" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("eventType")}>
                    <option value="">Select type</option>
                    {eventTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className={labelStyles}>Expected Guests (optional)</label>
                  <select id="guests" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("guests")}>
                    <option value="">Select</option>
                    {expectedGuestOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {isOtherEventType && (
                <div>
                  <label htmlFor="eventTypeOther" className={labelStyles}>Describe your event</label>
                  <input id="eventTypeOther" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("eventTypeOther")} />
                  {errors.eventTypeOther && <p className="mt-1 text-[0.75rem] text-red-600">{errors.eventTypeOther.message}</p>}
                </div>
              )}

              <div>
                <label htmlFor="date" className={labelStyles}>Preferred Date (optional)</label>
                <input id="date" type="date" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("date")} />
              </div>

              <div>
                <label htmlFor="details" className={labelStyles}>Additional Details (optional)</label>
                <textarea id="details" rows={4} className={`${inputStyles} resize-none`} style={{ fontFamily: "var(--font-display), serif" }} {...register("details")} />
              </div>

              <Button variant="primary" type="submit" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Event Booking"}
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
