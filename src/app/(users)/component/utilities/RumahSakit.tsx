"use client";

import React from "react";
import serchIcon from "@/public/searchIcon.svg";
import Image from "next/image";
import Link from "next/link";
import LavaletteGeneralHospital from "@/public/rs-lavalette.jpeg";
import RumahSakitSaiful from "@/public/rs-saifulanwar.png";
import RumahSakitPersada from "@/public/Persada-Hospital-Malang.jpg";
export default function RumahSakit({ children }: any) {
  return (
    <>
      <main className="mx-[35] mt-[40px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md">
        <div className="mx-12 pt-1">
          <p className=" mt-7 text-2xl font-semibold">Rumah Sakit</p>
          <div className="mt-5">
            <form className=" flex max-w-sm items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <Image src={serchIcon} alt="Search Icon" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Cari Lokasi"
                  required
                />
              </div>
              <button
                type="submit"
                className="ms-2 rounded-lg border border-darkBlue bg-darkBlue p-2.5 text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="max-h-[400px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href="#">
                <Image
                  className="h-[200px] rounded-t-lg object-cover"
                  src={LavaletteGeneralHospital}
                  alt="Rumaah Lavalette"
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Rumah Sakit Lavalette{" "}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Jl. W.R. Supratman No.10, Rampal Celaket, Kec. Klojen, Kota
                  Malang, Jawa Timur 65111
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg bg-darkBlue px-3 py-2 text-center text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selengkapnya
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="max-h-[400px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href="#">
                <Image
                  className="h-[200px] rounded-t-lg object-cover object-top"
                  src={RumahSakitSaiful}
                  alt="Rumaah Sakit Saiful Anwar"
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    RSUD Dr. Saiful Anwar{" "}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Jl. Jaksa Agung Suprapto No.2, Klojen, Kec. Klojen, Kota
                  Malang, Jawa Timur 65112
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg bg-darkBlue px-3 py-2 text-center text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selengkapnya
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="max-h-[400px] max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href="#">
                <Image
                  className="h-[200px] rounded-t-lg object-cover"
                  src={RumahSakitPersada}
                  alt="Rumah Sakit Persada"
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Persada Hospital{" "}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Jl. Raden Panji Suroso KAV.II-IV, Purwodadi, Kec. Blimbing,
                  Kota Malang, Jawa Timur 65126
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg bg-darkBlue px-3 py-2 text-center text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selengkapnya
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
