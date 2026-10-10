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
import { FormSuccess } from "@/components/ui/FormSuccess";
import { bookingGoogleForm } from "@/lib/constants";
import { inputStyles, labelStyles } from "@/lib/form-styles";
import { submitGoogleForm } from "@/lib/google-forms";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Valid email is required"),
  date: z.string()
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookContent(): JSX.Element {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = async (values: BookingFormValues): Promise<void> => {
    await submitGoogleForm(bookingGoogleForm, values);
    setStatus("success");
    reset();
  };

  return (
    <Section background="cream" className="!pt-[calc(80px+var(--space-section))]">
      <div className="mx-auto max-w-[680px]">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.div variants={fadeUpItem}>
            <Eyebrow>Book Now</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUpItem} className="text-h1 mt-2 text-[var(--text-primary)]">
            Reserve your stay
          </motion.h2>

          {status === "success" ? (
            <FormSuccess
              title="Thank you! Your booking request has been sent."
              message="We'll be in touch shortly to confirm your stay."
            />
          ) : (
            <form
              onSubmit={handleSubmit(async (values) => {
                try {
                  await onSubmit(values);
                } catch {
                  setStatus("error");
                }
              })}
              className="mt-10 space-y-8 text-left"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelStyles}>Name</label>
                  <input id="name" autoComplete="given-name" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("name")} />
                  {errors.name && <p className="mt-1 text-[0.75rem] text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="surname" className={labelStyles}>Surname</label>
                  <input id="surname" autoComplete="family-name" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("surname")} />
                  {errors.surname && <p className="mt-1 text-[0.75rem] text-red-600">{errors.surname.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelStyles}>Email</label>
                <input id="email" type="email" autoComplete="email" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("email")} />
                {errors.email && <p className="mt-1 text-[0.75rem] text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="date" className={labelStyles}>Date (optional)</label>
                <input id="date" type="date" className={inputStyles} style={{ fontFamily: "var(--font-display), serif" }} {...register("date")} />
              </div>

              <Button variant="primary" type="submit" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Booking"}
              </Button>

              {status === "error" && (
                <p className="text-center text-[0.75rem] text-red-600">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
