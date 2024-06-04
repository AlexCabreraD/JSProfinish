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
                            Unlock the Potential of Your Basement
                        </Typography>
                        <Typography variant={"body1"}>
                            Discover our comprehensive basement finishing
                            services. From painting and carpentry to drywall and
                            framing, we handle every aspect to create a
                            functional and beautiful area tailored to your
                            needs.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
