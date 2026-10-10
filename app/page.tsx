import { Hero } from "@/components/sections/Hero";
import { BrandPillars } from "@/components/sections/BrandPillars";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { EventsFeature } from "@/components/sections/EventsFeature";
import { StatBar } from "@/components/sections/StatBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { NearbySection } from "@/components/sections/NearbySection";
import { SocialSection } from "@/components/sections/SocialSection";
import { countRoomUnits } from "@/lib/constants";
import { fetchRooms } from "@/lib/notion-client";

export default async function HomePage(): Promise<JSX.Element> {
  const rooms = await fetchRooms();
  return (
    <>
      <Hero />
      <BrandPillars />
      <WelcomeSection />
      <FeaturedRooms rooms={rooms} />
      <EventsFeature />
      <StatBar roomCount={countRoomUnits(rooms)} />
      <Testimonials />
      <NearbySection />
      <SocialSection />
    </>
  );
}
