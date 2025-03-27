"use client";

import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    useTheme,
    useMediaQuery,
    Stack,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";

import img1 from "@/app/assets/home/img/image1.png";
import img2 from "@/app/assets/home/img/image2.png";
import img3 from "@/app/assets/home/img/image3.png";
import img4 from "@/app/assets/home/img/image4.png";
import img5 from "@/app/assets/home/img/image5.png";
import img6 from "@/app/assets/home/img/image6.png";

const HomeHeader = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const featuredImages = [img1, img2, img3, img4, img5, img6];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % featuredImages.length,
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [featuredImages.length]);

    const scrollToFeatures = () => {
        const featuresSection = document.getElementById("services-section");
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            component="section"
            id="hero-section"
            sx={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(145deg, #333333 0%, #202020 100%)",
                color: "#FFFFFF",
                pb: isMobile ? 8 : 0,
                minHeight: isMobile ? "auto" : "calc(100vh - 70px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage:
                        "radial-gradient(#FFFFFF 1px, transparent 1px), radial-gradient(#FFFFFF 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    top: "20%",
                    left: "5%",
                    width: isMobile ? "80px" : "150px",
                    height: isMobile ? "80px" : "150px",
                    background:
                        "linear-gradient(145deg, rgba(28, 124, 84, 0.2) 0%, rgba(28, 124, 84, 0.1) 100%)",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    filter: "blur(30px)",
                    zIndex: 1,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: "15%",
                    right: "10%",
                    width: isMobile ? "100px" : "200px",
                    height: isMobile ? "100px" : "200px",
                    background:
                        "linear-gradient(145deg, rgba(28, 124, 84, 0.15) 0%, rgba(28, 124, 84, 0.05) 100%)",
                    borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
                    filter: "blur(40px)",
                    zIndex: 1,
                }}
            />

            <Container
                maxWidth={false}
                sx={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1440px",
                    py: { xs: 8, md: 0 },
                }}
            >
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item xs={12} md={6} lg={5}>
                        <Box sx={{ position: "relative" }}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography
                                    variant="overline"
                                    component="p"
                                    sx={{
                                        color: "#1C7C54",
                                        fontWeight: 600,
                                        letterSpacing: "0.15em",
                                        fontSize: {
                                            xs: "0.875rem",
                                            md: "1rem",
                                        },
                                        mb: 2,
                                        display: "inline-block",
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: -8,
                                            left: 0,
                                            width: "60px",
                                            height: "2px",
                                            backgroundColor: "#1C7C54",
                                        },
                                    }}
                                >
                                    BASEMENT SPECIALISTS
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: {
                                            xs: "2.5rem",
                                            sm: "3rem",
                                            md: "3.5rem",
                                        },
                                        lineHeight: 1.1,
                                        mb: 3,
                                    }}
                                >
                                    Transform Your Basement Into Your Dream
                                    Space
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: {
                                            xs: "1rem",
                                            md: "1.125rem",
                                        },
                                        mb: 4,
                                        color: "rgba(255, 255, 255, 0.8)",
                                        maxWidth: "560px",
                                    }}
                                >
                                    At JS ProFinish, we specialize in
                                    transforming underutilized basements into
                                    stunning living spaces tailored to your
                                    needs. With over 15 years of experience
                                    serving Northern Utah, our team delivers
                                    exceptional craftsmanship and attention to
                                    detail in every project.
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Stack
                                    direction={{ xs: "column", sm: "row" }}
                                    spacing={{ xs: 2, sm: 3 }}
                                >
                                    <Link href="/contact-us" passHref>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                backgroundColor: "#1C7C54",
                                                color: "#FFFFFF",
                                                py: 1.5,
                                                px: 3,
                                                borderRadius: "8px",
                                                fontWeight: 600,
                                                boxShadow:
                                                    "0 10px 20px rgba(28, 124, 84, 0.3)",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    backgroundColor: "#145c3f",
                                                    transform:
                                                        "translateY(-5px)",
                                                    boxShadow:
                                                        "0 15px 25px rgba(28, 124, 84, 0.4)",
                                                },
                                            }}
                                        >
                                            Get Free Estimate
                                        </Button>
                                    </Link>

                                    <Link href="/gallery" passHref>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            endIcon={<MdOutlineArrowForward />}
                                            sx={{
                                                color: "#FFFFFF",
                                                borderColor:
                                                    "rgba(255, 255, 255, 0.3)",
                                                py: 1.5,
                                                px: 3,
                                                background: "transparent",
                                                borderRadius: "8px",
                                                borderWidth: "2px",
                                                fontWeight: 500,
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    borderColor: "#1C7C54",
                                                    backgroundColor:
                                                        "rgba(28, 124, 84, 0.1)",
                                                    transform:
                                                        "translateX(5px)",
                                                },
                                            }}
                                        >
                                            View Our Work
                                        </Button>
                                    </Link>
                                </Stack>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
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
                            </motion.div>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        sx={{
                            display: { xs: "block", md: "block" },
                            position: "relative",
                            height: { xs: "400px", md: "500px", lg: "600px" },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            style={{ height: "100%", position: "relative" }}
                        >
                            <Paper
                                elevation={10}
                                sx={{
                                    position: "relative",
                                    height: "100%",
                                    width: "100%",
                                    overflow: "hidden",
                                    borderRadius: "16px",
                                    transform: "rotate(2deg)",
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background:
                                            "linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%)",
                                        zIndex: 1,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        overflow: "hidden",
                                    }}
                                >
                                    {featuredImages.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={`Beautiful finished basement project by JS ProFinish in Northern Utah`}
                                            layout="fill"
                                            objectFit="cover"
                                            priority={index === 0}
                                            style={{
                                                opacity:
                                                    currentImageIndex === index
                                                        ? 1
                                                        : 0,
                                                transition:
                                                    "opacity 1s ease-in-out",
                                            }}
                                        />
                                    ))}
                                </Box>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        p: 3,
                                        zIndex: 2,
                                        textAlign: "left",
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: "#fff",
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: "1rem",
                                                md: "1.25rem",
                                            },
                                        }}
                                    >
                                        Professional Basement Finishing
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.9)",
                                            fontSize: {
                                                xs: "0.875rem",
                                                md: "1rem",
                                            },
                                        }}
                                    >
                                        Serving Davis & Weber Counties
                                    </Typography>
                                </Box>
                            </Paper>

                            {!isTablet && (
                                <>
                                    <Paper
                                        elevation={6}
                                        sx={{
                                            position: "absolute",
                                            top: "15%",
                                            right: "-10%",
                                            width: "200px",
                                            height: "150px",
                                            transform: "rotate(-5deg)",
                                            overflow: "hidden",
                                            borderRadius: "12px",
                                            boxShadow:
                                                "0 10px 20px rgba(0, 0, 0, 0.15)",
                                            display: {
                                                xs: "none",
                                                lg: "block",
                                            },
                                        }}
                                    >
                                        <Image
                                            src={img5}
                                            alt="Close-up detail of a basement finish"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </Paper>

                                    <Paper
                                        elevation={6}
                                        sx={{
                                            position: "absolute",
                                            bottom: "10%",
                                            left: "-8%",
                                            width: "180px",
                                            height: "140px",
                                            transform: "rotate(3deg)",
                                            overflow: "hidden",
                                            borderRadius: "12px",
                                            boxShadow:
                                                "0 10px 20px rgba(0, 0, 0, 0.15)",
                                            display: {
                                                xs: "none",
                                                lg: "block",
                                            },
                                        }}
                                    >
                                        <Image
                                            src={img2}
                                            alt="Another basement finishing project detail"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </Paper>
                                </>
                            )}
                        </motion.div>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        position: "absolute",
                        bottom: { xs: "5%", md: "10%" },
                        left: { xs: "5%", md: "10%" },
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid rgba(28, 124, 84, 0.3)",
                        zIndex: 1,
                        display: { xs: "none", md: "block" },
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "10%", md: "15%" },
                        right: { xs: "10%", md: "5%" },
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        border: "2px dashed rgba(28, 124, 84, 0.2)",
                        opacity: 0.5,
                        zIndex: 1,
                        display: { xs: "none", md: "block" },
                    }}
                />
            </Container>
        </Box>
    );
};

export default HomeHeader;
