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

const TestimonialsStructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://jsprofinish.com/#testimonials-business",
        name: "JS ProFinish",
        description:
            "Northern Utah's premier basement finishing experts with exceptional customer reviews",
        url: "https://jsprofinish.com/",
        telephone: "+1-385-626-3514",
        email: "jsprofinish@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "1740 S 300 W #8",
            addressLocality: "Clearfield",
            addressRegion: "UT",
            postalCode: "84015",
            addressCountry: "US",
        },
        areaServed: [
            {
                "@type": "City",
                name: "Clearfield",
            },
            {
                "@type": "City",
                name: "Layton",
            },
            {
                "@type": "City",
                name: "Ogden",
            },
        ],
        serviceType: "Basement Finishing and Remodeling",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
};

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
            <TestimonialsStructuredData />

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
                                fontSize: "1.125rem",
                                lineHeight: 1.6,
                            }}
                        >
                            Read what our satisfied customers have to say about
                            their basement transformation experience with JS
                            ProFinish.
                        </Typography>
                    </Stack>

                    <Box
                        sx={{
                            position: "relative",
                            maxWidth: "900px",
                            margin: "0 auto",
                        }}
                    >
                        <Paper
                            elevation={dark ? 0 : 2}
                            sx={{
                                borderRadius: "16px",
                                overflow: "hidden",
                                backgroundColor: dark
                                    ? "rgba(255, 255, 255, 0.05)"
                                    : "#FFFFFF",
                                border: dark
                                    ? "1px solid rgba(255, 255, 255, 0.1)"
                                    : "none",
                                position: "relative",
                                minHeight: { xs: "400px", md: "350px" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                p: { xs: 3, md: 5 },
                            }}
                        >
                            <Box
                                sx={{
                                    mb: 4,
                                    opacity: fading ? 0 : 1,
                                    transition: "opacity 0.3s ease",
                                }}
                            >
                                <PiQuotes
                                    size={isMobile ? 32 : 48}
                                    style={{
                                        color: "#1C7C54",
                                        marginBottom: "16px",
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    component="blockquote"
                                    sx={{
                                        fontStyle: "italic",
                                        lineHeight: 1.6,
                                        fontSize: {
                                            xs: "1.1rem",
                                            md: "1.25rem",
                                        },
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
                                <Box
                                    sx={{
                                        position: "relative",
                                        mr: { md: 3 },
                                        mb: { xs: 2, md: 0 },
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: { xs: 70, md: 80 },
                                            height: { xs: 70, md: 80 },
                                            border: "3px solid #1C7C54",
                                        }}
                                    >
                                        <Image
                                            src={
                                                testimonials[displayedIndex]
                                                    .image
                                            }
                                            alt={`${testimonials[displayedIndex].name} - Satisfied Customer`}
                                            width={80}
                                            height={80}
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </Avatar>
                                </Box>

                                <Box
                                    sx={{
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="cite"
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: "1.1rem",
                                                md: "1.2rem",
                                            },
                                            color: dark ? "#FFFFFF" : "#1C7C54",
                                            display: "block",
                                            mb: 0.5,
                                        }}
                                    >
                                        {testimonials[displayedIndex].name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: dark
                                                ? "rgba(255, 255, 255, 0.7)"
                                                : "rgba(0, 0, 0, 0.6)",
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        {testimonials[displayedIndex].title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            mt: 1,
                                            justifyContent: {
                                                xs: "center",
                                                md: "flex-start",
                                            },
                                        }}
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <IoStarSharp
                                                key={i}
                                                size={16}
                                                style={{
                                                    color: "#FFD700",
                                                    marginRight: "2px",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>

                        <IconButton
                            onClick={handlePrev}
                            disabled={animating}
                            sx={{
                                position: "absolute",
                                left: { xs: -5, sm: -20, md: -30 },
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: dark ? "#ffffff" : "#1C7C54",
                                backgroundColor: dark
                                    ? "rgba(255, 255, 255, 0.1)"
                                    : "rgba(28, 124, 84, 0.05)",
                                "&:hover": {
                                    backgroundColor: dark
                                        ? "rgba(255, 255, 255, 0.2)"
                                        : "rgba(28, 124, 84, 0.1)",
                                    transform: "translateY(-50%) scale(1.1)",
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
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: dark ? "#ffffff" : "#1C7C54",
                                backgroundColor: dark
                                    ? "rgba(255, 255, 255, 0.1)"
                                    : "rgba(28, 124, 84, 0.05)",
                                "&:hover": {
                                    backgroundColor: dark
                                        ? "rgba(255, 255, 255, 0.2)"
                                        : "rgba(28, 124, 84, 0.1)",
                                    transform: "translateY(-50%) scale(1.1)",
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
