"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Admin() {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("admin/dashboard/login");
  //   },
  // });
  redirect("/admin/dashboard/insight");
  return (
    <main className=" p-8">
      {/* <div className=" text-white">{session?.data?.user?.email}</div> */}
      <div className=" text-white" onClick={() => signOut()}>
        Logout
      </div>
    </main>
  );
}
Admin.requireAuth = true;
