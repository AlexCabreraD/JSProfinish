"use client";

import React, { useState } from "react";
import { AppBar, Box, Button, Drawer, Typography } from "@mui/material";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import "./navbar.css";

const NavDrawer = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <TiThMenu
                onClick={() => {
                    setOpen(true);
                }}
                id="navbarMenuIcon"
                className={"navbarMenuIcon"}
                style={{
                    alignSelf: "center",
                    width: "30px",
                    height: "30px",
                }}
            />
            <Drawer
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <Link
                    href="/"
                    style={{ fontWeight: "bold" }}
                    className={"drawerLink"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Typography variant="h6" component="div">
                        JS ProFinish
                    </Typography>
                </Link>
                <Link
                    href="/about-us"
                    className={"drawerLink"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Typography>About Us</Typography>
                </Link>
                <Link
                    href="/services"
                    className={"drawerLink"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Typography>Services</Typography>
                </Link>
                <Link
                    href="/contact-us"
                    className={"drawerLink"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Typography>Contact Us</Typography>
                </Link>
                <Link
                    href="/gallery"
                    className={"drawerLink"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Typography>Gallery</Typography>
                </Link>
                <Link
                    href="/davis-county"
                    className={"drawerLink"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Typography>Davis County</Typography>
                </Link>
                <Link
                    href="/weber-county"
                    className={"drawerLink"}
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Typography>Weber County</Typography>
                </Link>
                <Link
                    href="/contact-us"
                    onClick={() => {
                        setOpen(false);
                    }}
                    passHref
                >
                    <Button
                        sx={{
                            position: "absolute",
                            bottom: 20,
                            width: "100%",
                            height: "40px",
                            backgroundColor: "#1C7C54",
                            fontSize: { xs: "0.75rem", md: "1rem" },
                            padding: { xs: "5px 10px", md: "8px 16px" },
                            borderRadius: 0,
                        }}
                    >
                        Contact Us
                    </Button>
                </Link>
            </Drawer>
        </>
    );
};

export default NavDrawer;
