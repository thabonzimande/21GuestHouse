import Image from "next/image";
import type { Metadata } from "next";
import { EventsCateringContent } from "./content";

export const metadata: Metadata = {
  title: "Events & Catering | @21 Guest House",
  description:
    "Host your next celebration, corporate function, or private dinner at @21 Guest House with bespoke menus and elegant spaces."
};

export default function EventsCateringPage(): JSX.Element {
  return (
    <>
      <section
        className="relative overflow-hidden border-t-[3px] border-[var(--gold)]"
        style={{ height: "60vh" }}
      >
        <Image
          src="/Breakfast.jpeg"
          alt="Event catering at @21 Guest House"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(105deg, rgba(18,18,18,0.85) 0%, rgba(18,18,18,0.45) 55%, rgba(18,18,18,0.1) 100%)"
          }}
        />
        <div className="absolute inset-0 z-[2] flex items-center justify-center text-center">
          <div className="max-w-[640px] px-6">
            <h1 className="text-display text-white">
              Celebrate With Us<br />in Style
            </h1>
          </div>
        </div>
      </section>

      <EventsCateringContent />
    </>
  );
}
