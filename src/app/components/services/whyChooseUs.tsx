import { Container, Grid, Typography, Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import basement from "@/app/assets/services/basement.png";
import workingTeam from "@/app/assets/services/working.png";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const WhyChooseUs = () => {
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
                    padding: {
                        xs: "0 16px 56px",
                        md: "60px 0 112px",
                    },
                }}
            >
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-start" },
                            marginTop: { xs: "56px", md: "0" },
                            paddingRight: { xs: "0", md: "80px" },
                        }}
                    >
                        <Image
                            src={workingTeam}
                            alt="Image of a team remodeling a basement"
                            layout="responsive"
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    alignItems={"center"}
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                    }}
                    order={{ xs: 1, md: 2 }}
                >
                    <Typography variant="body1" fontWeight="bold">
                        Exceptional
                    </Typography>
                    <Typography variant="h2" sx={{ marginTop: "16px" }}>
                        Why Choose Us?
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Maximize your home&apos;s living area with a fully
                        finished basement to significantly enhance your living
                        space.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        Elevate your property&apos;s value with a professionally
                        finished basement to notably increase home value.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        Craft versatile spaces for entertaining, relaxing, or
                        working with our expert design services.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        Count on our professional team for expert advice and
                        unwavering support throughout the process.
                    </Typography>
                    <Stack
                        direction="row"
                        sx={{
                            marginTop: "64px",
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Link href="/gallery" passHref>
                            <Button variant="outlined">Gallery</Button>
                        </Link>
                        <Link href="/contact-us" passHref>
                            <Button
                                variant="text"
                                endIcon={<IoIosArrowForward />}
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyChooseUs;
