import { Metadata } from "next";

import { Box } from "@mui/material";
import Header from "@/app/components/gallery/header";
import GalleryComponent from "@/app/components/gallery/galleryComponent";
import Cta4 from "@/app/components/gallery/cta4";
import GalleryFaq from "@/app/components/gallery/galleryFaq";
import Testimonials from "@/app/components/home/testimonials";

export const metadata: Metadata = {
    title: "Basement Finishing Project Gallery | JS ProFinish Utah",
    description:
        "Browse our portfolio of stunning basement transformations across Northern Utah. Get inspired by our custom designs, quality workmanship, and attention to detail in every project.",
    alternates: {
        canonical: "/gallery",
    },
};

const Gallery = () => {
    return (
        <Box width={"100vw"}>
            <Header />
            <GalleryComponent />
            <GalleryFaq />
            <Testimonials />
            <Cta4 />
        </Box>
    );
};

export default Gallery;
