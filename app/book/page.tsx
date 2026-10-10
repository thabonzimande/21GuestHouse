import type { Metadata } from "next";
import { BookContent } from "./content";

export const metadata: Metadata = {
  title: "Book Now | @21 Guest House",
  description: "Request a booking at @21 Guest House in Pietermaritzburg."
};

export default function BookPage(): JSX.Element {
  return <BookContent />;
}
