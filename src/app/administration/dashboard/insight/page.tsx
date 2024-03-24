"use client";
import React from "react";
import SessionAuth from "../../components/SessionAuth";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import MainDashboard from "../../components/content/MainDashboard";
import { Session } from "inspector";
import Login from "../../components/Login";

export default function InsightPages() {
  return (
    <>
      <div>
        <SessionAuth />
        <div className="flex">
          <Sidebar />

          <div className="ml-64 mt-6 w-3/4 max-w-full">
            <Headers name="DASHBOARD" />
            <div className="absolute right-0 top-0 mx-4 max-w-lg">
              <p className=" mt-7 w-full rounded-full bg-gray-800 px-5 py-4 text-center text-xs font-medium text-white">
                Logged in! :
              </p>
            </div>
            <MainDashboard />
          </div>
        </div>
      </div>
    </>
  );
}
