import { Metadata } from "next";

import { Box } from "@mui/material";
import Header from "@/app/components/weber-county/header";
import InfoSection from "@/app/components/weber-county/infoSection";
import Faq from "@/app/components/weber-county/faq";
import Cta from "@/app/components/weber-county/cta";
import ContactInfo from "@/app/components/weber-county/contactInfo";

export const metadata: Metadata = {
    title: "Weber County Basement Finishing & Remodeling | JS ProFinish",
    description:
        "Specialized basement remodeling in Ogden, Roy, North Ogden and throughout Weber County. JS ProFinish delivers custom solutions with expert local knowledge and superior craftsmanship.",
};

const WeberCounty = () => {
    return (
        <Box width={"100vw"}>
            <Header county={"Weber"} />
            <InfoSection county={"Weber"} />
            <Faq county={"Weber"} />
            <Cta />
            <ContactInfo />
        </Box>
    );
};

export default WeberCounty;
