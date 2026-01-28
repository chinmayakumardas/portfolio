// export default function sitemap() {
//   const baseUrl = "https://chinmayakumardas.com";

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/projects`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//     },
//   ];
// }
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://chinmayakumardas.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
