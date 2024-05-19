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
                transform: "translate(20px, -156px)",
            }}
            className="image-masonry"
        >
            <Masonry
                columns={2}
                spacing={2}
                sx={{
                    width: "fit-content",
                    maxWidth: "100%",
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            boxShadow: 1,
                            position: "relative",
                            top: index % 2 === 1 ? 156 : 0, // Offset every second image
                            overflow: "hidden", // Hide overflow to cut off images
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={319.25}
                            height={340}
                            style={{
                                display: "block",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                ))}
            </Masonry>
        </Box>
    );
};

export default ImageMasonry;
