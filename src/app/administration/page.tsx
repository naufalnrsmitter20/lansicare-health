import { redirect } from "next/navigation";
import React from "react";

export default function Admin() {
  redirect("/administration/dashboard/insight");
  return <main className=" p-8"></main>;
}
