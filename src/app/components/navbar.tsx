// components/Navbar.js

import Link from "next/link";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#FFFFFF",
                    color: "primary.main",
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: "bold" }}
                    >
                        JS ProFinish
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Link href="/about" passHref>
                            <Typography component="a">About Us</Typography>
                        </Link>
                        <Link href="/services" passHref>
                            <Typography component="a">Services</Typography>
                        </Link>
                        <Link href="/contact" passHref>
                            <Typography component="a">Contact Us</Typography>
                        </Link>
                        <Link href="/gallery" passHref>
                            <Typography component="a">Gallery</Typography>
                        </Link>
                        <Link href="/" passHref>
                            <Typography component="a">Counties</Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
