import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact | @21 Guest House",
  description:
    "Get in touch with @21 Guest House — book your stay, plan an event, or ask us anything."
};

export default function ContactPage(): JSX.Element {
  return <ContactContent />;
}
