import { Box } from "@mui/material";
import Hero from "@/app/components/home/hero";
import MobileGallery from "@/app/components/home/mobileGallery";
import Feature from "@/app/components/home/feature";
import Benefits from "@/app/components/home/benefits";
import HowWorks from "@/app/components/home/howWorks";
import Cta from "@/app/components/home/cta";
import Testimonials from "@/app/components/home/testimonials";
import Contact from "@/app/components/global/contact";

export default function Home() {
    return (
        <Box className={"secondary-background"} sx={{ width: "100vw" }}>
            <Hero />
            <MobileGallery />
            <Feature />
            <Benefits />
            <HowWorks />
            <Cta />
            <Testimonials padded={false} />
            <Contact />
        </Box>
    );
}
