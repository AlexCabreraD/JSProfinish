"use client";

import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Container,
    Avatar,
    IconButton,
    Stack,
    Paper,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    IoStarSharp,
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { PiQuotes } from "react-icons/pi";
import Image from "next/image";
import testimonialImage1 from "@/app/assets/home/img/testimonial1.png";
import testimonialImage2 from "@/app/assets/home/img/testimonial2.png";
import testimonialImage3 from "@/app/assets/home/img/testimonial3.png";

const testimonials = [
    {
        text: "The team at JS ProFinish transformed our unfinished basement into a beautiful living space that exceeded our expectations. Their attention to detail and commitment to quality craftsmanship was evident throughout the entire process.",
        name: "James White",
        title: "Homeowner in Clearfield",
        image: testimonialImage2,
    },
    {
        text: "We are absolutely thrilled with our newly finished basement! The JS ProFinish team guided us through every step of the project, from design to completion, and delivered exceptional results while staying on budget and timeline.",
        name: "Adriana Cortés",
        title: "Homeowner in Layton",
        image: testimonialImage1,
    },
    {
        text: "Working with JS ProFinish was a seamless experience from start to finish. Their expert craftsmanship and professional approach transformed our basement into the perfect entertainment space for our family and friends.",
        name: "Jonah Ortiz",
        title: "Homeowner in Ogden",
        image: testimonialImage3,
    },
];

interface TestimonialProps {
    dark?: boolean;
}

