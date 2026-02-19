import type { MetadataRoute } from "next";

const baseUrl = "https://sharonmaman.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/cabinet`, lastModified: new Date() },
    { url: `${baseUrl}/expertises`, lastModified: new Date() },
    { url: `${baseUrl}/expertises/droit-des-affaires`, lastModified: new Date() },
    { url: `${baseUrl}/expertises/transmission-structures-reglementees`, lastModified: new Date() },
    { url: `${baseUrl}/expertises/droit-commercial`, lastModified: new Date() },
    { url: `${baseUrl}/expertises/mandataires-sportifs`, lastModified: new Date() },
    { url: `${baseUrl}/actualites`, lastModified: new Date() },
    { url: `${baseUrl}/actualites/reprise-activite`, lastModified: new Date() },
    { url: `${baseUrl}/actualites/pacte-associes`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date() },
    { url: `${baseUrl}/confidentialite`, lastModified: new Date() },
  ];
}
