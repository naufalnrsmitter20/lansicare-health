"use client";

import React from "react";
import serchIcon from "@/public/searchIcon.svg";
import Image from "next/image";
export default function Lokasi({ children }: any) {
  return (
    <>
      <div className="mx-[35] mt-[40px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md">
        <div className="mx-12 mt-3 pt-1">
          <p className=" mt-7 text-2xl font-semibold">Lokasi</p>
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
          <form action="">
            <div className="grid grid-cols-5 gap-5">
              <div className=" my-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kota Malang
                </label>
              </div>
              <div className=" my-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Malang
                </label>
              </div>
              <div className="  my-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kota Blitar
                </label>
              </div>
              <div className="  my-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kota Kediri
                </label>
              </div>
              <div className="  my-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              <div className="-mt-5 mb-6 max-w-sm rounded-md border bg-slate-300 px-4 py-3 shadow-sm">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={"Lokasi"}
                  className="my-auto h-5 w-5 rounded border-gray-300 bg-gray-100 text-darkBlue focus:ring-2 focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="my-auto ms-2 text-base font-semibold text-gray-900 dark:text-gray-300"
                >
                  Kabupaten Kediri
                </label>
              </div>
              {children}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
