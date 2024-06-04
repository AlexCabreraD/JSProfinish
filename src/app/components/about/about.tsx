import { Container, Grid, Stack, Typography } from "@mui/material";

const About = () => {
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
                    textAlign: "center",
                    padding: "112px 0 112px 0",
                }}
            >
                <Grid item>
                    <Stack spacing={"24px"}>
                        <Typography variant={"h3"}>Our Mission</Typography>
                        <Typography variant={"body1"}>
                            At JS ProFinish, our mission is clear: we create
                            stunning and functional spaces that inspire and
                            enhance everyday living. With over 15 years of
                            experience in northern Utah, we exceed our
                            clients&apos; expectations through innovative
                            designs, quality materials, and meticulous attention
                            to detail.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
