"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

const socialImages = [
  { src: "/21actualphotosgallery/Exterior.jpeg", alt: "@21 Guest House exterior" },
  { src: "/21actualphotosgallery/Room.jpeg", alt: "Room at @21" },
  { src: "/21actualphotosgallery/Food.jpeg", alt: "Dining at @21" },
  { src: "/21actualphotosgallery/Bathroom.jpeg", alt: "Bathroom detail" },
  { src: "/21actualphotosgallery/Decor2.jpeg", alt: "Interior decor" },
  { src: "/21actualphotosgallery/Exterior3.jpeg", alt: "@21 property view" }
];

function InstagramIcon(): JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(): JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.49 21.6a6.34 6.34 0 0 0 6.34-6.34V8.78a8.28 8.28 0 0 0 3.76.92V6.69Z" />
    </svg>
  );
}

function FacebookIcon(): JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function CameraIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function SocialSection(): JSX.Element {
  return (
    <section
      className="border-t border-[var(--border-dark)] bg-[var(--charcoal)]"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
    >
      <div className="section-container">
        <div className="mx-auto max-w-[560px] text-center">
          <Eyebrow>Follow Along</Eyebrow>
          <h2 className="text-h1 mt-2 text-white">Follow our journey</h2>
          <p
            className="mt-3 text-[0.9375rem] leading-[1.75]"
            style={{ color: "rgba(240, 235, 226, 0.58)", fontFamily: "var(--font-body), sans-serif" }}
          >
            Tag @at21guesthouse and use #At21GuestHouse to be featured.
            We love seeing your moments.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[720px] grid-cols-2 gap-1 md:grid-cols-3">
          {socialImages.map((img) => (
            <div
              key={img.src}
              className="group relative cursor-pointer overflow-hidden bg-[var(--charcoal-light)]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 240px"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(181,151,58,0.75)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <CameraIcon />
                <span
                  className="mt-2 text-[0.7rem] tracking-[0.1em] uppercase text-white"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  View on Instagram
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {[
            { icon: <InstagramIcon />, label: "Instagram", url: "https://instagram.com/at21guesthouse" },
            { icon: <TikTokIcon />, label: "TikTok", url: "https://tiktok.com/@at21guesthouse" },
            { icon: <FacebookIcon />, label: "Facebook", url: "https://facebook.com/at21guesthouse" }
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase transition-colors duration-200"
              style={{
                color: "rgba(240, 235, 226, 0.55)",
                fontFamily: "var(--font-body), sans-serif"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(240, 235, 226, 1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(240, 235, 226, 0.55)"; }}
            >
              {social.icon}
              {social.label}
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="mx-auto mb-6 h-px w-20 bg-[var(--border-dark)]" />
          <p
            className="text-[1rem] italic"
            style={{
              color: "rgba(240, 235, 226, 0.38)",
              fontFamily: "var(--font-display), serif"
            }}
          >
            &ldquo;Show Us Where You @&rdquo; &mdash; Share your stay and become part of our story.
          </p>
        </div>
      </div>
    </section>
  );
}
