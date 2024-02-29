"use client";

import Image from "next/image";
import React from "react";
import TotalView from "@/public/TotalView.png";
import TotalUser from "@/public/TotalUser.png";
import Female from "@/public/Female.png";
import Male from "@/public/Male.png";
import Registered from "@/public/Registered.png";
import InProgress from "@/public/InProgress.png";
import Verify from "@/public/Verify.png";
import Done from "@/public/Done.png";

export default function MainDashboard() {
  return (
    <>
      <section className=" font-inter">
        <section className=" inset-6 mx-10 mt-7 grid w-full max-w-7xl grid-cols-4 gap-4 rounded-lg bg-white p-6 shadow-md shadow-slate-300 hover:bg-gray-100">
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100 ">
            <Image
              src={TotalView}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              723
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Total View
            </h1>
          </div>
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100">
            <Image
              src={TotalUser}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              78
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Total Users
            </h1>
          </div>
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100">
            <Image
              src={Male}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              102
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Male
            </h1>
          </div>
          <div className="inset-2 block max-w-sm rounded-lg border border-slate-500 bg-white p-6 shadow-sm shadow-slate-700 hover:bg-gray-100">
            <Image
              src={Female}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-center text-4xl font-medium tracking-wide text-gray-800">
              301
            </p>
            <h1 className=" mt-3 text-center text-2xl font-semibold text-mainBlue">
              Female
            </h1>
          </div>
        </section>
        <section className=" mt-14">
          <div className=" container">
            <h3 className=" mb-5 ml-10 font-inter text-2xl font-bold">
              Ringkasan Data
            </h3>
          </div>
          <section className=" inset-6 mx-10 grid w-full max-w-7xl grid-cols-4 gap-4">
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-orange-400 p-3 shadow-sm ring-4 ring-orange-300">
              <div className="block">
                <p className="text-5xl font-medium tracking-wide text-gray-800">
                  120
                </p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  Registered
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image
                  src={Registered}
                  alt="TotalView"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
            </div>
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-red-400 p-3 shadow-sm ring-4 ring-red-300">
              <div className="block">
                <p className="text-5xl font-medium tracking-wide text-gray-800">
                  100
                </p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  In Progress
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image
                  src={InProgress}
                  alt="TotalView"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
            </div>
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-indigo-400 p-3 shadow-sm ring-4 ring-indigo-300">
              <div className="block">
                <p className="text-5xl font-medium tracking-wide text-gray-800">
                  20
                </p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  Verify
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image
                  src={Verify}
                  alt="TotalView"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
            </div>
            <div className="inset-2 flex max-w-sm justify-between rounded-md bg-green-400 p-3 shadow-sm ring-4 ring-green-300">
              <div className="block">
                <p className="text-5xl font-medium tracking-wide text-gray-800">
                  14
                </p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">
                  Done
                </p>
              </div>
              <div className=" relative right-0 top-0">
                <Image
                  src={Done}
                  alt="TotalView"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
            </div>
          </section>
          <hr className="w-full" />
        </section>
      </section>
    </>
  );
}
