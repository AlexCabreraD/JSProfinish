import React from "react";
import { Typography, Button, Container, Stack } from "@mui/material";
import Link from "next/link";

interface FAQProps {
    county: string;
}

const FAQ = ({ county }: FAQProps) => {
    const locations =
        county === "Davis"
            ? "Clearfield, Layton, Kaysville, Farmington, Syracuse, Bountiful, Centerville, North Salt Lake, Woods Cross"
            : "Ogden, Roy, North Ogden, South Ogden, West Haven, Harrisville, Pleasant View, Marriott-Slaterville, Uintah";
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
                <Stack
                    spacing={"24px"}
                    sx={{ paddingTop: "112px", textAlign: "center" }}
                >
                    <Typography variant="h2" gutterBottom>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Find answers to common questions about our basement
                        finishing services in {county} County.
                    </Typography>
                </Stack>

                <Stack
                    sx={{ textAlign: "left", maxWidth: "800px", width: "100%" }}
                    spacing={"48px"}
                >
                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            Where do you operate?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            JS ProFinish proudly serves homeowners and
                            businesses throughout Northern Utah. Whether
                            you&apos;re located in {locations}, or anywhere else
                            in {county} County, our team is ready to assist you
                            with top-quality basement finishing and remodeling
                            services tailored to your needs.
                        </Typography>
                    </Stack>
                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            How long does it take to finish a basement?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The time it takes to finish a basement depends on
                            various factors such as the size of the basement,
                            the complexity of the project, and any additional
                            features or customizations. On average, it can take
                            anywhere from a few weeks to a few months.
                        </Typography>
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography variant="body1" fontWeight="bold">
                            What materials do you use for basement finishing?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We use high-quality materials that are specifically
                            designed for basement finishing. These materials are
                            moisture-resistant, durable, and meet all safety and
                            building code requirements.
                        </Typography>
                    </Stack>
                    <Stack spacing={"16px"}>
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

export default FAQ;
