"use client";

import React from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Breadcrumbs,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import {
    IoCheckmarkCircleOutline,
    IoDocumentTextOutline,
} from "react-icons/io5";
import { MdSecurity, MdPrivacyTip, MdHome } from "react-icons/md";
import { FaUserShield, FaChild } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";

const PrivacyPolicy = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const lastUpdated = "March 26, 2025";

    return (
        <Box
            component="section"
            id="privacy-policy-section"
            sx={{
                backgroundColor: "#333333",
                color: "white",
                pt: { xs: 10, md: 14 },
                pb: { xs: 8, md: 12 },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage:
                        "radial-gradient(#FFFFFF 1px, transparent 1px), radial-gradient(#FFFFFF 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                    zIndex: 1,
                },
            }}
        >
            <Container
                maxWidth={false}
                sx={{ maxWidth: "1440px", position: "relative", zIndex: 2 }}
            >
                <Breadcrumbs
                    separator="›"
                    aria-label="breadcrumb"
                    sx={{
                        mb: 6,
                        "& .MuiBreadcrumbs-ol": {
                            alignItems: "center",
                        },
                        color: "rgba(255,255,255,0.7)",
                    }}
                >
                    <Link href="/" passHref>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "rgba(255,255,255,0.7)",
                                "&:hover": {
                                    color: "#1C7C54",
                                },
                            }}
                        >
                            <MdHome style={{ marginRight: "5px" }} />
                            <Typography component="span">Home</Typography>
                        </Box>
                    </Link>
                    <Typography color="white">Privacy Policy</Typography>
                </Breadcrumbs>

                <Box sx={{ mb: 6, textAlign: "center" }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            fontWeight: 700,
                            mb: 2,
                            background:
                                "linear-gradient(45deg, #1C7C54 0%, #6EB98F 100%)",
                            backgroundClip: "text",
                            textFillColor: "transparent",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Privacy Policy
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#FFFFFF",
                            fontWeight: 500,
                        }}
                    >
                        Last Updated: {lastUpdated}
                    </Typography>
                </Box>

                <Paper
                    elevation={5}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: "16px",
                        mb: 6,
                        background: "white",
                        border: "1px solid rgba(28, 124, 84, 0.1)",
                        position: "relative",
                        zIndex: 3,
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -20,
                            right: 40,
                            width: 50,
                            height: 50,
                            borderRadius: "8px",
                            background: "rgba(28, 124, 84, 0.1)",
                            transform: "rotate(45deg)",
                            zIndex: -1,
                            display: { xs: "none", md: "block" },
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: { xs: -30, md: -40 },
                            left: { xs: 20, md: 40 },
                            backgroundColor: "#1C7C54",
                            color: "white",
                            borderRadius: "50%",
                            width: { xs: 60, md: 80 },
                            height: { xs: 60, md: 80 },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 10px 20px rgba(28, 124, 84, 0.2)",
                        }}
                    >
                        <IoDocumentTextOutline size={isMobile ? 30 : 40} />
                    </Box>

                    <Box sx={{ mb: 4, mt: { xs: 4, md: 2 } }}>
                        <Typography
                            variant="body1"
                            paragraph
                            color="text.primary"
                        >
                            At JS ProFinish, we are committed to protecting your
                            privacy and the security of your personal
                            information. This Privacy Policy outlines how we
                            collect, use, disclose, and safeguard your
                            information when you visit our website or interact
                            with our services. Please read this policy carefully
                            to understand our practices regarding your personal
                            data.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            p: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <MdPrivacyTip size={36} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Information We Collect
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        We may collect the following types of information:
                    </Typography>

                    <List>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        Personal Information
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        Name, email address, phone number, and
                                        address when you fill out our contact
                                        form or request a quote.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        Project Details
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        Information about your basement
                                        finishing project, including size,
                                        requirements, and preferences.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        Usage Data
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        Information about how you use our
                                        website, including IP address, browser
                                        type, pages visited, time spent on
                                        pages, and other statistics.
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>

                    <Divider sx={{ my: 4 }} />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            p: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <MdSecurity size={36} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            How We Use Your Information
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        We use the information we collect for the following
                        purposes:
                    </Typography>

                    <List>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        To provide and maintain our services,
                                        including processing your requests for
                                        information, quotes, or services.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        To communicate with you about your
                                        project, our services, promotions, or
                                        events.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        To improve our website, services, and
                                        customer experience.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        To comply with legal obligations and
                                        resolve any disputes.
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>

                    <Divider sx={{ my: 4 }} />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            p: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <FaShield size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Information Sharing and Disclosure
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        We may share your information in the following
                        situations:
                    </Typography>

                    <List>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        With Service Providers
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        We may share your information with
                                        third-party service providers who help
                                        us operate our website, conduct our
                                        business, or provide services to you.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        For Business Transfers
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        We may share or transfer your
                                        information in connection with a merger,
                                        acquisition, or sale of all or a portion
                                        of our business assets.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        With Your Consent
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        We may disclose your information for any
                                        other purpose with your consent.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        To Comply with Legal Obligations
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        We may disclose your information where
                                        we are legally required to do so.
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>

                    <Divider sx={{ my: 4 }} />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            p: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <RiFilePaper2Line size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Cookies and Tracking Technologies
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        We use cookies and similar tracking technologies to
                        track activity on our website and store certain
                        information. You can instruct your browser to refuse all
                        cookies or to indicate when a cookie is being sent.
                        However, if you do not accept cookies, you may not be
                        able to use some portions of our website.
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            p: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <FaUserShield size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Your Rights and Choices
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        You have certain rights regarding your personal
                        information, including:
                    </Typography>

                    <List>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        The right to access personal information
                                        we hold about you.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        The right to request correction of
                                        inaccurate personal information.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        The right to request deletion of your
                                        personal information.
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            sx={{
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                borderRadius: "8px",
                                mb: 2,
                                py: 2,
                            }}
                        >
                            <ListItemIcon>
                                <IoCheckmarkCircleOutline
                                    size={24}
                                    color="#1C7C54"
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography color="text.primary">
                                        The right to opt-out of marketing
                                        communications.
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>

                    <Typography variant="body1" paragraph color="text.primary">
                        To exercise these rights, please contact us using the
                        information provided below.
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            p: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <FaChild size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Children&#39;s Privacy
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        Our website and services are not directed to individuals
                        under the age of 18. We do not knowingly collect
                        personal information from children. If you are a parent
                        or guardian and believe that your child has provided us
                        with personal information, please contact us, and we
                        will take steps to delete such information.
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            p: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <MdPrivacyTip size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Contact Us
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        If you have any questions about this Privacy Policy,
                        please contact us:
                    </Typography>

                    <Box
                        sx={{
                            p: 3,
                            borderRadius: "8px",
                            backgroundColor: "rgba(28, 124, 84, 0.05)",
                            mb: 2,
                        }}
                    >
                        <Typography
                            variant="body1"
                            paragraph
                            color="text.primary"
                        >
                            <strong>By mail:</strong> 1740 S 300 W #8,
                            Clearfield UT 84015
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            color="text.primary"
                        >
                            <strong>By phone:</strong> (385) 626-3514
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            color="text.primary"
                            sx={{ mb: 0 }}
                        >
                            <strong>By email:</strong>{" "}
                            jsprofinish@gmail.com
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
