import { Container, Grid, Typography, Button } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import planImage from "@/app/assets/about/CircleImage.png";
import Image from "next/image";
import Link from "next/link";

const whyUsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Basement Finishing Services",
    description:
        "Discover what sets JS ProFinish apart with our commitment to excellence, tailored solutions, and transparent communication for basement finishing in Northern Utah.",
    provider: {
        "@type": "LocalBusiness",
        name: "JS ProFinish",
        areaServed: ["Northern Utah", "Weber County", "Davis County"],
    },
    serviceType: "Basement Remodeling",
};

const WhyUs = () => {
    return (
        <Container
            maxWidth={false}
            className={"tertiary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    height: "fit-content",
                    maxWidth: "1440px",
                    textAlign: "center",
                    padding: { xs: "56px 0", md: "112px 0" },
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                    <Image
                        src={planImage}
                        alt={
                            "Man and woman planning a new home design for a basement remodel"
                        }
                        style={{
                            width: "100%",
                            maxWidth: "685px",
                            height: "auto",
                            margin: "0 auto",
                            display: "block",
                        }}
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: "left",
                        padding: { xs: "16px", md: "0 0 0 80px" },
                    }}
                >
                    <Typography
                        variant="body1"
                        component="div"
                        fontWeight="bold"
                    >
                        Excellence
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{ marginTop: "16px" }}
                    >
                        What Sets Us Apart
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginTop: "24px" }}
                    >
                        We do what we say we're going to do. That means quality work, showing up on schedule, and treating your home with respect.
                    </Typography>
                    <Grid container spacing={2} sx={{ marginTop: "32px" }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="h3">
                                Your Project, Your Way
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ marginTop: "16px" }}
                            >
                                No two homes are alike, and neither are our projects. We listen to what you need and design a basement that works for how you live.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="h3">
                                Straight Talk
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{ marginTop: "16px" }}
                            >
                                We'll tell you upfront what things cost, how long they'll take, and if we run into any issues. No surprises, no runaround.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ marginTop: "24px" }}>
                        <Grid item>
                            <Link
                                href="/services"
                                passHref
                                aria-label="Learn more about our basement finishing services"
                            >
                                <Button
                                    variant="outlined"
                                    sx={{ borderColor: "white" }}
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="/contact-us"
                                passHref
                                aria-label="Contact us for a free estimate"
                            >
                                <Button
                                    variant="text"
                                    endIcon={<MdArrowForwardIos />}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(whyUsStructuredData),
                }}
            />
        </Container>
    );
};

export default WhyUs;
