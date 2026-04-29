"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Nav(): JSX.Element {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkColor = scrolled ? "text-[var(--text-secondary)]" : "text-white";
  const logoGoldColor = "text-[var(--gold)]";
  const logoSubColor = scrolled ? "text-[var(--text-secondary)]" : "text-white/80";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[0.4s] ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--cream)]/[0.92] backdrop-blur-[16px] backdrop-saturate-[180%]"
            : "bg-transparent"
        }`}
        style={{
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : undefined
        }}
      >
        <div className="section-container flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex flex-col leading-tight" aria-label="@21 Guest House home">
            <span
              className={`${logoGoldColor} font-[var(--font-display)] text-[1.4rem] italic`}
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              @21
            </span>
            <span
              className={`${logoSubColor} text-[0.75rem] font-normal tracking-[0.18em] uppercase transition-colors duration-[0.4s]`}
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Guest House
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""} ${linkColor} text-[0.78rem] font-normal tracking-[0.08em] uppercase transition-colors duration-[0.4s]`}
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button variant="primary" href="/contact" className="!px-6 !py-[10px]">
              Book Now
            </Button>
          </div>

          <button
            className="relative z-[1000] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[1.5px] w-5 transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-[6.5px] rotate-45 bg-white"
                  : scrolled ? "bg-[var(--charcoal)]" : "bg-white"
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled ? "bg-[var(--charcoal)]" : "bg-white"
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-[6.5px] -rotate-45 bg-white"
                  : scrolled ? "bg-[var(--charcoal)]" : "bg-white"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--charcoal)]"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: isActive ? 40 : 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                      className="w-[3px] bg-[var(--gold)]"
                    />
                    <Link
                      href={link.href}
                      className="text-[2.5rem] font-light text-white"
                      style={{ fontFamily: "var(--font-display), serif" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.08, duration: 0.5 }}
                className="mt-4"
              >
                <Button variant="primary" href="/contact">
                  Book Now
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
