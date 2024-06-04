import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const ServiceCta = () => {
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
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: "112px 0" }, // Responsive padding
                    justifyContent: "center",
                }}
            >
                <Grid item>
                    <Typography variant={"h2"}>Get Started Today</Typography>
                    <Typography variant={"body1"} sx={{ marginTop: "24px" }}>
                        Ready to renovate your basement? Contact us today for a
                        consultation and let&apos;s bring your vision to life
                        with our premier finishing services.
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            marginTop: "40px",
                            justifyContent: "center",
                        }}
                    >
                        <Link href="/contact-us" passHref>
                            <Button variant="contained">Contact Us</Button>
                        </Link>
                        <Link href="/gallery" passHref>
                            <Button
                                variant="outlined"
                                endIcon={<IoIosArrowForward />}
                            >
                                Inspiration
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ServiceCta;
