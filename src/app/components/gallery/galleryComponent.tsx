import { Container, Grid, Stack, Typography } from "@mui/material";

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

const GalleryComponent = () => {
    const basements = [
        {
            src: basement1,
            alt: "Modern design with sleek finishes",
            width: 300,
            height: 300,
        },
        {
            src: basement3,
            alt: "Contemporary remodel project with open layout",
            width: 300,
            height: 300,
        },
        {
            src: basement4,
            alt: "Wooden styled modern kitchen",
            width: 300,
            height: 300,
        },
        {
            src: basement7,
            alt: "Finished basement with entertainment setup",
            width: 300,
            height: 300,
        },
        {
            src: basement8,
            alt: "Basement makeover with cozy seating area",
            width: 300,
            height: 300,
        },
        {
            src: basement9,
            alt: "Elegant basement remodel with pool table",
            width: 300,
            height: 300,
        },
        {
            src: basement10,
            alt: "Functional basement design with cozy modern seating area",
            width: 300,
            height: 300,
        },
        {
            src: basement11,
            alt: "Transformed basement with entertainment and bar area",
            width: 300,
            height: 300,
        },
        {
            src: basement12,
            alt: "Luxury basement renovation with modern amenities",
            width: 300,
            height: 300,
        },
        {
            src: basement13,
            alt: "Finished basement with earthy and plant style",
            width: 300,
            height: 300,
        },
        {
            src: basement14,
            alt: "Scandinavian home styled basement",
            width: 300,
            height: 300,
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
                    maxWidth: "2440px",
                    padding: "112px 0 112px 0",
                }}
            >
                <Grid item sx={{ maxWidth: "768px" }}>
                    <Stack spacing={"24px"}>
                        <Typography variant={"h2"}>Gallery</Typography>
                        <Typography variant={"body1"}>
                            Explore stunning basement finishing projects in
                            various styles
                        </Typography>
                    </Stack>
                </Grid>
                <Grid container spacing={2} justifyContent="center" mt={4}>
                    {basements.map((basement, index) => (
                        <Grid item key={index}>
                            <Image
                                src={basement.src}
                                alt={basement.alt}
                                width={basement.width}
                                height={basement.height}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default GalleryComponent;
