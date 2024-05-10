import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basement Finishing & Remodeling Services in Northern Utah | JS ProFinish",
  description: "JS ProFinish specializes in basement finishing and remodeling services in Northern Utah. Serving Davis County and Weber County, we offer expert painting, carpentry, drywall installation, and framing to transform your basement into a functional and beautiful space. Contact us for professional basement renovations tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
