"use client";
import React from "react";
import Homepage from "../component/HomePage";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";
import Footer from "../component/Footer";

export default function HomepagePages() {
  const { data: session } = useSession();

  return (
    <>
      <Homepage />
    </>
  );
}
