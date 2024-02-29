"use client";

import React from "react";
import serchIcon from "@/public/searchIcon.svg";
import Image from "next/image";
import Link from "next/link";
import LavaletteGeneralHospital from "@/public/LavaletteGeneralHospital.jpg";
import dokter1 from "@/public/drg_haryo.jpg";
import dokter2 from "@/public/drg_Gina.jpg";
import dokter3 from "@/public/drg_safira.jpg";
import dokter4 from "@/public/drg_rano.jpg";

export default function PilihanDokter({ children }: any) {
  return (
    <>
      <main className="mx-[35] mt-[40px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md">
        <div className="mx-12 pt-1">
          <p className=" mt-7 text-2xl font-semibold">Dokter</p>
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-base-100 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Cari Dokter"
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
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-4">
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href="#">
                <Image
                  className="rounded-t-lg"
                  src={dokter1}
                  alt="Dokter Haryo"
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-base-100 dark:text-white">
                    drg. Haryo Trianto Drajat{" "}
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  Dokter Gigi yang lebih akrab dipanggil drg. Haryo lahir di
                  Yogyakarta. Dokter gigi yang dikenal ramah dan baik ini
                  menyelesaikan Pendidikan pada Program Studi Kedokteran Gigi
                  pada Fakultas Kedokteran Gigi Universitas Prof. Dr. Moestopo
                  (Beragama) Jakarta <br />
                  <br />
                  <br />
                </p>
                <Link
                  href={"#"}
                  className="inline-flex items-center rounded-lg bg-darkBlue px-3 py-2 text-center align-bottom text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Lihat Profil
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
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href="#">
                <Image
                  className="rounded-t-lg"
                  src={dokter2}
                  alt="Dokter Gina"
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-base-100 dark:text-white">
                    drg. Gina Gratiana{" "}
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  drg. Gina Gratiana menyelesaikan Pendidikan pada Program Studi
                  Pendidikan Dokter Gigi Fakultas Kedokteran Gigi Universitas
                  Brawijaya dan memperoleh gelar Sarjana Kedokteran Gigi pada
                  tanggal 18 April 2013 dan dari Fakultas Kedokteran Gigi
                  Universitas Brawijaya Malang pada Program Studi Profesi Dokter
                  Gigi tanggal 30 Desember 2016. <br />
                  <br />
                  <br />
                </p>
                <Link
                  href={"#"}
                  className=" inline-flex items-center rounded-lg bg-darkBlue px-3 py-2 text-center align-bottom text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Lihat Profil
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
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href="#">
                <Image
                  className="rounded-t-lg"
                  src={dokter3}
                  alt="Dokter Shafira"
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-base-100 dark:text-white">
                    drg. Shafira N. Irsan{" "}
                  </h5>
                </a>
                <p className="font-normals mb-3 text-sm text-gray-700 dark:text-gray-400">
                  drg. Shafira N. Irsan merupakan Dokter Gigi Umum. Beliau
                  menempuh pendidikan dokter gigi umum di Universitas Brawijaya
                  Malang dan mendapatkan gelar dokter gigi pada tahun 2020.{" "}
                  <br />
                  <br />
                  <br />
                </p>
                <Link
                  href={"#"}
                  className=" inline-flex items-center rounded-lg bg-darkBlue px-3 py-2 text-center align-bottom text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Lihat Profil
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
            <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Link href="#">
                <Image
                  className="rounded-t-lg"
                  src={dokter4}
                  alt="Dokter Rano"
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-base-100 dark:text-white">
                    drg. Rano Tri Juliarta, Sp.KG{" "}
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  Drg Rano lebih akrab beliau dipanggil, lahir di Surabaya pada
                  tanggal 20 Juli 1983. Sebagai Dokter Gigi Spesialis Konservasi
                  Gigi beliau menangani perawatan gigi serta mempertahankan gigi
                  selama mungkin di dalam rongga mulut, sehingga estetika dan
                  fungsi kunyah gigi dapat kembali normal. <br />
                  <br />
                  <br />
                </p>
                <Link
                  href={"#"}
                  className=" inline-flex items-center rounded-lg bg-darkBlue px-3 py-2 text-center align-bottom text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Lihat Profil
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
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
