const config = {
    siteUrl:
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.jsprofinish-utah.com/", // Replace with your actual site URL
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: "./out",
    exclude: ["/404"],
};

export default config;
