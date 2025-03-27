import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import img9 from "../../assets/home/img/image9.png";

const Cta = () => {
    return (
        <Box
            component="section"
            id="cta-section"
            sx={{
                position: "relative",
                py: { xs: 10, md: 16 },
                overflow: "hidden",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src={img9}
                    alt="Basement renovation in progress showing framework and construction"
                    priority
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        filter: "blur(4px) brightness(0.7)",
                        transform: "scale(1.05)",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.55)",
                        backgroundImage:
                            "linear-gradient(to bottom, rgba(28, 124, 84, 0.2), rgba(0, 0, 0, 0.6))",
                        zIndex: 1,
                    }}
                />
            </Box>

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "800px",
                        mx: "auto",
                        px: { xs: 2, md: 0 },
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: "rgba(255, 255, 255, 0.9)",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            mb: 2,
                            display: "block",
                        }}
                    >
                        TAKE THE NEXT STEP
                    </Typography>

                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontSize: {
                                xs: "1.875rem",
                                sm: "2.25rem",
                                md: "2.75rem",
                            },
                            lineHeight: 1.2,
                            mb: 3,
                            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        Ready to Transform Your Basement?
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "rgba(255, 255, 255, 0.9)",
                            fontSize: { xs: "1rem", sm: "1.125rem" },
                            lineHeight: 1.6,
                            mb: 4,
                            maxWidth: "600px",
                            mx: "auto",
                        }}
                    >
                        Schedule your free consultation today and get a
                        personalized estimate for your basement finishing
                        project. Our team is ready to bring your vision to life.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 2, sm: 3 },
                            justifyContent: "center",
                            alignItems: "center",
                            mt: 2,
                        }}
                    >
                        <Link href="/contact-us" passHref>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: "#1C7C54",
                                    color: "#FFFFFF",
                                    py: 1.5,
                                    px: { xs: 4, md: 5 },
                                    fontWeight: 600,
                                    borderRadius: "6px",
                                    textTransform: "none",
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                                    border: "2px solid #1C7C54",
                                    minWidth: { xs: "220px", sm: "auto" },
                                    "&:hover": {
                                        backgroundColor: "#145c3f",
                                        transform: "translateY(-2px)",
                                        boxShadow:
                                            "0 8px 20px rgba(0, 0, 0, 0.25)",
                                    },
                                }}
                            >
                                Get Your Free Estimate
                            </Button>
                        </Link>

                        <Link href="/gallery" passHref>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: "#FFFFFF",
                                    borderColor: "rgba(255, 255, 255, 0.8)",
                                    borderWidth: "2px",
                                    py: 1.5,
                                    px: { xs: 4, md: 5 },
                                    fontWeight: 600,
                                    borderRadius: "6px",
                                    textTransform: "none",
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(4px)",
                                    minWidth: { xs: "220px", sm: "auto" },
                                    "&:hover": {
                                        borderColor: "#FFFFFF",
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.15)",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                Browse Our Gallery
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>

            <Box
                sx={{
                    position: "absolute",
                    width: "150px",
                    height: "150px",
                    borderRadius: "75px",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    right: { xs: "-75px", md: "5%" },
                    bottom: "-75px",
                    zIndex: 2,
                    display: { xs: "none", md: "block" },
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    borderRadius: "40px",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    left: { xs: "-40px", md: "10%" },
                    top: "20%",
                    zIndex: 2,
                    display: { xs: "none", md: "block" },
                }}
            />
        </Box>
    );
};

export default Cta;
