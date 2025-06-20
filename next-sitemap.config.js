/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://jsprofinish.com",
    generateRobotsTxt: true,
    exclude: ["/server-sitemap-index.xml"],
    alternateRefs: [
        {
            href: "https://jsprofinish.com",
            hreflang: "en",
        },
    ],
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        };
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "*",
                disallow: ["/api/", "/_next/", "/admin/"],
            },
        ],
        additionalSitemaps: ["https://jsprofinish.com/sitemap.xml"],
    },
};
