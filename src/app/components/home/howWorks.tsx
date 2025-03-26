import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Grid version 2
import Stack from "@mui/material/Stack";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import React from "react";

const HowWorks = () => {
    const processSteps = [
        {
            icon: <LuPencil />,
            title: "Free Consultation",
            description:
                "Schedule a free consultation to discuss your basement finishing project and receive personalized recommendations.",
        },
        {
            icon: <MdOutlineDesignServices />,
            title: "Design and Planning",
            description:
                "Work with our expert designers to create a customized plan that maximizes your space and reflects your style.",
        },
        {
            icon: <IoConstructOutline />,
            title: "Quality Construction",
            description:
                "Our experienced team handles all aspects of the construction process with meticulous attention to detail.",
        },
    ];

    return (
        <Box
            component="section"
            id="process-section"
            sx={{
                py: { xs: 8, md: 14 },
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {/* Header Section */}
                    <Grid size={12} sx={{ mb: { xs: 3, md: 6 } }}>
                        <Stack
                            spacing={2}
                            sx={{
                                maxWidth: "800px",
                                mx: "auto",
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#1C7C54",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                }}
                            >
                                OUR PROCESS
                            </Typography>

                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                From Consultation to Beautiful Basement in No
                                Time
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    color: "#333333",
                                    maxWidth: "650px",
                                    mx: "auto",
                                    lineHeight: 1.6,
                                }}
                            >
                                Our basement finishing process is simple and
                                hassle-free. We guide you through every step,
                                from the initial consultation to the final
                                touches, ensuring a smooth and enjoyable
                                experience.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Process Steps Section */}
                    <Grid container spacing={4} columns={12}>
                        {processSteps.map((step, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        borderRadius: "12px",
                                        p: 4,
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.04)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.08)",
                                            transform: "translateY(-4px)",
                                            boxShadow:
                                                "0 12px 24px rgba(0, 0, 0, 0.05)",
                                        },
                                    }}
                                >
                                    <Stack spacing={3} sx={{ height: "100%" }}>
                                        <Box
                                            sx={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "50%",
                                                backgroundColor:
                                                    "rgba(28, 124, 84, 0.12)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#1C7C54",
                                                mb: 1,
                                            }}
                                        >
                                            {React.cloneElement(step.icon, {
                                                size: 28,
                                                style: { color: "#1C7C54" },
                                            })}
                                        </Box>

                                        <Box>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 2,
                                                    fontSize: {
                                                        xs: "1.25rem",
                                                        md: "1.375rem",
                                                    },
                                                }}
                                            >
                                                {step.title}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#333333",
                                                    lineHeight: 1.6,
                                                    fontSize: {
                                                        xs: "0.9rem",
                                                        md: "1rem",
                                                    },
                                                }}
                                            >
                                                {step.description}
                                            </Typography>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mt: "auto",
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    fontWeight: 500,
                                                    color: "#1C7C54",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                Step {index + 1}
                                            </Typography>

                                            {index <
                                                processSteps.length - 1 && (
                                                <Box
                                                    sx={{
                                                        height: "2px",
                                                        backgroundColor:
                                                            "rgba(28, 124, 84, 0.2)",
                                                        flexGrow: 1,
                                                        ml: 2,
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        display: {
                                                            xs: "none",
                                                            md: "block",
                                                        },
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    {/* CTA Buttons */}
                    <Grid size={12} sx={{ mt: 6, textAlign: "center" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: { xs: 2, sm: 3 },
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: "fit-content",
                                mx: "auto",
                            }}
                        >
                            <Link href="/contact-us" passHref>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: "#1C7C54",
                                        py: 1.5,
                                        px: 4,
                                        fontWeight: 600,
                                        borderRadius: "6px",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        boxShadow:
                                            "0 4px 14px rgba(28, 124, 84, 0.25)",
                                        minWidth: { xs: "100%", sm: "auto" },
                                        "&:hover": {
                                            backgroundColor: "#145c3f",
                                            boxShadow:
                                                "0 6px 20px rgba(28, 124, 84, 0.35)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Start Your Project
                                </Button>
                            </Link>

                            <Link href="/gallery" passHref>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    endIcon={
                                        <MdArrowForwardIos
                                            style={{
                                                width: "14px",
                                                height: "14px",
                                            }}
                                        />
                                    }
                                    sx={{
                                        borderColor: "rgba(28, 124, 84, 0.5)",
                                        color: "#1C7C54",
                                        py: 1.5,
                                        px: 4,
                                        fontWeight: 600,
                                        borderRadius: "6px",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        minWidth: { xs: "100%", sm: "auto" },
                                        "&:hover": {
                                            borderColor: "#1C7C54",
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.04)",
                                        },
                                    }}
                                >
                                    View Our Work
                                </Button>
                            </Link>
                        </Box>
                    </Grid>

                    {/* Decorative Shapes */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: "150px",
                            height: "150px",
                            borderRadius: "20px",
                            backgroundColor: "rgba(28, 124, 84, 0.04)",
                            right: { xs: "-75px", md: "5%" },
                            top: "15%",
                            transform: "rotate(15deg)",
                            zIndex: 0,
                            display: { xs: "none", md: "block" },
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            width: "120px",
                            height: "120px",
                            borderRadius: "20px",
                            backgroundColor: "rgba(28, 124, 84, 0.04)",
                            left: { xs: "-60px", md: "5%" },
                            bottom: "10%",
                            transform: "rotate(-10deg)",
                            zIndex: 0,
                            display: { xs: "none", md: "block" },
                        }}
                    />
                </Grid>
            </Container>
        </Box>
    );
};

export default HowWorks;
