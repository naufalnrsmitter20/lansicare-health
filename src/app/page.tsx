import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default function Home() {
  redirect("/users");
  return (
    <>
      <h1 className=" text-red-800">hai</h1>
    </>
  );
}
