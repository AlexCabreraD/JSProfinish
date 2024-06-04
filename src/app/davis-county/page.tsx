import { Box } from "@mui/material";
import Header from "@/app/components/weber-county/header";
import InfoSection from "@/app/components/weber-county/infoSection";
import Faq from "@/app/components/weber-county/faq";
import Cta from "@/app/components/weber-county/cta";
import ContactInfo from "@/app/components/weber-county/contactInfo";

const DavisCounty = () => {
    return (
        <Box width={"100vh"}>
            <Header county={"Davis"} />
            <InfoSection county={"Davis"} />
            <Faq county={"Davis"} />
            <Cta />
            <ContactInfo />
        </Box>
    );
};

export default DavisCounty;
