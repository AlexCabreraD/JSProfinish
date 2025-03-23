import { Metadata } from "next";

import { Box } from "@mui/material";
import Header from "@/app/components/weber-county/header";
import InfoSection from "@/app/components/weber-county/infoSection";
import Faq from "@/app/components/weber-county/faq";
import Cta from "@/app/components/weber-county/cta";
import ContactInfo from "@/app/components/weber-county/contactInfo";

export const metadata: Metadata = {
    title: "Davis County Basement Finishing & Remodeling | JS ProFinish",
    description:
        "Expert basement finishing in Clearfield, Layton, Kaysville and throughout Davis County. Trust JS ProFinish for customized designs, quality construction and exceptional results.",
};

const DavisCounty = () => {
    return (
        <Box width={"100vw"}>
            <Header county={"Davis"} />
            <InfoSection county={"Davis"} />
            <Faq county={"Davis"} />
            <Cta />
            <ContactInfo />
        </Box>
    );
};

export default DavisCounty;
