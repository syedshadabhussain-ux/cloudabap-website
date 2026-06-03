import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cloudabap.com",
      lastModified: new Date(),
    },
    {
      url: "https://cloudabap.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://cloudabap.com/tutorials",
      lastModified: new Date(),
    },
  ];
}
