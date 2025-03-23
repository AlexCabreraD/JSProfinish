import React from "react";
import { Metadata } from "next";
import { Box } from "@mui/material";
import Header from "@/app/components/about/header";
import About from "@/app/components/about/about";
import WhyUs from "@/app/components/about/whyUs";
import Vision from "@/app/components/about/vision";
import Gallery from "@/app/components/about/gallery";
import Testimonials from "@/app/components/home/testimonials";
import Cta2 from "@/app/components/about/cta2";

export const metadata: Metadata = {
    title: "About Our Basement Remodeling Team in Clearfield, UT | JS ProFinish",
    description:
        "Meet JS ProFinish's expert team with 15+ years transforming Northern Utah basements. Learn about our mission, values, and commitment to exceptional craftsmanship and customer satisfaction.",
};

const AboutUs = () => {
    return (
        <Box width={"100vw"}>
            <Header />
            <About />
            <WhyUs />
            <Testimonials />
            <Gallery />
            <Vision />
            <Cta2 />
        </Box>
    );
};

export default AboutUs;
