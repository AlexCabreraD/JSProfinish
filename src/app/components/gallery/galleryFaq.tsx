import React from "react";
import {
    Typography,
    Button,
    Container,
    Stack,
    Box,
    Paper,
    alpha,
} from "@mui/material";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

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
                text: "Yes, our experienced design team offers comprehensive planning services. We provide material selection assistance, and space planning to maximize functionality while achieving your aesthetic goals for your basement renovation.",
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
                py: { xs: 8, md: 12 },
                background: "linear-gradient(180deg, #333333 0%, #252525 100%)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: -160, md: -200 },
                    right: { xs: -180, md: -220 },
                    width: { xs: 300, md: 400 },
                    height: { xs: 300, md: 400 },
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(28,124,84,0.08) 0%, rgba(28,124,84,0) 70%)",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: -120, md: -150 },
                    left: { xs: -140, md: -180 },
                    width: { xs: 250, md: 300 },
                    height: { xs: 250, md: 300 },
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(28,124,84,0.06) 0%, rgba(28,124,84,0) 70%)",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    top: "40%",
                    left: "5%",
                    width: { xs: 80, md: 120 },
                    height: { xs: 80, md: 120 },
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    background: "rgba(28,124,84,0.03)",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    top: "25%",
                    right: "8%",
                    width: { xs: 60, md: 100 },
                    height: { xs: 60, md: 100 },
                    borderRadius: "30% 70% 30% 70% / 30% 70% 30% 70%",
                    background: "rgba(28,124,84,0.02)",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                }}
            />

            <Stack
                sx={{
                    height: "100%",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
                spacing={8}
            >
                <Stack
                    spacing={3}
                    sx={{
                        textAlign: "center",
                        maxWidth: "800px",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 auto",
                            width: { xs: 80, md: 100 },
                            height: { xs: 80, md: 100 },
                            borderRadius: "50%",
                            background:
                                "linear-gradient(145deg, rgba(28,124,84,0.1) 0%, rgba(28,124,84,0.05) 100%)",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                            mb: { xs: 2, md: 3 },
                        }}
                    >
                        <FaQuestionCircle
                            size={42}
                            color="#1C7C54"
                            style={{
                                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "2.2rem", md: "2.75rem" },
                            background:
                                "linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            letterSpacing: "-0.5px",
                            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                            mb: 3,
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            fontSize: { xs: "1.1rem", md: "1.2rem" },
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "90%",
                            margin: "0 auto",
                            lineHeight: 1.6,
                        }}
                    >
                        Find answers to common questions about our basement
                        finishing services, including timelines, costs, and
                        design options for homeowners in Northern Utah.
                    </Typography>
                </Stack>

                <Paper
                    elevation={0}
                    sx={{
                        width: "100%",
                        maxWidth: "900px",
                        backgroundColor: "transparent",
                        borderRadius: "20px",
                        overflow: "hidden",
                        position: "relative",
                        zIndex: 3,
                    }}
                >
                    <Stack spacing={3}>
                        <Box
                            sx={{
                                backgroundColor: alpha("#1C1C1C", 0.7),
                                backdropFilter: "blur(10px)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow:
                                        "0 12px 40px rgba(0, 0, 0, 0.25)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    position: "relative",
                                    borderBottom:
                                        "1px solid rgba(255, 255, 255, 0.05)",
                                    backgroundColor: alpha("#252525", 0.5),
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: alpha(
                                                "#1C7C54",
                                                0.15,
                                            ),
                                            borderRadius: "50%",
                                            width: 36,
                                            height: 36,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IoChevronDown
                                            color="#1C7C54"
                                            size={20}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        fontWeight="bold"
                                        sx={{
                                            color: "#1C7C54",
                                            fontSize: {
                                                xs: "1.1rem",
                                                md: "1.25rem",
                                            },
                                        }}
                                    >
                                        What types of basement finishing styles
                                        do you offer?
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.9)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    We offer a wide range of basement finishing
                                    styles including modern, traditional,
                                    entertainment-focused, multi-functional
                                    spaces, home theaters, and more. Our designs
                                    can be customized to match your home&#39;s
                                    existing aesthetic or create a completely
                                    unique space. Browse our gallery to see
                                    examples of our work in Weber and Davis
                                    Counties.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: alpha("#1C1C1C", 0.7),
                                backdropFilter: "blur(10px)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow:
                                        "0 12px 40px rgba(0, 0, 0, 0.25)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    position: "relative",
                                    borderBottom:
                                        "1px solid rgba(255, 255, 255, 0.05)",
                                    backgroundColor: alpha("#252525", 0.5),
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: alpha(
                                                "#1C7C54",
                                                0.15,
                                            ),
                                            borderRadius: "50%",
                                            width: 36,
                                            height: 36,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IoChevronDown
                                            color="#1C7C54"
                                            size={20}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        fontWeight="bold"
                                        sx={{
                                            color: "#1C7C54",
                                            fontSize: {
                                                xs: "1.1rem",
                                                md: "1.25rem",
                                            },
                                        }}
                                    >
                                        How long does a typical basement
                                        remodeling project take?
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.9)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Most basement finishing projects take
                                    between 4-8 weeks depending on the size and
                                    complexity. Factors that affect timeline
                                    include permit approval, complexity of
                                    design, material selection, and any
                                    specialized features like wet bars or home
                                    theaters. During your initial consultation,
                                    we&#39;ll provide a detailed timeline
                                    specific to your project.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: alpha("#1C1C1C", 0.7),
                                backdropFilter: "blur(10px)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow:
                                        "0 12px 40px rgba(0, 0, 0, 0.25)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    position: "relative",
                                    borderBottom:
                                        "1px solid rgba(255, 255, 255, 0.05)",
                                    backgroundColor: alpha("#252525", 0.5),
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: alpha(
                                                "#1C7C54",
                                                0.15,
                                            ),
                                            borderRadius: "50%",
                                            width: 36,
                                            height: 36,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IoChevronDown
                                            color="#1C7C54"
                                            size={20}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        fontWeight="bold"
                                        sx={{
                                            color: "#1C7C54",
                                            fontSize: {
                                                xs: "1.1rem",
                                                md: "1.25rem",
                                            },
                                        }}
                                    >
                                        What is the average cost of a basement
                                        remodel in Northern Utah?
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.9)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Basement finishing costs in Northern Utah
                                    typically range from $35-75 per square foot
                                    depending on materials, fixtures, and
                                    complexity. We provide detailed, transparent
                                    pricing and work with various budgets to
                                    create beautiful functional spaces. Our free
                                    consultation includes a comprehensive
                                    estimate based on your specific
                                    requirements.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: alpha("#1C1C1C", 0.7),
                                backdropFilter: "blur(10px)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow:
                                        "0 12px 40px rgba(0, 0, 0, 0.25)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    position: "relative",
                                    borderBottom:
                                        "1px solid rgba(255, 255, 255, 0.05)",
                                    backgroundColor: alpha("#252525", 0.5),
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: alpha(
                                                "#1C7C54",
                                                0.15,
                                            ),
                                            borderRadius: "50%",
                                            width: 36,
                                            height: 36,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IoChevronDown
                                            color="#1C7C54"
                                            size={20}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        fontWeight="bold"
                                        sx={{
                                            color: "#1C7C54",
                                            fontSize: {
                                                xs: "1.1rem",
                                                md: "1.25rem",
                                            },
                                        }}
                                    >
                                        Can you help with design ideas and
                                        planning?
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.9)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Yes, our experienced design team offers
                                    comprehensive planning services. We provide
                                    material selection assistance, and space
                                    planning to maximize functionality while
                                    achieving your aesthetic goals for your
                                    basement renovation. During the initial
                                    consultation, we&#39;ll discuss your vision
                                    and provide expert recommendations tailored
                                    to your specific needs.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                backgroundColor: alpha("#1C1C1C", 0.7),
                                backdropFilter: "blur(10px)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow:
                                        "0 12px 40px rgba(0, 0, 0, 0.25)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    position: "relative",
                                    borderBottom:
                                        "1px solid rgba(255, 255, 255, 0.05)",
                                    backgroundColor: alpha("#252525", 0.5),
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: alpha(
                                                "#1C7C54",
                                                0.15,
                                            ),
                                            borderRadius: "50%",
                                            width: 36,
                                            height: 36,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <IoChevronDown
                                            color="#1C7C54"
                                            size={20}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        fontWeight="bold"
                                        sx={{
                                            color: "#1C7C54",
                                            fontSize: {
                                                xs: "1.1rem",
                                                md: "1.25rem",
                                            },
                                        }}
                                    >
                                        Are you licensed and insured for
                                        basement remodeling in Weber and Davis
                                        Counties?
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{ p: { xs: 3, md: 4 } }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.9)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Yes, JS ProFinish is fully licensed and
                                    insured in Utah, specializing in basement
                                    finishing projects throughout Weber and
                                    Davis Counties. We handle all necessary
                                    permits and inspections to ensure your
                                    project meets local building codes and
                                    regulations. Our team of professionals has
                                    over 15 years of experience in basement
                                    remodeling in Northern Utah.
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>

                    <Box
                        sx={{
                            mt: 6,
                            p: { xs: 4, md: 5 },
                            borderRadius: "16px",
                            background:
                                "linear-gradient(135deg, rgba(28,124,84,0.2) 0%, rgba(28,124,84,0.05) 100%)",
                            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                            border: "1px solid rgba(28,124,84,0.15)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: -60,
                                right: -60,
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                background:
                                    "radial-gradient(circle, rgba(28,124,84,0.2) 0%, rgba(28,124,84,0) 70%)",
                                zIndex: 0,
                            }}
                        />

                        <Stack
                            spacing={3}
                            textAlign="center"
                            alignItems="center"
                            sx={{ position: "relative", zIndex: 1 }}
                        >
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "1.75rem", md: "2rem" },
                                    color: "#FFFFFF",
                                }}
                            >
                                Still Have Questions?
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    color: "rgba(255,255,255,0.9)",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                }}
                            >
                                Contact us for a free consultation and
                                personalized information about your basement
                                finishing project in Northern Utah.
                            </Typography>

                            <Link
                                href="/contact-us"
                                passHref
                                aria-label="Contact JS ProFinish for a free basement finishing consultation"
                                style={{ marginTop: "8px" }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        background:
                                            "linear-gradient(135deg, #1C7C54 0%, #145c3f 100%)",
                                        color: "white",
                                        px: { xs: 4, md: 6 },
                                        py: { xs: 1.5, md: 1.75 },
                                        borderRadius: "50px",
                                        fontSize: {
                                            xs: "1rem",
                                            md: "1.125rem",
                                        },
                                        fontWeight: 600,
                                        boxShadow:
                                            "0 10px 20px rgba(0,0,0,0.2)",
                                        textTransform: "none",
                                        border: "2px solid rgba(255,255,255,0.1)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform:
                                                "translateY(-3px) scale(1.03)",
                                            boxShadow:
                                                "0 15px 30px rgba(0,0,0,0.25)",
                                            background:
                                                "linear-gradient(135deg, #1C7C54 20%, #145c3f 100%)",
                                        },
                                    }}
                                >
                                    Get Your Free Consultation
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Paper>
            </Stack>

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
