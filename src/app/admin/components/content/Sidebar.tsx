"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import LansicareLogo from "../../../../img/LansicareLogo.png";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Sidebar() {
  const { data: session }: any = useSession();
  return (
    <>
      <section className="">
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li className=" mb-8 mt-4">
                <Image src={LansicareLogo} width={45} alt="LansiCare" />
              </li>
              <li>
                <Link href="/admin/dashboard/insight" className="flex items-center p-2  rounded-lg text-white hover:bg-darkBlue group py-3">
                  <svg className="w-5 h-5  transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard/dataPage" className="flex items-center p-2  rounded-lg text-white hover:bg-darkBlue group py-3">
                  <svg className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover: group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Data</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard/apotek" className="flex items-center p-2  rounded-lg text-white hover:bg-darkBlue group py-3">
                  <svg className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover: group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0Zm12 7h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 0 2Z" />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">Apotek</span>
                </Link>
              </li>
              <li>
                <button className="flex items-center p-2 rounded-lg text-white hover:bg-red-600 group py-3 w-full" type="button" onClick={() => signOut()}>
                  <svg className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover: group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-start">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
