"use client";

import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton, Container } from "@mui/material";
import {
    IoStarSharp,
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";

const testimonials = [
    {
        text: "JS ProFinish basement finishing exceeded our expectations. Highly recommended!",
        name: "Adriana Cortés",
        title: "Home Owner",
    },
    {
        text: "Working with JS ProFinish was a breeze. Great communication and quality work!",
        name: "Richie Reyes",
        title: "Home Owner",
    },
    {
        text: "We are extremely happy with our newly finished basement. Thank you!",
        name: "Jonah Frank",
        title: "Home Owner",
    },
];

interface TestimonialsProps {
    padded?: boolean;
}

const Testimonials = ({ padded = true }: TestimonialsProps) => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
    };

    const handleDotClick = (index: number) => {
        setCurrent(index);
    };

    return (
        <Container
            maxWidth={false}
            className={"primary-background benefits-container"}
            sx={{
                height: "fit-content", // Responsive height
                padding: { xs: padded ? "112px 0" : "112px 0 0 0" },
            }}
        >
            <Box
                sx={{
                    padding: 4,
                    maxWidth: 600,
                    margin: "0 auto",
                    textAlign: "center",
                }}
                className={"primary-background Home-Content-Container"}
            >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    {[...Array(5)].map((_, index) => (
                        <IoStarSharp key={index} />
                    ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <IconButton onClick={handlePrev}>
                        <IoArrowBackCircleOutline size={34} />
                    </IconButton>
                    <Typography variant="body1" sx={{ flexGrow: 1, mx: 2 }}>
                        {testimonials[current].text}
                    </Typography>
                    <IconButton onClick={handleNext}>
                        <IoArrowForwardCircleOutline size={34} />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", // Center horizontally
                        mb: 2,
                    }}
                >
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }} />
                    <Box sx={{ textAlign: "left" }}>
                        <Typography variant="body1" fontWeight="bold">
                            {testimonials[current].name}
                        </Typography>
                        <Typography variant="body2">
                            {testimonials[current].title}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    {testimonials.map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor:
                                    index === current
                                        ? "primary.main"
                                        : "grey.400",
                                marginX: 0.5,
                                cursor: "pointer", // Add cursor pointer
                            }}
                            onClick={() => handleDotClick(index)} // Handle click event
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default Testimonials;
