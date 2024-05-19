import { Button, Container, Grid, Stack, Typography } from "@mui/material";

import { LuPencil } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

const HowWorks = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background benefits-container"}
            sx={{ height: "67vh" }}
        >
            <Grid
                container
                sx={{
                    height: "100%",
                    alignItems: "center",
                }}
                className={"primary-background Home-Content-Container"}
            >
                <Grid item>
                    <Stack spacing={"80px"}>
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
                            <Grid item xs={4}>
                                <Stack spacing={"24px"}>
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
                            <Grid item xs={4}>
                                <Stack spacing={"24px"}>
                                    <MdOutlineDesignServices
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
                            <Grid item xs={4}>
                                <Stack spacing={"24px"}>
                                    <IoConstructOutline
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
                                <Button
                                    variant={"contained"}
                                    style={{ borderRadius: "0px" }}
                                >
                                    Get Started
                                </Button>
                                <Button variant={"text"}>
                                    Learn More{" "}
                                    <MdArrowForwardIos
                                        style={{
                                            width: "14.12px",
                                            height: "14.41px",
                                            color: "#145c3f",
                                            margin: "4px 6px 4px 6px",
                                        }}
                                    />
                                </Button>
                            </div>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HowWorks;
