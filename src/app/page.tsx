import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import Homepage from "./(users)/component/HomePage";

export default function Home() {
  redirect("/homepage");
  return (
    <>
      <h1 className=" text-red-800"></h1>
    </>
  );
}
