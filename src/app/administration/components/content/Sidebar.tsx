"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import LansicareLogo from "../../../../img/LansicareLogo.png";
import { signOut, useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

export default function Sidebar() {
  const { data: session }: any = useSession();
  const usePathNames = usePathname();

  return (
    <>
      <section className="">
        <aside
          id="default-sidebar"
          className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto bg-gray-800 px-3 py-4">
            <ul className="space-y-2 font-medium">
              <li className=" mb-8 mt-4">
                <Image src={LansicareLogo} width={45} alt="LansiCare" />
              </li>
              <li>
                <Link
                  href="/administration/insight"
                  className="group flex items-center rounded-lg p-2 py-3 text-white hover:bg-darkBlue"
                >
                  <svg
                    className="h-5 w-5  text-gray-400 transition duration-75 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/administration/dataPage"
                  className="group flex items-center  rounded-lg p-2 py-3 text-white hover:bg-darkBlue"
                >
                  <svg
                    className="group-hover: h-5 w-5  flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Data</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/administration/apotek"
                  className="group flex items-center  rounded-lg p-2 py-3 text-white hover:bg-darkBlue"
                >
                  <svg
                    className="group-hover: h-5 w-5  flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0Zm12 7h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 0 2Z" />
                  </svg>

                  <span className="ms-3 flex-1 whitespace-nowrap">Apotek</span>
                </Link>
              </li>
              <li>
                <button
                  className="group flex w-full items-center rounded-lg p-2 py-3 text-white hover:bg-red-600"
                  type="button"
                  onClick={() => signOut()}
                >
                  <svg
                    className="group-hover: h-5 w-5  flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap text-start">
                    Logout
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
