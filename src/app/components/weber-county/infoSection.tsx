import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import img from "@/app/assets/county/img1.png";
import Link from "next/link";

interface InfoSectionProps {
    county: string;
}

const InfoSection = ({ county }: InfoSectionProps) => {
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
                    textAlign: { xs: "center", md: "start" },
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: "112px 0" }, // Responsive padding
                }}
                spacing={4}
            >
                <Grid item xs={12} md={6}>
                    <Typography variant={"h2"}>
                        Local Expertise in {county} County Basement Finishing
                    </Typography>
                    <Typography variant={"body1"} sx={{ marginTop: "24px" }}>
                        At ProFinish Basement Finishing, we understand the
                        unique building codes and regulations in {county}{" "}
                        County. Our team of experts is well-versed in the local
                        requirements, ensuring that your basement finishing
                        project is completed smoothly and in compliance with all
                        necessary guidelines.
                    </Typography>
                    <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{
                            marginTop: "40px",
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Link href="/about-us" passHref>
                            <Button variant={"outlined"}>Learn More</Button>
                        </Link>
                        <Link href="/contact-us" passHref>
                            <Button variant={"text"}>
                                Contact Us{" "}
                                <MdArrowForwardIos
                                    style={{
                                        width: "14.12px",
                                        height: "14.41px",
                                        color: "#145c3f",
                                        margin: "4px 6px 4px 6px",
                                    }}
                                />
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ padding: { xs: "40px 0 0 0", md: "0 0 0 80px" } }}
                >
                    <Image
                        src={img}
                        alt={
                            "High-quality architectural drawing for basement remodeling project"
                        }
                        layout="responsive"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default InfoSection;
