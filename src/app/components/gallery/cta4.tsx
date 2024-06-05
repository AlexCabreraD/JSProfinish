import { Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";

const Cta4 = () => {
    return (
        <Container
            maxWidth={false}
            className={"tertiary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    height: "fit-content",
                    maxWidth: "1440px",
                    textAlign: "start",
                    padding: { xs: "56px 16px", md: "112px 64px" },
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ padding: { xs: "16px", md: "0" } }}
                >
                    <Typography variant="h3">
                        Ready to transform your basement?
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Ready to transform your basement? Contact us today for a
                        free consultation and let&apos;s bring your vision to
                        life.
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
                                    style={{
                                        backgroundColor: "#F5F5F5",
                                        color: "#1C7C54",
                                    }}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/gallery" passHref>
                                <Button variant="outlined">Gallery</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cta4;
