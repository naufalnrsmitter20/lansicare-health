import React from "react";
import SessionAuthDashboard from "../components/SessionAuthDashboard";
import Sidebar from "../components/content/Sidebar";
import { redirect } from "next/navigation";
export default function Dashboard() {
  redirect("/admin/dashboard/insight");
  return (
    <div className=" p-8">
      <SessionAuthDashboard />
    </div>
  );
}
