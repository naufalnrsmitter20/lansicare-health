"use client";
import { SessionProvider as Provider, SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}
