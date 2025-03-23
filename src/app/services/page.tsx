import React from "react";
import { Metadata } from "next";

import { Box } from "@mui/material";
import Header from "@/app/components/services/header";
import OurServices from "@/app/components/services/ourServices";
import OurWork from "@/app/components/services/ourWork";
import Enhance from "@/app/components/services/enhance";
import WhyUs from "@/app/components/about/whyUs";
import ServiceFaq from "@/app/components/services/serviceFaq";
import ServiceCta from "@/app/components/services/serviceCta";

export const metadata: Metadata = {
    title: "Professional Basement Finishing Services in Utah | JS ProFinish",
    description:
        "Complete basement remodeling services including framing, drywall, carpentry, and painting. JS ProFinish delivers custom solutions for Northern Utah homeowners since 2009.",
};

const Services = () => {
    return (
        <Box width={"100vw"}>
            <Header />
            <OurServices />
            <OurWork />
            <Enhance />
            <WhyUs />
            <ServiceFaq />
            <ServiceCta />
        </Box>
    );
};

export default Services;
