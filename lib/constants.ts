import { googleFormOtherOption } from "@/lib/google-forms";
import type { GoogleFormConfig, SelectOption } from "@/lib/google-forms";

export interface AmenityCategory {
  heading: string;
  items: string[];
}

export function formatRand(amount: number): string {
  return `R ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}

export interface Room {
  id: string;
  name: string;
  slug: string;
  units: number | null;
  beds: number | null;
  sizeSqm: number | null;
  image: string;
  images: string[];
  price: number;
  description: string;
  amenities: AmenityCategory[];
}

export const roomPriceUnit = "/ night";

export function formatRoomPrice(room: Room): string {
  return `From ${formatRand(room.price)} ${roomPriceUnit}`;
}

export function formatRoomPriceRange(rooms: Room[]): string | null {
  if (rooms.length === 0) {
    return null;
  }
  const prices: number[] = rooms.map((room) => room.price);
  return `${formatRand(Math.min(...prices))} - ${formatRand(Math.max(...prices))} per night`;
}

export function countRoomUnits(rooms: Room[]): number {
  return rooms.reduce((total, room) => total + (room.units ?? 1), 0);
}

export interface RatePackage {
  name: string;
  price: number;
  unit: string;
  description: string;
}

export interface ConferencePackage {
  price: number;
  includes: string;
}

export const conferencePriceUnit = "per person";

export const conferencePackages: ConferencePackage[] = [
  { price: 150, includes: "Tea, sandwiches & scones" },
  { price: 250, includes: "Tea, snacks & lunch" }
];

export const dinnerBedBreakfast: RatePackage = {
  name: "Dinner, Bed & Breakfast",
  price: 1350,
  unit: "per person per night",
  description: "Your stay with dinner and breakfast included."
};

export interface Testimonial {
  name: string;
  quote: string;
  rating: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Buhlebemvelo",
    quote: "Mzi, Brenda and Sli were helpful, warm welcoming and friendly.",
    rating: "Exceptional"
  },
  {
    name: "Thandeka",
    quote:
      "The place was easy to find. The room was clean at all times. Everything we needed was there. Safety 100%.",
    rating: "Exceptional"
  },
  {
    name: "Nonkululeko",
    quote:
      "The property is clean and modern. The bed is comfortable. The staff is friendly and very kind.",
    rating: "Superb"
  },
  {
    name: "Simo",
    quote:
      "I love everything about the room, especially the automatic sensor lighting in the bathroom.",
    rating: "Exceptional"
  },
  {
    name: "Mathabo",
    quote:
      "The meals are well prepared. Close to where we needed to be. I would highly recommend @21 Guest House.",
    rating: "Exceptional"
  },
  {
    name: "Natalie",
    quote:
      "Very modern, clean and tidy. The attention to detail in the bathroom is a lovely touch.",
    rating: "Exceptional"
  }
];

export interface AttractionCategory {
  heading: string;
  icon: string;
  items: { name: string; distance: string }[];
}

export const nearbyAttractions: AttractionCategory[] = [
  {
    heading: "Shopping",
    icon: "shopping",
    items: [
      { name: "Parklane Centre", distance: "2.9km" },
      { name: "Cascades Lifestyle Centre", distance: "6.7km" },
      { name: "Liberty Midlands Mall", distance: "14km" }
    ]
  },
  {
    heading: "Nature & Outdoors",
    icon: "nature",
    items: [
      { name: "Queen Elizabeth Park", distance: "4km" },
      { name: "Umgeni Valley Nature Reserve", distance: "Nearby" },
      { name: "Midmar Dam", distance: "30km" }
    ]
  },
  {
    heading: "Dining & Leisure",
    icon: "dining",
    items: [
      { name: "The Barn Owl Restaurant", distance: "Midlands" },
      { name: "Netherwood Blueberry Cafe", distance: "Midlands" },
      { name: "Golden Horse Casino", distance: "4.8km" }
    ]
  },
  {
    heading: "Activities",
    icon: "activities",
    items: [
      { name: "Epic Karting Midlands", distance: "Midlands" },
      { name: "Karkloof Canopy Tour", distance: "Midlands" }
    ]
  }
];

export interface StayTime {
  display: string;
  time24: string;
}

export const checkIn: StayTime = { display: "2:00 PM", time24: "14:00" };
export const checkOut: StayTime = { display: "10:00 AM", time24: "10:00" };

export const contact = {
  phone: "033 342 3861",
  alternativePhone: "082 399 9268",
  email: "at21guesthouse@gmail.com",
  instagram: "https://www.instagram.com/attwentyone_guesthouse/",
  address: "21 Mayors Walk Road, Pietermaritzburg, KwaZulu-Natal, South Africa"
};

export type ContactFormField = "fullName" | "email" | "phone" | "message";

export const contactGoogleForm: GoogleFormConfig<ContactFormField> = {
  formResponseUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSf-0i5w-DTwMwFH1vBuqQrwvX8t-L_SgaZDBCLkiLTT4RbKIA/formResponse",
  entryIds: {
    fullName: "entry.2005620554",
    email: "entry.1045781291",
    phone: "entry.1065046570",
    message: "entry.1166974658"
  },
  respondentEmailField: "email"
};

export type BookingFormField = "name" | "surname" | "email" | "date";

export const bookingGoogleForm: GoogleFormConfig<BookingFormField> = {
  formResponseUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfbViMivdzwyxlbDsIn30J7BgzRzy0GvmmLRocUnMYjN21AXA/formResponse",
  entryIds: {
    name: "entry.2005620554",
    surname: "entry.1045781291",
    email: "entry.1065046570",
    date: "entry.1166974658"
  },
  respondentEmailField: null
};

export type EventsFormField =
  | "name"
  | "surname"
  | "email"
  | "eventType"
  | "eventTypeOther"
  | "date"
  | "phone"
  | "guests"
  | "details";

export const eventsGoogleForm: GoogleFormConfig<EventsFormField> = {
  formResponseUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSd8VTZnR4ZsT0KTbatNDLkSkfvc_NEwLAxaiVYiVTtsHwcpAw/formResponse",
  entryIds: {
    name: "entry.2005620554",
    surname: "entry.1632095023",
    email: "entry.1045781291",
    eventType: "entry.1065046570",
    eventTypeOther: "entry.1065046570.other_option_response",
    date: "entry.1166974658",
    phone: "entry.839337160",
    guests: "entry.196086517",
    details: "entry.49556169"
  },
  respondentEmailField: null
};

// Option values must match the Google Form choices exactly, including its typos.
export const eventTypeOptions: SelectOption[] = [
  { value: "Baby Shower", label: "Baby Shower" },
  { value: "Wedding", label: "Wedding" },
  { value: "Birthday", label: "Birthday" },
  { value: "Corporate Functions", label: "Corporate Functions" },
  { value: googleFormOtherOption, label: "Other" }
];

export const expectedGuestOptions: SelectOption[] = [
  { value: "<5 (less than 5", label: "Fewer than 5" },
  { value: "More than 5", label: "More than 5" },
  { value: "15+", label: "15+" }
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/events-catering", label: "Events & Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];
