import { Metadata } from "next";

import { Box } from "@mui/material";
import Feature from "@/app/components/home/feature";
import Benefits from "@/app/components/home/benefits";
import HowWorks from "@/app/components/home/howWorks";
import Cta from "@/app/components/home/cta";
import Testimonials from "@/app/components/home/testimonials";
import Contact from "@/app/components/global/contact";
import { Header76 } from "@/app/components/relume/header76";
import HomeHeader from "@/app/components/home/hero";

export const metadata: Metadata = {
    title: "Basement Finishing & Remodeling in Northern Utah | JS ProFinish",
    description:
        "Transform your basement with JS ProFinish, Northern Utah's premier finishing experts with 15+ years experience in Davis and Weber Counties. Custom designs, expert craftsmanship, and superior results.",
};

export default function Home() {
    return (
        <Box sx={{ width: "100vw" }}>
            <HomeHeader />
            <Feature />
            <Benefits />
            <HowWorks />
            <Cta />
            <Testimonials />
            <Contact />
        </Box>
    );
}
