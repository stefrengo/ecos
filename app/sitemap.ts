import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  "",
  "/laboratori",
  "/erasmus",
  "/progetti",
  "/partnership",
  "/chi-siamo",
  "/comitato-scientifico",
  "/network",
  "/pubblicazioni",
  "/lavora-con-noi",
  "/contatti",
  "/privacy",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
