import { Box } from "@mui/material";
import Header from "@/app/components/weber-county/header";
import InfoSection from "@/app/components/weber-county/infoSection";
import Faq from "@/app/components/weber-county/faq";
import Cta from "@/app/components/weber-county/cta";
import ContactInfo from "@/app/components/weber-county/contactInfo";

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
