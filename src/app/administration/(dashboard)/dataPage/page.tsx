import React from "react";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import Link from "next/link";
import TableData from "../../components/content/TableData";
import Login from "../../components/Login";
import { useSession } from "next-auth/react";
import WelcomeBack from "../../components/WelcomeBack";

export default function DatasPage() {
  return (
    <>
      <div>
        <div className="flex">
          <Sidebar />

          <div className="ml-64 mt-6 w-3/4 max-w-full">
            <Headers name="DATA" />
            <div className="absolute right-0 top-0 mx-4 max-w-lg">
              <WelcomeBack />
            </div>
            <TableData />
          </div>
        </div>
      </div>
    </>
  );
}
