"use client";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/globals.css";
import theme from "~/styles/theme";
import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
