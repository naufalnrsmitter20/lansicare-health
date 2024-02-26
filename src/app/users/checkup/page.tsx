"use client";
import React from "react";

import NavBar from "../component/NavBar";
import InBar from "../component/InBar";
import { useSession } from "next-auth/react";
import AboutComponent from "../component/AboutComponent";
import Footer from "../component/Footer";
import CheckupComp from "../component/Checkup";

export default function Checkup() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        {!session ? <NavBar /> : <InBar />}
        <CheckupComp />
        <Footer />
      </div>
    </>
  );
}
