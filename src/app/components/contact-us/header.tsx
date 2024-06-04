import { Container, Grid, Stack, Typography } from "@mui/material";

const Header = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background"}
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
                            Get in Touch for Your Basement Renovation
                        </Typography>
                        <Typography variant={"body1"}>
                            Do you have any questions or are you ready to begin
                            your basement transformation? Contact us today via
                            email, phone, or by completing the form below, and
                            we will promptly respond to your inquiry.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
