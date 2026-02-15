import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";

import basement1 from "@/app/assets/gallery/basement1.jpg";
import basement3 from "@/app/assets/gallery/basement3.jpg";
import basement4 from "@/app/assets/gallery/basement4.jpg";
import basement7 from "@/app/assets/home/img/image1.png";
import basement8 from "@/app/assets/home/img/image2.png";
import basement9 from "@/app/assets/home/img/image3.png";
import basement10 from "@/app/assets/home/img/image4.png";
import basement11 from "@/app/assets/home/img/image5.png";
import basement12 from "@/app/assets/home/img/image6.png";
import basement13 from "@/app/assets/home/img/image7.png";
import basement14 from "@/app/assets/home/img/image8.png";

const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "JS ProFinish Basement Renovation Gallery",
    description:
        "Browse our collection of completed basement remodeling projects in Weber County and Davis County, Utah. See examples of entertainment rooms, home theaters, bars, and more.",
    url: "https://jsprofinish.com/gallery",
    provider: {
        "@type": "LocalBusiness",
        name: "JS ProFinish",
        telephone: "(385) 626-3514",
        priceRange: "$$",
        areaServed: ["Davis County", "Weber County", "Northern Utah"],
    },
};

type ProjectCategory =
    | "Entertainment"
    | "Modern"
    | "Traditional"
    | "Kitchen"
    | "Bar"
    | "Living Area";

interface BasementImage {
    src: any;
    alt: string;
    width: number;
    height: number;
    categories: ProjectCategory[];
}

const GalleryComponent = () => {
    const basements: BasementImage[] = [
        {
            src: basement1,
            alt: "Modern basement design with sleek finishes and contemporary furniture in Northern Utah",
            width: 300,
            height: 300,
            categories: ["Modern", "Living Area"],
        },
        {
            src: basement3,
            alt: "Contemporary basement remodel with open layout and custom lighting in Davis County",
            width: 300,
            height: 300,
            categories: ["Modern", "Entertainment"],
        },
        {
            src: basement4,
            alt: "Wooden styled modern basement kitchen with custom cabinetry in Weber County",
            width: 300,
            height: 300,
            categories: ["Kitchen", "Modern"],
        },
        {
            src: basement7,
            alt: "Finished basement entertainment setup with media center and comfortable seating in Clearfield",
            width: 300,
            height: 300,
            categories: ["Entertainment", "Living Area"],
        },
        {
            src: basement8,
            alt: "Cozy basement makeover with sectional seating area and accent lighting in Northern Utah",
            width: 300,
            height: 300,
            categories: ["Living Area", "Traditional"],
        },
        {
            src: basement9,
            alt: "Elegant basement remodel featuring a pool table and entertainment area in Ogden",
            width: 300,
            height: 300,
            categories: ["Entertainment", "Modern"],
        },
        {
            src: basement10,
            alt: "Functional basement design with modern seating area and ambient lighting in Layton",
            width: 300,
            height: 300,
            categories: ["Living Area", "Modern"],
        },
        {
            src: basement11,
            alt: "Transformed basement with entertainment corner and custom bar area in Davis County",
            width: 300,
            height: 300,
            categories: ["Entertainment", "Bar"],
        },
        {
            src: basement12,
            alt: "Luxury basement renovation with high-end modern amenities and custom millwork in Weber County",
            width: 300,
            height: 300,
            categories: ["Modern", "Entertainment"],
        },
        {
            src: basement13,
            alt: "Finished basement with natural elements, indoor plants and earth-tone furniture in Clearfield",
            width: 300,
            height: 300,
            categories: ["Living Area", "Traditional"],
        },
        {
            src: basement14,
            alt: "Scandinavian inspired basement remodel with minimalist design in Northern Utah",
            width: 300,
            height: 300,
            categories: ["Modern", "Living Area"],
        },
    ];

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
                    textAlign: "center",
                    justifyContent: "center",
                    height: "fit-content",
                    maxWidth: "1440px",
                    margin: "0 auto",
                    padding: { xs: "80px 16px", md: "112px 24px" },
                }}
            >
                <Grid item xs={12} sx={{ maxWidth: "768px", mb: 6 }}>
                    <Stack spacing={"24px"}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                            }}
                        >
                            Basement Remodeling Gallery
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                fontSize: { xs: "1rem", md: "1.125rem" },
                                color: "#555555",
                                maxWidth: "90%",
                                margin: "0 auto",
                            }}
                        >
                            Explore our stunning basement finishing projects
                            across Northern Utah. Get inspired by our custom
                            designs, quality craftsmanship, and attention to
                            detail.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        maxWidth: "1300px",
                    }}
                >
                    {basements.map((basement, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    position: "relative",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                                    transition: "all 0.3s ease",
                                    height: "100%",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow:
                                            "0 12px 30px rgba(0, 0, 0, 0.15)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        paddingTop: "100%",
                                    }}
                                >
                                    <Image
                                        src={basement.src}
                                        alt={basement.alt}
                                        fill
                                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                        loading={index < 6 ? "eager" : "lazy"}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background:
                                            "linear-gradient(transparent, rgba(0,0,0,0.7))",
                                        padding: "40px 16px 16px",
                                        textAlign: "left",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            flexWrap: "wrap",
                                            marginBottom: 1,
                                        }}
                                    >
                                        {basement.categories.map(
                                            (category, catIndex) => (
                                                <Box
                                                    key={catIndex}
                                                    component="span"
                                                    sx={{
                                                        display: "inline-block",
                                                        borderRadius: "12px",
                                                        padding: "0px 8px",
                                                        height: "22px",
                                                        lineHeight: "22px",
                                                        fontSize: "0.7rem",
                                                        backgroundColor:
                                                            "rgba(255,255,255,0.85)",
                                                        color: "#333",
                                                    }}
                                                >
                                                    {category}
                                                </Box>
                                            ),
                                        )}
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "white",
                                            fontSize: "0.85rem",
                                            textShadow:
                                                "0 1px 2px rgba(0,0,0,0.5)",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {basement.alt}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
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

export default GalleryComponent;
