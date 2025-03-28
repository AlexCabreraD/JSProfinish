"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Box } from "@mui/material";

interface ClientSideImageCarouselProps {
    featuredImages: StaticImageData[];
}

export function ClientSideImageCarousel({
    featuredImages,
}: ClientSideImageCarouselProps): JSX.Element {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % featuredImages.length,
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [featuredImages.length]);

    return (
        <>
            {featuredImages.map((image, index) => (
                <Box
                    key={index}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: currentImageIndex === index ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                        display: index === 0 ? "none" : "block",
                    }}
                >
                    <Image
                        src={image}
                        alt={`Basement finishing project ${index + 1} by JS ProFinish in Northern Utah`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                        style={{ objectFit: "cover" }}
                    />
                </Box>
            ))}
        </>
    );
}
