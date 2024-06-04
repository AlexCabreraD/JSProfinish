import { Container, Grid, Typography } from "@mui/material";

interface HeaderProps {
    county: string;
}

const Header = ({ county }: HeaderProps) => {
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
                    textAlign: "center",
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: "112px 0 112px 0",
                }}
            >
                <Grid item>
                    <Typography variant={"h1"}>
                        Welcome to {county} County&apos;s Basement Finishing
                        Services by JS ProFinish!
                    </Typography>
                    <Typography variant={"body1"} sx={{ marginTop: "24px" }}>
                        At JS ProFinish, we are proud to serve homeowners in{" "}
                        {county} County with top-quality basement finishing and
                        remodeling solutions. With over 15 years of experience
                        in the industry, our team is dedicated to transforming
                        basements into functional and beautiful living spaces
                        that meet your unique needs and preferences.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
