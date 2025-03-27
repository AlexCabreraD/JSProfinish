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
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import Link from "next/link";
import {
    IoCheckmarkCircleOutline,
    IoDocumentTextOutline,
} from "react-icons/io5";
import {
    MdHome,
    MdExpandMore,
    MdGavel,
    MdPayment,
    MdDescription,
} from "react-icons/md";
import {
    FaHandshake,
    FaTools,
    FaShieldAlt,
    FaCopyright,
    FaUserShield,
} from "react-icons/fa";
import { RiFilePaper2Line, RiQuestionAnswerLine } from "react-icons/ri";

const TermsOfService = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const lastUpdated = "March 26, 2025";

    return (
        <Box
            component="section"
            id="terms-of-service-section"
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
                    <Typography color="white">Terms of Service</Typography>
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
                        Terms of Service
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
                        <MdGavel size={isMobile ? 30 : 40} />
                    </Box>

                    <Box sx={{ mb: 4, mt: { xs: 4, md: 2 } }}>
                        <Typography
                            variant="body1"
                            paragraph
                            color="text.primary"
                        >
                            Welcome to JS ProFinish. These Terms of Service
                            (&#34;Terms&#34;) govern your use of our website,
                            services, and products. By accessing our website or
                            engaging our services, you agree to be bound by
                            these Terms. Please read them carefully.
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
                        <FaHandshake size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Acceptance of Terms
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        By accessing or using our website, contacting us for
                        services, or entering into a service agreement with JS
                        ProFinish, you acknowledge that you have read,
                        understood, and agree to be bound by these Terms. If you
                        do not agree to these Terms, please do not use our
                        website or services.
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
                        <MdDescription size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Description of Services
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        JS ProFinish provides basement finishing and remodeling
                        services in Northern Utah, including but not limited to
                        Davis County and Weber County. Our services may include
                        design consultation, project planning, construction,
                        carpentry, drywall installation, painting, and other
                        related services as agreed upon in a separate written
                        contract.
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
                        <RiFilePaper2Line size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Service Agreements
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        All construction and remodeling services require a
                        separate written contract between you and JS ProFinish.
                        These Terms do not replace or supersede any terms
                        contained in such contract. In the event of any conflict
                        between these Terms and a separate written agreement,
                        the terms of the separate written agreement shall
                        prevail.
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
                        <FaTools size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Project Specifications and Changes
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        All project specifications, including scope of work,
                        materials, and timeline, will be detailed in your
                        written contract. Any changes to the project scope,
                        materials, or timeline must be agreed upon in writing
                        and may result in additional costs and timeline
                        adjustments.
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
                                        Change Orders
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        Any changes requested after the contract
                                        is signed must be documented in a
                                        written change order, signed by both
                                        parties, and may result in additional
                                        costs and timeline extensions.
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
                                        Unforeseen Conditions
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="#5F5F5F">
                                        Unforeseen conditions discovered during
                                        construction (such as water damage,
                                        mold, electrical issues, etc.) may
                                        require additional work not included in
                                        the original contract and may result in
                                        additional costs.
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
                        <MdPayment size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Payment Terms
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        Payment terms and schedules will be detailed in your
                        written contract. Typical payment schedules include:
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
                                        An initial deposit upon signing the
                                        contract
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
                                        Progress payments at predetermined
                                        milestones
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
                                        Final payment upon completion of the
                                        project
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>

                    <Typography variant="body1" paragraph color="text.primary">
                        Failure to make payments according to the agreed-upon
                        schedule may result in work stoppage, late fees, and
                        other consequences as outlined in your contract.
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
                        <FaShieldAlt size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Warranties and Guarantees
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        JS ProFinish provides a workmanship warranty on all
                        completed projects as specified in your contract. This
                        warranty covers defects in workmanship but does not
                        cover damage caused by normal wear and tear, improper
                        maintenance, or alterations made by others.
                    </Typography>

                    <Typography variant="body1" paragraph color="text.primary">
                        Manufacturer warranties for materials and fixtures will
                        be passed through to the customer. These warranties vary
                        by manufacturer and product and are separate from our
                        workmanship warranty.
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
                            Limitation of Liability
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        To the maximum extent permitted by law, JS ProFinish
                        shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages, or any loss
                        of profits or revenues, whether incurred directly or
                        indirectly, or any loss of data, use, goodwill, or other
                        intangible losses, resulting from:
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
                                        Your use or inability to use our website
                                        or services
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
                                        Any conduct or content of any third
                                        party on our website
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
                                        Any unauthorized access, use, or
                                        alteration of your transmissions or
                                        content
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
                        <FaCopyright size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Intellectual Property
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        All content on our website, including text, graphics,
                        logos, images, and software, is the property of JS
                        ProFinish or its content suppliers and is protected by
                        United States and international copyright laws.
                    </Typography>

                    <Typography variant="body1" paragraph color="text.primary">
                        JS ProFinish grants you a limited, non-exclusive,
                        non-transferable license to access and use our website
                        for personal, non-commercial purposes. This license does
                        not include any resale or commercial use of our website
                        or its contents.
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
                        <RiQuestionAnswerLine size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Frequently Asked Questions
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Accordion
                            sx={{
                                mb: 2,
                                borderRadius: "8px !important",
                                overflow: "hidden",
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                "&::before": {
                                    display: "none",
                                },
                                boxShadow: "none",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<MdExpandMore color="#1C7C54" />}
                                sx={{
                                    backgroundColor: "rgba(28, 124, 84, 0.03)",
                                    "& .MuiAccordionSummary-content": {
                                        margin: "12px 0",
                                    },
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    fontWeight="600"
                                    color="text.primary"
                                >
                                    Do you provide free estimates?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" color="#5F5F5F">
                                    Yes, we provide free initial consultations
                                    and estimates for all basement finishing
                                    projects. Contact us to schedule yours
                                    today.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                mb: 2,
                                borderRadius: "8px !important",
                                overflow: "hidden",
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                "&::before": {
                                    display: "none",
                                },
                                boxShadow: "none",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<MdExpandMore color="#1C7C54" />}
                                sx={{
                                    backgroundColor: "rgba(28, 124, 84, 0.03)",
                                    "& .MuiAccordionSummary-content": {
                                        margin: "12px 0",
                                    },
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    fontWeight="600"
                                    color="text.primary"
                                >
                                    Are you licensed and insured?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" color="#5F5F5F">
                                    Yes, JS ProFinish is fully licensed and
                                    insured in the state of Utah. We carry
                                    general liability insurance and workers&#39;
                                    compensation coverage for your protection
                                    and peace of mind.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                mb: 2,
                                borderRadius: "8px !important",
                                overflow: "hidden",
                                backgroundColor: "rgba(28, 124, 84, 0.03)",
                                "&::before": {
                                    display: "none",
                                },
                                boxShadow: "none",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<MdExpandMore color="#1C7C54" />}
                                sx={{
                                    backgroundColor: "rgba(28, 124, 84, 0.03)",
                                    "& .MuiAccordionSummary-content": {
                                        margin: "12px 0",
                                    },
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    fontWeight="600"
                                    color="text.primary"
                                >
                                    How long will my basement project take?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" color="#5F5F5F">
                                    Project timelines vary depending on the
                                    scope and complexity of the work. A typical
                                    basement finishing project can take anywhere
                                    from 4-8 weeks. We will provide a more
                                    specific timeline as part of your project
                                    proposal.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

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
                        <MdGavel size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Governing Law
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        These Terms shall be governed by and construed in
                        accordance with the laws of the State of Utah, without
                        regard to its conflict of law provisions. Any disputes
                        arising under or in connection with these Terms shall be
                        subject to the exclusive jurisdiction of the courts
                        located in Utah.
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
                        <IoDocumentTextOutline size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Changes to Terms
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        We reserve the right to modify these Terms at any time.
                        Changes will be effective immediately upon posting on
                        our website. Your continued use of our website or
                        services after any changes indicates your acceptance of
                        the modified Terms.
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
                        <MdDescription size={32} color="#1C7C54" />
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                color: "#1C7C54",
                            }}
                        >
                            Contact Information
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph color="text.primary">
                        If you have any questions about these Terms, please
                        contact us:
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
                            contact@jsprofinish-utah.com
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default TermsOfService;
