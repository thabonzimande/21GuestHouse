import { cache } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { Client, collectPaginatedAPI, isFullPage } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client";
import type { AmenityCategory, Room } from "@/lib/constants";

type NotionProperty = PageObjectResponse["properties"][string];

interface AmenityColumn {
  heading: string;
  property: string;
}

const placeholderImage = "/placeholder.svg";

const amenityColumns: AmenityColumn[] = [
  { heading: "In-Room", property: "In-room Ammenities" },
  { heading: "Bathroom", property: "Bathroom - Ammeneties" },
  { heading: "Kitchen", property: "Kitchen - Ammeneties" },
  { heading: "Outdoors", property: "Outdoors - Ammeneties" }
];

// Notion column names may carry trailing spaces, so they are matched after trimming.
function findProperty(page: PageObjectResponse, name: string): NotionProperty | undefined {
  const key: string | undefined = Object.keys(page.properties).find((candidate) => candidate.trim() === name);
  return key === undefined ? undefined : page.properties[key];
}

function readTitle(property: NotionProperty | undefined): string {
  if (property?.type !== "title") {
    return "";
  }
  return property.title.map((part) => part.plain_text).join("").trim();
}

function readRichText(property: NotionProperty | undefined): string {
  if (property?.type !== "rich_text") {
    return "";
  }
  return property.rich_text.map((part) => part.plain_text).join("").trim();
}

function readNumber(property: NotionProperty | undefined): number | null {
  if (property?.type !== "number") {
    return null;
  }
  return property.number;
}

function readMultiSelect(property: NotionProperty | undefined): string[] {
  if (property?.type !== "multi_select") {
    return [];
  }
  return property.multi_select.map((option) => option.name);
}

function readImages(property: NotionProperty | undefined): string[] {
  if (property?.type === "files") {
    return property.files.map((file) => ("file" in file ? file.file.url : file.external.url));
  }
  if (property?.type === "url" && property.url) {
    return [property.url];
  }
  return [];
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pageToRoom(page: PageObjectResponse): Room {
  const name: string = readTitle(findProperty(page, "Room Name")) || "Unnamed Room";
  const images: string[] = readImages(findProperty(page, "Pictures"));
  const amenities: AmenityCategory[] = amenityColumns
    .map((column) => ({ heading: column.heading, items: readMultiSelect(findProperty(page, column.property)) }))
    .filter((category) => category.items.length > 0);
  return {
    id: page.id,
    name,
    slug: slugify(name),
    units: readNumber(findProperty(page, "Units")),
    beds: readNumber(findProperty(page, "Number of Beds")),
    sizeSqm: readNumber(findProperty(page, "Room Size (m²)")),
    image: images[0] ?? placeholderImage,
    images: images.length > 0 ? images : [placeholderImage],
    price: readNumber(findProperty(page, "Price Per Night (ZAR)")) ?? 0,
    description: readRichText(findProperty(page, "Description")),
    amenities
  };
}

// Notion file URLs are signed and expire after about an hour, so rooms are fetched on every request.
export const fetchRooms = cache(async (): Promise<Room[]> => {
  noStore();

  const token: string | undefined = process.env.NOTION_INTEGRATION_TOKEN;
  const databaseId: string | undefined = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) {
    console.warn("NOTION_INTEGRATION_TOKEN or NOTION_DATABASE_ID is not set; no rooms will be shown.");
    return [];
  }

  try {
    const notion = new Client({ auth: token });
    const results = await collectPaginatedAPI(notion.databases.query, { database_id: databaseId });
    return results
      .filter(isFullPage)
      .map(pageToRoom)
      .sort((a, b) => a.price - b.price);
  } catch (error) {
    console.error(`Failed to fetch rooms from Notion database ${databaseId}:`, error);
    return [];
  }
});
