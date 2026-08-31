import type { Metadata } from "next";
import { GalleryContent } from "./content";

export const metadata: Metadata = {
  title: "Gallery | @21 Guest House",
  description: "A visual journey through @21 Guest House — explore our rooms, events, property, and culinary experiences."
};

const galleryImages = [
  { src: "/21actualphotosgallery/Room1.jpg", alt: "Standard Double Room 1", category: "Rooms" },
  { src: "/21actualphotosgallery/Room2.jpg", alt: "Standard Double Room 2", category: "Rooms" },
  { src: "/21actualphotosgallery/Room3.jpg", alt: "Double Room 3", category: "Rooms" },
  { src: "/21actualphotosgallery/Room4.jpg", alt: "Double Room 4", category: "Rooms" },
  { src: "/21actualphotosgallery/Room.jpeg", alt: "Room at @21 Guest House", category: "Rooms" },
  { src: "/21actualphotosgallery/Bathroom.jpeg", alt: "Bathroom detail at @21", category: "Rooms" },
  { src: "/21actualphotosgallery/Exterior.jpeg", alt: "@21 Guest House exterior", category: "Property" },
  { src: "/21actualphotosgallery/Exterior3.jpeg", alt: "@21 property view", category: "Property" },
  { src: "/21actualphotosgallery/Food.jpeg", alt: "Dining at @21 Guest House", category: "Catering" },
  { src: "/21actualphotosgallery/Decor2.jpeg", alt: "Interior decor at @21", category: "Property" }
];

const categories = ["All", "Rooms", "Catering", "Property"];

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
