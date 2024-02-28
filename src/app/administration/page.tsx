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
  redirect("/administration/dashboard/insight");
  return <main className=" p-8"></main>;
}
