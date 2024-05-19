import React from "react";
import Link from "next/link";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
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
                                }}
                            >
                                JS ProFinish
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        sx={{ display: "flex", gap: 2 }}
                        className="navbarLinks"
                    >
                        <Link href="/about" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
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
                                }}
                            >
                                Services
                            </Typography>
                        </Link>
                        <Link href="/contact" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Contact Us
                            </Typography>
                        </Link>
                        <Link href="/gallery" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Gallery
                            </Typography>
                        </Link>
                        <Link href="/public" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Counties
                            </Typography>
                        </Link>
                    </Box>
                    <NavDrawer />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
