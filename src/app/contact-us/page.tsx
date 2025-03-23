import { Metadata } from "next";

import { Box } from "@mui/material";
import Header from "@/app/components/contact-us/header";
import Contact from "@/app/components/global/contact";
import Cta3 from "@/app/components/contact-us/cta3";
import Testimonials from "@/app/components/home/testimonials";

export const metadata: Metadata = {
    title: "Contact JS ProFinish | Basement Remodeling Estimates in Utah",
    description:
        "Ready to transform your basement? Contact JS ProFinish today for a free consultation. Serving Clearfield, Ogden, Layton, and all of Davis and Weber Counties in Northern Utah.",
};

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
