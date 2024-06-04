import React from "react";
import Link from "next/link";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import NavDrawer from "@/app/components/navbar/navDrawer";
import "./navbar.css";

const Navbar = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: "#FFFFFF",
                color: "primary.main",
            }}
        >
            <AppBar
                position={"static"}
                sx={{
                    backgroundColor: "#FFFFFF",
                    color: "primary.main",
                    paddingY: "5px",
                }}
                className={"fixed-element"}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{
                                    fontWeight: "bold",
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: { xs: "1rem", md: "1.4rem" },
                                }}
                            >
                                JS ProFinish
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                        }}
                        className="navbarLinks"
                    >
                        <Link href="/about-us" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                About Us
                            </Typography>
                        </Link>
                        <Link href="/services" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Services
                            </Typography>
                        </Link>
                        <Link href="/gallery" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Gallery
                            </Typography>
                        </Link>
                        <Link href="/weber-county" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Weber County
                            </Typography>
                        </Link>
                        <Link href="/davis-county" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Davis County
                            </Typography>
                        </Link>
                        <Link
                            href="/contact-us"
                            passHref
                            style={{ marginLeft: "15px" }}
                        >
                            <Button
                                sx={{
                                    backgroundColor: "#1C7C54",
                                    fontSize: { xs: "0.75rem", md: "1rem" },
                                    padding: { xs: "5px 10px", md: "8px 16px" },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </Box>
                    <NavDrawer />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
