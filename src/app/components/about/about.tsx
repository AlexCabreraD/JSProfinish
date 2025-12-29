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
                        <Typography variant={"h3"}>What We're About</Typography>
                        <Typography variant={"body1"}>
                            We finish basements the right way—no shortcuts, no surprises. Every job gets the same attention whether it's a simple rec room or a full apartment. We use quality materials, show up when we say we will, and treat your home like it's our own.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
