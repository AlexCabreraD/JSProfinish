import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import img7 from "../../assets/home/img/image7.png";
import { FaRegCheckCircle } from "react-icons/fa";
import Head from "next/head";

const serviceBenefits = [
    {
        title: "Expert Basement Craftsmanship",
        description:
            "Quality finishes and meticulous attention to detail in every basement finishing project in Northern Utah",
    },
    {
        title: "Custom Basement Design Solutions",
        description:
            "Tailored basement designs that match your specific needs and style preferences for Davis and Weber County homes",
    },
    {
        title: "Affordable Basement Renovation",
        description:
            "Competitive basement finishing rates with convenient financing options available for your Utah basement project",
    },
];

const FeatureStructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.jsprofinish.com/services#basement-finishing",
        name: "Professional Basement Finishing Services in Northern Utah",
        description:
            "Expert basement finishing and remodeling services in Davis and Weber Counties. We transform your unfinished basement into a comfortable, stylish living space with custom designs, quality materials, and meticulous craftsmanship. Serving Clearfield, Layton, Ogden and surrounding areas.",
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://www.jsprofinish.com/#business",
            name: "JS ProFinish",
            address: {
                "@type": "PostalAddress",
                streetAddress: "1740 S 300 W #8",
                addressLocality: "Clearfield",
                addressRegion: "UT",
                postalCode: "84015",
                addressCountry: "US",
            },
            telephone: "+1-385-626-3514",
            priceRange: "$$",
            areaServed: [
                {
                    "@type": "City",
                    name: "Clearfield",
                },
                {
                    "@type": "City",
                    name: "Layton",
                },
                {
                    "@type": "City",
                    name: "Ogden",
                },
                {
                    "@type": "City",
                    name: "Bountiful",
                },
                {
                    "@type": "City",
                    name: "Farmington",
                },
                {
                    "@type": "City",
                    name: "Roy",
                },
            ],
            sameAs: [
                "https://www.facebook.com/jsprofinish",
                "https://www.instagram.com/jsprofinish",
            ],
            url: "https://www.jsprofinish.com/",
        },
        serviceType: "Basement Finishing and Remodeling",
        serviceOutput: "Professionally finished basement spaces",
        termsOfService: "https://www.jsprofinish.com/terms-of-service",
        audience: {
            "@type": "Audience",
            audienceType: "Homeowners in Northern Utah",
        },
        areaServed: {
            "@type": "State",
            name: "Utah",
            containsPlace: [
                {
                    "@type": "AdministrativeArea",
                    name: "Davis County",
                },
                {
                    "@type": "AdministrativeArea",
                    name: "Weber County",
                },
            ],
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Basement Finishing Services Catalog",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Expert Basement Craftsmanship",
                        description:
                            "Quality finishes and meticulous attention to detail in every basement project for Northern Utah homes",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Custom Basement Design Solutions",
                        description:
                            "Tailored basement designs that match your specific needs and style preferences for Davis and Weber County homes",
                    },
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "Starting at $15,000",
                        priceCurrency: "USD",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Basement Entertainment Rooms",
                        description:
                            "Custom theater and entertainment room construction for basements in Davis and Weber Counties",
                    },
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "Starting at $12,000",
                        priceCurrency: "USD",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Basement Home Office Construction",
                        description:
                            "Professional construction of functional and stylish home office spaces in your basement",
                    },
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "Starting at $10,000",
                        priceCurrency: "USD",
                    },
                },
            ],
        },
        // FIXED: Added aggregateRating at the same level as reviews
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
            bestRating: "5",
            worstRating: "1",
        },
        review: [
            {
                "@type": "Review",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
                author: {
                    "@type": "Person",
                    name: "James White",
                },
                datePublished: "2023-11-15",
                reviewBody:
                    "JS ProFinish transformed our unfinished basement into a beautiful living space that exceeded our expectations. Their attention to detail was outstanding.",
            },
            {
                "@type": "Review",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                },
                author: {
                    "@type": "Person",
                    name: "Adriana Cortés",
                },
                datePublished: "2023-10-22",
                reviewBody:
                    "We are thrilled with our newly finished basement! The JS ProFinish team guided us through every step of the project.",
            },
        ],
        brand: {
            "@type": "Brand",
            name: "JS ProFinish",
            slogan: "Transform Your Basement Into Your Dream Space",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
};

