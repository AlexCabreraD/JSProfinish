import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import basement from "@/app/assets/services/basement.png";

const Enhance = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: "112px 0" },
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    alignItems={"center"}
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h3">
                        Enhance Your Home with Custom Basement Renovations
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        Our basement finishing services are designed to turn
                        your underutilized space into a stylish and practical
                        area that meets your needs. With our expertise and
                        attention to detail, we can create a customized basement
                        that you&apos;ll love.
                    </Typography>
                    <Grid container spacing={4} sx={{ marginTop: "32px" }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Expertise</Typography>
                            <Typography
                                variant="body1"
                                sx={{ marginTop: "16px" }}
                            >
                                Our team of skilled professionals specializes in
                                basement finishing, ensuring high-quality
                                results.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Process</Typography>
                            <Typography
                                variant="body1"
                                sx={{ marginTop: "16px" }}
                            >
                                We follow a streamlined process to efficiently
                                complete your basement finishing project.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-start" },
                            marginTop: { xs: "56px", md: "0" },
                            paddingLeft: { xs: "0", md: "80px" },
                        }}
                    >
                        <Image
                            src={basement}
                            alt="Custom Basement Renovation"
                            layout="responsive"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Enhance;
