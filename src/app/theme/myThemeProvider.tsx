"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";

export function MyThemeProvider({ children, ...props }: any) {
    return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
