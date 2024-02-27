"use client";
import React from "react";
import SessionAuth from "../../components/SessionAuth";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import Link from "next/link";
import { useSession } from "next-auth/react";
import TableData from "../../components/content/TableData";
import Login from "../../components/Login";

export default function DatasPage() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <section className=" h-screen w-screen bg-gradient-to-r from-purple-gradient to-blue-gradient">
          <section className=" flex h-screen w-full items-center justify-center">
            <Link
              href="/admin/dashboard/login"
              className="group max-w-xl rounded-lg bg-transparent px-3 py-3 text-white hover:text-black"
            >
              Login untuk melanjutkan
            </Link>
          </section>
          {/* <Login /> */}
          {/* {(window.location.href = "/admin/dashboard/login")} */}
        </section>
      ) : (
        <>
          <div>
            <SessionAuth />;
            <div className="flex">
              <Sidebar />

              <div className="ml-64 w-3/4 max-w-full">
                <Headers name="DATA" />
                <div className="absolute right-0 top-0 mx-4 max-w-lg">
                  <p className=" mt-7 w-full rounded-full bg-gray-800 px-5 py-4 text-center text-xs font-medium text-white">
                    {/* Logged in! : {session.user?.email} */}
                  </p>
                </div>
                <TableData />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
