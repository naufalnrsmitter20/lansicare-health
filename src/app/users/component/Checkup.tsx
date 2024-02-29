"use client";

import React, { useState } from "react";
import Carousel from "./Carousel";
import serchIcon from "@/public/searchIcon.svg";
import Image from "next/image";
import Lokasi from "./utilities/Lokasi";
import Spesialis from "./utilities/Spesialis";
import PilihanDokter from "./utilities/PilihanDokter";
import JadwalCheckUp from "./utilities/JadwalCheckUp";
import { redirect, useRouter } from "next/navigation";
import RumahSakit from "./utilities/RumahSakit";

export default function CheckupComp() {
  const handleSubmit = () => {
    alert("Berhasil Daftar Check up! Cek email untuk detailnya");
    window.location.reload();
  };
  const router = useRouter();
  const [rumahSakitv, setRumahSakitv] = useState(false);
  const [spesialisv, setSpesialisv] = useState(false);
  const [dokterv, setDokterv] = useState(false);
  const [jadwalkan, setJadwalkan] = useState(false);

  const handleRumahSakit = () => {
    setRumahSakitv(!rumahSakitv);
  };
  const handleSpesialis = () => {
    setSpesialisv(!spesialisv);
  };
  const handleDokter = () => {
    setDokterv(!dokterv);
  };
  const handleJadwal = () => {
    setJadwalkan(!jadwalkan);
  };
  const handleClick = () => {
    alert("Success to Check Up, Please Check Email to see Detail Check Up!");
    // router.replace("/users/successcheckup");
  };
  return (
    <>
      <main className="">
        <div className="mx-auto flex h-full flex-col place-items-center justify-center bg-base-50 pb-[30px] pt-[70px] align-middle font-inter">
          {/* Fitur-fitur */}
          <div
            id="checkup"
            className="mx-[35] mt-[40px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md"
          >
            <div className="mt-[33px] flex-col items-start justify-start px-10">
              <div className="w-full self-stretch text-3xl font-bold leading-normal text-neutral-800">
                Checkup Kesehatan
              </div>
            </div>
          </div>
          <div>
            <Lokasi>
              <button
                type="button"
                onClick={handleRumahSakit}
                className="mb-2 me-2 rounded-lg bg-darkBlue px-5 py-2.5 text-sm font-semibold text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/50 "
              >
                Cari Rumah Sakit
              </button>
            </Lokasi>
            {rumahSakitv && (
              <RumahSakit>
                <button
                  type="button"
                  onClick={handleSpesialis}
                  className="mb-2 me-2 mt-8 max-w-sm rounded-lg bg-darkBlue px-5 py-2.5 text-sm font-semibold text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/50 "
                >
                  Cari Spesialis
                </button>
              </RumahSakit>
            )}
            {spesialisv && (
              <Spesialis>
                <button
                  type="button"
                  onClick={handleDokter}
                  className="mb-2 me-2 mt-8 rounded-lg bg-darkBlue px-5 py-2.5 text-sm font-semibold text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/50 "
                >
                  Cari Dokter
                </button>
              </Spesialis>
            )}
            {dokterv && (
              <PilihanDokter>
                <button
                  type="button"
                  onClick={handleJadwal}
                  className="mb-2 me-2 mt-8 rounded-lg bg-darkBlue px-5 py-2.5 text-sm font-semibold text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/50 "
                >
                  Jadwalkan
                </button>
              </PilihanDokter>
            )}
            {jadwalkan && (
              <JadwalCheckUp>
                <button
                  type="button"
                  onClick={handleClick}
                  className="mb-2 me-2 mt-8 rounded-lg bg-darkBlue px-5 py-2.5 text-sm font-semibold text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-mainBlue/50 "
                >
                  Buat Jadwal
                </button>
              </JadwalCheckUp>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
