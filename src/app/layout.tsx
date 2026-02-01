import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/app/components/navbar/navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/app/theme/theme";
import BootstrapClient from "@/app/components/bootstrap/bootstrapClient";
import "./globals.css";
import "../output.css";
import Footer from "@/app/components/global/footer";
import { jsonLd } from "@/app/utils/seo";

import { SpeedInsights } from "@vercel/speed-insights/next";

const GA_MEASUREMENT_ID = "AW-17847227430";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    metadataBase: new URL("https://jsprofinish.com"),
    title: "Basement Finishing & Remodeling in Northern Utah | JS ProFinish",
    description:
        "JS ProFinish offers expert basement finishing and remodeling services in Northern Utah, serving Davis County and Weber County. Transform your basement with our professional painting, carpentry, drywall installation, and framing. Contact us today for personalized basement renovations tailored to your needs.\n",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            jsonLd,
                        }),
                    }}
                />
                <title>{metadata.title?.toString()}</title>
            </head>
            <body className={inter.className}>
                {/* Google Tag (gtag.js) */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}');
                    `}
                </Script>

                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
                <BootstrapClient />
                <SpeedInsights />
            </body>
        </html>
    );
}
