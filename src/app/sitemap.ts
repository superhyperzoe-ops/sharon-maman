import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date() },
    { url: `${SITE_URL}/cabinet`, lastModified: new Date() },
    { url: `${SITE_URL}/expertises`, lastModified: new Date() },
    { url: `${SITE_URL}/expertises/droit-des-affaires`, lastModified: new Date() },
    { url: `${SITE_URL}/expertises/transmission-structures-reglementees`, lastModified: new Date() },
    { url: `${SITE_URL}/expertises/droit-commercial`, lastModified: new Date() },
    { url: `${SITE_URL}/expertises/mandataires-sportifs`, lastModified: new Date() },
    { url: `${SITE_URL}/actualites`, lastModified: new Date() },
    { url: `${SITE_URL}/actualites/reprise-activite`, lastModified: new Date() },
    { url: `${SITE_URL}/actualites/pacte-associes`, lastModified: new Date() },
    { url: `${SITE_URL}/contact`, lastModified: new Date() },
    { url: `${SITE_URL}/mentions-legales`, lastModified: new Date() },
    { url: `${SITE_URL}/confidentialite`, lastModified: new Date() },
  ];
}
