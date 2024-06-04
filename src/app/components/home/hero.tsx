import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import ImageMasonry from "@/app/components/home/imageMasonry";

const Hero = () => {
    return (
        <Container maxWidth={false} className={"Home-Content-Container"}>
            <Grid
                container
                className={"secondary-background hero-container"}
                sx={{ height: "68vh", overflow: "hidden" }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    alignContent={"center"}
                    justifyContent={"center"}
                    sx={{ height: "100%", paddingX: "32px", width: "100%" }} // Adjust padding for smaller screens
                >
                    <TextSection />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ width: "100%" }}>
                    <ImageMasonry />
                </Grid>
            </Grid>
        </Container>
    );
};

const TextSection = () => {
    return (
        <Stack spacing={"24px"} className={"md-alignText"}>
            <Typography variant={"h1"} sx={{ maxWidth: "576px" }}>
                Premier Basement Finishing Serving Northern Utah Communities
            </Typography>
            <Typography variant={"body1"} sx={{ maxWidth: "576px" }}>
                At JS ProFinish, we are Utah&apos;s premier experts in basement
                finishing and remodeling services. Our team specializes in
                transforming basements into beautiful spaces tailored to your
                needs. Whether you&apos;re in Ogden, Clearfield, Layton, or
                anywhere in northern Utah, trust us to deliver top-quality
                results with our attention to detail and craftsmanship.
            </Typography>
            <Stack spacing={"16px"} direction={"row"}>
                <Button>Learn More</Button>
                <Button variant={"outlined"} sx={{ background: "none" }}>
                    Contact Us
                </Button>
            </Stack>
        </Stack>
    );
};

export default Hero;
