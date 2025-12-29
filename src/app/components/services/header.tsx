import { Container, Grid, Stack, Typography } from "@mui/material";

const Header = () => {
    return (
        <Container
            maxWidth={false}
            className={"tertiary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "start",
                    textAlign: "start",
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: "112px 0 112px 0",
                }}
            >
                <Grid item sx={{ maxWidth: "768px" }}>
                    <Stack spacing={"24px"}>
                        <Typography variant={"h1"}>
                            Complete Basement Finishing Services
                        </Typography>
                        <Typography variant={"body1"}>
                            We handle everything: framing, drywall, carpentry, painting, and finishing touches. You get one crew, one point of contact, and one fair price for the whole job.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
