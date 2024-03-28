import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import NavBar from "./component/NavBar";
import AuthProviders from "@/src/lib/authProviders";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LansiCare Health",
  description: "Welcome to the LansiCare App!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <AuthProviders>{children}</AuthProviders>
      </body>
    </html>
  );
}
