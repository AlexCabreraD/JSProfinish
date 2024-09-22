"use client";

import React, { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Tooltip,
} from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { sendContactEmail } from "@/app/utils/sendEmail";

interface ContactProps {
    dark?: boolean;
    padded?: boolean;
}

const Contact = ({ dark, padded = true }: ContactProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            alert("Please accept the terms.");
            return;
        }

        try {
            // Call the sendContactEmail function here
            await sendContactEmail(
                formData.name,
                formData.email,
                formData.message,
            );
            alert("Message sent successfully");
            setFormData({
                name: "",
                email: "",
                message: "",
                termsAccepted: false,
            });
        } catch (error) {
            console.error(error);
            alert("Failed to send message");
        }
    };

    const componentTheme = dark ? "secondary-background" : "primary-background";
    const padding = padded ? "112px 0" : "0 0 112px";

    return (
        <Container
            maxWidth={false}
            className={componentTheme}
            sx={{ textAlign: "-webkit-center" }}
        >
            <Grid
                container
                sx={{
                    height: "fit-content",
                    maxWidth: "1440px",
                    padding: { xs: "56px 16px", md: padding }, // Responsive padding
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                        alignItems: "center",
                    }}
                >
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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "left" },
                            mb: 2,
                        }}
                    >
                        <MdOutlineEmail size={24} />
                        <Typography variant="body1" sx={{ marginLeft: 1 }}>
                            contact@jsprofinish-utah.com
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "left" },
                            mb: 2,
                        }}
                    >
                        <FiPhone size={24} />
                        <a href="tel:3853337592">
                            <Typography variant="body1" sx={{ marginLeft: 1 }}>
                                (385) 333-7592
                            </Typography>
                        </a>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "left" },
                            mb: 2,
                        }}
                    >
                        <IoLocationOutline size={24} />
                        <Typography variant="body1" sx={{ marginLeft: 1 }}>
                            1740 S 300 W #8 Clearfield UT 84015
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            InputProps={{
                                style: {
                                    backgroundColor: dark
                                        ? "#4e4e4e"
                                        : "#F5F5F5",
                                    color: dark ? "#FFFFFF" : "#000000",
                                },
                            }}
                            InputLabelProps={{
                                style: { color: dark ? "#FFFFFF" : "#000000" },
                            }}
                            required
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            InputProps={{
                                style: {
                                    backgroundColor: dark
                                        ? "#4e4e4e"
                                        : "#F5F5F5",
                                    color: dark ? "#FFFFFF" : "#000000",
                                },
                            }}
                            InputLabelProps={{
                                style: { color: dark ? "#FFFFFF" : "#000000" },
                            }}
                            required
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            InputProps={{
                                style: {
                                    backgroundColor: dark
                                        ? "#4e4e4e"
                                        : "#F5F5F5",
                                    color: dark ? "#FFFFFF" : "#000000",
                                },
                            }}
                            InputLabelProps={{
                                style: { color: dark ? "#FFFFFF" : "#000000" },
                            }}
                            required
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    name="termsAccepted"
                                    sx={{ color: "primary.main" }}
                                />
                            }
                            label={
                                <>
                                    I accept the{" "}
                                    <Tooltip
                                        title="By using this contact form, you agree to allow us to collect and process your data. We will only use your information for the purpose of responding to your inquiry. Your information will not be shared with third parties without your consent."
                                        arrow
                                    >
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Terms
                                        </span>
                                    </Tooltip>
                                </>
                            }
                            sx={{ alignItems: "center" }} // Align vertically centered
                            required
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            style={{ backgroundColor: "#1C7C54" }}
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
