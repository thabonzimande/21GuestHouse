export interface AmenityCategory {
  heading: string;
  items: string[];
}

export const amenities: AmenityCategory[] = [
  {
    heading: "In-Room",
    items: [
      "Air conditioning",
      "Cleaning service",
      "DSTV / Satellite TV",
      "Garden view",
      "Non-smoking",
      "Safe",
      "Sitting area",
      "Telephone",
      "TV",
      "Wi-Fi"
    ]
  },
  {
    heading: "Bathroom",
    items: [
      "Bathroom amenities",
      "Bathtub / shower combination",
      "Hairdryer",
      "Iron",
      "Ironing board",
      "Shower only"
    ]
  },
  {
    heading: "Kitchen",
    items: ["Bar fridge", "Coffee / tea facilities", "Microwave", "Refrigerator"]
  },
  {
    heading: "Outdoors",
    items: ["Braai / Barbeque facilities", "Garden", "Outdoor furniture", "Patio"]
  }
];

export function formatRand(amount: number): string {
  return `R ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}

export interface Room {
  name: string;
  slug: string;
  units: number;
  image: string;
  images: string[];
  price: number;
  description: string;
}

export const roomPriceUnit = "/ night";

export function formatRoomPrice(room: Room): string {
  return `From ${formatRand(room.price)} ${roomPriceUnit}`;
}

export const rooms: Room[] = [
  {
    name: "Deluxe Room",
    slug: "deluxe-room",
    units: 2,
    image: "/21actualphotosgallery/Room1.jpg",
    images: [
      "/21actualphotosgallery/Room1.jpg",
      "/21actualphotosgallery/Room2.jpg"
    ],
    price: 1000,
    description:
      "Our Deluxe Rooms are clean, modern, and thoughtfully designed — offering everything you need for a restful stay in Pietermaritzburg."
  },
  {
    name: "Executive Room",
    slug: "executive-room",
    units: 2,
    image: "/21actualphotosgallery/Room3.jpg",
    images: [
      "/21actualphotosgallery/Room3.jpg",
      "/21actualphotosgallery/Room4.jpg"
    ],
    price: 1200,
    description:
      "Spacious and elegantly finished, our Executive Rooms offer refined comfort and thoughtful touches — ideal for guests who want a little extra during their stay."
  }
];

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
  phones: ["073 224 9399", "033 342 3861"],
  email: "at21guesthouse@gmail.com",
  address: "21 Mayors Walk Road, Pietermaritzburg, KwaZulu-Natal, South Africa"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/events-catering", label: "Events & Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "exploring-the-midlands-meander",
    title: "Exploring the Midlands Meander: A Complete Guide for Guests",
    excerpt:
      "Discover the art, craft, and cuisine of the famous KZN Midlands route — all within easy reach of @21 Guest House.",
    category: "Travel",
    date: "2025-03-15",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "5-reasons-to-host-your-next-event",
    title: "5 Reasons to Host Your Next Event at @21 Guest House",
    excerpt:
      "From bespoke menus to elegant spaces — here's why our guests keep coming back for celebrations worth remembering.",
    category: "Events",
    date: "2025-02-20",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "best-restaurants-near-pietermaritzburg",
    title: "The Best Restaurants Near Pietermaritzburg: Our Local Guide",
    excerpt:
      "Our team's hand-picked selection of dining spots, from Midlands gems to city favourites.",
    category: "Dining",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
  }
];
