"use client";
import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { clientSideFunction } from "../utils/client-utils";

export default function ClientSideRouting() {
  const theme = useTheme();
  const result = clientSideFunction();
  const settings = {
    dots: true,
  };
  return <h1>Client Route {result}</h1>;
}
