import img9 from "../../assets/home/img/image9.png";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Cta = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "60vh", sm: "50vh", md: "40vh" }, // Responsive height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                textAlign: "center",
                paddingX: { xs: 2, sm: 4, md: 6 }, // Responsive padding
            }}
        >
            <Image
                src={img9}
                alt={
                    "Beautifully remodeled basement with modern furniture and lighting"
                }
                layout="fill"
                objectFit="cover"
                style={{ filter: "blur(5px)" }}
            />
            <Box
                sx={{
                    position: "absolute",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: { xs: 2, sm: 3, md: 4 },
                    width: "100%",
                    height: "100%",
                    alignContent: "center",
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                    }}
                >
                    Ready to Start Remodeling Your Basement?
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        fontSize: {
                            xs: "0.875rem",
                            sm: "1rem",
                            md: "1.125rem",
                        },
                    }}
                >
                    Schedule a free consultation or get an estimate for your
                    basement finishing project.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    <Link href="/contact-us" passHref>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                minWidth: { xs: "100%", sm: "auto" },
                                mb: { xs: 1, sm: 0 },
                            }}
                            style={{ backgroundColor: "#1C7C54" }}
                        >
                            Get in Touch
                        </Button>
                    </Link>
                    <Link href="/gallery" passHref>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                minWidth: { xs: "100%", sm: "auto" },
                            }}
                            style={{ backgroundColor: "transparent" }}
                        >
                            Gallery
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Cta;
