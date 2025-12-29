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
    Paper,
    useTheme,
    useMediaQuery,
    InputAdornment,
    CircularProgress,
    Snackbar,
    Alert,
} from "@mui/material";
import { MdOutlineEmail, MdSend, MdMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

interface ContactProps {
    dark?: boolean;
    padded?: boolean;
}

const Contact = ({ dark, padded = true }: ContactProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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

        setSubmitting(true);

        try {
            const formspreeUrl =
                process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
            if (!formspreeUrl) {
                console.error("Formspree endpoint not configured");
                throw new Error("Contact form not properly configured");
            }

            const response = await fetch(formspreeUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    termsAccepted: false,
                });
            } else {
                const data = await response.json();
                setError(true);
                setErrorMessage(
                    data.error ||
                        "Failed to send message. Please try again later.",
                );
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setError(true);
            setErrorMessage("Failed to send message. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleCloseAlert = () => {
        setSuccess(false);
        setError(false);
        setErrorMessage("");
    };

    const componentTheme = dark ? "secondary-background" : "primary-background";
    const paddingY = padded
        ? isMobile
            ? "80px 0"
            : "112px 0"
        : isMobile
          ? "0"
          : "0 0 112px";

    return (
        <Box
            component="section"
            id="contact-section"
            sx={{
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container
                maxWidth={false}
                className={componentTheme}
                sx={{
                    position: "relative",
                    py: paddingY,
                    pb: isMobile ? "100px" : "120px",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: isMobile ? 20 : 40,
                        right: isMobile ? 20 : 60,
                        width: isMobile ? 80 : 140,
                        height: isMobile ? 80 : 140,
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        background: "rgba(28, 124, 84, 0.05)",
                        zIndex: 0,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: isMobile ? 20 : 40,
                        left: isMobile ? 20 : 60,
                        width: isMobile ? 60 : 120,
                        height: isMobile ? 60 : 120,
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        background: "rgba(28, 124, 84, 0.05)",
                        transform: "rotate(45deg)",
                        zIndex: 0,
                    },
                }}
            >
                <Grid
                    container
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "fit-content",
                        maxWidth: "1440px",
                        margin: "0 auto",
                        padding: isMobile ? "0 16px" : paddingY,
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                            alignItems: "flex-start",
                            pr: { md: 8 },
                        }}
                    >
                        <Box>
                            <Typography
                                variant="overline"
                                component="p"
                                sx={{
                                    color: "#1C7C54",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    fontSize: isMobile ? "0.875rem" : "1rem",
                                    mb: 1,
                                }}
                            >
                                GET IN TOUCH
                            </Typography>

                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: isMobile ? "2rem" : "2.5rem",
                                    lineHeight: 1.2,
                                    mb: 3,
                                }}
                            >
                                Contact Us
                            </Typography>

                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontSize: isMobile ? "1rem" : "1.125rem",
                                    mb: 4,
                                    color: dark
                                        ? "rgba(255, 255, 255, 0.8)"
                                        : "rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                Reach out to us today for a complimentary
                                consultation. Let&apos;s discuss your project
                                and how we can turn your vision into reality.
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    mt: 6,
                                }}
                            >
                                <Paper
                                    elevation={2}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: 2,
                                        borderRadius: "12px",
                                        backgroundColor: dark
                                            ? "rgba(255, 255, 255, 0.05)"
                                            : "white",
                                        backdropFilter: "blur(10px)",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: 50,
                                            height: 50,
                                            borderRadius: "12px",
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.1)",
                                            mr: 3,
                                        }}
                                    >
                                        <MdOutlineEmail
                                            size={24}
                                            color="#1C7C54"
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            sx={{
                                                mb: 0.5,
                                                color: dark ? "white" : "black",
                                            }}
                                        >
                                            Email
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: dark ? "white" : "black",
                                            }}
                                        >
                                            jsprofinish@gmail.com
                                        </Typography>
                                    </Box>
                                </Paper>

                                <Paper
                                    elevation={2}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: 2,
                                        borderRadius: "12px",
                                        backgroundColor: dark
                                            ? "rgba(255, 255, 255, 0.05)"
                                            : "white",
                                        backdropFilter: "blur(10px)",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: 50,
                                            height: 50,
                                            borderRadius: "12px",
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.1)",
                                            mr: 3,
                                        }}
                                    >
                                        <FiPhone size={24} color="#1C7C54" />
                                    </Box>
                                    <Box sx={{ width: "100%" }}>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            sx={{
                                                mb: 0.5,
                                                color: dark ? "white" : "black",
                                            }}
                                        >
                                            Phone
                                        </Typography>
                                        <a
                                            href="tel:3856263514"
                                            style={{
                                                textDecoration: "none",
                                                color: dark ? "white" : "black",
                                            }}
                                        >
                                            <Typography variant="body2">
                                                (385) 626-3514
                                            </Typography>
                                        </a>
                                    </Box>
                                </Paper>

                                <Paper
                                    elevation={2}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        p: 2,
                                        borderRadius: "12px",
                                        backgroundColor: dark
                                            ? "rgba(255, 255, 255, 0.05)"
                                            : "white",
                                        backdropFilter: "blur(10px)",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: 50,
                                            height: 50,
                                            borderRadius: "12px",
                                            backgroundColor:
                                                "rgba(28, 124, 84, 0.1)",
                                            mr: 3,
                                        }}
                                    >
                                        <IoLocationOutline
                                            size={24}
                                            color="#1C7C54"
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            sx={{
                                                mb: 0.5,
                                                color: dark ? "white" : "black",
                                            }}
                                        >
                                            Office
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: dark ? "white" : "black",
                                            }}
                                        >
                                            1740 S 300 W #8 Clearfield UT 84015
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                mt: isMobile ? 6 : 0,
                                p: isMobile ? 3 : 4,
                                borderRadius: "16px",
                                backgroundColor: dark
                                    ? "rgba(255, 255, 255, 0.05)"
                                    : "white",
                                backdropFilter: "blur(10px)",
                                boxShadow: dark
                                    ? "0 10px 30px rgba(0, 0, 0, 0.15)"
                                    : "0 10px 30px rgba(0, 0, 0, 0.05)",
                                position: "relative",
                                overflow: "hidden",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: 100,
                                    height: 100,
                                    borderRadius: "0 0 0 100%",
                                    background: "rgba(28, 124, 84, 0.05)",
                                    zIndex: 0,
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="h3"
                                gutterBottom
                                sx={{
                                    mb: 3,
                                    textAlign: "center",
                                    fontWeight: 600,
                                    position: "relative",
                                    color: dark ? "white" : "black",
                                }}
                            >
                                Send Us a Message
                            </Typography>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    position: "relative",
                                }}
                            >
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={submitting}
                                    required
                                    InputProps={{
                                        style: {
                                            backgroundColor: dark
                                                ? "#4e4e4e"
                                                : "#F5F5F5",
                                            color: dark ? "#FFFFFF" : "#000000",
                                            borderRadius: "8px",
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: dark ? "#FFFFFF" : "#000000",
                                        },
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&:hover fieldset": {
                                                borderColor: "#1C7C54",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#1C7C54",
                                            },
                                        },
                                    }}
                                />

                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={submitting}
                                    required
                                    InputProps={{
                                        style: {
                                            backgroundColor: dark
                                                ? "#4e4e4e"
                                                : "#F5F5F5",
                                            color: dark ? "#FFFFFF" : "#000000",
                                            borderRadius: "8px",
                                        },
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MdOutlineEmail color="#1C7C54" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: dark ? "#FFFFFF" : "#000000",
                                        },
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&:hover fieldset": {
                                                borderColor: "#1C7C54",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#1C7C54",
                                            },
                                        },
                                    }}
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
                                    disabled={submitting}
                                    required
                                    InputProps={{
                                        style: {
                                            backgroundColor: dark
                                                ? "#4e4e4e"
                                                : "#F5F5F5",
                                            color: dark ? "#FFFFFF" : "#000000",
                                            borderRadius: "8px",
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: dark ? "#FFFFFF" : "#000000",
                                        },
                                    }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&:hover fieldset": {
                                                borderColor: "#1C7C54",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#1C7C54",
                                            },
                                        },
                                    }}
                                />

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.termsAccepted}
                                            onChange={handleChange}
                                            name="termsAccepted"
                                            sx={{
                                                color: "#1C7C54",
                                                "&.Mui-checked": {
                                                    color: "#1C7C54",
                                                },
                                            }}
                                            disabled={submitting}
                                        />
                                    }
                                    label={
                                        <>
                                            <Typography
                                                sx={{
                                                    color: dark
                                                        ? "white"
                                                        : "black",
                                                    display: "inline",
                                                }}
                                            >
                                                I accept the{" "}
                                            </Typography>
                                            <Tooltip
                                                title="By using this contact form, you agree to allow us to collect and process your data. We will only use your information for the purpose of responding to your inquiry. Your information will not be shared with third parties without your consent."
                                                arrow
                                                placement="top"
                                            >
                                                <span
                                                    style={{
                                                        textDecoration:
                                                            "underline",
                                                        cursor: "pointer",
                                                        color: "#1C7C54",
                                                    }}
                                                >
                                                    Terms
                                                </span>
                                            </Tooltip>
                                        </>
                                    }
                                    sx={{ alignItems: "center" }}
                                    required
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="submit"
                                    disabled={submitting}
                                    startIcon={
                                        submitting ? (
                                            <CircularProgress size={20} />
                                        ) : (
                                            <MdSend />
                                        )
                                    }
                                    sx={{
                                        backgroundColor: "#1C7C54",
                                        borderRadius: "8px",
                                        py: 1.5,
                                        mt: 1,
                                        fontWeight: 600,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#145c3f",
                                            transform: "translateY(-3px)",
                                            boxShadow:
                                                "0 6px 12px rgba(20, 92, 63, 0.2)",
                                        },
                                    }}
                                >
                                    {submitting ? "Sending..." : "Submit"}
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                <Snackbar
                    open={success}
                    autoHideDuration={6000}
                    onClose={handleCloseAlert}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert
                        onClose={handleCloseAlert}
                        severity="success"
                        variant="filled"
                        icon={<MdMarkEmailRead />}
                        sx={{
                            width: "100%",
                            borderRadius: "8px",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="subtitle2">
                            Message sent successfully!
                        </Typography>
                        <Typography variant="body2">
                            We&apos;ll get back to you as soon as possible.
                        </Typography>
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={error}
                    autoHideDuration={6000}
                    onClose={handleCloseAlert}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert
                        onClose={handleCloseAlert}
                        severity="error"
                        variant="filled"
                        sx={{
                            width: "100%",
                            borderRadius: "8px",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="subtitle2">
                            Failed to send message
                        </Typography>
                        <Typography variant="body2">
                            {errorMessage ||
                                "Please try again or contact us directly."}
                        </Typography>
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
};

export default Contact;
