import { Metadata } from "next";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import Header from "@/app/components/weber-county/header";
import InfoSection from "@/app/components/weber-county/infoSection";
import Faq from "@/app/components/weber-county/faq";
import Cta from "@/app/components/weber-county/cta";
import ContactInfo from "@/app/components/weber-county/contactInfo";

const weberCountyStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.jsprofinish.com/weber-county#business",
    name: "JS ProFinish - Weber County Basement Finishing",
    url: "https://www.jsprofinish.com/weber-county",
    logo: "https://www.jsprofinish.com/logo.png",
    image: "https://www.jsprofinish.com/assets/images/weber-county-basement.jpg",
    description:
        "Expert basement finishing and remodeling services in Weber County, specializing in custom designs, quality craftsmanship, and complete transformations throughout Ogden, North Ogden, Roy, and surrounding areas.",
    telephone: "(385) 626-3514",
    email: "contact@jsprofinish-utah.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "1740 S 300 W #8",
        addressLocality: "Clearfield",
        addressRegion: "UT",
        postalCode: "84015",
        addressCountry: "US",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "41.0895",
        longitude: "-112.0263",
    },
    areaServed: [
        {
            "@type": "City",
            name: "Ogden",
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Weber County",
            },
        },
        {
            "@type": "City",
            name: "Roy",
        },
        {
            "@type": "City",
            name: "North Ogden",
        },
        {
            "@type": "City",
            name: "South Ogden",
        },
        {
            "@type": "City",
            name: "Pleasant View",
        },
        {
            "@type": "City",
            name: "Harrisville",
        },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "16:00",
        },
    ],
    service: {
        "@type": "Service",
        name: "Weber County Basement Finishing",
        serviceType: "Basement Remodeling",
        areaServed: "Weber County",
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://www.jsprofinish.com/weber-county#business",
            name: "JS ProFinish",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Basement Finishing Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Complete Basement Finishing",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Basement Remodeling",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Home Theater Installation",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Custom Basement Design",
                    },
                },
            ],
        },
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "47",
        bestRating: "5",
    },
};

const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Weber County Basement Finishing & Remodeling Services",
    description:
        "Expert basement remodeling in Ogden, Roy, North Ogden and throughout Weber County. Learn about our local expertise and custom basement solutions.",
    image: "https://www.jsprofinish.com/assets/images/weber-county-basement.jpg",
    datePublished: "2023-04-15T08:00:00+08:00",
    dateModified: new Date().toISOString(),
    author: {
        "@type": "Organization",
        name: "JS ProFinish",
    },
    publisher: {
        "@type": "Organization",
        name: "JS ProFinish",
        logo: {
            "@type": "ImageObject",
            url: "https://www.jsprofinish.com/logo.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.jsprofinish.com/weber-county",
    },
};

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.jsprofinish.com/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: "https://www.jsprofinish.com/locations",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Weber County",
            item: "https://www.jsprofinish.com/weber-county",
        },
    ],
};

export const metadata: Metadata = {
    title: "Weber County Basement Finishing & Remodeling | JS ProFinish",
    description:
        "Specialized basement remodeling in Ogden, Roy, North Ogden and throughout Weber County. JS ProFinish delivers custom solutions with expert local knowledge and superior craftsmanship.",
    keywords:
        "basement finishing, Weber County, Ogden basement remodeling, Roy basement contractor, North Ogden basement renovation, basement design, South Ogden basement finishing",
    openGraph: {
        title: "Weber County Basement Finishing & Remodeling | JS ProFinish",
        description:
            "Expert basement finishing and remodeling services in Weber County, Utah. Custom designs, local expertise, and quality craftsmanship in Ogden, Roy, and surrounding areas.",
        url: "https://www.jsprofinish.com/weber-county",
        siteName: "JS ProFinish",
        images: [
            {
                url: "https://www.jsprofinish.com/assets/images/weber-county-og.jpg",
                width: 1200,
                height: 630,
                alt: "Weber County Basement Remodeling by JS ProFinish",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Weber County Basement Finishing & Remodeling",
        description:
            "Professional basement remodeling in Ogden, Roy, and throughout Weber County by JS ProFinish.",
        images: [
            "https://www.jsprofinish.com/assets/images/weber-county-twitter.jpg",
        ],
    },
    alternates: {
        canonical: "https://www.jsprofinish.com/weber-county",
    },
};

const WeberCounty = () => {
    return (
        <>
            <Head>
                <meta name="geo.region" content="US-UT" />
                <meta name="geo.placename" content="Weber County" />
                <meta name="geo.position" content="41.2138;-111.9703" />
                <meta name="ICBM" content="41.2138, -111.9703" />
                <link
                    rel="preconnect"
                    href="https://www.jsprofinish.com"
                />
                <link
                    rel="dns-prefetch"
                    href="https://www.jsprofinish.com"
                />
            </Head>

            <Box
                component="main"
                id="weber-county-content"
                itemScope
                itemType="https://schema.org/WebPage"
            >
                <Header county={"Weber"} />
                <InfoSection county={"Weber"} />
                <Faq county={"Weber"} />
                <Cta />
                <ContactInfo />

                <Container sx={{ display: "none" }}>
                    <h2>Weber County Basement Finishing Services</h2>
                    <p>
                        JS ProFinish specializes in basement finishing and
                        remodeling throughout Weber County, including Ogden,
                        Roy, North Ogden, South Ogden, Pleasant View, and
                        Harrisville. With over 15 years of experience, our team
                        delivers exceptional craftsmanship, custom designs, and
                        transparent pricing for all your basement renovation
                        needs.
                    </p>
                    <h3>Weber County Basement Remodeling Areas We Serve</h3>
                    <ul>
                        <li>Ogden Basement Finishing</li>
                        <li>Roy Basement Remodeling</li>
                        <li>North Ogden Basement Renovation</li>
                        <li>South Ogden Basement Design</li>
                        <li>Pleasant View Basement Construction</li>
                        <li>Harrisville Basement Transformation</li>
                    </ul>
                </Container>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(weberCountyStructuredData),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(articleStructuredData),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbStructuredData),
                    }}
                />
            </Box>
        </>
    );
};

export default WeberCounty;
