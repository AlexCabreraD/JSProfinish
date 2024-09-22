import React from "react";
import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import Image from "next/image";
import "./home.css";

import img1 from "../../assets/home/img/image1.png";
import img2 from "../../assets/home/img/image2.png";
import img3 from "../../assets/home/img/image3.png";
import img4 from "../../assets/home/img/image4.png";
import img5 from "../../assets/home/img/image5.png";
import img6 from "../../assets/home/img/image6.png";

const images = [
    {
        src: img1,
        alt: "Finished basement in Weber County with modern lighting and flooring",
    },
    {
        src: img2,
        alt: "Remodeled basement in Davis County featuring a home theater setup",
    },
    {
        src: img3,
        alt: "Basement renovation in Weber County with custom carpentry",
    },
    {
        src: img4,
        alt: "Luxurious basement remodel in Davis County with a bar area",
    },
    {
        src: img5,
        alt: "Spacious finished basement in Weber County with new drywall and painting",
    },
    {
        src: img6,
        alt: "Elegant basement remodeling project in Davis County with built-in shelves",
    },
];

const ImageMasonry = () => {
    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "880px",
            }}
            className="image-masonry"
        >
            <Masonry
                columns={{ xs: 1, sm: 2 }} // Responsive columns
                spacing={2}
                sx={{
                    width: "fit-content",
                    maxWidth: "100%",
                }}
            >
                {images.map((image, index) => (
                    <Box key={index}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="responsive"
                            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                            style={{
                                borderRadius: 4,
                            }}
                        />
                    </Box>
                ))}
            </Masonry>
        </Box>
    );
};

export default ImageMasonry;
