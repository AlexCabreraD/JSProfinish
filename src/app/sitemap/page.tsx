"use client";

import React from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Divider,
    Grid,
    Link as MuiLink,
    Breadcrumbs,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import {
    MdHome,
    MdInfo,
    MdDesignServices,
    MdContactPage,
    MdPhotoLibrary,
    MdLocationOn,
    MdSecurity,
    MdGavel,
    MdAccessTime,
} from "react-icons/md";
import { FaMap, FaTools, FaQuestionCircle } from "react-icons/fa";

const Sitemap = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const siteStructure = [
        {
            title: "Main Pages",
            icon: <MdHome size={24} />,
            links: [
                {
                    href: "/",
                    label: "Home",
                    description:
                        "Homepage with services overview and introduction",
                },
                {
                    href: "/about-us",
                    label: "About Us",
                    description: "Learn about our company, mission, and team",
                },
                {
                    href: "/services",
                    label: "Services",
                    description:
                        "Detailed information about our basement finishing services",
                },
                {
                    href: "/gallery",
                    label: "Gallery",
                    description:
                        "Browse our portfolio of completed basement projects",
                },
                {
                    href: "/contact-us",
                    label: "Contact Us",
                    description: "Get in touch for quotes or questions",
                },
            ],
        },
        {
            title: "Location Pages",
            icon: <MdLocationOn size={24} />,
            links: [
                {
                    href: "/weber-county",
                    label: "Weber County",
                    description:
                        "Services and projects in Ogden and surrounding areas",
                },
                {
                    href: "/davis-county",
                    label: "Davis County",
                    description:
                        "Services and projects in Clearfield, Layton and surrounding areas",
                },
            ],
        },
        {
            title: "Legal Pages",
            icon: <MdGavel size={24} />,
            links: [
                {
                    href: "/privacy-policy",
                    label: "Privacy Policy",
                    description: "How we collect and use your information",
                },
                {
                    href: "/terms-of-service",
                    label: "Terms of Service",
                    description: "Rules and guidelines for using our services",
                },
                {
                    href: "/sitemap",
                    label: "Sitemap",
                    description: "Overview of our website's structure",
                },
            ],
        },
    ];

    return (
        <Box
            component="section"
            id="sitemap-section"
            sx={{
                backgroundColor: "#333333",
                color: "white",
                pt: { xs: 10, md: 14 },
                pb: { xs: 8, md: 12 },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage:
                        "radial-gradient(#FFFFFF 1px, transparent 1px), radial-gradient(#FFFFFF 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                    zIndex: 1,
                },
            }}
        >
            <Container
                maxWidth={false}
                sx={{ maxWidth: "1440px", position: "relative", zIndex: 2 }}
            >
                <Breadcrumbs
                    separator="›"
                    aria-label="breadcrumb"
                    sx={{
                        mb: 6,
                        "& .MuiBreadcrumbs-ol": {
                            alignItems: "center",
                        },
                        color: "rgba(255,255,255,0.7)",
                    }}
                >
                    <Link href="/" passHref>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "rgba(255,255,255,0.7)",
                                "&:hover": {
                                    color: "#1C7C54",
                                },
                            }}
                        >
                            <MdHome style={{ marginRight: "5px" }} />
                            <Typography component="span">Home</Typography>
                        </Box>
                    </Link>
                    <Typography color="white">Sitemap</Typography>
                </Breadcrumbs>

                <Box sx={{ mb: 6, textAlign: "center" }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            fontWeight: 700,
                            mb: 2,
                            background:
                                "linear-gradient(45deg, #1C7C54 0%, #6EB98F 100%)",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Sitemap
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#FFFFFF",
                            maxWidth: "700px",
                            margin: "0 auto",
                        }}
                    >
                        Welcome to our sitemap. Here you can find an overview of
                        all pages on our website to help you navigate and find
                        the information you need.
                    </Typography>
                </Box>

                <Paper
                    elevation={5}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: "16px",
                        mb: 6,
                        background: "white",
                        border: "1px solid rgba(28, 124, 84, 0.1)",
                        position: "relative",
                        zIndex: 3,
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -20,
                            right: 40,
                            width: 50,
                            height: 50,
                            borderRadius: "8px",
                            background: "rgba(28, 124, 84, 0.1)",
                            transform: "rotate(45deg)",
                            zIndex: -1,
                            display: { xs: "none", md: "block" },
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: { xs: -30, md: -40 },
                            left: { xs: 20, md: 40 },
                            backgroundColor: "#1C7C54",
                            color: "white",
                            borderRadius: "50%",
                            width: { xs: 60, md: 80 },
                            height: { xs: 60, md: 80 },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 10px 20px rgba(28, 124, 84, 0.2)",
                        }}
                    >
                        <FaMap size={isMobile ? 30 : 40} />
                    </Box>

                    <Box sx={{ mb: 6, mt: { xs: 4, md: 2 } }}>
                        {siteStructure.map((section, index) => (
                            <Box key={index} sx={{ mb: 5 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        mb: 3,
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.05)",
                                        p: 2,
                                        borderRadius: "8px",
                                    }}
                                >
                                    <Box sx={{ color: "#1C7C54" }}>
                                        {section.icon}
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        sx={{
                                            fontWeight: 600,
                                            color: "#1C7C54",
                                        }}
                                    >
                                        {section.title}
                                    </Typography>
                                </Box>

                                <Grid container spacing={3}>
                                    {section.links.map((link, linkIndex) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={linkIndex}
                                        >
                                            <Paper
                                                elevation={2}
                                                sx={{
                                                    p: 3,
                                                    height: "100%",
                                                    borderRadius: "12px",
                                                    transition: "all 0.3s ease",
                                                    border: "1px solid rgba(28, 124, 84, 0.05)",
                                                    "&:hover": {
                                                        transform:
                                                            "translateY(-5px)",
                                                        boxShadow:
                                                            "0 10px 25px rgba(28, 124, 84, 0.1)",
                                                        borderColor:
                                                            "rgba(28, 124, 84, 0.2)",
                                                    },
                                                }}
                                            >
                                                <Link href={link.href} passHref>
                                                    <Typography
                                                        variant="h6"
                                                        component="div"
                                                        sx={{
                                                            color: "#1C7C54",
                                                            mb: 1,
                                                            fontWeight: 600,
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            "&::after": {
                                                                content: "''",
                                                                display:
                                                                    "inline-block",
                                                                width: "6px",
                                                                height: "6px",
                                                                borderTop:
                                                                    "2px solid #1C7C54",
                                                                borderRight:
                                                                    "2px solid #1C7C54",
                                                                transform:
                                                                    "rotate(45deg)",
                                                                marginLeft:
                                                                    "8px",
                                                                transition:
                                                                    "transform 0.2s ease",
                                                            },
                                                            "&:hover::after": {
                                                                transform:
                                                                    "translateX(3px) rotate(45deg)",
                                                            },
                                                        }}
                                                    >
                                                        {link.label}
                                                    </Typography>
                                                </Link>
                                                <Typography
                                                    variant="body2"
                                                    color="#5F5F5F"
                                                >
                                                    {link.description}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>

                                {index < siteStructure.length - 1 && (
                                    <Divider sx={{ my: 4 }} />
                                )}
                            </Box>
                        ))}
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    <Box sx={{ textAlign: "center", py: 2 }}>
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                                mb: 3,
                            }}
                        >
                            Need Help Finding Something?
                        </Typography>
                        <Typography
                            variant="body1"
                            color="#5F5F5F"
                            paragraph
                            sx={{ maxWidth: "700px", margin: "0 auto", mb: 4 }}
                        >
                            If you can&#39;t find what you&#39;re looking for,
                            please don&#39;t hesitate to contact us. Our team is
                            ready to assist you with any questions or concerns.
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} sm={4}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        borderRadius: "12px",
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.05)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow:
                                                "0 10px 25px rgba(28, 124, 84, 0.1)",
                                        },
                                    }}
                                >
                                    <MdContactPage
                                        size={30}
                                        color="#1C7C54"
                                        style={{ marginBottom: "16px" }}
                                    />
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                        gutterBottom
                                    >
                                        Contact Us
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#5F5F5F"
                                        paragraph
                                    >
                                        Reach out via our contact form or phone
                                    </Typography>
                                    <Link href="/contact-us" passHref>
                                        <MuiLink
                                            sx={{
                                                color: "#1C7C54",
                                                fontWeight: 600,
                                                display: "flex",
                                                alignItems: "center",
                                                textDecoration: "none",
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                },
                                            }}
                                        >
                                            Get in Touch
                                        </MuiLink>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        borderRadius: "12px",
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.05)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow:
                                                "0 10px 25px rgba(28, 124, 84, 0.1)",
                                        },
                                    }}
                                >
                                    <FaQuestionCircle
                                        size={30}
                                        color="#1C7C54"
                                        style={{ marginBottom: "16px" }}
                                    />
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                        gutterBottom
                                    >
                                        FAQ
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#5F5F5F"
                                        paragraph
                                    >
                                        Find answers to common questions
                                    </Typography>
                                    <Link href="/terms-of-service#faq" passHref>
                                        <MuiLink
                                            sx={{
                                                color: "#1C7C54",
                                                fontWeight: 600,
                                                display: "flex",
                                                alignItems: "center",
                                                textDecoration: "none",
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                },
                                            }}
                                        >
                                            View FAQs
                                        </MuiLink>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        borderRadius: "12px",
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.05)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow:
                                                "0 10px 25px rgba(28, 124, 84, 0.1)",
                                        },
                                    }}
                                >
                                    <MdAccessTime
                                        size={30}
                                        color="#1C7C54"
                                        style={{ marginBottom: "16px" }}
                                    />
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                        gutterBottom
                                    >
                                        Business Hours
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#5F5F5F"
                                        paragraph
                                    >
                                        Monday-Friday: 8AM-6PM
                                        <br />
                                        Saturday: 9AM-4PM
                                        <br />
                                        Sunday: Closed
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Sitemap;
