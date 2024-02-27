"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function SessionAuth() {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("./login/admin");
  //   },
  // });
  return (
    <div>
      <div className=" text-white"></div>
      {/* <div className=" text-white" onClick={() => signOut()}></div> */}
    </div>
  );
}

// SessionAuth.requireAuth = true;
