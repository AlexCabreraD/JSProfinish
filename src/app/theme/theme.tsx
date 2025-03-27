"use client";

import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#1C7C54",
        },
        background: {
            default: "#F5F5F5",
        },
        text: {
            primary: "#000000",
            secondary: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
        h1: {
            fontSize: "56px",
            fontWeight: "bold",
            lineHeight: "100%",
        },
        h2: {
            fontSize: "48px",
            fontWeight: "bold",
            lineHeight: "120%",
        },
        h3: {
            fontSize: "40px",
            fontWeight: "bold",
            lineHeight: "120%",
        },
        h4: {
            fontSize: "32px",
            fontWeight: "bold",
            lineHeight: "130%",
        },
        h5: {
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "140%",
        },
        h6: {
            fontSize: "20px",
            fontWeight: "bold",
            lineHeight: "140%",
        },
        body1: {
            fontSize: "18px",
            fontWeight: "normal",
            lineHeight: "150%",
        },
        caption: {
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "150%",
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "#1C7C54",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#FFFFFF",
                    backgroundColor: "#e0e0e0",
                    "&:hover": {
                        backgroundColor: "#145c3f",
                    },
                    fontSize: "16px",
                    fontWeight: "normal",
                    lineHeight: "1.5",
                    padding: "12px 24px",
                    whiteSpace: "nowrap",
                },
            },
        },

        MuiCssBaseline: {
            styleOverrides: `
        .primary-background {
          background-color: #F5F5F5;
          color: #000000;
        }
        .secondary-background {
          background-color: #333333;
          color: #FFFFFF;
        }
        .tertiary-background {
          background-color: #1C7C54;
          color: #FFFFFF;
        }
        .secondary-background a, .tertiary-background a {
          color: #1C7C54;
        }
        .secondary-background .MuiButton-root, .tertiary-background .MuiButton-root {
          color: #FFFFFF;
          background-color: #1C7C54;
        }
        .secondary-background .MuiButton-root:hover, .tertiary-background .MuiButton-root:hover {
          background-color: #145c3f;
        }
        .primary-background .MuiButton-root.MuiButton-outlined, .secondary-background .MuiButton-root.MuiButton-outlined, .tertiary-background .MuiButton-root.MuiButton-outlined {
          background-color: transparent; /* Set background to transparent for outlined button */
        }
        .primary-background .MuiButton-root.MuiButton-outlined:hover, .secondary-background .MuiButton-root.MuiButton-outlined:hover, .tertiary-background .MuiButton-root.MuiButton-outlined:hover {
          background-color: transparent; /* Set background to transparent on hover for outlined button */
        }
        .primary-background .MuiButton-root.MuiButton-text, .secondary-background .MuiButton-root.MuiButton-outlined, .tertiary-background .MuiButton-root.MuiButton-outlined {
          background-color: transparent; /* Set background to transparent for outlined button */
        }
        .primary-background .MuiButton-root.MuiButton-text:hover, .secondary-background .MuiButton-root.MuiButton-text:hover, .tertiary-background .MuiButton-root.MuiButton-text:hover {
          background-color: transparent; /* Set background to transparent on hover for outlined button */
        }
        .primary-background .MuiButton-root.MuiButton-text, .secondary-background .MuiButton-root.MuiButton-outlined, .tertiary-background .MuiButton-root.MuiButton-outlined {
          background-color: transparent; /* Set background to transparent for outlined button */
        }
        .primary-background .MuiButton-root.MuiButton-text{
          color: #000000; /* Set background to transparent on hover for outlined button */
        }
        .primary-background .MuiButton-root.MuiInputBase-input{
          text-color: #000000; /* Set background to transparent on hover for outlined button */
        }
      `,
        },
    },
});

export default theme;
