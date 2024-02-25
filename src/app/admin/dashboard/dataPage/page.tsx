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
        <section className=" bg-gradient-to-r from-purple-gradient to-blue-gradient w-screen h-screen">
          {/* <section className=" w-full flex justify-center items-center h-screen">
            <Link href="/admin/dashboard/login" className="px-3 rounded-lg text-white bg-darkBlue group py-3 max-w-xl">
              Login untuk melanjutkan
            </Link>
          </section> */}
          <Login />
        </section>
      ) : (
        <>
          <div>
            <SessionAuth />;
            <div className="flex">
              <Sidebar />

              <div className="max-w-full w-3/4 ml-64">
                <Headers name="DATA" />
                <div className="max-w-lg absolute right-0 top-0 mx-4">
                  <p className=" text-xs font-medium text-white bg-gray-800 py-4 px-5 rounded-full w-full mt-7 text-center">Logged in! : {session.user?.email}</p>
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
