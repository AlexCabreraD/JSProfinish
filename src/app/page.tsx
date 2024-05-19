import { Button, Grid, Stack, Typography, Container, Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import ImageMasonry from "@/app/components/home/imageMasonry";
import Hero from "@/app/components/home/hero";
import MobileGallery from "@/app/components/home/mobileGallery";
import Feature from "@/app/components/home/feature";
import Benefits from "@/app/components/home/benefits";
import HowWorks from "@/app/components/home/howWorks";

export default function Home() {
    return (
        <Box className={"secondary-background"} sx={{ width: "100vw" }}>
            <Hero />
            <MobileGallery />
            <Feature />
            <Benefits />
            <HowWorks />
        </Box>
    );
}
