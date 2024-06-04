import React from "react";
import { Box } from "@mui/material";
import Header from "@/app/components/about/header";
import About from "@/app/components/about/about";
import WhyUs from "@/app/components/about/whyUs";
import Vision from "@/app/components/about/vision";
import Gallery from "@/app/components/about/gallery";
import Testimonials from "@/app/components/home/testimonials";
import Cta2 from "@/app/components/about/cta2";

const AboutUs = () => {
    return (
        <Box width={"100vw"}>
            <Header />
            <About />
            <WhyUs />
            <Testimonials padded={false} />
            <Gallery />
            <Vision />
            <Cta2 />
        </Box>
    );
};

export default AboutUs;
