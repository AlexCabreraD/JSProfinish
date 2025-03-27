import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import img8 from "../../assets/home/img/image8.png";
import { RiTeamLine } from "react-icons/ri";

const Benefits = () => {
    return (
        <Box
            component="section"
            id="benefits-section"
            sx={{
                py: { xs: 8, md: 14 },
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#1C7C54",
                color: "#FFFFFF",
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{ xs: 4, md: 6 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            px: { xs: 2, md: 4 },
                        }}
                    >
                        <Stack
                            spacing={{ xs: 3, md: 4 }}
                            sx={{
                                maxWidth: "540px",
                                mx: { xs: "auto", md: 0 },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: {
                                        xs: "center",
                                        md: "flex-start",
                                    },
                                    mb: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "50%",
                                        border: "2px solid rgba(255, 255, 255, 0.8)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    <RiTeamLine size={28} />
                                </Box>
                            </Box>

                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                                    lineHeight: 1.2,
                                    mb: { xs: 1, md: 2 },
                                    textAlign: { xs: "center", md: "left" },
                                    color: "#FFFFFF",
                                }}
                            >
                                Why Choose Us for Your Basement Project?
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.125rem" },
                                    lineHeight: 1.6,
                                    textAlign: { xs: "center", md: "left" },
                                    color: "rgba(255, 255, 255, 0.9)",
                                }}
                            >
                                When you choose our basement finishing services,
                                you&apos;ll enjoy increased home value,
                                additional living space, and endless custom
                                design options. Our team of experts will work
                                closely with you to bring your vision to life,
                                creating a beautiful and functional space that
                                perfectly suits your needs.
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                position: "relative",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background:
                                        "linear-gradient(180deg, rgba(28, 124, 84, 0) 0%, rgba(28, 124, 84, 0.15) 100%)",
                                    zIndex: 1,
                                },
                            }}
                        >
                            <Image
                                src={img8}
                                alt="Cozy and modern basement living room featuring a cream-colored sectional sofa, earthy-toned pillows, and a patterned area rug, with minimalist natural aesthetic"
                                priority
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                position: "absolute",
                                width: "100px",
                                height: "100px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                top: { xs: "-20px", md: "-30px" },
                                right: { xs: "-20px", md: "-30px" },
                                zIndex: -1,
                                display: { xs: "none", md: "block" },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Benefits;
