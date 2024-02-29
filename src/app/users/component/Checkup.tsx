"use client";

import React from "react";
import Carousel from "./Carousel";

export default function CheckupComp() {
  const handleSubmit = () => {
    alert("Berhasil Daftar Check up! Cek email untuk detailnya");
    window.location.reload();
  };
  return (
    <>
      <main className="">
        <div className="mx-auto flex h-full flex-col place-items-center justify-center bg-base-50 pb-[30px] pt-[70px] align-middle font-inter">
          {/* Fitur-fitur */}
          <div
            id="main"
            className="mx-[35] mt-[10px] h-auto w-[1366.48px] rounded-[10px] bg-primary-1000 pb-10 shadow-md"
          >
            <div className="mt-[33px] inline-flex h-6 w-96 flex-col items-start justify-start px-10">
              <div className="self-stretch text-2xl font-semibold leading-normal text-neutral-800">
                Checkup Kesehatan
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
