"use client";

import React, { useState, useEffect } from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    Typography,
    useMediaQuery,
    useTheme,
    Toolbar,
    Stack,
    Divider,
    Paper,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    RiMenu4Line,
    RiCloseLine,
    RiPhoneLine,
    RiMailLine,
} from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const navLinks = [
        { href: "/about-us", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/gallery", label: "Gallery" },
        {
            href: "/locations",
            label: "Locations",
            subLinks: [
                { href: "/weber-county", label: "Weber County" },
                { href: "/davis-county", label: "Davis County" },
            ],
        },
    ];

    return (
        <>
            <AppBar
                position="fixed"
                elevation={scrolled ? 4 : 0}
                sx={{
                    backgroundColor: "#333333",
                    transition: "all 0.3s ease",
                    boxShadow: scrolled
                        ? "0 4px 20px rgba(0, 0, 0, 0.1)"
                        : "none",
                    py: scrolled ? 0.5 : 1,
                }}
            >
                <Container maxWidth={false} sx={{ maxWidth: "1440px" }}>
                    <Toolbar
                        disableGutters
                        sx={{ justifyContent: "space-between" }}
                    >
                        <Link href="/" passHref>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#FFFFFF",
                                        fontSize: {
                                            xs: "1.4rem",
                                            md: "1.6rem",
                                        },
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: -4,
                                            left: 0,
                                            width: "70%",
                                            height: "3px",
                                            backgroundColor: "#1C7C54",
                                            borderRadius: "2px",
                                        },
                                    }}
                                >
                                    JS ProFinish
                                </Typography>
                            </Box>
                        </Link>

                        {!isMobile && (
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                {navLinks.map((link) => (
                                    <Box
                                        key={link.href}
                                        sx={{
                                            position: "relative",
                                            "&:hover .nav-dropdown": {
                                                opacity: 1,
                                                visibility: "visible",
                                                transform: "translateY(0)",
                                            },
                                        }}
                                    >
                                        <Link href={link.href} passHref>
                                            <Button
                                                disableRipple
                                                sx={{
                                                    backgroundColor:
                                                        "transparent",
                                                    color: "#FFFFFF",
                                                    fontSize: "1rem",
                                                    fontWeight: 500,
                                                    textTransform: "none",
                                                    mx: 1,
                                                    px: 2,
                                                    position: "relative",
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        bottom: 0,
                                                        left: "50%",
                                                        width:
                                                            pathname ===
                                                            link.href
                                                                ? "80%"
                                                                : "0%",
                                                        height: "2px",
                                                        backgroundColor:
                                                            "#1C7C54",
                                                        transition:
                                                            "all 0.3s ease",
                                                        transform:
                                                            "translateX(-50%)",
                                                    },
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "transparent",
                                                        "&::after": {
                                                            width: "80%",
                                                        },
                                                    },
                                                }}
                                            >
                                                {link.label}
                                            </Button>
                                        </Link>

                                        {link.subLinks && (
                                            <Paper
                                                elevation={4}
                                                className="nav-dropdown"
                                                sx={{
                                                    position: "absolute",
                                                    top: "100%",
                                                    left: "50%",
                                                    transform:
                                                        "translateX(-50%) translateY(10px)",
                                                    minWidth: "200px",
                                                    backgroundColor: "#333333",
                                                    borderRadius: "8px",
                                                    overflow: "hidden",
                                                    opacity: 0,
                                                    visibility: "hidden",
                                                    transition: "all 0.3s ease",
                                                    zIndex: 100,
                                                    boxShadow:
                                                        "0 10px 25px rgba(0, 0, 0, 0.1)",
                                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                                    "&::before": {
                                                        content: '""',
                                                        position: "absolute",
                                                        top: -5,
                                                        left: "50%",
                                                        transform:
                                                            "translateX(-50%) rotate(45deg)",
                                                        width: "10px",
                                                        height: "10px",
                                                        backgroundColor:
                                                            "#333333",
                                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                                        borderBottom: "none",
                                                        borderRight: "none",
                                                    },
                                                }}
                                            >
                                                <List disablePadding>
                                                    {link.subLinks.map(
                                                        (subLink) => (
                                                            <ListItem
                                                                key={
                                                                    subLink.href
                                                                }
                                                                disablePadding
                                                            >
                                                                <Link
                                                                    href={
                                                                        subLink.href
                                                                    }
                                                                    passHref
                                                                    style={{
                                                                        width: "100%",
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        component="div"
                                                                        sx={{
                                                                            padding:
                                                                                "12px 20px",
                                                                            color:
                                                                                pathname ===
                                                                                subLink.href
                                                                                    ? "#1C7C54"
                                                                                    : "#FFFFFF",
                                                                            fontSize:
                                                                                "0.95rem",
                                                                            fontWeight:
                                                                                pathname ===
                                                                                subLink.href
                                                                                    ? 600
                                                                                    : 400,
                                                                            width: "100%",
                                                                            transition:
                                                                                "all 0.2s ease",
                                                                            "&:hover":
                                                                                {
                                                                                    backgroundColor:
                                                                                        "rgba(28, 124, 84, 0.15)",
                                                                                    color: "#1C7C54",
                                                                                    paddingLeft:
                                                                                        "25px",
                                                                                },
                                                                        }}
                                                                    >
                                                                        {
                                                                            subLink.label
                                                                        }
                                                                    </Typography>
                                                                </Link>
                                                            </ListItem>
                                                        ),
                                                    )}
                                                </List>
                                            </Paper>
                                        )}
                                    </Box>
                                ))}

                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{
                                        mx: 2,
                                        bgcolor: "rgba(255, 255, 255, 0.2)",
                                    }}
                                />

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        startIcon={<RiPhoneLine />}
                                        href="tel:3856263514"
                                        variant="text"
                                        sx={{
                                            mr: 2,
                                            color: "#FFFFFF",
                                            fontWeight: 500,
                                            textTransform: "none",
                                            backgroundColor: "transparent",
                                            "&:hover": {
                                                backgroundColor:
                                                    "rgba(28, 124, 84, 0.2)",
                                                color: "#FFFFFF",
                                            },
                                        }}
                                    >
                                        (385) 626-3514
                                    </Button>

                                    <Link href="/contact-us" passHref>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#1C7C54",
                                                color: "white",
                                                px: 3,
                                                py: 1,
                                                borderRadius: "6px",
                                                transition: "all 0.3s ease",
                                                boxShadow:
                                                    "0 4px 10px rgba(28, 124, 84, 0.2)",
                                                textTransform: "none",
                                                fontWeight: 600,
                                                "&:hover": {
                                                    backgroundColor: "#145c3f",
                                                    transform:
                                                        "translateY(-2px)",
                                                    boxShadow:
                                                        "0 6px 15px rgba(28, 124, 84, 0.3)",
                                                },
                                            }}
                                        >
                                            Get a Quote
                                        </Button>
                                    </Link>
                                </Box>
                            </Stack>
                        )}

                        {isMobile && (
                            <IconButton
                                aria-label="menu"
                                onClick={() => setOpen(true)}
                                sx={{
                                    color: "#FFFFFF",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.1)",
                                        transform: "rotate(90deg)",
                                    },
                                }}
                            >
                                <RiMenu4Line size={28} />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        width: "100%",
                        maxWidth: "350px",
                        backgroundColor: "#333333",
                        boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.3)",
                    },
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 4,
                        }}
                    >
                        <Link href="/" passHref onClick={() => setOpen(false)}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    fontSize: "1.4rem",
                                }}
                            >
                                JS ProFinish
                            </Typography>
                        </Link>

                        <IconButton
                            aria-label="close"
                            onClick={() => setOpen(false)}
                            sx={{
                                color: "#FFFFFF",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    color: "#1C7C54",
                                    transform: "rotate(90deg)",
                                },
                            }}
                        >
                            <RiCloseLine size={24} />
                        </IconButton>
                    </Box>

                    <List sx={{ mb: 4 }}>
                        {navLinks.map((link) => (
                            <React.Fragment key={link.href}>
                                <ListItem disablePadding sx={{ mb: 2 }}>
                                    <Link
                                        href={link.href}
                                        passHref
                                        style={{ width: "100%" }}
                                        onClick={() =>
                                            !link.subLinks && setOpen(false)
                                        }
                                    >
                                        <Typography
                                            component="div"
                                            sx={{
                                                py: 1.5,
                                                px: 1,
                                                color:
                                                    pathname === link.href
                                                        ? "#1C7C54"
                                                        : "#FFFFFF",
                                                fontWeight:
                                                    pathname === link.href
                                                        ? 600
                                                        : 500,
                                                fontSize: "1.1rem",
                                                borderLeft:
                                                    pathname === link.href
                                                        ? "3px solid #1C7C54"
                                                        : "3px solid transparent",
                                                pl:
                                                    pathname === link.href
                                                        ? 2
                                                        : 1,
                                                transition: "all 0.2s ease",
                                            }}
                                        >
                                            {link.label}
                                        </Typography>
                                    </Link>
                                </ListItem>

                                {link.subLinks && (
                                    <Box sx={{ ml: 3, mb: 2 }}>
                                        {link.subLinks.map((subLink) => (
                                            <ListItem
                                                key={subLink.href}
                                                disablePadding
                                                sx={{ mb: 1 }}
                                            >
                                                <Link
                                                    href={subLink.href}
                                                    passHref
                                                    style={{ width: "100%" }}
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    <Typography
                                                        component="div"
                                                        sx={{
                                                            py: 1,
                                                            px: 1,
                                                            color:
                                                                pathname ===
                                                                subLink.href
                                                                    ? "#1C7C54"
                                                                    : "rgba(255, 255, 255, 0.8)",
                                                            fontWeight:
                                                                pathname ===
                                                                subLink.href
                                                                    ? 600
                                                                    : 400,
                                                            fontSize: "0.95rem",
                                                            borderLeft:
                                                                pathname ===
                                                                subLink.href
                                                                    ? "2px solid #1C7C54"
                                                                    : "2px solid transparent",
                                                            pl:
                                                                pathname ===
                                                                subLink.href
                                                                    ? 2
                                                                    : 1,
                                                            transition:
                                                                "all 0.2s ease",
                                                        }}
                                                    >
                                                        {subLink.label}
                                                    </Typography>
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </Box>
                                )}
                            </React.Fragment>
                        ))}
                    </List>

                    <Divider
                        sx={{ mb: 4, bgcolor: "rgba(255, 255, 255, 0.1)" }}
                    />

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: "rgba(255, 255, 255, 0.6)",
                                mb: 2,
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                fontSize: "0.8rem",
                            }}
                        >
                            Contact Us
                        </Typography>

                        <Stack spacing={2}>
                            <Box
                                component="a"
                                href="tel:3856263514"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                    color: "#FFFFFF",
                                    transition: "color 0.2s ease",
                                    "&:hover": {
                                        color: "#1C7C54",
                                    },
                                }}
                            >
                                <RiPhoneLine style={{ marginRight: "10px" }} />
                                <Typography variant="body2">
                                    (385) 626-3514
                                </Typography>
                            </Box>

                            <Box
                                component="a"
                                href="mailto:contact@jsprofinish-utah.com"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                    color: "#FFFFFF",
                                    transition: "color 0.2s ease",
                                    "&:hover": {
                                        color: "#1C7C54",
                                    },
                                }}
                            >
                                <RiMailLine style={{ marginRight: "10px" }} />
                                <Typography variant="body2">
                                    contact@jsprofinish-utah.com
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>

                    <Link href="/contact-us" passHref>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => setOpen(false)}
                            sx={{
                                backgroundColor: "#1C7C54",
                                color: "white",
                                py: 1.5,
                                borderRadius: "6px",
                                textTransform: "none",
                                fontWeight: 600,
                                boxShadow: "0 4px 15px rgba(28, 124, 84, 0.2)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#145c3f",
                                    boxShadow:
                                        "0 6px 20px rgba(28, 124, 84, 0.3)",
                                },
                            }}
                        >
                            Get a Free Estimate
                        </Button>
                    </Link>
                </Box>
            </Drawer>

            <Box sx={{ height: 0 }} />
        </>
    );
};

export default Navbar;
