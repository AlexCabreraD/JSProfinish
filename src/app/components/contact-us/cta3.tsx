import { Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";

const Cta3 = () => {
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
                    md={8}
                    sx={{ padding: { xs: "16px", md: "0" } }}
                >
                    <Typography variant="h3">Need some ideas?</Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Step into our gallery and immerse yourself in a world of
                        endless possibilities. Explore stunning transformations
                        that ignite creativity and imagination. Let every image
                        spark inspiration and fuel your desire to craft the
                        perfect sanctuary beneath your home. Your dream basement
                        awaits—explore and envision today.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid
                        container
                        spacing={2}
                        justifyContent={{ xs: "center", md: "end" }}
                        alignItems="center"
                        sx={{
                            marginTop: { xs: "24px", md: "0" },
                            justifyContent: "center",
                        }}
                    >
                        <Grid item>
                            <Link href="/gallery" passHref>
                                <Button
                                    variant="contained"
                                    style={{
                                        backgroundColor: "white",
                                        color: "#1C7C54",
                                    }}
                                >
                                    Gallery
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/about-us" passHref>
                                <Button variant="outlined">Learn More</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cta3;
