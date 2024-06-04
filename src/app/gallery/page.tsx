import { Box } from "@mui/material";
import Header from "@/app/components/gallery/header";
import GalleryComponent from "@/app/components/gallery/galleryComponent";
import Cta4 from "@/app/components/gallery/cta4";
import GalleryFaq from "@/app/components/gallery/galleryFaq";
import Testimonials from "@/app/components/home/testimonials";

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
