import Link from "next/link";
import { contact, navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

function InstagramIcon(): JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(): JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.49 21.6a6.34 6.34 0 0 0 6.34-6.34V8.78a8.28 8.28 0 0 0 3.76.92V6.69Z" />
    </svg>
  );
}

function FacebookIcon(): JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-[var(--border-dark)] bg-[var(--charcoal)]" style={{ padding: "72px 0 32px" }}>
      <div className="section-container grid gap-16 md:grid-cols-3" style={{ gap: "clamp(40px, 6vw, 80px)" }}>
        <div>
          <Link href="/" className="inline-block" aria-label="@21 Guest House home">
            <span
              className="block text-[1.6rem] italic text-[var(--gold)]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              @21
            </span>
            <span
              className="block text-[0.75rem] font-normal tracking-[0.18em] uppercase text-white/60"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Guest House
            </span>
          </Link>
          <p
            className="mt-2 text-[0.95rem] italic text-white/45"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Exclusive Unique Experiences
          </p>

          <div className="mt-6 flex items-center gap-5">
            <a href="https://instagram.com/at21guesthouse" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 transition-colors duration-200 hover:text-white">
              <InstagramIcon />
            </a>
            <a href="https://tiktok.com/@at21guesthouse" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/60 transition-colors duration-200 hover:text-white">
              <TikTokIcon />
            </a>
            <a href="https://facebook.com/at21guesthouse" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 transition-colors duration-200 hover:text-white">
              <FacebookIcon />
            </a>
          </div>

          <p className="mt-5 text-[0.8rem] leading-[1.8] text-white/40" style={{ fontFamily: "var(--font-body), sans-serif" }}>
            21 Mayors Walk Road<br />
            Pietermaritzburg, KwaZulu-Natal
          </p>
        </div>

        <div>
          <p className="text-eyebrow">Explore</p>
          <nav className="mt-5 flex flex-col">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.82rem] leading-[2.4] text-white/60 transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-eyebrow">Get In Touch</p>
          <div className="mt-5 space-y-1 text-[0.82rem] leading-[2.2] text-white/60" style={{ fontFamily: "var(--font-body), sans-serif" }}>
            <p>Tel: {contact.phones[0]}</p>
            <p>Tel: {contact.phones[1]}</p>
            <p>{contact.email}</p>
          </div>
          <div className="mt-7">
            <Button variant="primary" href="/contact" className="w-full justify-center">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-dark)] pt-6">
          <p className="text-[0.7rem] text-white/25" style={{ fontFamily: "var(--font-body), sans-serif" }}>
            &copy; 2025 @21 Guest House. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-white/25" style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Pietermaritzburg, KwaZulu-Natal, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
