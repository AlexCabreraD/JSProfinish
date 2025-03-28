import React from "react";
import { Metadata } from "next";
import { Box } from "@mui/material";
import Head from "next/head";
import Header from "@/app/components/about/header";
import About from "@/app/components/about/about";
import WhyUs from "@/app/components/about/whyUs";
import Vision from "@/app/components/about/vision";
import Gallery from "@/app/components/about/gallery";
import Testimonials from "@/app/components/home/testimonials";
import Cta2 from "@/app/components/about/cta2";

const aboutUsStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
        "@type": "Organization",
        name: "JS ProFinish",
        description:
            "Northern Utah's premier basement finishing experts with over 15 years experience serving Davis County and Weber County.",
        foundingDate: "2009",
        founders: [
            {
                "@type": "Person",
                name: "JS ProFinish Team",
            },
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "1740 S 300 W #8",
            addressLocality: "Clearfield",
            addressRegion: "UT",
            postalCode: "84015",
            addressCountry: "US",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "(385) 626-3514",
            contactType: "customer service",
            areaServed: [
                "Davis County",
                "Weber County",
                "Clearfield",
                "Ogden",
                "Layton",
            ],
        },
        sameAs: [
            "https://www.facebook.com/jsprofinish",
            "https://www.instagram.com/jsprofinish",
        ],
    },
    specialty: "Basement Remodeling and Finishing",
    knowsAbout: [
        "Basement Finishing",
        "Home Remodeling",
        "Carpentry",
        "Drywall Installation",
        "Basement Design",
    ],
};

export const metadata: Metadata = {
    title: "About Our Basement Remodeling Team in Clearfield, UT | JS ProFinish",
    description:
        "Meet JS ProFinish's expert team with 15+ years transforming Northern Utah basements. Learn about our mission, values, and commitment to exceptional craftsmanship and customer satisfaction.",
    keywords:
        "basement remodeling Clearfield UT, basement contractors Utah, Davis County basement finishing, Weber County basement experts, Northern Utah basement renovation",
    alternates: {
        canonical: "https://www.jsprofinish-utah.com/about-us",
    },
    openGraph: {
        title: "Northern Utah's Premier Basement Finishing Experts | About JS ProFinish",
        description:
            "Learn about JS ProFinish's 15+ years of basement remodeling experience in Davis & Weber Counties. Meet our team and discover our commitment to quality craftsmanship.",
        url: "https://www.jsprofinish-utah.com/about-us",
        siteName: "JS ProFinish",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.jsprofinish-utah.com/images/team-photo.jpg",
                width: 1200,
                height: 630,
                alt: "JS ProFinish basement remodeling team in Clearfield, Utah",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Northern Utah's Premier Basement Finishing Experts | About JS ProFinish",
        description:
            "Meet our expert team with 15+ years experience transforming basements in Davis & Weber Counties, Utah",
        images: ["https://www.jsprofinish-utah.com/images/team-photo.jpg"],
    },
};

const AboutUs = () => {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(aboutUsStructuredData),
                    }}
                />
                <link
                    rel="canonical"
                    href="https://www.jsprofinish-utah.com/about-us"
                />
            </Head>

            <Box
                component="main"
                id="about-us-main-content"
                itemScope
                itemType="https://schema.org/AboutPage"
                width={"100vw"}
            >
                <Header />
                <About />
                <WhyUs />
                <Testimonials />
                <Gallery />
                <Vision />
                <Cta2 />
            </Box>
        </>
    );
};

export default AboutUs;
