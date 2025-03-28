import { Container, Grid, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { MdPhone, MdPhotoLibrary } from "react-icons/md";

const ctaStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Basement Renovation Consultation",
    description:
        "Get in touch with JS ProFinish for professional basement renovation consultation in Northern Utah. We help transform your ideas into beautiful and functional spaces.",
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
        email: "contact@jsprofinish-utah.com",
    },
    areaServed: ["Davis County", "Weber County", "Northern Utah"],
    serviceType: "Basement Finishing",
    potentialAction: {
        "@type": "ContactAction",
        name: "Get a Free Estimate",
        target: "https://www.jsprofinish-utah.com/contact-us",
    },
};

const Cta2 = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: { xs: "0", md: "16px" },
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
                    backgroundColor: "#f9f9f9",
                    maxWidth: "1440px",
                    margin: "0 auto",
                }}
            >
                <Grid
                    container
                    sx={{
                        alignItems: "center",
                        height: "fit-content",
                        textAlign: "start",
                        padding: { xs: "56px 24px", md: "80px 64px" },
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ padding: { xs: "16px", md: "0" } }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: "2rem", md: "2.5rem" },
                                fontWeight: 700,
                                color: "#333333",
                            }}
                        >
                            Ready to Transform Your Basement?
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                marginTop: "24px",
                                fontSize: { xs: "1rem", md: "1.125rem" },
                                color: "#555555",
                                maxWidth: "540px",
                            }}
                        >
                            If you&apos;re looking to renovate your basement,
                            we&apos;re here to help. Contact us today to discuss
                            your project and let&apos;s embark on this exciting
                            journey together. We offer free estimates and
                            personalized consultations for all Northern Utah
                            homeowners.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid
                            container
                            spacing={3}
                            justifyContent={{ xs: "center", md: "flex-end" }}
                            alignItems="center"
                            sx={{ marginTop: { xs: "32px", md: "0" } }}
                        >
                            <Grid item>
                                <Link
                                    href="/contact-us"
                                    passHref
                                    aria-label="Contact us for a free basement remodeling consultation"
                                >
                                    <Button
                                        variant="contained"
                                        startIcon={<MdPhone />}
                                        sx={{
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            py: 1.5,
                                            px: 3,
                                            borderRadius: "8px",
                                            fontWeight: 600,
                                            transition: "all 0.3s ease",
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
                            </Grid>
                            <Grid item>
                                <Link
                                    href="/gallery"
                                    passHref
                                    aria-label="View our basement remodeling portfolio"
                                >
                                    <Button
                                        variant="outlined"
                                        startIcon={<MdPhotoLibrary />}
                                        sx={{
                                            color: "#1C7C54",
                                            borderColor: "#1C7C54",
                                            py: 1.5,
                                            px: 3,
                                            borderRadius: "8px",
                                            fontWeight: 600,
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                borderColor: "#1C7C54",
                                                backgroundColor:
                                                    "rgba(28, 124, 84, 0.05)",
                                                transform: "translateY(-3px)",
                                            },
                                        }}
                                    >
                                        View Portfolio
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        position: "absolute",
                        top: -40,
                        right: -40,
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: "rgba(28, 124, 84, 0.05)",
                        zIndex: 0,
                        display: { xs: "none", md: "block" },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: -20,
                        left: -20,
                        width: 100,
                        height: 100,
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        background: "rgba(28, 124, 84, 0.07)",
                        zIndex: 0,
                        display: { xs: "none", md: "block" },
                    }}
                />
            </Box>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(ctaStructuredData),
                }}
            />
        </Container>
    );
};

export default Cta2;
