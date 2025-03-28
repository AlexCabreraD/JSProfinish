"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { IoChevronDownOutline } from "react-icons/io5";

export default function ClientInteractiveBox() {
    const scrollToFeatures = () => {
        const featuresSection = document.getElementById("services-section");
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                mt: 6,
                cursor: "pointer",
            }}
            onClick={scrollToFeatures}
        >
            <IoChevronDownOutline
                size={20}
                style={{
                    color: "#1C7C54",
                    marginRight: "12px",
                    animation: "bounce 2s infinite",
                }}
            />
            <Typography
                variant="body2"
                sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 500,
                    "&:hover": {
                        color: "#1C7C54",
                    },
                }}
            >
                Explore Our Services
            </Typography>
        </Box>
    );
}
