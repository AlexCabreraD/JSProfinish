import { Box } from "@mui/material";
import Hero from "@/app/components/home/hero";
import MobileGallery from "@/app/components/home/mobileGallery";
import Feature from "@/app/components/home/feature";
import Benefits from "@/app/components/home/benefits";
import HowWorks from "@/app/components/home/howWorks";
import Cta from "@/app/components/home/cta";
import Testimonials from "@/app/components/home/testimonials";
import Contact from "@/app/components/global/contact";
import { Header76 } from "@/app/components/relume/header76";

export default function Home() {
    return (
        <Box sx={{ width: "100vw" }}>
            <Header76 />
            <Feature />
            <Benefits />
            <HowWorks />
            <Cta />
            <Testimonials />
            <Contact />
        </Box>
    );
}
