"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function SessionAuthDashboard() {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("./dashboard/login");
  //   },
  // });
  return (
    <div>
      {/* <div className=" text-white">{session?.data?.user?.email}</div> */}
      <button type="button" className=" text-white" onClick={() => signOut()}>
        signOut
      </button>
    </div>
  );
}

SessionAuthDashboard.requireAuth = true;
