import { Container, Grid, Typography, Box } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background"}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                spacing={4}
                sx={{
                    alignItems: "center",
                    textAlign: { xs: "center" },
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: "112px 0" },
                }}
            >
                {/* Email Column */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <MdOutlineEmail size={50} />
                    </Box>
                    <Typography variant="h4" sx={{ marginTop: "24px" }}>
                        Email
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        For any inquiries or support, feel free to reach out to
                        us via email.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        contact@jsprofinish-utah.com
                    </Typography>
                </Grid>

                {/* Phone Column */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <FiPhone size={50} />
                    </Box>
                    <Typography variant="h4" sx={{ marginTop: "24px" }}>
                        Phone
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        We&apos;re available by phone for any questions or to
                        schedule a consultation.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        +1 (385) 333-7592
                    </Typography>
                </Grid>

                {/* Office Column */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <IoLocationOutline size={50} />
                    </Box>
                    <Typography variant="h4" sx={{ marginTop: "24px" }}>
                        Office
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "16px" }}>
                        Visit our office for a face-to-face consultation or to
                        discuss your project in detail.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "24px" }}>
                        1740 S 300 W #8 Clearfield UT 84015
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactInfo;