const Feature = () => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Expert basement finishing services in Northern Utah by JS ProFinish. Professional craftsmanship, custom designs, and affordable solutions for your basement remodeling project."
                />
            </Head>

            <Box
                component="section"
                id="basement-finishing-benefits"
                aria-labelledby="benefits-heading"
                itemScope
                itemType="https://schema.org/Service"
            >
                <Container
                    maxWidth={false}
                    className="secondary-background"
                    sx={{
                        textAlign: "-webkit-center",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Grid
                        container
                        sx={{
                            alignItems: "center",
                            height: "fit-content",
                            maxWidth: "1440px",
                            padding: { xs: "56px 16px", md: "112px 24px" },
                        }}
                    >
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: { xs: "300px", md: "400px" },
                                    position: "relative",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                }}
                            >
                                <Image
                                    src={img7}
                                    alt="Professional basement finishing and remodeling services in Northern Utah by JS ProFinish"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Stack
                                spacing="32px"
                                sx={{
                                    textAlign: { xs: "center", md: "left" },
                                    mt: { xs: 4, md: 0 },
                                    ml: { md: 4 },
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        id="benefits-heading"
                                        itemProp="name"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            fontSize: {
                                                xs: "2rem",
                                                md: "2.5rem",
                                            },
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        Why Choose Our Basement Finishing
                                        Services?
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        itemProp="description"
                                        sx={{
                                            color: "#666666",
                                            lineHeight: 1.6,
                                            fontSize: "1.125rem",
                                        }}
                                    >
                                        Transform your basement into the space
                                        of your dreams with our expert
                                        craftsmanship and personalized approach.
                                    </Typography>
                                </Box>

                                <Stack spacing="24px">
                                    {serviceBenefits.map((benefit, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: 2,
                                            }}
                                            itemScope
                                            itemType="https://schema.org/Thing"
                                        >
                                            <Box
                                                sx={{
                                                    color: "#1C7C54",
                                                    mt: 0.25,
                                                    flexShrink: 0,
                                                }}
                                                aria-hidden="true"
                                            >
                                                <FaRegCheckCircle
                                                    size={18}
                                                    aria-hidden="true"
                                                />
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant="h2"
                                                    component="span"
                                                    itemProp="name"
                                                    sx={{
                                                        fontWeight: 600,
                                                        display: "block",
                                                        mb: 0.5,
                                                        fontSize: {
                                                            xs: "1rem",
                                                            md: "1.125rem",
                                                        },
                                                    }}
                                                >
                                                    {benefit.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    itemProp="description"
                                                    sx={{
                                                        color: "#333333",
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    {benefit.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>

                                <div
                                    style={{ display: "none" }}
                                    itemProp="provider"
                                    itemScope
                                    itemType="https://schema.org/LocalBusiness"
                                >
                                    <span itemProp="name">JS ProFinish</span>
                                    <span itemProp="telephone">
                                        +1-385-626-3514
                                    </span>
                                    <div
                                        itemProp="address"
                                        itemScope
                                        itemType="https://schema.org/PostalAddress"
                                    >
                                        <span itemProp="streetAddress">
                                            1740 S 300 W #8
                                        </span>
                                        <span itemProp="addressLocality">
                                            Clearfield
                                        </span>
                                        <span itemProp="addressRegion">UT</span>
                                        <span itemProp="postalCode">84015</span>
                                    </div>
                                    <span itemProp="priceRange">$$</span>
                                </div>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>

                <FeatureStructuredData />
            </Box>
        </>
    );
};

export default Feature;
