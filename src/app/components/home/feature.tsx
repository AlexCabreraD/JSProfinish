import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Grid version 2
import Stack from "@mui/material/Stack";
import Image from "next/image";
import img7 from "../../assets/home/img/image7.png";
import { FaRegCheckCircle } from "react-icons/fa";

export const featureStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Basement Finishing Services",
    description:
        "Professional basement finishing services designed to meet your unique needs and preferences, transforming your basement into a comfortable and stylish area.",
    provider: {
        "@type": "LocalBusiness",
        name: "JS ProFinish",
        areaServed: ["Northern Utah", "Weber County", "Davis County"],
    },
    serviceType: "Basement Remodeling",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Basement Finishing Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Expert Craftsmanship",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Customized Solutions",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Affordable Pricing",
                },
            },
        ],
    },
};

const Feature = () => {
    return (
        <Box
            component="section"
            id="services-section"
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
                        size={{ xs: 12, md: 6 }}
                        order={{ xs: 2, md: 1 }}
                        sx={{
                            position: "relative",
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
                                alt="Professional basement remodeling by JS ProFinish featuring custom design and expert craftsmanship"
                                width={600}
                                height={450}
                                priority={true}
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
                                backgroundColor: "rgba(28, 124, 84, 0.12)",
                                bottom: { xs: "-20px", md: "-30px" },
                                left: { xs: "-20px", md: "-30px" },
                                zIndex: -1,
                                display: { xs: "none", md: "block" },
                            }}
                        />
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
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
                            {/* Section Label */}
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
                                SERVICES
                            </Typography>

                            <Typography
                                variant="h3"
                                component="h2"
                                id="services-heading"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                                    lineHeight: 1.2,
                                    mb: { xs: 1, md: 2 },
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                Our Basement Finishing Services
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    lineHeight: 1.6,
                                    color: "#333333",
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                Our services are designed to meet your unique
                                needs and preferences. With our expertise, we
                                can turn your basement into a comfortable and
                                stylish area for you and your family to enjoy.
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
                                aria-label="Service Benefits"
                            >
                                {[
                                    {
                                        title: "Expert Craftsmanship",
                                        description:
                                            "Quality finishes and attention to detail in every project",
                                    },
                                    {
                                        title: "Customized Solutions",
                                        description:
                                            "Tailored designs to match your specific needs and style preferences",
                                    },
                                    {
                                        title: "Affordable Pricing",
                                        description:
                                            "Competitive rates with financing options available",
                                    },
                                ].map((benefit, index) => (
                                    <Box
                                        component="li"
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            textAlign: "left",
                                        }}
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
                                                variant="subtitle1"
                                                component="span"
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
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(featureStructuredData),
                }}
            />
        </Box>
    );
};

export default Feature;
