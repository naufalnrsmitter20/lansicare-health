import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import AuthProviders from "../lib/authProviders";
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
        <AuthProviders>{children}</AuthProviders>
      </body>
    </html>
  );
}
