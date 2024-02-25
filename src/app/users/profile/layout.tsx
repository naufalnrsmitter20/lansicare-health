import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

import SessionProvider from "../SessionProvider";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile | Lansicare",
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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
