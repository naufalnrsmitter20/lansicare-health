import React from "react";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AddPatient from "../../components/content/AddPatient";
import WelcomeBack from "../../components/WelcomeBack";

export default function AddDataPages() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="ml-64 w-3/4 max-w-full">
          <Headers name="ADD PATIENT" />
          <div className="absolute right-0 top-0 mx-4 max-w-lg">
            <WelcomeBack />
          </div>
          <AddPatient />
        </div>
      </div>
    </>
  );
}
