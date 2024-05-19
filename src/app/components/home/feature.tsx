import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import img7 from "../../assets/home/img/image7.png";

import { FaRegCheckCircle } from "react-icons/fa";
const Feature = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background feature-container"}
            sx={{ height: "65vh" }}
        >
            <Grid
                container
                sx={{
                    backgroundColor: "background.default",
                    height: "100%",
                    alignItems: "center",
                }}
                className={"primary-background Home-Content-Container"}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ overflow: "hidden", order: { xs: 2, md: 1 } }}
                >
                    <Image
                        src={img7}
                        alt={"test"}
                        width={616}
                        height={640}
                        className={"feature-image"}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                    <TextArea />
                </Grid>
            </Grid>
        </Container>
    );
};

const TextArea = () => {
    return (
        <Stack
            spacing={3}
            className={"primary-background feature-text"}
            alignContent={"center"}
            justifyContent={"center"}
            sx={{ paddingLeft: "80px" }}
        >
            <Typography variant={"h3"}>
                Our Basement Finishing Services
            </Typography>
            <Typography variant={"body1"}>
                Our services are designed to meet your unique needs and
                preferences. With our expertise, we can turn your basement into
                a comfortable and stylish area for you and your family to enjoy.
            </Typography>
            <Stack spacing={3}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FaRegCheckCircle />
                    <Typography variant="body1" sx={{ marginLeft: 1 }}>
                        Expert Craftsmanship
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FaRegCheckCircle />
                    <Typography variant={"body1"} sx={{ marginLeft: 1 }}>
                        Customized Solutions
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FaRegCheckCircle />
                    <Typography variant={"body1"} sx={{ marginLeft: 1 }}>
                        Affordable Pricing
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    );
};

export default Feature;
