import Image from "next/image";
import img9 from "@/app/assets/home/img/image9.png";
import { Box, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "70vh", sm: "50vh", md: "40vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                paddingX: { xs: 2, sm: 4, md: 6 },
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
                <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
                    <Typography variant="h1" gutterBottom>
                        Your Trusted Local Remodeling Experts
                    </Typography>
                    <Box sx={{ maxWidth: "768px" }}>
                        <Typography variant="body1" gutterBottom>
                            Welcome to JS ProFinish, where we&apos;ve been
                            transforming spaces and bringing dreams to life for
                            over 15 years. Based in Clearfield, UT, we take
                            pride in our longstanding commitment to exceptional
                            service and craftsmanship.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
