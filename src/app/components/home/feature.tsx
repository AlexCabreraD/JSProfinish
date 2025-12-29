import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import img7 from "../../assets/home/img/image7.png";
import { FaRegCheckCircle } from "react-icons/fa";
import Head from "next/head";

const serviceBenefits = [
    {
        title: "Quality Craftsmanship",
        description:
            "Every detail matters. From framing to the final coat of paint, we don't cut corners. You'll see the difference in the finished product.",
    },
    {
        title: "Custom Design",
        description:
            "Your basement, your way. We'll work with you to create a space that fits how you actually live, not some cookie-cutter template.",
    },
    {
        title: "Fair Pricing",
        description:
            "Transparent estimates with no hidden fees. We offer financing options to make your project more manageable.",
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
            telephone: "+1-385-626-3514",
            email: "jsprofinish@gmail.com",
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
                    name: "Clearfield",
                    containedInPlace: {
                        "@type": "AdministrativeArea",
                        name: "Davis County",
                    },
                },
                {
                    "@type": "City",
                    name: "Layton",
                    containedInPlace: {
                        "@type": "AdministrativeArea",
                        name: "Davis County",
                    },
                },
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
                    name: "Kaysville",
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
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "Custom pricing based on project scope",
                        priceCurrency: "USD",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Customized Basement Design Solutions",
                        description:
                            "Tailored basement designs to match your specific needs and style preferences in Davis and Weber Counties",
                    },
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "Custom pricing based on design complexity",
                        priceCurrency: "USD",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Basement Bathroom Installation",
                        description:
                            "Professional bathroom installation services for basement spaces in Northern Utah homes",
                    },
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "Starting at $8,000",
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
                id="basement-finishing-services"
                aria-labelledby="services-heading"
                itemScope
                itemType="https://schema.org/Service"
                sx={{
                    py: { xs: 8, md: 14 },
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={{ xs: 4, md: 6 }}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            order={{ xs: 1, md: 2 }}
                            sx={{
                                px: { xs: 2, md: 4, lg: 6 },
                            }}
                        >
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(180deg, rgba(28, 124, 84, 0) 0%, rgba(28, 124, 84, 0.08) 100%)",
                                        zIndex: 1,
                                    },
                                }}
                            >
                                <Image
                                    src={img7}
                                    alt="Professional basement finishing by JS ProFinish showcasing expert craftsmanship in Northern Utah homes"
                                    width={600}
                                    height={450}
                                    priority={true}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                    itemProp="image"
                                />
                            </Box>

                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "12px",
                                    backgroundColor: "rgba(28, 124, 84, 0.12)",
                                    bottom: { xs: "-20px", md: "-30px" },
                                    left: { xs: "-20px", md: "-30px" },
                                    zIndex: -1,
                                    display: { xs: "none", md: "block" },
                                }}
                                aria-hidden="true"
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={6}
                            order={{ xs: 1, md: 2 }}
                            sx={{
                                px: { xs: 2, md: 4, lg: 6 },
                            }}
                        >
                            <Stack
                                spacing={{ xs: 3, md: 4 }}
                                sx={{
                                    maxWidth: "540px",
                                    mx: { xs: "auto", md: 0 },
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    component="p"
                                    sx={{
                                        fontWeight: 600,
                                        letterSpacing: "0.1em",
                                        color: "#1C7C54",
                                        fontSize: "0.875rem",
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    PREMIUM BASEMENT FINISHING SERVICES
                                </Typography>

                                <Typography
                                    variant="h1" // Changed to h1 as main page heading for better SEO
                                    id="services-heading"
                                    itemProp="name"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: {
                                            xs: "1.75rem",
                                            md: "2.25rem",
                                        },
                                        lineHeight: 1.2,
                                        mb: { xs: 1, md: 2 },
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    Professional Basement Finishing in Northern
                                    Utah
                                </Typography>

                                <Typography
                                    variant="body1"
                                    itemProp="description"
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            md: "1.125rem",
                                        },
                                        lineHeight: 1.6,
                                        color: "#333333",
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    We know every home is different. That's why we take the time to understand what you want before we start any work. With 15+ years finishing basements across Davis and Weber Counties, we've learned how to do the job right: on time, on budget, and built to last.
                                </Typography>

                                <Stack
                                    component="ul"
                                    spacing={3}
                                    sx={{
                                        listStyleType: "none",
                                        padding: 0,
                                        margin: 0,
                                        mt: 2,
                                        color: "black",
                                    }}
                                    aria-label="Basement Finishing Service Benefits"
                                >
                                    {serviceBenefits.map((benefit, index) => (
                                        <Box
                                            component="li"
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                textAlign: "left",
                                            }}
                                            itemProp="hasOfferCatalog"
                                        >
                                            <Box
                                                sx={{
                                                    minWidth: "24px",
                                                    height: "24px",
                                                    mr: 2,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#1C7C54",
                                                    mt: "2px",
                                                }}
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
