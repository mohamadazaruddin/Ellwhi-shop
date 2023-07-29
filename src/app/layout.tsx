import { ChakraProvider } from "@chakra-ui/react";
import "./styles/globals.css";
import type { Metadata } from "next";
import theme from "~/styles/theme";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
