"use client";

import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton, Container } from "@mui/material";
import {
    IoStarSharp,
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";

import Image from "next/image";
import testimonialImage1 from "@/app/assets/home/img/testimonial1.png";
import testimonialImage2 from "@/app/assets/home/img/testimonial2.png";
import testimonialImage3 from "@/app/assets/home/img/testimonial3.png";

const testimonials = [
    {
        text: "Working with JS ProFinish was a breeze. Great communication and quality work!",
        name: "James White",
        title: "Home Owner",
        image: testimonialImage2,
    },
    {
        text: "JS ProFinish basement finishing exceeded our expectations. Highly recommended!",
        name: "Adriana Cortés",
        title: "Home Owner",
        image: testimonialImage1,
    },
    {
        text: "We are extremely happy with our newly finished basement. Thank you!",
        name: "Jonah Ortiz",
        title: "Home Owner",
        image: testimonialImage3,
    },
];

interface TestimonialProps {
    dark?: boolean;
}

const Testimonials = ({ dark }: TestimonialProps) => {
    const [current, setCurrent] = useState(0);
    const componentTheme = dark ? "secondary-background" : "primary-background";

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
            className={`${componentTheme} benefits-container`}
            sx={{
                height: "fit-content", // Responsive height
            }}
        >
            <Box
                sx={{
                    padding: { xs: "85px 0 85px 0", md: "112px 0 112px 0" },
                    maxWidth: "1440px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
                className={`${componentTheme}`}
            >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    {[...Array(5)].map((_, index) => (
                        <IoStarSharp key={index} />
                    ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <IconButton
                        onClick={handlePrev}
                        sx={dark ? { color: "#ffffff" } : {}}
                    >
                        <IoArrowBackCircleOutline size={34} />
                    </IconButton>
                    <Typography variant="body1" sx={{ flexGrow: 1, mx: 2 }}>
                        {testimonials[current].text}
                    </Typography>
                    <IconButton
                        onClick={handleNext}
                        sx={dark ? { color: "#ffffff" } : {}}
                    >
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
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                        <Image
                            src={testimonials[current].image}
                            alt={testimonials[current].name}
                            width={56}
                            height={56}
                            style={{ borderRadius: "50%" }}
                        />
                    </Avatar>
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
