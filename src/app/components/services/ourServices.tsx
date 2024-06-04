import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import planImg from "@/app/assets/services/planDesign.png";

const OurServices = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    alignItems: "flex-start",
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 0", md: "112px 0" }, // Responsive padding
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    overflow={"hidden"}
                    sx={{ paddingBottom: { xs: "56px", md: "0" } }}
                >
                    <Image
                        src={planImg}
                        alt="Plan Design"
                        width={643}
                        height={642}
                        objectFit="cover"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                        paddingLeft: { xs: "0", md: "80px" },
                    }}
                >
                    <Typography variant="h4">
                        Expert Basement Finishing Services
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        Our team of experienced professionals specializes in
                        basement finishing, offering custom designs and
                        high-quality craftsmanship to transform your basement
                        into a functional and beautiful space. We take pride in
                        delivering exceptional results that exceed our
                        clients&apos; expectations.
                    </Typography>

                    <Typography variant="h4" sx={{ marginTop: "40px" }}>
                        Custom Design Solutions
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        With our custom design services, we can create a
                        basement that perfectly suits your needs and style.
                        Whether you&apos;re looking for a home theater, a home
                        office, or a playroom for the kids, our team will work
                        closely with you to bring your vision to life.
                    </Typography>

                    <Typography variant="h4" sx={{ marginTop: "40px" }}>
                        Additional Services
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        In addition to basement finishing and custom designs, we
                        also offer a range of related services to enhance your
                        basement space. From framing and carpentry work to
                        drywall and painting, we have the expertise to handle
                        all aspects of your project.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurServices;
