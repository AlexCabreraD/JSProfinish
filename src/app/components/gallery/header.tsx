import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import render from "@/app/assets/gallery/galleryHeader.png";

const Header = () => {
    return (
        <Container
            maxWidth={false}
            className={"secondary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "center",
                    textAlign: "start",
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: "112px 0 112px 0",
                }}
            >
                <Grid item sx={{ maxWidth: "768px" }} xs={12}>
                    <Stack spacing={"24px"}>
                        <Typography variant={"h1"}>
                            Explore Our Gallery
                        </Typography>
                        <Typography variant={"body1"}>
                            Browse through our gallery of completed projects to
                            get inspired for your own basement renovation. See
                            how we&apos;ve turned ordinary basements into
                            extraordinary spaces.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
