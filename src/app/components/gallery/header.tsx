import { Container, Grid, Stack, Typography, Box } from "@mui/material";

const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Basement Remodeling Gallery - JS ProFinish",
    description:
        "Explore our gallery of stunning basement renovation projects in Northern Utah. View our completed basement finishing work in Weber County and Davis County.",
    url: "https://www.jsprofinish.com/gallery",
    isPartOf: {
        "@type": "WebSite",
        name: "JS ProFinish",
        url: "https://www.jsprofinish.com",
    },
    about: {
        "@type": "Service",
        name: "Basement Finishing",
        provider: {
            "@type": "LocalBusiness",
            name: "JS ProFinish",
            telephone: "(385) 626-3514",
            areaServed: ["Davis County", "Weber County", "Northern Utah"],
        },
    },
};

const Header = () => {
    return (
        <>
            <Container
                maxWidth={false}
                className={"secondary-background"}
                sx={{
                    textAlign: "-webkit-center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    component="section"
                    id="gallery-header"
                    aria-labelledby="gallery-title"
                >
                    <Grid
                        container
                        sx={{
                            alignItems: "center",
                            textAlign: "start",
                            height: "fit-content",
                            maxWidth: "1440px",
                            padding: { xs: "80px 16px", md: "112px 24px" },
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <Grid item sx={{ maxWidth: "768px" }} xs={12}>
                            <Stack spacing={"24px"}>
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    id="gallery-title"
                                    sx={{
                                        fontSize: {
                                            xs: "2.5rem",
                                            md: "3.5rem",
                                        },
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Explore Our Basement Remodeling Gallery
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    sx={{
                                        fontSize: {
                                            xs: "1.1rem",
                                            md: "1.25rem",
                                        },
                                        lineHeight: 1.6,
                                        maxWidth: { xs: "100%", md: "90%" },
                                    }}
                                >
                                    Browse through our gallery of completed
                                    basement projects across Northern Utah,
                                    including Davis and Weber Counties. See how
                                    we&apos;ve turned ordinary basements into
                                    extraordinary living spaces with custom
                                    designs, quality craftsmanship, and
                                    attention to detail.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(galleryStructuredData),
                    }}
                />
            </Container>
        </>
    );
};

export default Header;
