"use client";

import React from "react";

export default function CheckupComp() {
  const handleSubmit = () => {
    alert("Berhasil Daftar Check up! Cek email untuk detailnya");
    window.location.reload();
  };
  return (
    <>
      <main className=" relative mt-52">
        <div className="">
          <h1 className=" text-center text-5xl font-semibold">
            Daftar Checkup Sekarang !
          </h1>
        </div>
        <div>
          <form name="form-komentar" onSubmit={handleSubmit}>
            <div className="mx-auto my-8 max-w-3xl px-12">
              <div className="mb-4">
                <label
                  htmlFor="nama"
                  className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Nama{" "}
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Masukkan Nama"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Hari/Tanggal
                </label>
                <input
                  type="date"
                  id="email"
                  name="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Masukkan Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Komentar"
                  className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Keluhan
                </label>
                <textarea
                  id="Komentar"
                  name="komentar"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Komentar Anda"
                  required
                />
              </div>
              {/* {!isMutating ? ( */}
              <button
                type="submit"
                className="mb-2 me-2 rounded-lg bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              {/* ) : (
                <button
                  type="button"
                  className="mb-2 me-2 rounded-lg bg-mainBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Loading . . .
                </button>
              )} */}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
