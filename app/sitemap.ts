import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://kolkataff.space",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://kolkataff.space/tips",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://kolkataff.space/patti-tips",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://kolkataff.space/prev-res",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://kolkataff.space/lucky-number",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://kolkataff.space/patti-chart",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
    {
      url: "https://kolkataff.space/about",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://kolkataff.space/privacy",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://kolkataff.space/log-in",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://kolkataff.space/register",
      lastModified: "2024-02-21T15:02:24.021Z",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
};

export default sitemap;
