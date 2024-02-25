import { redirect } from "next/navigation";
import React from "react";

export default function UserPage() {
  redirect("/users/homepage");

  return <div>page</div>;
}