const Testimonials = ({ dark }: TestimonialProps) => {
    const [current, setCurrent] = useState(0);
    const [displayedIndex, setDisplayedIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [fading, setFading] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const componentTheme = dark ? "secondary-background" : "primary-background";

    const changeTestimonial = (index: number) => {
        if (animating) return;

        setAnimating(true);
        setFading(true);

        setTimeout(() => {
            setDisplayedIndex(index);
            setFading(false);

            setTimeout(() => {
                setAnimating(false);
            }, 300);
        }, 300);

        setCurrent(index);
    };

    const handleNext = () => {
        const nextIndex = (current + 1) % testimonials.length;
        changeTestimonial(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex =
            (current - 1 + testimonials.length) % testimonials.length;
        changeTestimonial(prevIndex);
    };

    const handleDotClick = (index: number) => {
        if (index === current || animating) return;
        changeTestimonial(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!animating) {
                handleNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [current, animating]);

    return (
        <Box
            component="section"
            id="testimonials-section"
            sx={{
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container
                maxWidth={false}
                className={`${componentTheme}`}
                sx={{
                    position: "relative",
                    py: { xs: 10, md: 14 },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: { xs: 20, md: 40 },
                        left: { xs: 20, md: 60 },
                        width: { xs: 60, md: 100 },
                        height: { xs: 60, md: 100 },
                        borderRadius: "50%",
                        background: "rgba(28, 124, 84, 0.05)",
                        zIndex: 0,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: { xs: 20, md: 40 },
                        right: { xs: 20, md: 60 },
                        width: { xs: 60, md: 100 },
                        height: { xs: 60, md: 100 },
                        borderRadius: "50%",
                        background: "rgba(28, 124, 84, 0.05)",
                        zIndex: 0,
                    },
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1440px",
                        margin: "0 auto",
                        textAlign: "center",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <Stack
                        spacing={4}
                        alignItems="center"
                        sx={{ mb: { xs: 6, md: 8 } }}
                    >
                        <Typography
                            variant="overline"
                            component="p"
                            sx={{
                                color: "#1C7C54",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                fontSize: { xs: "0.875rem", md: "1rem" },
                            }}
                        >
                            CLIENT TESTIMONIALS
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                maxWidth: "800px",
                                fontSize: { xs: "2rem", md: "2.5rem" },
                                lineHeight: 1.2,
                            }}
                        >
                            What Our Clients Say About Us
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: "700px",
                                color: dark
                                    ? "rgba(255, 255, 255, 0.8)"
                                    : "rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            Don&#39;t just take our word for it. Here&#39;s what
                            homeowners across Northern Utah have to say about
                            their basement transformation experience with JS
                            ProFinish.
                        </Typography>
                    </Stack>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                maxWidth: "900px",
                                width: "100%",
                                py: { xs: 4, md: 6 },
                                px: { xs: 3, md: 8 },
                                borderRadius: "16px",
                                backgroundColor: dark
                                    ? "rgba(255, 255, 255, 0.05)"
                                    : "white",
                                position: "relative",
                                transition: "all 0.3s ease",
                                backdropFilter: "blur(10px)",
                                boxShadow: dark
                                    ? "0 10px 30px rgba(0, 0, 0, 0.15)"
                                    : "0 10px 30px rgba(0, 0, 0, 0.05)",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: -20,
                                    left: 40,
                                    width: 40,
                                    height: 40,
                                    borderRadius: "8px",
                                    background: "rgba(28, 124, 84, 0.1)",
                                    transform: "rotate(45deg)",
                                    zIndex: -1,
                                    display: { xs: "none", md: "block" },
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: -15, md: -20 },
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {[...Array(5)].map((_, index) => (
                                        <IoStarSharp
                                            key={index}
                                            size={isMobile ? 24 : 28}
                                            color="#1C7C54"
                                            style={{
                                                margin: "0 2px",
                                                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: 20, md: 40 },
                                    left: { xs: 20, md: 40 },
                                    opacity: 0.1,
                                    color: "#1C7C54",
                                }}
                            >
                                <PiQuotes size={isMobile ? 40 : 60} />
                            </Box>

                            <Box
                                sx={{
                                    minHeight: { xs: "180px", md: "150px" },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            md: "1.125rem",
                                        },
                                        fontStyle: "italic",
                                        lineHeight: 1.6,
                                        textAlign: "center",
                                        color: dark
                                            ? "rgba(255, 255, 255, 0.9)"
                                            : "rgba(0, 0, 0, 0.8)",
                                        transition: "opacity 0.3s ease",
                                        opacity: fading ? 0 : 1,
                                    }}
                                >
                                    &#34;{testimonials[displayedIndex].text}
                                    &#34;
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 4,
                                    position: "relative",
                                    transition: "opacity 0.3s ease",
                                    opacity: fading ? 0 : 1,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: { xs: 64, md: 72 },
                                        height: { xs: 64, md: 72 },
                                        border: "3px solid",
                                        borderColor: "rgba(28, 124, 84, 0.6)",
                                        boxShadow:
                                            "0 4px 12px rgba(0, 0, 0, 0.1)",
                                        mb: { xs: 2, md: 0 },
                                        mr: { xs: 0, md: 3 },
                                    }}
                                >
                                    <Image
                                        src={testimonials[displayedIndex].image}
                                        alt={testimonials[displayedIndex].name}
                                        width={72}
                                        height={72}
                                        style={{ borderRadius: "50%" }}
                                    />
                                </Avatar>
                                <Box
                                    sx={{
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{ color: "#1C7C54" }}
                                    >
                                        {testimonials[displayedIndex].name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {testimonials[displayedIndex].title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>

                        <IconButton
                            onClick={handlePrev}
                            disabled={animating}
                            sx={{
                                position: "absolute",
                                left: { xs: -5, sm: -20, md: -30 },
                                color: dark ? "#ffffff" : "#1C7C54",
                                backgroundColor: dark
                                    ? "rgba(255, 255, 255, 0.1)"
                                    : "rgba(28, 124, 84, 0.05)",
                                "&:hover": {
                                    backgroundColor: dark
                                        ? "rgba(255, 255, 255, 0.2)"
                                        : "rgba(28, 124, 84, 0.1)",
                                    transform: "scale(1.1)",
                                },
                                "&:disabled": {
                                    opacity: 0.5,
                                    cursor: "not-allowed",
                                },
                                transition: "all 0.3s ease",
                                zIndex: 3,
                            }}
                            aria-label="Previous testimonial"
                        >
                            <IoArrowBackCircleOutline
                                size={isMobile ? 34 : 44}
                            />
                        </IconButton>

                        <IconButton
                            onClick={handleNext}
                            disabled={animating}
                            sx={{
                                position: "absolute",
                                right: { xs: -5, sm: -20, md: -30 },
                                color: dark ? "#ffffff" : "#1C7C54",
                                backgroundColor: dark
                                    ? "rgba(255, 255, 255, 0.1)"
                                    : "rgba(28, 124, 84, 0.05)",
                                "&:hover": {
                                    backgroundColor: dark
                                        ? "rgba(255, 255, 255, 0.2)"
                                        : "rgba(28, 124, 84, 0.1)",
                                    transform: "scale(1.1)",
                                },
                                "&:disabled": {
                                    opacity: 0.5,
                                    cursor: "not-allowed",
                                },
                                transition: "all 0.3s ease",
                                zIndex: 3,
                            }}
                            aria-label="Next testimonial"
                        >
                            <IoArrowForwardCircleOutline
                                size={isMobile ? 34 : 44}
                            />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 4,
                        }}
                    >
                        {testimonials.map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: { xs: 10, md: 12 },
                                    height: { xs: 10, md: 12 },
                                    borderRadius: "50%",
                                    backgroundColor:
                                        index === current
                                            ? "#1C7C54"
                                            : dark
                                              ? "rgba(255, 255, 255, 0.3)"
                                              : "rgba(0, 0, 0, 0.2)",
                                    marginX: 0.5,
                                    cursor: animating ? "default" : "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor:
                                            index === current
                                                ? "#1C7C54"
                                                : dark
                                                  ? "rgba(255, 255, 255, 0.5)"
                                                  : "rgba(0, 0, 0, 0.3)",
                                        transform: animating
                                            ? "none"
                                            : "scale(1.2)",
                                    },
                                }}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;
