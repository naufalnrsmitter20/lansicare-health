import React from "react";
import SessionAuth from "../../components/SessionAuth";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import Link from "next/link";
import TableData from "../../components/content/TableData";
import Login from "../../components/Login";

export default function DatasPage() {
  return (
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
  );
}
