import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../globals.css";

import SessionProvider from "../../SessionProvider";
import Sidebar from "../../components/content/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Insight",
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
