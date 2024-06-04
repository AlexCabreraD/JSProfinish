import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import img8 from "../../assets/home/img/image8.png";

import { RiTeamLine } from "react-icons/ri";

const Feature = () => {
    return (
        <Container
            maxWidth={false}
            className={"tertiary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    textAlign: { xs: "center", md: "start" },
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: "112px 0" },
                }}
            >
                <Grid item xs={12} md={6}>
                    <TextArea />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ overflow: "hidden" }}
                    className={"responsive-image-container"}
                >
                    <Image
                        src={img8}
                        alt={"test"}
                        layout="responsive"
                        className={"benefits-image"}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

const TextArea = () => {
    return (
        <Stack
            spacing={3}
            className={"mobile-text"}
            alignContent={"center"}
            justifyContent={"center"}
            sx={{ paddingRight: "80px" }}
        >
            <RiTeamLine
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "30px",
                    border: "2px solid white",
                }}
            />
            <Typography variant={"h3"}>
                Why Choose Us for Your Basement Project?
            </Typography>
            <Typography variant={"body1"}>
                When you choose our basement finishing services, you&apos;ll
                enjoy increased home value, additional living space, and endless
                custom design options. Our team of experts will work closely
                with you to bring your vision to life, creating a beautiful and
                functional space that perfectly suits your needs.
            </Typography>
        </Stack>
    );
};

export default Feature;
