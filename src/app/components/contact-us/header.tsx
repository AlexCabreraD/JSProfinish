import React from "react";
import {
    Container,
    Grid,
    Stack,
    Typography,
    Box,
    Breadcrumbs,
} from "@mui/material";
import Link from "next/link";
import { MdHome, MdEmail, MdPhone } from "react-icons/md";

const contactHeaderSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact JS ProFinish - Basement Remodeling Services",
    description:
        "Get in touch with Northern Utah's premier basement finishing experts. Contact JS ProFinish for a free consultation about your basement renovation project in Davis County and Weber County.",
    url: "https://www.jsprofinish-utah.com/contact-us",
    mainEntity: {
        "@type": "ContactPage",
        name: "JS ProFinish Contact Information",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+13856263514",
            contactType: "customer service",
            email: "contact@jsprofinish-utah.com",
            areaServed: ["Davis County", "Weber County", "Northern Utah"],
            availableLanguage: "English",
        },
    },
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.jsprofinish-utah.com/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: "https://www.jsprofinish-utah.com/contact-us",
            },
        ],
    },
};

const Header = () => {
    return (
        <Box
            component="section"
            id="contact-header-section"
            aria-labelledby="contact-heading"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactHeaderSchema),
                }}
            />

            <Box
                sx={{
                    position: "relative",
                    backgroundImage:
                        "linear-gradient(to right, rgba(28, 124, 84, 0.03), rgba(28, 124, 84, 0.07), rgba(28, 124, 84, 0.03))",
                    pb: 1,
                }}
            >
                <Container maxWidth={false}>
                    <Breadcrumbs
                        separator="›"
                        aria-label="breadcrumb"
                        sx={{
                            pt: 2,
                            pb: 2,
                            "& .MuiBreadcrumbs-ol": {
                                alignItems: "center",
                            },
                        }}
                    >
                        <Link href="/" passHref>
                            <Box
                                component="span"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#5F5F5F",
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: "#1C7C54",
                                    },
                                    textDecoration: "none",
                                }}
                            >
                                <MdHome style={{ marginRight: "5px" }} />
                                <Typography component="span">Home</Typography>
                            </Box>
                        </Link>
                        <Typography color="text.primary">Contact Us</Typography>
                    </Breadcrumbs>
                </Container>
            </Box>

            <Container
                maxWidth={false}
                className={"primary-background"}
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    py: { xs: 10, md: 14 },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "200px",
                        background:
                            "linear-gradient(to bottom, rgba(28, 124, 84, 0) 0%, rgba(28, 124, 84, 0.03) 100%)",
                        zIndex: 0,
                    },
                }}
            >
                <Grid
                    container
                    sx={{
                        alignItems: "start",
                        height: "fit-content",
                        maxWidth: "1440px",
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={9}
                        lg={8}
                        sx={{ px: { xs: 2, md: 4 } }}
                    >
                        <Box sx={{ position: "relative" }}>
                            <Typography
                                variant="overline"
                                component="p"
                                sx={{
                                    color: "#1C7C54",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    mb: 2,
                                    display: "inline-block",
                                }}
                            >
                                CONTACT US
                            </Typography>

                            <Typography
                                variant="h1"
                                component="h1"
                                id="contact-heading"
                                sx={{
                                    color: "text.primary",
                                    fontWeight: 800,
                                    fontSize: {
                                        xs: "2.25rem",
                                        sm: "2.75rem",
                                        md: "3.25rem",
                                    },
                                    lineHeight: 1.2,
                                    mb: { xs: 3, md: 4 },
                                    maxWidth: "90%",
                                    position: "relative",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -16,
                                        left: 0,
                                        width: "80px",
                                        height: "4px",
                                        backgroundColor: "#1C7C54",
                                        borderRadius: "2px",
                                    },
                                }}
                            >
                                Get in Touch for Your Basement Renovation
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    lineHeight: 1.6,
                                    mb: 4,
                                    color: "#5F5F5F",
                                    maxWidth: "700px",
                                    mt: 4,
                                }}
                            >
                                Do you have questions about your basement
                                remodeling project or are you ready to transform
                                your space? Contact JS ProFinish today via
                                email, phone, or by completing the form below.
                                Our team of basement finishing experts in
                                Northern Utah will promptly respond to your
                                inquiry.
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    gap: { xs: 3, sm: 4 },
                                    mt: 4,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 45,
                                            height: 45,
                                            borderRadius: "50%",
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.1)",
                                            mr: 2,
                                        }}
                                    >
                                        <MdPhone size={20} color="#1C7C54" />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#5F5F5F",
                                                fontWeight: 500,
                                                mb: 0.5,
                                            }}
                                        >
                                            CALL US DIRECTLY
                                        </Typography>
                                        <Box
                                            component="a"
                                            href="tel:3856263514"
                                            sx={{
                                                fontWeight: 600,
                                                textDecoration: "none",
                                                color: "#1C7C54",
                                                transition:
                                                    "color 0.2s ease-in-out",
                                                "&:hover": {
                                                    color: "#145c3f",
                                                },
                                                fontSize: "1rem",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            (385) 626-3514
                                        </Box>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 45,
                                            height: 45,
                                            borderRadius: "50%",
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.1)",
                                            mr: 2,
                                        }}
                                    >
                                        <MdEmail size={20} color="#1C7C54" />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#5F5F5F",
                                                fontWeight: 500,
                                                mb: 0.5,
                                            }}
                                        >
                                            EMAIL US
                                        </Typography>
                                        <Box
                                            component="a"
                                            href="mailto:contact@jsprofinish-utah.com"
                                            sx={{
                                                fontWeight: 600,
                                                textDecoration: "none",
                                                color: "#1C7C54",
                                                transition:
                                                    "color 0.2s ease-in-out",
                                                "&:hover": {
                                                    color: "#145c3f",
                                                },
                                                fontSize: "1rem",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            contact@jsprofinish-utah.com
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        position: "absolute",
                        top: "15%",
                        right: "5%",
                        width: { xs: "100px", md: "180px" },
                        height: { xs: "100px", md: "180px" },
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        border: "2px solid rgba(28, 124, 84, 0.05)",
                        transform: "rotate(15deg)",
                        zIndex: 1,
                        display: { xs: "none", md: "block" },
                    }}
                    aria-hidden="true"
                />

                <Box
                    sx={{
                        position: "absolute",
                        bottom: "10%",
                        left: "8%",
                        width: { xs: "80px", md: "120px" },
                        height: { xs: "80px", md: "120px" },
                        borderRadius: "50%",
                        backgroundColor: "rgba(28, 124, 84, 0.03)",
                        zIndex: 1,
                        display: { xs: "none", md: "block" },
                    }}
                    aria-hidden="true"
                />
            </Container>
        </Box>
    );
};

export default Header;
