import React from "react";
import {
    Button,
    Container,
    Grid,
    Stack,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import Link from "next/link";

const ctaStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Basement Finishing Consultation",
    description:
        "Professional basement remodeling and finishing services in Northern Utah.",
    provider: {
        "@type": "LocalBusiness",
        name: "JS ProFinish",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Clearfield",
            addressRegion: "UT",
            postalCode: "84015",
            streetAddress: "1740 S 300 W #8",
        },
        telephone: "(385) 626-3514",
    },
    areaServed: ["Davis County", "Weber County", "Northern Utah"],
    serviceType: "Basement Finishing",
    potentialAction: {
        "@type": "ContactAction",
        name: "Get a Free Estimate",
        target: "https://www.jsprofinish.com/contact-us",
    },
};

const Cta = () => {
    return (
        <Box component="section" id="cta-section" aria-labelledby="cta-heading">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(ctaStructuredData),
                }}
            />

            <Container
                maxWidth={false}
                className={"primary-background"}
                sx={{
                    position: "relative",
                    py: { xs: 10, md: 14 },
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "5px",
                        background:
                            "linear-gradient(90deg, rgba(28, 124, 84, 0.3), rgba(28, 124, 84, 0.8), rgba(28, 124, 84, 0.3))",
                        zIndex: 1,
                    },
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        maxWidth: "1440px",
                        margin: "0 auto",
                        p: { xs: 3, md: 5 },
                        borderRadius: "16px",
                        backgroundColor: "rgba(28, 124, 84, 0.03)",
                        border: "1px solid rgba(28, 124, 84, 0.1)",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -100,
                            right: -100,
                            width: 200,
                            height: 200,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(28, 124, 84, 0.1) 0%, rgba(28, 124, 84, 0) 70%)",
                            zIndex: 0,
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: -80,
                            left: -80,
                            width: 160,
                            height: 160,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(28, 124, 84, 0.08) 0%, rgba(28, 124, 84, 0) 70%)",
                            zIndex: 0,
                        },
                    }}
                >
                    <Grid
                        container
                        spacing={4}
                        sx={{
                            alignItems: "center",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={7}
                            sx={{
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            <Box sx={{ position: "relative" }}>
                                <Typography
                                    variant="overline"
                                    component="p"
                                    sx={{
                                        color: "#1C7C54",
                                        fontWeight: 600,
                                        letterSpacing: "0.1em",
                                        mb: 1,
                                        display: "inline-block",
                                    }}
                                >
                                    TAKE THE NEXT STEP
                                </Typography>

                                <Typography
                                    variant="h2"
                                    component="h2"
                                    id="cta-heading"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: "2rem", md: "2.5rem" },
                                        lineHeight: 1.2,
                                        mb: 2,
                                    }}
                                >
                                    Ready to Transform Your Basement?
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            md: "1.125rem",
                                        },
                                        mb: 3,
                                        maxWidth: "600px",
                                        color: "#5F5F5F",
                                    }}
                                >
                                    Contact us today for a free consultation and
                                    let&apos;s bring your vision to life with
                                    our premium basement finishing services in
                                    Northern Utah. Our team of experts is ready
                                    to help you create the perfect space for
                                    your needs.
                                </Typography>

                                <Box
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        alignItems: "center",
                                        mb: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 50,
                                            height: 50,
                                            borderRadius: "50%",
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.1)",
                                            mr: 2,
                                        }}
                                    >
                                        <MdPhone size={24} color="#1C7C54" />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="caption"
                                            component="p"
                                            sx={{
                                                color: "#5F5F5F",
                                                fontWeight: 500,
                                            }}
                                        >
                                            CALL FOR A FREE ESTIMATE
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            component="a"
                                            href="tel:3856263514"
                                            sx={{
                                                fontWeight: 700,
                                                textDecoration: "none",
                                                color: "#1C7C54",
                                                transition:
                                                    "color 0.2s ease-in-out",
                                                "&:hover": {
                                                    color: "#145c3f",
                                                },
                                            }}
                                        >
                                            (385) 626-3514
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={5}
                            sx={{
                                textAlign: { xs: "center", md: "right" },
                            }}
                        >
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={{ xs: 2, md: 3 }}
                                sx={{
                                    justifyContent: {
                                        xs: "center",
                                        md: "flex-end",
                                    },
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
                                            borderRadius: "8px",
                                            fontWeight: 600,
                                            transition: "all 0.3s ease",
                                            boxShadow:
                                                "0 4px 10px rgba(28, 124, 84, 0.2)",
                                            "&:hover": {
                                                backgroundColor: "#145c3f",
                                                transform: "translateY(-3px)",
                                                boxShadow:
                                                    "0 8px 15px rgba(28, 124, 84, 0.3)",
                                            },
                                        }}
                                    >
                                        Get Free Consultation
                                    </Button>
                                </Link>

                                <Link href="/gallery" passHref>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        endIcon={<IoIosArrowForward />}
                                        sx={{
                                            color: "#1C7C54",
                                            borderColor: "#1C7C54",
                                            py: 1.5,
                                            px: 4,
                                            borderRadius: "8px",
                                            fontWeight: 600,
                                            borderWidth: "2px",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                borderColor: "#1C7C54",
                                                backgroundColor:
                                                    "rgba(28, 124, 84, 0.05)",
                                                transform: "translateY(-3px)",
                                            },
                                        }}
                                    >
                                        View Our Projects
                                    </Button>
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>

                <Box
                    sx={{
                        position: "absolute",
                        width: { xs: "100px", md: "160px" },
                        height: { xs: "100px", md: "160px" },
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        border: "2px solid rgba(28, 124, 84, 0.1)",
                        right: { xs: "-30px", md: "5%" },
                        top: "15%",
                        zIndex: 0,
                        display: { xs: "none", md: "block" },
                    }}
                    aria-hidden="true"
                />

                <Box
                    sx={{
                        position: "absolute",
                        width: { xs: "80px", md: "120px" },
                        height: { xs: "80px", md: "120px" },
                        borderRadius: "50%",
                        border: "2px solid rgba(28, 124, 84, 0.1)",
                        left: { xs: "-40px", md: "10%" },
                        bottom: "15%",
                        zIndex: 0,
                        display: { xs: "none", md: "block" },
                    }}
                    aria-hidden="true"
                />
            </Container>
        </Box>
    );
};

export default Cta;
