import { Container, Grid, Typography, Button, Stack } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { RiBuilding3Line } from "react-icons/ri";
import { PiWall } from "react-icons/pi";
import { TbTools } from "react-icons/tb";
import { LuPaintbrush } from "react-icons/lu";
import Link from "next/link";

const OurWork = () => {
    return (
        <Container
            maxWidth={false}
            className={"secondary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "flex-start",
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: "112px 0" },
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography variant="body1" fontWeight="bold">
                        Expertise
                    </Typography>
                    <Typography variant="h2" sx={{ marginTop: "16px" }}>
                        Our Extensive Basement Finishing
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        In addition to basement finishing, we offer a range of
                        services including framing, carpentry, drywall, and
                        painting. Our team of skilled professionals ensures that
                        every aspect of your basement project is handled with
                        precision and attention to detail.
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            marginTop: "24px",
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Link href="/about-us" passHref>
                            <Button variant="contained">Learn More</Button>
                        </Link>
                        <Link href="/contact-us" passHref>
                            <Button
                                variant="outlined"
                                endIcon={<IoIosArrowForward />}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Stack>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                        paddingLeft: { sx: "0", md: "80px" },
                        margin: { xs: "64px 0 64px 0", md: "0" },
                    }}
                >
                    <RiBuilding3Line
                        size={40}
                        style={{ width: "36px", height: "40px" }}
                    />
                    <Typography variant="h4" sx={{ marginTop: "28px" }}>
                        Framing Services
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Our expert team provides professional framing services
                        for your basement project, ensuring structural integrity
                        and precision.
                    </Typography>

                    <PiWall
                        size={40}
                        style={{
                            width: "36px",
                            height: "40px",
                            marginTop: "64px",
                        }}
                    />
                    <Typography variant="h4" sx={{ marginTop: "28px" }}>
                        Drywall Installation
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Achieve a smooth and flawless finish for your basement
                        walls with our professional drywall services.
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                        paddingLeft: { sx: "0", md: "80px" },
                    }}
                >
                    <TbTools
                        size={40}
                        style={{ width: "36px", height: "40px" }}
                    />
                    <Typography variant="h4" sx={{ marginTop: "28px" }}>
                        Carpentry Services
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Enhance the functionality and aesthetics of your
                        basement with our high-quality carpentry services.
                    </Typography>

                    <LuPaintbrush
                        size={40}
                        style={{
                            width: "36px",
                            height: "40px",
                            marginTop: "64px",
                        }}
                    />
                    <Typography variant="h4" sx={{ marginTop: "28px" }}>
                        Professional Painting
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Transform your basement into a beautiful space with our
                        expert painting services.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurWork;
