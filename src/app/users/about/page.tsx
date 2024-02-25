"use client";
import React from "react";

import NavBar from "../component/NavBar";
import InBar from "../component/InBar";
import { useSession } from "next-auth/react";
import AboutComponent from "../component/AboutComponent";
import Footer from "../component/Footer";

export default function AboutPage() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        {!session ? <NavBar /> : <InBar />}

        <AboutComponent />
        <Footer/>

      </div>
    </>
  );
}
