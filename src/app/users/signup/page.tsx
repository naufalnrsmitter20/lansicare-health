"use client";
import React from "react";
import SignUpUser from "../component/SignUpUser";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";
import Footer from "../component/Footer";

export default function SignupPage() {
  const { data: session } = useSession();

  return (
    <div className="w-screen h-screen">
      {!session ? <NavBar /> : <InBar />}

      <SignUpUser />
      <Footer/>

    </div>
  );
}
