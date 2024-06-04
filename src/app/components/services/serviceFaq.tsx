import React from "react";
import { Typography, Box, Button, Container, Grid, Stack } from "@mui/material";
import Link from "next/link";

const ServiceFaq = () => {
    return (
        <Container
            maxWidth={false}
            className={"secondary-background benefits-container"}
            sx={{ height: "fit-content" }}
        >
            <Stack
                sx={{
                    height: "100%",
                    alignItems: "center",
                }}
                justifyContent={"center"}
                className={"secondary-background FAQ-Content-Container"}
                spacing={"80px"}
            >
                <Stack spacing={"24px"} sx={{ paddingTop: "112px" }}>
                    <Typography variant="h2" gutterBottom>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Find answers to common inquiries about our services,
                        pricing, timeframes, and project steps.
                    </Typography>
                </Stack>

                <Stack
                    sx={{ textAlign: "left", maxWidth: "800px", width: "100%" }}
                    spacing={"48px"}
                >
                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            What services do you offer?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We offer comprehensive basement finishing and
                            remodeling services. From custom design and
                            structural work to electrical, plumbing, and
                            finishing touches, we handle every step to transform
                            your basement into a beautiful, functional space.
                        </Typography>
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            Where do you operate?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            JS ProFinish proudly serves homeowners and
                            businesses across Utah, including but not limited to
                            Salt Lake City, Ogden, Provo, and surrounding areas.
                            Our team is dedicated to delivering top-quality
                            basement finishing and remodeling services
                            throughout the state.
                        </Typography>
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            How long does it take?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The duration of the project depends on the
                            complexity and size of the basement. We strive to
                            complete the work within the agreed-upon timeframe.
                            Get in touch and we can provide a rough estimate.
                        </Typography>
                    </Stack>
                    <Stack spacing={"16"}>
                        <Typography variant="body1" fontWeight="bold">
                            Can I customize my basement?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Yes, you can customize your basement according to
                            your preferences and needs. We offer a wide range of
                            options for flooring, lighting, walls, ceilings, and
                            other features to create a personalized space that
                            suits your style.
                        </Typography>
                    </Stack>
                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            How much does basement finishing cost?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The cost of basement finishing varies depending on
                            the size of the basement, the scope of the project,
                            and the materials and features chosen. We provide
                            personalized quotes based on your specific
                            requirements. Contact us for a free estimate.
                        </Typography>
                    </Stack>
                    <Stack
                        spacing={"16px"}
                        textAlign={"center"}
                        alignItems={"center"}
                        sx={{ paddingBottom: "112px" }}
                    >
                        <Typography variant="h4" gutterBottom>
                            Still have questions?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Contact us for more information.
                        </Typography>
                        <Link href="/contact-us" passHref>
                            <Button
                                variant="outlined"
                                sx={{
                                    maxWidth: "104px",
                                    borderWidth: "2px",
                                }}
                            >
                                Contact
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
};

export default ServiceFaq;
