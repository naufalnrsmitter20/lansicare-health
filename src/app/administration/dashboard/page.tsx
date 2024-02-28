import React from "react";
import { redirect } from "next/navigation";
export default function Dashboard() {
  redirect("/administration/dashboard/insight");
  return <></>;
}
