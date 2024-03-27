import React from "react";
import Headers from "../../components/content/Headers";
import Sidebar from "../../components/content/Sidebar";
import Link from "next/link";
import Login from "../../components/Login";
import WelcomeBack from "../../components/WelcomeBack";

export default function ApotekPage() {
  return (
    <>
      <div>
        <div className="flex">
          <Sidebar />

          <div className="ml-64 mt-6 w-3/4 max-w-full">
            <Headers name="APOTEK" />
            <div className="absolute right-0 top-0 mx-4 max-w-lg">
              <WelcomeBack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
