import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import img8 from "../../assets/home/img/image8.png";
import { RiTeamLine } from "react-icons/ri";
import Head from "next/head";

const BenefitsStructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Benefits of Professional Basement Finishing in Northern Utah",
        description:
            "Discover the key advantages of choosing JS ProFinish for your basement remodeling project in Davis and Weber Counties, including increased home value and custom design options.",
        itemListOrder: "Unordered",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                item: {
                    "@type": "Thing",
                    name: "Increased Home Value",
                    description:
                        "Professional basement finishing can increase your Northern Utah home's value by up to 70% of the project cost.",
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                item: {
                    "@type": "Thing",
                    name: "Additional Living Space",
                    description:
                        "Transform unused basement space into functional living areas for your Davis or Weber County home.",
                },
            },
            {
                "@type": "ListItem",
                position: 3,
                item: {
                    "@type": "Thing",
                    name: "Custom Design Options",
                    description:
                        "Our Utah basement remodeling services include custom design options tailored to your specific needs and preferences.",
                },
            },
            {
                "@type": "ListItem",
                position: 4,
                item: {
                    "@type": "Thing",
                    name: "Expert Craftsmanship",
                    description:
                        "Our team of experienced professionals delivers exceptional quality in every basement finishing project across Northern Utah.",
                },
            },
        ],
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.jsprofinish.com/services#benefits",
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

const Benefits = () => {
    return (
        <>
            <Head>
                <meta
                    property="og:title"
                    content="Benefits of Professional Basement Finishing in Northern Utah | JS ProFinish"
                />
                <meta
                    property="og:description"
                    content="Discover why homeowners in Davis and Weber Counties choose JS ProFinish for basement remodeling, including increased home value, additional living space, and custom design options."
                />
                <meta
                    property="og:image"
                    content="https://www.jsprofinish.com/assets/home/img/image8.png"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Box
                component="section"
                id="basement-finishing-benefits"
                aria-labelledby="benefits-heading"
                itemScope
                itemType="https://schema.org/ItemList"
                sx={{
                    py: { xs: 8, md: 14 },
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#1C7C54",
                    color: "#FFFFFF",
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
                            sx={{
                                px: { xs: 2, md: 4 },
                            }}
                        >
                            <Stack
                                spacing={{ xs: 3, md: 4 }}
                                sx={{
                                    maxWidth: "540px",
                                    mx: { xs: "auto", md: 0 },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: {
                                            xs: "center",
                                            md: "flex-start",
                                        },
                                        mb: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "56px",
                                            height: "56px",
                                            borderRadius: "50%",
                                            border: "2px solid rgba(255, 255, 255, 0.8)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        <RiTeamLine
                                            size={28}
                                            aria-hidden="true"
                                        />
                                    </Box>
                                </Box>

                                <Typography
                                    variant="h2"
                                    id="benefits-heading"
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
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Why Choose JS ProFinish for Your Utah
                                    Basement Project?
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
                                        textAlign: { xs: "center", md: "left" },
                                        color: "rgba(255, 255, 255, 0.9)",
                                    }}
                                >
                                    A finished basement adds real value to your home in two ways: resale value and how you use the space day-to-day. More room for your family to spread out, and a significant return on your investment when it comes time to sell.
                                </Typography>

                                <Box className="sr-only">
                                    <Box
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/ListItem"
                                    >
                                        <meta itemProp="position" content="1" />
                                        <Box
                                            itemProp="item"
                                            itemScope
                                            itemType="https://schema.org/Thing"
                                        >
                                            <span itemProp="name">
                                                Increased Home Value
                                            </span>
                                            <meta
                                                itemProp="description"
                                                content="Professional basement finishing can increase your Northern Utah home's value by up to 70% of the project cost"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/ListItem"
                                    >
                                        <meta itemProp="position" content="2" />
                                        <Box
                                            itemProp="item"
                                            itemScope
                                            itemType="https://schema.org/Thing"
                                        >
                                            <span itemProp="name">
                                                Additional Living Space
                                            </span>
                                            <meta
                                                itemProp="description"
                                                content="Transform unused basement space into functional living areas for your Davis or Weber County home"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/ListItem"
                                    >
                                        <meta itemProp="position" content="3" />
                                        <Box
                                            itemProp="item"
                                            itemScope
                                            itemType="https://schema.org/Thing"
                                        >
                                            <span itemProp="name">
                                                Custom Design Options
                                            </span>
                                            <meta
                                                itemProp="description"
                                                content="Our Utah basement remodeling services include custom design options tailored to your specific needs and preferences"
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/ListItem"
                                    >
                                        <meta itemProp="position" content="4" />
                                        <Box
                                            itemProp="item"
                                            itemScope
                                            itemType="https://schema.org/Thing"
                                        >
                                            <span itemProp="name">
                                                Expert Craftsmanship
                                            </span>
                                            <meta
                                                itemProp="description"
                                                content="Our team of experienced professionals delivers exceptional quality in every basement finishing project across Northern Utah"
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(180deg, rgba(28, 124, 84, 0) 0%, rgba(28, 124, 84, 0.15) 100%)",
                                        zIndex: 1,
                                    },
                                }}
                            >
                                <Image
                                    src={img8}
                                    alt="Modern finished basement in Davis County featuring a comfortable living area with sectional sofa, designed and built by JS ProFinish"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "12px",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    top: { xs: "-20px", md: "-30px" },
                                    right: { xs: "-20px", md: "-30px" },
                                    zIndex: -1,
                                    display: { xs: "none", md: "block" },
                                }}
                                aria-hidden="true"
                            />
                        </Grid>
                    </Grid>
                </Container>

                <BenefitsStructuredData />
            </Box>
        </>
    );
};

export default Benefits;
