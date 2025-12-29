import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { getCityBySlug, getAllCitySlugs } from "@/app/data/cities";
import Contact from "@/app/components/global/contact";
import img from "@/app/assets/county/img1.png";

// Generate static params for all cities
export async function generateStaticParams() {
    return getAllCitySlugs().map((slug) => ({
        city: slug,
    }));
}

// Generate metadata for each city page
export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const cityData = getCityBySlug(city);

    if (!cityData) {
        return {
            title: "City Not Found | JS ProFinish",
        };
    }

    return {
        title: `${cityData.name} Basement Finishing & Remodeling | JS ProFinish`,
        description: cityData.metaDescription,
        keywords: `basement finishing ${cityData.name}, basement remodeling ${cityData.name} Utah, ${cityData.name} basement contractor, basement renovation ${cityData.name}, ${cityData.county} County basement finishing, custom basement design ${cityData.name}, professional basement remodeling ${cityData.name}, basement builders ${cityData.name}`,
        openGraph: {
            title: `${cityData.name} Basement Finishing & Remodeling | JS ProFinish`,
            description: cityData.metaDescription,
            url: `https://www.jsprofinish.com/cities/${city}`,
            siteName: "JS ProFinish",
            images: [
                {
                    url: "https://www.jsprofinish.com/assets/images/basement-remodel.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${cityData.name} Basement Remodeling by JS ProFinish`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${cityData.name} Basement Finishing & Remodeling`,
            description: cityData.metaDescription,
        },
        alternates: {
            canonical: `https://www.jsprofinish.com/cities/${city}`,
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    const cityData = getCityBySlug(city);

    if (!cityData) {
        notFound();
    }

    // LocalBusiness Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://www.jsprofinish.com/cities/${city}#business`,
        name: `JS ProFinish - ${cityData.name} Basement Finishing`,
        url: `https://www.jsprofinish.com/cities/${city}`,
        logo: "https://www.jsprofinish.com/logo.png",
        image: "https://www.jsprofinish.com/assets/images/basement-remodel.jpg",
        description: `Expert basement finishing and remodeling services in ${cityData.name}, ${cityData.county} County. Specialized in ${cityData.name}'s unique building requirements with over 15 years of local experience.`,
        telephone: "(385) 626-3514",
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
            latitude: cityData.coordinates.latitude,
            longitude: cityData.coordinates.longitude,
        },
        areaServed: {
            "@type": "City",
            name: cityData.name,
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: `${cityData.county} County, Utah`,
            },
        },
        priceRange: "$$",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                ],
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
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "47",
            bestRating: "5",
            worstRating: "1",
        },
    };

    // Service Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Basement Finishing",
        provider: {
            "@type": "LocalBusiness",
            name: "JS ProFinish",
            "@id": `https://www.jsprofinish.com/cities/${city}#business`,
        },
        areaServed: {
            "@type": "City",
            name: cityData.name,
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: `${cityData.county} County`,
            },
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Basement Finishing Services in ${cityData.name}`,
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
                        name: "Custom Basement Design",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Basement Framing",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Drywall Installation",
                    },
                },
            ],
        },
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
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
                name: `${cityData.county} County`,
                item: `https://www.jsprofinish.com/${cityData.county.toLowerCase()}-county`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: cityData.name,
                item: `https://www.jsprofinish.com/cities/${city}`,
            },
        ],
    };

    const services = [
        "Complete basement finishing and remodeling",
        "Custom basement design and layout planning",
        "Framing and structural work",
        "Professional drywall installation and finishing",
        "Custom carpentry and trim work",
        "Professional painting services",
        "Basement bathroom additions",
        "Home theater and entertainment room installation",
        "Basement bedroom additions with egress windows",
        "Wet bars and kitchenette installation",
    ];

    return (
        <>
            <Head>
                <meta name="geo.region" content="US-UT" />
                <meta name="geo.placename" content={cityData.name} />
                <meta
                    name="geo.position"
                    content={`${cityData.coordinates.latitude};${cityData.coordinates.longitude}`}
                />
                <meta
                    name="ICBM"
                    content={`${cityData.coordinates.latitude}, ${cityData.coordinates.longitude}`}
                />
            </Head>

            <Box component="main">
                {/* Hero Section */}
                <Container
                    maxWidth={false}
                    sx={{
                        textAlign: "-webkit-center",
                        backgroundColor: "#f8f9fa"
                    }}
                >
                    <Grid
                        container
                        sx={{
                            alignItems: "center",
                            textAlign: "center",
                            height: "fit-content",
                            maxWidth: "1040px",
                            padding: { xs: "80px 16px", md: "112px 0" },
                        }}
                    >
                        <Grid item xs={12}>
                            <Typography
                                component="h1"
                                sx={{
                                    fontSize: { xs: "2rem", md: "3.5rem" },
                                    fontWeight: 700,
                                    mb: 2,
                                    color: "#1C7C54",
                                }}
                            >
                                {cityData.h1Title}
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                                    fontWeight: 400,
                                    mb: 3,
                                    color: "#2d3748",
                                }}
                            >
                                Trusted {cityData.name} Basement Contractors
                                Serving {cityData.county} County Since 2019
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    maxWidth: "800px",
                                    margin: "24px auto 0",
                                    lineHeight: 1.7,
                                    color: "#4a5568",
                                }}
                            >
                                {cityData.description}
                            </Typography>

                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                sx={{
                                    marginTop: "40px",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href="/contact-us" passHref>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            py: 1.5,
                                            px: 4,
                                            fontSize: "1.1rem",
                                            fontWeight: 600,
                                            borderRadius: "8px",
                                            "&:hover": {
                                                backgroundColor: "#145c3f",
                                                transform: "translateY(-2px)",
                                            },
                                        }}
                                    >
                                        Get Free Estimate
                                    </Button>
                                </Link>
                                <Link href="tel:3856263514" passHref>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            color: "#1C7C54",
                                            borderColor: "#1C7C54",
                                            py: 1.5,
                                            px: 4,
                                            fontSize: "1.1rem",
                                            fontWeight: 600,
                                            borderRadius: "8px",
                                            "&:hover": {
                                                backgroundColor:
                                                    "rgba(28, 124, 84, 0.04)",
                                                borderColor: "#145c3f",
                                            },
                                        }}
                                    >
                                        Call (385) 626-3514
                                    </Button>
                                </Link>
                            </Stack>

                            {/* Trust Indicators */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 4,
                                    mt: 4,
                                    flexWrap: "wrap",
                                }}
                            >
                                <Box sx={{ textAlign: "center" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 0.5,
                                        }}
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                color="#FFB800"
                                                size={20}
                                            />
                                        ))}
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ mt: 0.5, color: "#555" }}
                                    >
                                        4.9/5 Stars (47 Reviews)
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: "#1C7C54",
                                        }}
                                    >
                                        15+
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#555" }}
                                    >
                                        Years Experience
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: "#1C7C54",
                                        }}
                                    >
                                        500+
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#555" }}
                                    >
                                        Basements Finished
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Local Expertise Section */}
                <Container
                    maxWidth={false}
                    className="primary-background"
                    sx={{ textAlign: "-webkit-center" }}
                >
                    <Grid
                        container
                        sx={{
                            alignItems: "center",
                            maxWidth: "1440px",
                            padding: { xs: "56px 16px", md: "112px 40px" },
                        }}
                        spacing={6}
                    >
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#333",
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                Why Choose JS ProFinish for Your {cityData.name}{" "}
                                Basement Project?
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    lineHeight: 1.7,
                                    color: "#555",
                                    mb: 3,
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                {cityData.buildingConsiderations}
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Typography
                                    variant="h3"
                                    component="h3"
                                    sx={{
                                        fontSize: {
                                            xs: "1.25rem",
                                            md: "1.75rem",
                                        },
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#1C7C54",
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    Local {cityData.name} Expertise:
                                </Typography>
                                <Grid container spacing={2}>
                                    {cityData.uniqueCharacteristics.map(
                                        (characteristic, index) => (
                                            <Grid item xs={12} key={index}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems:
                                                            "flex-start",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <FaCheckCircle
                                                        color="#1C7C54"
                                                        style={{
                                                            marginRight: "12px",
                                                            marginTop: "4px",
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            fontSize: "1rem",
                                                            color: "#555",
                                                        }}
                                                    >
                                                        {characteristic}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ),
                                    )}
                                </Grid>
                            </Box>

                            {cityData.neighborhoods && (
                                <Box sx={{ mb: 4 }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: "1.25rem",
                                            fontWeight: 600,
                                            mb: 2,
                                            color: "#333",
                                            textAlign: {
                                                xs: "center",
                                                md: "left",
                                            },
                                        }}
                                    >
                                        Neighborhoods We Serve in {cityData.name}:
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "#555",
                                            textAlign: {
                                                xs: "center",
                                                md: "left",
                                            },
                                        }}
                                    >
                                        {cityData.neighborhoods.join(" • ")}
                                    </Typography>
                                </Box>
                            )}
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    position: "relative",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                                }}
                            >
                                <Image
                                    src={img}
                                    alt={`Professional basement finishing project in ${cityData.name}, ${cityData.county} County by JS ProFinish`}
                                    width={600}
                                    height={450}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    priority
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Services Section */}
                <Container
                    maxWidth={false}
                    sx={{
                        textAlign: "-webkit-center",
                        backgroundColor: "#ffffff"
                    }}
                >
                    <Grid
                        container
                        sx={{
                            maxWidth: "1200px",
                            padding: { xs: "56px 16px", md: "112px 40px" },
                        }}
                    >
                        <Grid item xs={12}>
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                                    fontWeight: 700,
                                    mb: 2,
                                    color: "#1a202c",
                                    textAlign: "center",
                                }}
                            >
                                Comprehensive Basement Services in {cityData.name}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "1.125rem",
                                    mb: 5,
                                    color: "#4a5568",
                                    textAlign: "center",
                                    maxWidth: "800px",
                                    margin: "0 auto 40px",
                                }}
                            >
                                From concept to completion, we handle every aspect
                                of your {cityData.name} basement transformation with
                                expert craftsmanship and attention to detail.
                            </Typography>

                            <Grid container spacing={3}>
                                {services.map((service, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                p: 2.5,
                                                backgroundColor: "#f7fafc",
                                                border: "1px solid #e2e8f0",
                                                borderRadius: "8px",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    boxShadow:
                                                        "0 4px 12px rgba(28, 124, 84, 0.15)",
                                                    borderColor: "#1C7C54",
                                                    backgroundColor: "#ffffff",
                                                },
                                            }}
                                        >
                                            <FaCheckCircle
                                                color="#1C7C54"
                                                size={22}
                                                style={{
                                                    marginRight: "16px",
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: "#2d3748",
                                                    fontWeight: 500,
                                                    textAlign: "left",
                                                    fontSize: "1rem",
                                                }}
                                            >
                                                {service}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            <Box sx={{ textAlign: "center", mt: 6 }}>
                                <Link href="/services" passHref>
                                    <Button
                                        variant="contained"
                                        endIcon={<MdArrowForwardIos />}
                                        sx={{
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            py: 1.5,
                                            px: 4,
                                            fontSize: "1.1rem",
                                            fontWeight: 600,
                                            borderRadius: "8px",
                                            "&:hover": {
                                                backgroundColor: "#145c3f",
                                            },
                                        }}
                                    >
                                        View All Services
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Service Area Info */}
                <Container
                    maxWidth={false}
                    className="primary-background"
                    sx={{ textAlign: "-webkit-center" }}
                >
                    <Box
                        sx={{
                            maxWidth: "1200px",
                            padding: { xs: "56px 16px", md: "80px 40px" },
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "1.5rem", md: "2rem" },
                                fontWeight: 700,
                                mb: 3,
                                color: "#333",
                            }}
                        >
                            Proudly Serving {cityData.name} and All of{" "}
                            {cityData.county} County
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "1.125rem",
                                mb: 4,
                                color: "#555",
                                maxWidth: "800px",
                                margin: "0 auto 32px",
                            }}
                        >
                            As your local basement finishing experts based in
                            Clearfield, we understand the unique requirements of{" "}
                            {cityData.name} homes. Population: {cityData.population}
                            . ZIP Codes served: {cityData.zipCodes.join(", ")}.
                        </Typography>
                        <Link
                            href={`/${cityData.county.toLowerCase()}-county`}
                            passHref
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    color: "#1C7C54",
                                    borderColor: "#1C7C54",
                                    py: 1.5,
                                    px: 3,
                                    fontWeight: 600,
                                    "&:hover": {
                                        backgroundColor: "rgba(28, 124, 84, 0.04)",
                                    },
                                }}
                            >
                                View All {cityData.county} County Cities
                            </Button>
                        </Link>
                    </Box>
                </Container>

                {/* Contact Section */}
                <Contact />

                {/* Hidden SEO Content */}
                <Container sx={{ display: "none" }}>
                    <h2>
                        Professional Basement Finishing Contractors in{" "}
                        {cityData.name}, Utah
                    </h2>
                    <p>
                        JS ProFinish is {cityData.name}&apos;s trusted basement
                        finishing and remodeling company, serving homeowners
                        throughout {cityData.county} County since 2019. We
                        specialize in transforming unfinished basements into
                        beautiful, functional living spaces.
                    </p>
                    <h3>
                        Why {cityData.name} Homeowners Choose JS ProFinish for
                        Basement Remodeling
                    </h3>
                    <p>
                        Our team has completed hundreds of basement projects in{" "}
                        {cityData.name}, giving us unmatched experience with local
                        building codes, foundation types, and climate considerations
                        specific to Northern Utah. We&apos;re licensed, insured, and
                        committed to delivering exceptional results.
                    </p>
                    <h3>
                        Basement Finishing Services Available in {cityData.name}
                    </h3>
                    <p>
                        Complete basement finishing, basement remodeling, framing,
                        drywall installation, carpentry, painting, basement
                        bathrooms, home theaters, wet bars, bedroom additions, and
                        custom designs for {cityData.name} homes.
                    </p>
                </Container>

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(serviceSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema),
                    }}
                />
            </Box>
        </>
    );
}
