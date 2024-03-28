import React from "react";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import MainDashboard from "../../components/content/MainDashboard";
import Login from "../../components/Login";
import WelcomeBack from "../../components/WelcomeBack";

export default function InsightPages() {
  return (
    <>
      <div>
        <div className="flex">
          <Sidebar />

          <div className="ml-64 mt-6 w-3/4 max-w-full">
            <Headers name="DASHBOARD" />
            <div className="absolute right-0 top-0 mx-4 max-w-lg">
              <WelcomeBack />
            </div>
            <MainDashboard />
          </div>
        </div>
      </div>
    </>
  );
}
