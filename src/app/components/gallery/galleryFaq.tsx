import React from "react";
import { Typography, Button, Container, Stack } from "@mui/material";
import Link from "next/link";

const GalleryFaq = () => {
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
                        Find answers to commonly asked questions about our
                        gallery images, project styles, and customization
                        options.
                    </Typography>
                </Stack>

                <Stack
                    sx={{ textAlign: "left", maxWidth: "800px", width: "100%" }}
                    spacing={"48px"}
                >
                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            What are the styles?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our gallery showcases various styles, including
                            modern, traditional, rustic, and contemporary
                            designs. We offer a wide range of options to suit
                            your personal taste and preferences.
                        </Typography>
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            Can I customize?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Yes, we provide customization options for our
                            basement finishing projects. Our team will work
                            closely with you to understand your vision and
                            create a customized solution that meets your needs.
                        </Typography>
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            How to contact?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            To learn more about our gallery images, project
                            styles, or customization options, please contact our
                            team through the contact page on this site or the
                            &quot;Contact&quot; button bellow. We are available
                            to answer any questions you may have.
                        </Typography>
                    </Stack>
                    <Stack spacing={"16"}>
                        <Typography variant="body1" fontWeight="bold">
                            Are there discounts?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We occasionally offer discounts and promotions on
                            our basement finishing services. Contact us to
                            inquire about any current discounts or special
                            offers.
                        </Typography>
                    </Stack>
                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            What is the cost?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The cost of our basement finishing projects varies
                            depending on factors such as the size of the space,
                            the desired style and customization, and any
                            additional features or upgrades. Contact us for a
                            personalized quote.
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

export default GalleryFaq;
