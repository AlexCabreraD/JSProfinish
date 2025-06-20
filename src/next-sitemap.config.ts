interface TransformedSitemapEntry {
    loc: string;
    changefreq: string;
    priority: number;
    lastmod: string;
}

const config = {
    siteUrl:
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.jsprofinish.com/",

    generateRobotsTxt: true,

    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/private/", "/admin/", "/_next/"],
            },
            {
                userAgent: "GPTBot",
                allow: ["/blog/", "/about-us/", "/gallery/"],
                disallow: "/",
            },
        ],
        additionalSitemaps: [],
    },

    sitemapSize: 5000,

    outDir: "./public",

    exclude: ["/404", "/500", "/login", "/admin/**", "/thank-you", "/api/**"],

    changefreq: "weekly",
    priority: 0.7,

    transform: async (
        config: { changefreq: string; priority: number },
        path: string,
    ): Promise<TransformedSitemapEntry> => {
        if (path === "/") {
            return {
                loc: path,
                changefreq: "daily",
                priority: 1.0,
                lastmod: new Date().toISOString(),
            };
        }

        if (path.includes("/services/")) {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.9,
                lastmod: new Date().toISOString(),
            };
        }

        if (path.includes("/gallery/")) {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }

        if (
            path.includes("/weber-county/") ||
            path.includes("/davis-county/")
        ) {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.85,
                lastmod: new Date().toISOString(),
            };
        }

        return {
            loc: path,
            changefreq: config.changefreq as string,
            priority: config.priority as number,
            lastmod: new Date().toISOString(),
        };
    },

    generateIndexSitemap: true,
};

export default config;
