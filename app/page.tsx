import { Hero } from "@/components/sections/Hero";
import { BrandPillars } from "@/components/sections/BrandPillars";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { EventsFeature } from "@/components/sections/EventsFeature";
import { StatBar } from "@/components/sections/StatBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { NearbySection } from "@/components/sections/NearbySection";
import { SocialSection } from "@/components/sections/SocialSection";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <BrandPillars />
      <WelcomeSection />
      <FeaturedRooms />
      <EventsFeature />
      <StatBar />
      <Testimonials />
      <NearbySection />
      <SocialSection />
    </>
  );
}
