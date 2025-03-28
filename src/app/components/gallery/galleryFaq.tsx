import React from "react";
import {
    Typography,
    Button,
    Container,
    Stack,
    Box,
    Divider,
} from "@mui/material";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What types of basement finishing styles do you offer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We offer a wide range of basement finishing styles including modern, traditional, entertainment-focused, multi-functional spaces, home theaters, and more. Our designs can be customized to match your home's existing aesthetic or create a completely unique space.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a typical basement remodeling project take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most basement finishing projects take between 4-8 weeks depending on the size and complexity. Factors that affect timeline include permit approval, complexity of design, material selection, and any specialized features like wet bars or home theaters.",
            },
        },
        {
            "@type": "Question",
            name: "What is the average cost of a basement remodel in Northern Utah?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Basement finishing costs in Northern Utah typically range from $35-75 per square foot depending on materials, fixtures, and complexity. We provide detailed, transparent pricing and work with various budgets to create beautiful functional spaces.",
            },
        },
        {
            "@type": "Question",
            name: "Can you help with design ideas and planning?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our experienced design team offers comprehensive planning services. We provide 3D visualizations, material selection assistance, and space planning to maximize functionality while achieving your aesthetic goals for your basement renovation.",
            },
        },
        {
            "@type": "Question",
            name: "Are you licensed and insured for basement remodeling in Weber and Davis Counties?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, JS ProFinish is fully licensed and insured in Utah, specializing in basement finishing projects throughout Weber and Davis Counties. We handle all necessary permits and inspections to ensure your project meets local building codes.",
            },
        },
    ],
};

const GalleryFaq = () => {
    return (
        <Container
            maxWidth={false}
            className={"secondary-background benefits-container"}
            sx={{
                height: "fit-content",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Stack
                sx={{
                    height: "100%",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 2,
                }}
                justifyContent={"center"}
                className={"secondary-background FAQ-Content-Container"}
                spacing={"80px"}
            >
                <Stack
                    spacing={"24px"}
                    sx={{
                        paddingTop: "112px",
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                        }}
                    >
                        <FaQuestionCircle size={40} color="#1C7C54" />
                    </Box>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "2rem", md: "2.5rem" },
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        paragraph
                        sx={{
                            maxWidth: "800px",
                            margin: "0 auto",
                            color: "#f0f0f0",
                        }}
                    >
                        Find answers to common questions about our basement
                        finishing services, including timelines, costs, and
                        design options for homeowners in Northern Utah.
                    </Typography>
                </Stack>

                <Stack
                    sx={{
                        textAlign: "left",
                        maxWidth: "800px",
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "16px",
                        padding: { xs: "24px", md: "40px" },
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                    spacing={"32px"}
                >
                    <Stack spacing={"16px"}>
                        <Typography
                            variant="h6"
                            component="h3"
                            fontWeight="bold"
                            sx={{ color: "#1C7C54" }}
                        >
                            What types of basement finishing styles do you
                            offer?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We offer a wide range of basement finishing styles
                            including modern, traditional,
                            entertainment-focused, multi-functional spaces, home
                            theaters, and more. Our designs can be customized to
                            match your home's existing aesthetic or create a
                            completely unique space. Browse our gallery to see
                            examples of our work in Weber and Davis Counties.
                        </Typography>
                        <Divider
                            sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                        />
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography
                            variant="h6"
                            component="h3"
                            fontWeight="bold"
                            sx={{ color: "#1C7C54" }}
                        >
                            How long does a typical basement remodeling project
                            take?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Most basement finishing projects take between 4-8
                            weeks depending on the size and complexity. Factors
                            that affect timeline include permit approval,
                            complexity of design, material selection, and any
                            specialized features like wet bars or home theaters.
                            During your initial consultation, we'll provide a
                            detailed timeline specific to your project.
                        </Typography>
                        <Divider
                            sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                        />
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography
                            variant="h6"
                            component="h3"
                            fontWeight="bold"
                            sx={{ color: "#1C7C54" }}
                        >
                            What is the average cost of a basement remodel in
                            Northern Utah?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Basement finishing costs in Northern Utah typically
                            range from $35-75 per square foot depending on
                            materials, fixtures, and complexity. We provide
                            detailed, transparent pricing and work with various
                            budgets to create beautiful functional spaces. Our
                            free consultation includes a comprehensive estimate
                            based on your specific requirements.
                        </Typography>
                        <Divider
                            sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                        />
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography
                            variant="h6"
                            component="h3"
                            fontWeight="bold"
                            sx={{ color: "#1C7C54" }}
                        >
                            Can you help with design ideas and planning?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Yes, our experienced design team offers
                            comprehensive planning services. We provide material
                            selection assistance, and space planning to maximize
                            functionality while achieving your aesthetic goals
                            for your basement renovation. During the initial
                            consultation, we'll discuss your vision and provide
                            expert recommendations tailored to your specific
                            needs.
                        </Typography>
                        <Divider
                            sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                        />
                    </Stack>

                    <Stack spacing={"16px"}>
                        <Typography
                            variant="h6"
                            component="h3"
                            fontWeight="bold"
                            sx={{ color: "#1C7C54" }}
                        >
                            Are you licensed and insured for basement remodeling
                            in Weber and Davis Counties?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Yes, JS ProFinish is fully licensed and insured in
                            Utah, specializing in basement finishing projects
                            throughout Weber and Davis Counties. We handle all
                            necessary permits and inspections to ensure your
                            project meets local building codes and regulations.
                            Our team of professionals has over 15 years of
                            experience in basement remodeling in Northern Utah.
                        </Typography>
                    </Stack>

                    <Stack
                        spacing={"24px"}
                        textAlign={"center"}
                        alignItems={"center"}
                        sx={{
                            padding: "24px",
                            mt: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.1)",
                            borderRadius: "12px",
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h3"
                            gutterBottom
                            sx={{ fontWeight: 600 }}
                        >
                            Still have questions?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Contact us for a free consultation and personalized
                            information about your basement finishing project in
                            Northern Utah.
                        </Typography>
                        <Link
                            href="/contact-us"
                            passHref
                            aria-label="Contact JS ProFinish for a free basement finishing consultation"
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#1C7C54",
                                    color: "white",
                                    borderWidth: "2px",
                                    padding: "10px 24px",
                                    borderRadius: "8px",
                                    fontWeight: 600,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "#145c3f",
                                        transform: "translateY(-3px)",
                                        boxShadow:
                                            "0 6px 15px rgba(0, 0, 0, 0.2)",
                                    },
                                }}
                            >
                                Get Free Consultation
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>

            <Box
                sx={{
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(28,124,84,0.1) 0%, rgba(28,124,84,0) 70%)",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: -80,
                    left: -80,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(28,124,84,0.08) 0%, rgba(28,124,84,0) 70%)",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqStructuredData),
                }}
            />
        </Container>
    );
};

export default GalleryFaq;
