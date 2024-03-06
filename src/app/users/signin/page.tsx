"use client";
import React from "react";
import SigninUser from "../component/SigninUser";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";
import { redirect } from "next/navigation";
import Footer from "../component/Footer";

export default function SigninPage() {
  const { data: session } = useSession();

  return (
    <div className="h-screen w-screen">
      {!session ? <NavBar /> : <InBar />}

      <SigninUser />
      <div className=" my-20 lg:my-0"></div>
      <Footer />
    </div>
  );
}
