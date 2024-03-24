"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import NavBar from "./component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>LansiCare Health</title>
      </head>
      <body className={inter.className}>
        <NavBar />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
