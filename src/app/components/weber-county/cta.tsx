import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

const Cta = () => {
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
                    padding: { xs: "56px 16px", md: "112px 0" }, // Responsive padding
                }}
            >
                <Grid item xs={12} md={6}>
                    <Typography variant={"h2"}>Get Started Today</Typography>
                    <Typography variant={"body1"} sx={{ marginTop: "24px" }}>
                        Ready to renovate your basement? Contact us today for a
                        consultation and let&apos;s bring your vision to life
                        with our premier finishing services.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: { xs: "center", md: "end" },
                        marginTop: { xs: "24px", md: "0" },
                    }}
                >
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        sx={{
                            justifyContent: { xs: "center", md: "flex-end" },
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                margin: { xs: "0 0 16px 0", md: "0 16px 0 0" },
                                backgroundColor: "#1C7C54",
                            }}
                        >
                            Contact Us
                        </Button>
                        <Button
                            variant="outlined"
                            endIcon={<IoIosArrowForward />}
                            sx={{ color: "#1C7C54" }}
                        >
                            Inspiration
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cta;
