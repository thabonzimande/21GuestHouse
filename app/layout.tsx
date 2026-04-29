import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "600"],
  style: ["normal", "italic"]
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "@21 Guest House | Boutique Accommodation in Pietermaritzburg",
  description:
    "Luxury boutique guesthouse in Pietermaritzburg. Premium rooms, events catering, and culinary excellence in the heart of KwaZulu-Natal's Natal Midlands.",
  openGraph: {
    title: "@21 Guest House | Boutique Accommodation in Pietermaritzburg",
    description: "Where every stay becomes a story.",
    url: "https://at21guesthouse.co.za",
    siteName: "@21 Guest House",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "@21 Guest House",
    description:
      "Boutique guesthouse in Pietermaritzburg offering luxury accommodation, events, and catering.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21 Mayors Walk Road",
      addressLocality: "Pietermaritzburg",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA"
    },
    telephone: "+27732249399",
    email: "at21guesthouse@gmail.com",
    priceRange: "R950 - R1,250 per night",
    starRating: { "@type": "Rating", ratingValue: "5" }
  };

  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
