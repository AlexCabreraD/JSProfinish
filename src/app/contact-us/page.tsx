import { Box } from "@mui/material";
import Header from "@/app/components/contact-us/header";
import Contact from "@/app/components/global/contact";
import Cta3 from "@/app/components/contact-us/cta3";
import Testimonials from "@/app/components/home/testimonials";

const ContactUs = () => {
    return (
        <Box width={"100vw"}>
            <Header />
            <Contact dark />
            <Testimonials />
            <Cta3 />
        </Box>
    );
};

export default ContactUs;
