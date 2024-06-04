import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <Container
            maxWidth={false}
            className={"primary-background benefits-container"}
            sx={{ height: "63vh" }}
        >
            <Grid
                container
                sx={{
                    height: "100%",
                    alignItems: "center",
                }}
                className={"primary-background Home-Content-Container"}
                spacing={4}
            >
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="primary.main"
                    >
                        Reliable
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Reach out to us today for a complimentary consultation.
                        Let&apos;s discuss your project and how we can turn your
                        vision into reality.
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <MdOutlineEmail size={24} />
                        <Typography variant="body1" sx={{ marginLeft: 1 }}>
                            temp.email@example.com
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <FiPhone size={24} />
                        <Typography variant="body1" sx={{ marginLeft: 1 }}>
                            +1 234 567 890
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <IoLocationOutline size={24} />
                        <Typography variant="body1" sx={{ marginLeft: 1 }}>
                            1234 Example St, City, Country
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField label="Name" variant="outlined" fullWidth />
                        <TextField label="Email" variant="outlined" fullWidth />
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <FormControlLabel
                            control={
                                <Checkbox sx={{ color: "primary.main" }} />
                            }
                            label="I accept the Terms"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
