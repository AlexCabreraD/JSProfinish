import { Button, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
    return (
        <div>
            <Hero />
        </div>
    );
}

const Hero = () => {
    return (
        <Grid
            container
            className={"secondary-background"}
            sx={{ paddingX: "64px" }}
        >
            <Grid item xs={6}>
                <Stack spacing={"24px"}>
                    <Typography variant={"h1"}>
                        Premier Basement Finishing Serving Northern Utah
                        Communities
                    </Typography>
                    <Typography variant={"body1"}>
                        At JS ProFinish, we are Utah's premier experts in
                        basement finishing and remodeling services. Our team
                        specializes in transforming basements into beautiful
                        spaces tailored to your needs. Whether you're in Ogden,
                        Clearfield, Layton, or anywhere in northern Utah, trust
                        us to deliver top-quality results with our attention to
                        detail and craftsmanship.
                    </Typography>
                    <Stack spacing={"16px"} direction={"row"}>
                        <Button>Learn More</Button>
                        <Button
                            variant={"outlined"}
                            sx={{ background: "none" }}
                        >
                            Contact Us
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={6}></Grid>
        </Grid>
    );
};
