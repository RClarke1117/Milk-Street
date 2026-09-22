import type { MetadataRoute } from "next";
import { spirits } from "@/lib/spirits";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/the-make", "/spirits", "/menu", "/tours", "/events", "/visit"];
  const now = new Date("2026-09-22");
  return [
    ...paths.map((path) => ({
      url: `https://www.milkstreetdistillery.com${path || "/"}`,
      lastModified: now,
    })),
    ...spirits.map((spirit) => ({
      url: `https://www.milkstreetdistillery.com/spirits/${spirit.slug}`,
      lastModified: now,
    })),
  ];
}
