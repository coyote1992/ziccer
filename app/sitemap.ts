import type { MetadataRoute } from "next";

const BASE = "https://teniszdebrecen.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/foglalas", "/oktatas", "/kapcsolat", "/en"].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
