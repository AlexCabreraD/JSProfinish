import React from "react";
import {
    Container,
    Grid,
    Typography,
    Box,
    Paper,
    useTheme,
} from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const contactInfoSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JS ProFinish",
    address: {
        "@type": "PostalAddress",
        streetAddress: "1740 S 300 W #8",
        addressLocality: "Clearfield",
        addressRegion: "UT",
        postalCode: "84015",
        addressCountry: "US",
    },
    telephone: "+13856263514",
    email: "contact@jsprofinish-utah.com",
    priceRange: "$$",
    areaServed: ["Davis County", "Weber County", "Northern Utah"],
    serviceType: "Basement Finishing",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "16:00",
        },
    ],
};

const ContactInfo = () => {
    return (
        <Box
            component="section"
            id="contact-section"
            aria-labelledby="contact-heading"
            sx={{ position: "relative" }}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactInfoSchema),
                }}
            />

            <Container
                maxWidth={false}
                className={"primary-background"}
                sx={{
                    position: "relative",
                    py: { xs: 8, md: 14 },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.03,
                        backgroundImage:
                            "radial-gradient(#1C7C54 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        zIndex: 0,
                    },
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 6,
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        id="contact-heading"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: "2rem", md: "2.5rem" },
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: "700px",
                            mx: "auto",
                            color: "#5F5F5F",
                            mb: 1,
                        }}
                    >
                        Reach out to our team for any questions about our
                        basement finishing services in Northern Utah
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={4}
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        maxWidth: "1440px",
                        mx: "auto",
                        px: { xs: 2, md: 0 },
                    }}
                >
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: "100%",
                                textAlign: "center",
                                borderRadius: "16px",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.1)",
                                        color: "#1C7C54",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            transform: "rotate(15deg)",
                                        },
                                    }}
                                >
                                    <MdOutlineEmail size={40} />
                                </Box>
                            </Box>
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{
                                    mb: 2,
                                    fontWeight: 600,
                                    color: "#1C7C54",
                                }}
                            >
                                Email Us
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{ mb: 3 }}
                            >
                                For inquiries about basement remodeling projects
                                or to request a free estimate.
                            </Typography>
                            <Typography
                                variant="body1"
                                component="a"
                                href="mailto:contact@jsprofinish-utah.com"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "1.1rem",
                                    color: "#1C7C54",
                                    textDecoration: "none",
                                    display: "block",
                                    transition: "color 0.2s ease",
                                    "&:hover": {
                                        color: "#145c3f",
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                contact@jsprofinish-utah.com
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: "100%",
                                textAlign: "center",
                                borderRadius: "16px",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.1)",
                                        color: "#1C7C54",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            transform: "rotate(15deg)",
                                        },
                                    }}
                                >
                                    <FiPhone size={40} />
                                </Box>
                            </Box>
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{
                                    mb: 2,
                                    fontWeight: 600,
                                    color: "#1C7C54",
                                }}
                            >
                                Call Us
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{ mb: 3 }}
                            >
                                Contact our basement remodeling experts directly
                                to discuss your project.
                            </Typography>
                            <Typography
                                variant="body1"
                                component="a"
                                href="tel:3856263514"
                                aria-label="Call JS ProFinish at 385-626-3514"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "1.1rem",
                                    color: "#1C7C54",
                                    textDecoration: "none",
                                    display: "block",
                                    transition: "color 0.2s ease",
                                    "&:hover": {
                                        color: "#145c3f",
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                (385) 626-3514
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: "100%",
                                textAlign: "center",
                                borderRadius: "16px",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor:
                                            "rgba(28, 124, 84, 0.1)",
                                        color: "#1C7C54",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#1C7C54",
                                            color: "white",
                                            transform: "rotate(15deg)",
                                        },
                                    }}
                                >
                                    <IoLocationOutline size={40} />
                                </Box>
                            </Box>
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{
                                    mb: 2,
                                    fontWeight: 600,
                                    color: "#1C7C54",
                                }}
                            >
                                Visit Us
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{ mb: 3 }}
                            >
                                Stop by our showroom to discuss your basement
                                finishing project in person.
                            </Typography>
                            <Typography
                                variant="body1"
                                component="address"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "1.1rem",
                                    color: "#1C7C54",
                                    fontStyle: "normal",
                                    lineHeight: 1.6,
                                }}
                            >
                                1740 S 300 W #8
                                <br />
                                Clearfield, UT 84015
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "5%", md: "15%" },
                        right: "5%",
                        width: { xs: 100, md: 150 },
                        height: { xs: 100, md: 150 },
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        backgroundColor: "rgba(28, 124, 84, 0.05)",
                        zIndex: 0,
                        display: { xs: "none", md: "block" },
                    }}
                    aria-hidden="true"
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: { xs: "5%", md: "15%" },
                        left: "5%",
                        width: { xs: 80, md: 120 },
                        height: { xs: 80, md: 120 },
                        borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
                        backgroundColor: "rgba(28, 124, 84, 0.05)",
                        zIndex: 0,
                        display: { xs: "none", md: "block" },
                    }}
                    aria-hidden="true"
                />
            </Container>
        </Box>
    );
};

export default ContactInfo;
