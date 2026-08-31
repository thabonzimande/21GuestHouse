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
  const isHome = pathname === "/";
  const useSolidNav = scrolled || !isHome;

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkColor = useSolidNav ? "text-[var(--text-secondary)]" : "text-white";
  const logoSubColor = useSolidNav ? "text-[var(--text-secondary)]" : "text-white/80";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[0.4s] ${
          useSolidNav
            ? "border-b border-[var(--border)] bg-[var(--cream)]/[0.96] backdrop-blur-[16px] backdrop-saturate-[180%]"
            : "bg-transparent"
        }`}
        style={{
          WebkitBackdropFilter: useSolidNav ? "blur(16px) saturate(180%)" : undefined
        }}
      >
        <div className="section-container grid h-20 grid-cols-[auto_1fr_auto] items-center gap-x-3 lg:gap-x-6">
          <Link
            href="/"
            className="flex shrink-0 items-baseline gap-2 whitespace-nowrap"
            aria-label="@21 Guest House home"
          >
            <span
              className="text-[1.25rem] italic text-[var(--gold)] lg:text-[1.4rem]"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              @21
            </span>
            <span
              className={`hidden text-[0.65rem] font-normal tracking-[0.14em] uppercase transition-colors duration-[0.4s] sm:inline lg:text-[0.7rem] ${logoSubColor}`}
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Guest House
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center justify-center gap-1.5 lg:flex lg:gap-2 xl:gap-4 2xl:gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link shrink-0 whitespace-nowrap ${isActive ? "nav-link-active" : ""} ${linkColor} text-[0.62rem] font-normal tracking-[0.05em] uppercase transition-colors duration-[0.4s] xl:text-[0.68rem] 2xl:text-[0.72rem]`}
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-3">
            <div className="hidden lg:block">
              <Button variant="primary" href="/contact" className="!px-5 !py-[10px] !text-[0.68rem]">
                Book Now
              </Button>
            </div>

            <button
              type="button"
              className="relative z-[1001] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-[1.5px] w-5 transition-all duration-300 ${
                  mobileOpen
                    ? "translate-y-[6.5px] rotate-45 bg-white"
                    : useSolidNav
                      ? "bg-[var(--charcoal)]"
                      : "bg-white"
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-0"
                    : useSolidNav
                      ? "bg-[var(--charcoal)]"
                      : "bg-white"
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 transition-all duration-300 ${
                  mobileOpen
                    ? "-translate-y-[6.5px] -rotate-45 bg-white"
                    : useSolidNav
                      ? "bg-[var(--charcoal)]"
                      : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[var(--charcoal)] pt-20"
          >
            <nav className="flex flex-col items-center gap-8 px-6">
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
                      className="text-center text-[2rem] font-light leading-tight text-white sm:text-[2.5rem]"
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
