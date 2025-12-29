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
                    padding: "112px 0",
                }}
            >
                <Grid item>
                    <Stack spacing={"24px"}>
                        <Typography variant={"h3"}>Where We're Headed</Typography>
                        <Typography variant={"body1"}>
                            We want to be the first name people think of when they need basement work in Northern Utah. Not because we're the biggest, but because we do honest work at fair prices. We build our reputation one basement at a time.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Vision;
