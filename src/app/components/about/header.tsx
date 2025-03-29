import Image from "next/image";
import img9 from "@/app/assets/home/img/image9.png";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import Link from "next/link";

const Header = () => {
    return (
        <Box
            component="section"
            id="about-hero-section"
            aria-labelledby="about-heading"
            sx={{
                position: "relative",
                minHeight: { xs: "100vh", sm: "90vh", md: "100vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "#1a1a1a",
                paddingTop: { xs: "80px", sm: "80px", md: "0" },
                paddingBottom: { xs: "40px", sm: "40px", md: "0" },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src={img9}
                    alt="JS ProFinish basement remodeling showcase in Clearfield, Utah"
                    priority
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        filter: "brightness(0.45)",
                    }}
                    quality={90}
                />
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        "linear-gradient(135deg, rgba(28, 124, 84, 0.7) 0%, rgba(0, 0, 0, 0.85) 100%)",
                    zIndex: 1,
                }}
                aria-hidden="true"
            />

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: 2, sm: 4, md: 6 },
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={7}>
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                mb: { xs: 2, sm: 3 },
                                borderRadius: "6px",
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                px: 2,
                                py: 0.7,
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            <Typography
                                variant="overline"
                                component="span"
                                sx={{
                                    color: "#1C7C54",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    fontSize: {
                                        xs: "0.75rem",
                                        sm: "0.85rem",
                                        md: "0.95rem",
                                    },
                                }}
                            >
                                ESTABLISHED 2019
                            </Typography>
                        </Box>

                        <Typography
                            variant="h1"
                            component="h1"
                            id="about-heading"
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: 800,
                                fontSize: {
                                    xs: "2rem",
                                    sm: "3rem",
                                    md: "4rem",
                                },
                                lineHeight: { xs: 1.2, md: 1.1 },
                                mb: { xs: 2, sm: 3, md: 3.5 },
                                textShadow: "0 3px 15px rgba(0, 0, 0, 0.4)",
                                maxWidth: "850px",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Your Trusted Basement Remodeling Experts in Northern
                            Utah
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "rgba(255, 255, 255, 0.95)",
                                fontSize: {
                                    xs: "1rem",
                                    sm: "1.1rem",
                                    md: "1.25rem",
                                },
                                lineHeight: { xs: 1.5, md: 1.6 },
                                mb: { xs: 3, sm: 4, md: 5 },
                                maxWidth: "750px",
                                textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                                fontWeight: 400,
                            }}
                        >
                            Welcome to JS ProFinish, where we&#39;ve been
                            transforming basements and bringing dreams to life
                            for over 15 years. Based in Clearfield, UT, we serve
                            Davis County, Weber County, and surrounding areas
                            with exceptional craftsmanship and personalized
                            service.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: { xs: 2, sm: 3 },
                                mt: 1,
                                mb: { xs: 4, sm: 0 },
                            }}
                        >
                            <Link
                                href="/contact-us"
                                passHref
                                aria-label="Contact our team for a basement remodeling consultation"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: "#1C7C54",
                                        color: "#FFFFFF",
                                        py: { xs: 1.5, md: 1.75 },
                                        px: { xs: 3, md: 4.5 },
                                        fontWeight: 700,
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        fontSize: {
                                            xs: "0.95rem",
                                            md: "1.1rem",
                                        },
                                        boxShadow:
                                            "0 8px 20px rgba(0, 0, 0, 0.25)",
                                        border: "2px solid #1C7C54",
                                        minWidth: { xs: "100%", sm: "auto" },
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#186a48",
                                            transform: "translateY(-3px)",
                                            boxShadow:
                                                "0 12px 28px rgba(0, 0, 0, 0.3)",
                                        },
                                    }}
                                >
                                    Contact Our Team
                                </Button>
                            </Link>

                            <Link
                                href="/gallery"
                                passHref
                                aria-label="View our basement remodeling portfolio"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        color: "#FFFFFF",
                                        borderColor: "rgba(255, 255, 255, 0.9)",
                                        borderWidth: "2px",
                                        py: { xs: 1.5, md: 1.75 },
                                        px: { xs: 3, md: 4.5 },
                                        fontWeight: 600,
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        fontSize: {
                                            xs: "0.95rem",
                                            md: "1.1rem",
                                        },
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(8px)",
                                        minWidth: { xs: "100%", sm: "auto" },
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            borderColor: "#FFFFFF",
                                            backgroundColor:
                                                "rgba(255, 255, 255, 0.18)",
                                            transform: "translateY(-3px)",
                                            boxShadow:
                                                "0 8px 20px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    View Our Projects
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box
                sx={{
                    position: "absolute",
                    width: { sm: "150px", md: "180px", lg: "220px" },
                    height: { sm: "150px", md: "180px", lg: "220px" },
                    borderRadius: "30px",
                    border: "3px solid rgba(255, 255, 255, 0.15)",
                    right: { xs: "-80px", md: "5%" },
                    top: "15%",
                    transform: "rotate(15deg)",
                    zIndex: 1,
                    display: { xs: "none", sm: "block" },
                    boxShadow: "inset 0 0 40px rgba(28, 124, 84, 0.3)",
                }}
                aria-hidden="true"
            />

            <Box
                sx={{
                    position: "absolute",
                    width: { sm: "100px", md: "120px", lg: "150px" },
                    height: { sm: "100px", md: "120px", lg: "150px" },
                    borderRadius: "24px",
                    border: "3px solid rgba(255, 255, 255, 0.15)",
                    left: { xs: "-60px", sm: "5%", md: "8%" },
                    bottom: "18%",
                    transform: "rotate(-12deg)",
                    zIndex: 1,
                    display: { xs: "none", sm: "block" },
                    boxShadow: "inset 0 0 30px rgba(28, 124, 84, 0.3)",
                }}
                aria-hidden="true"
            />

            <Box
                sx={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(28, 124, 84, 0.15)",
                    backdropFilter: "blur(10px)",
                    right: "25%",
                    bottom: "15%",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                aria-hidden="true"
            />
        </Box>
    );
};

export const aboutHeaderStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    isPartOf: {
        "@type": "AboutPage",
        name: "About JS ProFinish - Basement Remodeling Experts in Northern Utah",
    },
    headline: "Your Trusted Local Basement Remodeling Experts in Northern Utah",
    description:
        "JS ProFinish has been transforming basements and bringing dreams to life for over 15 years in Davis and Weber Counties. Based in Clearfield, UT, we take pride in our exceptional craftsmanship and customer service.",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.jsprofinish-utah.com/about-us",
    },
};

export default Header;
