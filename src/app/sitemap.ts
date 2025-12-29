import { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/app/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://jsprofinish.com";

    // Get all city slugs for dynamic city pages
    const citySlugs = getAllCitySlugs();
    const cityPages = citySlugs.map((slug) => ({
        url: `${baseUrl}/cities/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/weber-county`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/davis-county`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
        // Add all city pages
        ...cityPages,
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/site-index`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4,
        },
    ];
}
