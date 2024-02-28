import React from "react";
import { redirect } from "next/navigation";

export default function Administration() {
  redirect("/administration/dashboard/insight");
  return <></>;
}
