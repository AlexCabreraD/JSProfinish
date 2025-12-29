"use client";

import React from "react";
import {
    Container,
    Grid,
    Typography,
    Box,
    Paper,
    Stack,
    Divider,
    IconButton,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const navigationLinks = [
        {
            category: "Services",
            links: [
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/weber-county", label: "Weber County" },
                { href: "/davis-county", label: "Davis County" },
            ],
        },
        {
            category: "Company",
            links: [
                { href: "/about-us", label: "About Us" },
                { href: "/contact-us", label: "Contact Us" },
            ],
        },
        {
            category: "Weber County",
            links: [
                { href: "/cities/ogden", label: "Ogden" },
                { href: "/cities/roy", label: "Roy" },
                { href: "/cities/north-ogden", label: "North Ogden" },
                { href: "/cities/south-ogden", label: "South Ogden" },
                { href: "/cities/pleasant-view", label: "Pleasant View" },
                { href: "/cities/harrisville", label: "Harrisville" },
            ],
        },
        {
            category: "Davis County",
            links: [
                { href: "/cities/clearfield", label: "Clearfield" },
                { href: "/cities/layton", label: "Layton" },
                { href: "/cities/kaysville", label: "Kaysville" },
                { href: "/cities/farmington", label: "Farmington" },
                { href: "/cities/bountiful", label: "Bountiful" },
                { href: "/cities/syracuse", label: "Syracuse" },
            ],
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            id="main-footer"
            sx={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#F5F5F5",
                pt: isMobile ? "60px" : "80px",
                pb: isMobile ? "40px" : "30px",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "5px",
                    background:
                        "linear-gradient(to right, #1C7C54, #2A9D8F, #1C7C54)",
                    zIndex: 1,
                },
            }}
        >
            <Container
                maxWidth={false}
                sx={{ maxWidth: "1440px", margin: "0 auto" }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 3 }}>
                            <Link href="/" passHref>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    sx={{
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        color: "#1C7C54",
                                        fontSize: "1.5rem",
                                        display: "inline-block",
                                        mb: 2,
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: -8,
                                            left: 0,
                                            width: "40px",
                                            height: "3px",
                                            backgroundColor: "#1C7C54",
                                        },
                                    }}
                                >
                                    JS ProFinish
                                </Typography>
                            </Link>

                            <Typography
                                variant="body2"
                                sx={{
                                    maxWidth: "350px",
                                    color: "#555",
                                    mb: 3,
                                }}
                            >
                                Northern Utah&apos;s premier basement finishing
                                experts with over 15 years of experience
                                transforming spaces into beautiful, functional
                                areas.
                            </Typography>

                            <Stack spacing={2}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <MdOutlineEmail
                                        style={{
                                            color: "#1C7C54",
                                            marginRight: "10px",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <Typography variant="body2">
                                        jsprofinish@gmail.com
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <MdPhone
                                        style={{
                                            color: "#1C7C54",
                                            marginRight: "10px",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <Typography variant="body2">
                                        (385) 626-3514
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <FaMapMarkerAlt
                                        style={{
                                            color: "#1C7C54",
                                            marginRight: "10px",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <Typography variant="body2">
                                        1740 S 300 W #8 Clearfield UT 84015
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    mb: 2,
                                    color: "#333",
                                }}
                            >
                                Follow Us
                            </Typography>

                            <Box sx={{ display: "flex", gap: 2 }}>
                                <IconButton
                                    aria-label="Facebook"
                                    sx={{
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.1)",
                                        color: "#1C7C54",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    <FaFacebookF />
                                </IconButton>

                                <IconButton
                                    aria-label="Instagram"
                                    sx={{
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.1)",
                                        color: "#1C7C54",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    <FaInstagram />
                                </IconButton>

                                <IconButton
                                    aria-label="Google"
                                    sx={{
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.1)",
                                        color: "#1C7C54",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    <IoLogoGoogle />
                                </IconButton>

                                <IconButton
                                    aria-label="LinkedIn"
                                    sx={{
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.1)",
                                        color: "#1C7C54",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    <FaLinkedinIn />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Grid container spacing={isMobile ? 3 : 4}>
                            {navigationLinks.map((category) => (
                                <Grid item xs={6} md={3} key={category.category}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 3,
                                            position: "relative",
                                            display: "inline-block",
                                            color: "#333",
                                            fontSize: "0.95rem",
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                bottom: -8,
                                                left: 0,
                                                width: "30px",
                                                height: "2px",
                                                backgroundColor: "#1C7C54",
                                            },
                                        }}
                                    >
                                        {category.category}
                                    </Typography>

                                    <Stack spacing={isMobile ? 1.5 : 2}>
                                        {category.links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                passHref
                                            >
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        color: "#555",
                                                        fontSize: "0.875rem",
                                                        transition:
                                                            "all 0.3s ease",
                                                        display: "inline-block",
                                                        textDecoration: "none",
                                                        position: "relative",
                                                        "&:hover": {
                                                            color: "#1C7C54",
                                                            transform:
                                                                "translateX(5px)",
                                                        },
                                                        "&::before": {
                                                            content: '"›"',
                                                            position:
                                                                "absolute",
                                                            left: -15,
                                                            top: "50%",
                                                            transform:
                                                                "translateY(-50%)",
                                                            opacity: 0,
                                                            transition:
                                                                "opacity 0.3s ease",
                                                            color: "#1C7C54",
                                                        },
                                                        "&:hover::before": {
                                                            opacity: 1,
                                                        },
                                                    }}
                                                >
                                                    {link.label}
                                                </Typography>
                                            </Link>
                                        ))}
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
                        <Paper
                            elevation={1}
                            sx={{
                                p: 3,
                                borderRadius: "12px",
                                background:
                                    "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.9) 100%)",
                                border: "1px solid rgba(28, 124, 84, 0.1)",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    mb: 2,
                                    color: "#333",
                                    textAlign: "center",
                                }}
                            >
                                Serving Northern Utah
                            </Typography>

                            <Box
                                sx={{
                                    textAlign: "center",
                                    mb: 2,
                                }}
                            >
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    Proudly servicing Weber & Davis Counties
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontStyle: "italic",
                                        color: "#666",
                                    }}
                                >
                                    Quality craftsmanship since 2019
                                </Typography>
                            </Box>

                            <Link href="/contact-us" passHref>
                                <Typography
                                    component="span"
                                    sx={{
                                        display: "block",
                                        textAlign: "center",
                                        color: "#1C7C54",
                                        fontWeight: 600,
                                        textDecoration: "underline",
                                        margin: "0 auto",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            color: "#145c3f",
                                            textDecoration: "none",
                                        },
                                    }}
                                >
                                    Get a free estimate today
                                </Typography>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>

                <Divider
                    sx={{
                        my: 4,
                        borderColor: "rgba(0, 0, 0, 0.1)",
                        width: "100%",
                    }}
                />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "center", md: "center" },
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#666",
                            textAlign: { xs: "center", md: "left" },
                            mb: { xs: 2, md: 0 },
                        }}
                    >
                        © {currentYear} JS ProFinish. All rights reserved.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <Link href="/privacy-policy" passHref>
                            <Typography
                                component="span"
                                variant="caption"
                                sx={{
                                    color: "#666",
                                    transition: "color 0.3s ease",
                                    "&:hover": {
                                        color: "#1C7C54",
                                    },
                                }}
                            >
                                Privacy Policy
                            </Typography>
                        </Link>

                        <Link href="/terms-of-service" passHref>
                            <Typography
                                component="span"
                                variant="caption"
                                sx={{
                                    color: "#666",
                                    transition: "color 0.3s ease",
                                    "&:hover": {
                                        color: "#1C7C54",
                                    },
                                }}
                            >
                                Terms of Service
                            </Typography>
                        </Link>

                        <Link href="/sitemap" passHref>
                            <Typography
                                component="span"
                                variant="caption"
                                sx={{
                                    color: "#666",
                                    transition: "color 0.3s ease",
                                    "&:hover": {
                                        color: "#1C7C54",
                                    },
                                }}
                            >
                                Sitemap
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
