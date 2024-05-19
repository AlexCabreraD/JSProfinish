import img1 from "../../assets/home/img/image1.png";
import img2 from "../../assets/home/img/image2.png";
import img3 from "../../assets/home/img/image3.png";
import img4 from "../../assets/home/img/image4.png";
import { Box } from "@mui/material";
import Image from "next/image";
import { Masonry } from "@mui/lab";
import React from "react";

import "./home.css";

const images = [img1, img2, img3, img4];

const MobileGallery = () => {
    return (
        <Box
            className={"mobile-gallery"}
            sx={{
                width: "100%",
                overflow: "hidden", // Hide overflow to cut off images
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "background.default",
                paddingTop: "15px",
                paddingX: "10px",
            }}
        >
            <Masonry
                columns={2}
                spacing={2}
                sx={{
                    width: "fit-content",
                    maxWidth: "100%", // Ensure it doesn't exceed the screen width
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            boxShadow: 1,
                            position: "relative",
                            overflow: "hidden",
                        }}
                        className={"responsive-image-container"}
                    >
                        <Image
                            src={image.src} // Access the src attribute of the StaticImageData type
                            alt={`Image ${index + 1}`}
                            width={610} // Fixed width to maintain consistency
                            height={340}
                            style={{
                                display: "block",
                                objectFit: "cover", // Ensure image covers the container
                            }}
                        />
                    </Box>
                ))}
            </Masonry>
        </Box>
    );
};

export default MobileGallery;
