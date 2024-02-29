"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import TrackingKesehatan from "@/public/monitoring-kesehatan.jpeg";
import ResepObat from "@/public/obat.jpg";
import CheckUp from "@/public/checkup.jpeg";
import Regist from "@/public/registrasi.jpg";
import Carousel from "./Carousel";
import Forms from "./Forms";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      {/* Home Carousel */}
      <section className="scroll-smooth text-base-100">
        <Carousel />
        <div className="mx-auto flex h-full flex-col place-items-center justify-center bg-base-50 pb-[30px] pt-[70px] align-middle font-inter">
          {/* Fitur-fitur */}
          <div
            id="main"
            className="mx-[35] mt-[10px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md"
          >
            <div className="mt-[33px] inline-flex h-6 w-96 flex-col items-start justify-start px-10">
              <div className="self-stretch text-2xl font-semibold leading-normal text-neutral-800">
                Fitur-fitur
              </div>
            </div>

            <div className="relative">
              {/* <div className="absolute right-[45px] top-0 inline-flex h-[22px] w-[86px] flex-col items-start justify-start rounded border border-neutral-800 py-0.5 pl-2 pr-1">
                <button className="text-xs font-normal text-neutral-800 ">
                  See Details
                </button>
                <div className="relative h-3 w-3" />
              </div> */}

              <div className="mx-10 mt-5 grid grid-cols-2 content-center gap-4">
                <Link
                  href={"profile"}
                  className="max-h-sm w-fit rounded-lg border border-gray-200 bg-primary-1000 shadow transition-all hover:scale-95 hover:ring-4 hover:ring-mainBlue/20 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div>
                    <Image
                      className="h-[300px] rounded-t-lg object-cover"
                      src={TrackingKesehatan}
                      alt="foto"
                    />
                  </div>
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-[18px] font-semibold tracking-tight text-base-100 dark:text-white">
                        Track Kesehatan
                      </h5>
                    </div>
                    <p className="mb-3 text-[15px] font-normal text-base-100 dark:text-gray-400">
                      Lacak Kesehatanmu Disini
                    </p>
                  </div>
                </Link>

                <Link
                  href={""}
                  className="max-h-sm w-fit rounded-lg border border-gray-200 bg-primary-1000 shadow transition-all hover:scale-95 hover:ring-4 hover:ring-mainBlue/20 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div>
                    <Image
                      className="h-[300px] rounded-t-lg object-cover"
                      src={ResepObat}
                      width={700}
                      alt="foto"
                    />
                  </div>
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-[18px] font-semibold tracking-tight text-base-100 dark:text-white">
                        Resep Obat
                      </h5>
                    </div>
                    <p className="mb-3 text-[15px] font-normal text-base-100 dark:text-gray-400">
                      Lihat Resep Obatmu Disini
                    </p>
                  </div>
                </Link>
                <Link
                  href={"signin"}
                  className="max-h-[420px] w-fit rounded-lg border border-gray-200 bg-primary-1000 shadow transition-all hover:scale-95 hover:ring-4 hover:ring-mainBlue/20 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div>
                    <Image
                      className="h-[300px] rounded-t-lg object-cover"
                      src={Regist}
                      alt="foto"
                    />
                  </div>
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-[18px] font-semibold tracking-tight text-base-100 dark:text-white">
                        Registrasi Cepat
                      </h5>
                    </div>
                    <p className="mb-3 text-[15px] font-normal text-base-100 dark:text-gray-400">
                      Sekarang registrasi kesehatan tidak perlu ribet
                    </p>
                  </div>
                </Link>
                <Link
                  href={"checkup"}
                  className="max-h-[420px] w-fit rounded-lg border border-gray-200 bg-primary-1000 shadow transition-all hover:scale-95 hover:ring-4 hover:ring-mainBlue/20 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div>
                    <Image
                      className="h-[300px] rounded-t-lg object-cover object-top"
                      src={CheckUp}
                      alt="foto"
                    />
                  </div>
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-[18px] font-semibold tracking-tight text-base-100 dark:text-white">
                        Checkup Kesehatan
                      </h5>
                    </div>
                    <p className="mb-3 text-[15px] font-normal text-base-100 dark:text-gray-400">
                      Cek kesehatanmu dengan sekali tap di klinik/rumah sakit
                      terdekat
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Komentar */}
          <div className="mx-[35] mb-[20px] mt-[30px] w-[1366.48px] rounded-[10px] bg-primary-1000 shadow-md">
            <div className="mt-[33px] inline-flex h-6 w-96 flex-col items-start justify-start px-10">
              <div className="self-stretch text-2xl font-semibold leading-normal text-neutral-800">
                Komentar
              </div>
            </div>
            <Forms />
          </div>
        </div>
      </section>
    </>
  );
}
