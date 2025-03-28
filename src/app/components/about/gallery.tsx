import { Container, Grid, Stack, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/assets/home/img/image3.png";
import img2 from "@/app/assets/home/img/image5.png";

const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "JS ProFinish Basement Remodeling Gallery",
    description:
        "Explore our gallery of stunning basement transformations across Northern Utah. Get inspired by our custom designs, quality workmanship, and attention to detail.",
    image: [
        {
            "@type": "ImageObject",
            contentUrl: "/assets/home/img/image3.png",
            description:
                "Remodeled finished basement with a pool table, TV, and entertainment stand",
            representativeOfPage: true,
        },
        {
            "@type": "ImageObject",
            contentUrl: "/assets/home/img/image5.png",
            description:
                "Finished basement with small living room area, TV, and counter island with chairs",
            representativeOfPage: true,
        },
    ],
    provider: {
        "@type": "LocalBusiness",
        name: "JS ProFinish",
        priceRange: "$$",
        areaServed: ["Davis County", "Weber County", "Northern Utah"],
    },
};

const Gallery = () => {
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
                    textAlign: "center",
                    padding: { xs: "56px 16px", md: "112px 24px" },
                }}
            >
                <Grid
                    item
                    container
                    xs={12}
                    justifyContent={"center"}
                    sx={{ textAlign: "-webkit-center" }}
                >
                    <Stack spacing={"24px"} sx={{ maxWidth: "768px" }}>
                        <Typography variant={"h2"} component="h2">
                            Our Project Gallery
                        </Typography>
                        <Typography variant={"body1"} component="p">
                            We hope these visuals spark your imagination and
                            inspire you to embark on your own journey with us.
                            Discover the beauty, passion, and innovation that
                            define our projects.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid
                    container
                    xs={12}
                    spacing={"32px"}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ marginTop: "40px" }}
                >
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                },
                            }}
                        >
                            <Image
                                src={img1}
                                alt="Remodeled finished basement with a pool table, TV, and entertainment stand"
                                width={600}
                                height={450}
                                quality={90}
                                priority
                                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 600px"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    aspectRatio: "4/3",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                },
                            }}
                        >
                            <Image
                                src={img2}
                                alt="Finished basement with small living room area, TV, and counter island with chairs"
                                width={600}
                                height={450}
                                quality={90}
                                priority
                                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 600px"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    aspectRatio: "4/3",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ marginTop: "48px" }}>
                    <Link
                        href="/gallery"
                        passHref
                        aria-label="View our complete basement remodeling gallery"
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#1C7C54",
                                color: "white",
                                px: 4,
                                py: 1.5,
                                borderRadius: "6px",
                                fontWeight: 600,
                                "&:hover": {
                                    backgroundColor: "#145c3f",
                                    transform: "translateY(-2px)",
                                    boxShadow:
                                        "0 6px 15px rgba(28, 124, 84, 0.3)",
                                },
                            }}
                        >
                            View Full Gallery
                        </Button>
                    </Link>
                </Box>
            </Grid>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(galleryStructuredData),
                }}
            />
        </Container>
    );
};

export default Gallery;
