import { Button, Container, Grid, Stack, Typography } from "@mui/material";

import { LuPencil } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const HowWorks = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    textAlign: { xs: "center", md: "start" },
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: "112px 0" },
                }}
            >
                <Grid item>
                    <Stack
                        spacing={{ xs: "40px", md: "80px" }}
                        className={"mobile-text"}
                    >
                        <Stack maxWidth={768}>
                            <Typography
                                variant={"body1"}
                                sx={{ fontWeight: "bold" }}
                            >
                                Transform
                            </Typography>
                            <Typography
                                variant={"h2"}
                                sx={{ margin: "16px 0px 24px 0px" }}
                            >
                                From Consultation to Beautiful Basement in No
                                Time
                            </Typography>
                            <Typography>
                                Our basement finishing process is simple and
                                hassle-free. We guide you through every step,
                                from the initial consultation to the final
                                touches.
                            </Typography>
                        </Stack>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <Stack
                                    spacing={"24px"}
                                    className={"mobile-section-spacing"}
                                >
                                    <LuPencil
                                        style={{
                                            width: "36px",
                                            height: "40px",
                                            color: "#145c3f",
                                            margin: "4px 6px 4px 6px",
                                        }}
                                    />
                                    <Typography variant={"h4"}>
                                        Free Consultation
                                    </Typography>
                                    <Typography variant={"body1"}>
                                        Schedule a free consultation to discuss
                                        your basement finishing project.
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Stack
                                    spacing={"24px"}
                                    className={"mobile-section-spacing"}
                                >
                                    <MdOutlineDesignServices
                                        className={"mobile-icon"}
                                        style={{
                                            width: "36px",
                                            height: "40px",
                                            color: "#145c3f",
                                            margin: "4px 6px 4px 6px",
                                        }}
                                    />
                                    <Typography variant={"h4"}>
                                        Design and Planning
                                    </Typography>
                                    <Typography variant={"body1"}>
                                        Work with our expert designers to create
                                        a customized plan for your basement.
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Stack
                                    spacing={"24px"}
                                    className={"mobile-section-spacing"}
                                >
                                    <IoConstructOutline
                                        className={"mobile-icon"}
                                        style={{
                                            width: "36px",
                                            height: "40px",
                                            color: "#145c3f",
                                            margin: "4px 6px 4px 6px",
                                        }}
                                    />
                                    <Typography variant={"h4"}>
                                        Quality Construction
                                    </Typography>
                                    <Typography variant={"body1"}>
                                        Our experienced team will handle all
                                        aspects of the construction process.
                                    </Typography>
                                </Stack>
                            </Grid>
                            <div style={{ margin: "64px 0 0 0" }}>
                                <Link href="/contact-us" passHref>
                                    <Button variant={"contained"}>
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="/gallery" passHref>
                                    <Button variant={"text"}>
                                        Gallery{" "}
                                        <MdArrowForwardIos
                                            style={{
                                                width: "14.12px",
                                                height: "14.41px",
                                                color: "#145c3f",
                                                margin: "4px 6px 4px 6px",
                                            }}
                                        />
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HowWorks;
