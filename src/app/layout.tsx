import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/app/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
