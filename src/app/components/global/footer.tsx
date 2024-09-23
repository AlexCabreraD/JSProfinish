import { Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import "@/app/components/home/home.css";

const Footer = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "flex-start",
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 0", md: "112px 0" }, // Responsive padding
                    justifyContent: "center",
                }}
            >
                <Link href="/" passHref>
                    <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "#1C7C54",
                            marginBottom: "32px",
                        }}
                    >
                        JS ProFinish
                    </Typography>
                </Link>

                <Grid container gap={"32px"} justifyContent={"center"}>
                    <Grid item xs={3} md={1.5}>
                        <Link href="/about-us" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "#1C7C54",
                                }}
                            >
                                About Us
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1.5}>
                        <Link href="/services" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "#1C7C54",
                                }}
                            >
                                Services
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1.5}>
                        <Link href="/contact-us" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "#1C7C54",
                                }}
                            >
                                Contact Us
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1.5}>
                        <Link href="/gallery" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "#1C7C54",
                                }}
                            >
                                Gallery
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1.5}>
                        <Link href="/weber-county" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "#1C7C54",
                                }}
                            >
                                Weber County
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} md={1.5}>
                        <Link href="/davis-county" passHref>
                            <Typography
                                component="p"
                                sx={{
                                    textDecoration: "none",
                                    color: "#1C7C54",
                                }}
                            >
                                Davis County
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <hr
                    style={{
                        border: "1px solid #000000",
                        width: "100%",
                        marginTop: "80px",
                    }}
                />
                <Typography variant={"caption"} sx={{ marginTop: "32px" }}>
                    © 2024 JsProFinish. All rights reserved.
                </Typography>
            </Grid>
        </Container>
    );
};

export default Footer;
