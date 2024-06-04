import { Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";

const Cta2 = () => {
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
                    textAlign: "start",
                    padding: { xs: "56px 16px", md: "112px 64px 0px" },
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ padding: { xs: "16px", md: "0" } }}
                >
                    <Typography variant="h3">Get in Touch</Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        If you&apos;re looking to renovate your basement,
                        we&apos;re here to help. Contact us today to discuss
                        your project and let&apos;s embark on this exciting
                        journey together.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid
                        container
                        spacing={2}
                        justifyContent={{ xs: "center", md: "end" }}
                        alignItems="center"
                        sx={{ marginTop: { xs: "24px", md: "0" } }}
                    >
                        <Grid item>
                            <Link href="/contact-us" passHref>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#1C7C54" }}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/gallery" passHref>
                                <Button
                                    variant="outlined"
                                    sx={{ color: "#1C7C54" }}
                                >
                                    Gallery
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cta2;
