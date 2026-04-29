"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryContentProps {
  images: GalleryImage[];
  categories: string[];
}

export function GalleryContent({ images, categories }: GalleryContentProps): JSX.Element {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? images : images.filter((img) => img.category === activeFilter);

  const openLightbox = useCallback((index: number): void => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback((): void => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback((): void => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback((): void => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      <div className="sticky top-20 z-30 border-b border-[var(--border-subtle)] bg-[var(--cream)]/[0.92] backdrop-blur-[16px]">
        <div className="section-container flex gap-6 overflow-x-auto py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${
                activeFilter === cat
                  ? "border-b border-[var(--gold)] pb-1 text-[var(--gold)]"
                  : "pb-1 text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
              }`}
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-[var(--cream)]" style={{ paddingTop: "var(--space-element)", paddingBottom: "var(--space-section)" }}>
        <div className="section-container">
          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            animate="visible"
            key={activeFilter}
            className="columns-1 gap-3 md:columns-2 lg:columns-3"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${activeFilter}`}
                variants={fadeUpItem}
                className="group mb-3 cursor-pointer overflow-hidden break-inside-avoid"
                style={{ borderRadius: "var(--radius-md)" }}
                onClick={() => openLightbox(i)}
              >
                <div className="relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={1000}
                    className="h-auto w-full object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-luxury)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[rgba(181,151,58,0.6)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--charcoal)]/95"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute right-6 top-6 text-white/60 transition-colors duration-200 hover:text-white"
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-6 text-white/60 transition-colors duration-200 hover:text-white"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="max-h-[85vh] max-w-[85vw]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1400}
                height={1000}
                className="max-h-[85vh] w-auto object-contain"
                sizes="85vw"
              />
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-6 text-white/60 transition-colors duration-200 hover:text-white"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
