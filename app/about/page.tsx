import Image from "next/image";
import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About | @21 Guest House",
  description:
    "Learn about @21 Guest House — our story, team, and commitment to warm hospitality in Pietermaritzburg."
};

export default function AboutPage(): JSX.Element {
  return (
    <>
      <section className="relative overflow-hidden" style={{ height: "50vh" }}>
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
          alt="@21 Guest House property"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.7) 100%)"
          }}
        />
      </section>

      <AboutContent />
    </>
  );
}
