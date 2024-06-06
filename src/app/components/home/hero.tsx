import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import ImageMasonry from "@/app/components/home/imageMasonry";
import Link from "next/link";

const Hero = () => {
    return (
        <Container
            maxWidth={false}
            className={"secondary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    textAlign: { xs: "center", md: "start" },
                    height: "fit-content",
                    maxWidth: "1440px",
                    justifyContent: "center",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ paddingRight: { xs: "0", md: "80px" } }}
                >
                    <TextSection />
                </Grid>
                <Grid item xs={12} md={6} sx={{ overflow: "hidden" }}>
                    <ImageMasonry />
                </Grid>
            </Grid>
        </Container>
    );
};

const TextSection = () => {
    return (
        <Stack
            spacing={"24px"}
            sx={{
                paddingY: { xs: "112px", md: "70px", lg: "112px" },
                alignItems: { xs: "center", md: "start" },
            }}
        >
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
            <Stack
                spacing={"16px"}
                direction={"row"}
                sx={{ alignSelf: { xs: "center", md: "start" } }}
            >
                <Link href="/services" passHref>
                    <Button>Learn More</Button>
                </Link>
                <Link href="/contact-us" passHref>
                    <Button variant={"outlined"} sx={{ background: "none" }}>
                        Contact Us
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Hero;
