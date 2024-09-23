const config = {
    siteUrl: process.env.SITE_URL || "https://www.jsprofinish-utah.com/", // Replace with your actual site URL
    generateRobotsTxt: true, // Optional: Generate `robots.txt` file
    sitemapSize: 7000, // Optional: Customize the max entries per sitemap (default is 5000)
    outDir: "./out", // Optional: Define the output directory for the sitemap (default is `public`)
    exclude: ["/404"], // Optional: Exclude certain paths from the sitemap
};

export default config;
