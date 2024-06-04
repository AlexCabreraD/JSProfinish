import { Container, Grid, Stack, Typography } from "@mui/material";

const Vision = () => {
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
                    padding: "0 0 112px 0",
                }}
            >
                <Grid item>
                    <Stack spacing={"24px"}>
                        <Typography variant={"h3"}>Our Vision</Typography>
                        <Typography variant={"body1"}>
                            At JS ProFinish, our goal is to establish ourselves
                            as a reputable industry leader in Utah, recognized
                            for our integrity, exceptional craftsmanship, and
                            unwavering commitment to customer happiness. We are
                            eager to cultivate enduring partnerships with our
                            clients and turn their visions into reality, project
                            by project.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Vision;
