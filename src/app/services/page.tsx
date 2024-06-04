import React from "react";
import { Box } from "@mui/material";
import Header from "@/app/components/services/header";
import OurServices from "@/app/components/services/ourServices";
import OurWork from "@/app/components/services/ourWork";
import Enhance from "@/app/components/services/enhance";
import WhyUs from "@/app/components/about/whyUs";
import ServiceFaq from "@/app/components/services/serviceFaq";
import ServiceCta from "@/app/components/services/serviceCta";

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
