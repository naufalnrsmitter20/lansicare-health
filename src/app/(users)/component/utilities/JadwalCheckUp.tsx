"use client";

import React from "react";

export default function JadwalCheckUp({ children }: any) {
  return (
    <>
      <main className="mx-[35] mt-[40px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md">
        <div className="mx-12 pt-10">
          <p className=" text-lg font-semibold">Buat Jadwal CheckUp</p>
          <p>Pastikan Lagi Pilihan Anda</p>
          {children}
        </div>
      </main>
    </>
  );
}
