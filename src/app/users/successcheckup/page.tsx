"use client";

import React from "react";
import NavBar from "../component/NavBar";
import InBar from "../component/InBar";
import Footer from "../component/Footer";
import SuccessCheckUp from "../component/SuccessCheckUp";
import { useSession } from "next-auth/react";

export default function SuccessCheckUpPage() {
  const { data: session } = useSession();
  return (
    <>
      <div>
        {!session ? <NavBar /> : <InBar />}
        <SuccessCheckUp />
        <Footer />
      </div>
    </>
  );
}
