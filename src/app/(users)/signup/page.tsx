"use client";
import React from "react";
import SignUpUser from "../component/SignUpUser";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";
import Footer from "../component/Footer";

export default function SignupPage() {
  return (
    <div className="h-screen w-screen">
      <SignUpUser />
      <div className="my-20 lg:my-0"></div>
      <Footer />
    </div>
  );
}
