import type { Metadata } from "next";
import { GalleryContent } from "./content";

export const metadata: Metadata = {
  title: "Gallery | @21 Guest House",
  description: "A visual journey through @21 Guest House — explore our rooms, events, property, and culinary experiences."
};

const galleryImages = [
  { src: "/21actualphotosgallery/Room.jpeg", alt: "Room at @21 Guest House", category: "Rooms" },
  { src: "/21actualphotosgallery/Bathroom.jpeg", alt: "Bathroom detail at @21", category: "Rooms" },
  { src: "/21actualphotosgallery/Exterior.jpeg", alt: "@21 Guest House exterior", category: "Property" },
  { src: "/21actualphotosgallery/Exterior3.jpeg", alt: "@21 property view", category: "Property" },
  { src: "/21actualphotosgallery/Food.jpeg", alt: "Dining at @21 Guest House", category: "Catering" },
  { src: "/21actualphotosgallery/Decor2.jpeg", alt: "Interior decor at @21", category: "Property" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80", alt: "Executive bedroom", category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80", alt: "Standard bedroom", category: "Rooms" },
  { src: "/Tv Bedroom.jpeg", alt: "Room with smart TV", category: "Rooms" },
  { src: "/Vases.jpg.jpeg", alt: "Interior detail with vases", category: "Property" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80", alt: "Event celebration", category: "Events" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80", alt: "Event setup", category: "Events" },
  { src: "/Breakfast.jpeg", alt: "Breakfast spread", category: "Catering" },
  { src: "/Wine glasses.jpeg", alt: "Wine service", category: "Catering" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80", alt: "Fine dining", category: "Catering" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", alt: "Guest house exterior", category: "Property" },
  { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", alt: "Relaxation area", category: "Property" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", alt: "Bathroom detail", category: "Rooms" },
  { src: "/Hero1.jpeg", alt: "@21 Guest House", category: "Property" }
];

const categories = ["All", "Rooms", "Events", "Catering", "Property"];

export default function GalleryPage(): JSX.Element {
  return (
    <>
      <section className="bg-[var(--cream)]" style={{ paddingTop: "calc(80px + var(--space-element))", paddingBottom: "40px" }}>
        <div className="section-container">
          <p className="text-eyebrow">Gallery</p>
          <h1 className="text-h1 mt-2 text-[var(--text-primary)]">A Visual Journey</h1>
        </div>
      </section>

      <GalleryContent images={galleryImages} categories={categories} />
    </>
  );
}
