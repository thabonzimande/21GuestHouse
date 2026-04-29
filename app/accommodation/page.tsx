import Image from "next/image";
import type { Metadata } from "next";
import { rooms } from "@/lib/constants";
import { AccommodationContent } from "./content";

export const metadata: Metadata = {
  title: "Accommodation | @21 Guest House",
  description:
    "Explore our Executive and Standard rooms — elegant, modern, and designed for a restful stay in Pietermaritzburg."
};

export default function AccommodationPage(): JSX.Element {
  return (
    <>
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <Image
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury bedroom at @21 Guest House"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(105deg, rgba(18,18,18,0.8) 0%, rgba(18,18,18,0.4) 55%, rgba(18,18,18,0.1) 100%)"
          }}
        />
        <div className="absolute inset-0 z-[2] flex items-center justify-center text-center">
          <div className="max-w-[640px] px-6">
            <h1 className="text-display text-white">
              Where Comfort<br />Meets Elegance
            </h1>
            <p
              className="mt-4 text-[1rem] leading-[1.65]"
              style={{ color: "rgba(240,235,226,0.72)", fontFamily: "var(--font-body), sans-serif" }}
            >
              Choose the room that suits your style and stay
            </p>
          </div>
        </div>
      </section>

      <AccommodationContent rooms={rooms} />

      <section className="bg-[var(--gold)]" style={{ padding: "48px 0" }}>
        <div className="section-container text-center">
          <h2
            className="text-h2 text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Ready to book? Contact us directly.
          </h2>
          <p
            className="mt-3 text-[0.875rem] text-[var(--charcoal)]/65"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            073 224 9399 &nbsp;|&nbsp; 033 342 1062 &nbsp;|&nbsp; at21guesthouse@gmail.com
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--charcoal)] px-8 py-[14px] text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-white transition-all duration-[var(--duration-fast)] hover:-translate-y-px"
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
