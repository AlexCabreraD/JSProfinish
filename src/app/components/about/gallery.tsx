import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "@/app/assets/home/img/image3.png";
import img2 from "@/app/assets/home/img/image5.png";

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
                    padding: { xs: "45px 0 45px 0", md: "112px 16px 112px" },
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
                        <Typography variant={"h3"}>Gallery</Typography>
                        <Typography variant={"body1"}>
                            We hope these visuals spark your imagination and
                            inspire you to embark on your own journey with us.
                            Discover the beauty, passion, and innovation that
                            define our projects.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    spacing={"32px"}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ marginTop: "24px" }}
                >
                    <Grid item xs={6}>
                        <Image
                            src={img1}
                            alt="Remodeled finished basement with a pool table, TV, and entertainment stand"
                            layout="responsive"
                            width={500} // Specify the width of the image
                            height={500} // Specify the height of the image
                            objectFit="cover" // Ensure the image covers the area
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Image
                            src={img2}
                            alt="Finished basement with small living room area, TV, and counter island with chairs"
                            layout="responsive"
                            width={500} // Specify the width of the image
                            height={500} // Specify the height of the image
                            objectFit="cover" // Ensure the image covers the area
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Gallery;
