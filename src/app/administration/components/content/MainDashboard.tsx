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
        <section className=" p-6 mt-7 bg-white shadow-md shadow-slate-300 rounded-lg hover:bg-gray-100 w-full max-w-7xl mx-10 inset-6 grid grid-cols-4 gap-4">
          <div className="block p-6 bg-white border border-slate-500 rounded-lg shadow-slate-700 hover:bg-gray-100 max-w-sm inset-2 shadow-sm ">
            <Image
              src={TotalView}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-4xl text-gray-800 font-medium text-center tracking-wide">1000</p>
            <h1 className=" mt-3 text-2xl font-semibold text-mainBlue text-center">Total View</h1>
          </div>
          <div className="block p-6 bg-white border border-slate-500 rounded-lg shadow-slate-700 hover:bg-gray-100 max-w-sm inset-2 shadow-sm">
            <Image
              src={TotalUser}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-4xl text-gray-800 font-medium text-center tracking-wide">1000</p>
            <h1 className=" mt-3 text-2xl font-semibold text-mainBlue text-center">Total Users</h1>
          </div>
          <div className="block p-6 bg-white border border-slate-500 rounded-lg shadow-slate-700 hover:bg-gray-100 max-w-sm inset-2 shadow-sm">
            <Image
              src={Male}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-4xl text-gray-800 font-medium text-center tracking-wide">1000</p>
            <h1 className=" mt-3 text-2xl font-semibold text-mainBlue text-center">Male</h1>
          </div>
          <div className="block p-6 bg-white border border-slate-500 rounded-lg shadow-slate-700 hover:bg-gray-100 max-w-sm inset-2 shadow-sm">
            <Image
              src={Female}
              alt="TotalView"
              width={50}
              className="3135862916
            3135862916
            mx-auto"
            />
            <p className=" mt-4 text-4xl text-gray-800 font-medium text-center tracking-wide">1000</p>
            <h1 className=" mt-3 text-2xl font-semibold text-mainBlue text-center">Female</h1>
          </div>
        </section>
        <section className=" mt-14">
          <div className=" container">
            <h3 className=" text-2xl font-bold font-inter ml-10 mb-5">Ringkasan Data</h3>
          </div>
          <section className=" w-full max-w-7xl mx-10 inset-6 grid grid-cols-4 gap-4">
            <div className="p-3 bg-orange-400 rounded-md ring-4 ring-orange-300 max-w-sm inset-2 shadow-sm flex justify-between">
              <div className="block">
                <p className="text-5xl text-gray-800 font-medium tracking-wide">120</p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="text-xl font-semibold font-inter text-black relative bottom-0 left-0 mt-10">Registered</p>
              </div>
              <div className=" relative right-0 top-0">
                <Image src={Registered} alt="TotalView" width={50} height={50} className="" />
              </div>
            </div>
            <div className="p-3 bg-red-400 rounded-md ring-4 ring-red-300 max-w-sm inset-2 shadow-sm flex justify-between">
              <div className="block">
                <p className="text-5xl text-gray-800 font-medium tracking-wide">120</p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="text-xl font-semibold font-inter text-black relative bottom-0 left-0 mt-10">In Progress</p>
              </div>
              <div className=" relative right-0 top-0">
                <Image src={InProgress} alt="TotalView" width={50} height={50} className="" />
              </div>
            </div>
            <div className="p-3 bg-indigo-400 rounded-md ring-4 ring-indigo-300 max-w-sm inset-2 shadow-sm flex justify-between">
              <div className="block">
                <p className="text-5xl text-gray-800 font-medium tracking-wide">120</p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="text-xl font-semibold font-inter text-black relative bottom-0 left-0 mt-10">Verify</p>
              </div>
              <div className=" relative right-0 top-0">
                <Image src={Verify} alt="TotalView" width={50} height={50} className="" />
              </div>
            </div>
            <div className="p-3 bg-green-400 rounded-md ring-4 ring-green-300 max-w-sm inset-2 shadow-sm flex justify-between">
              <div className="block">
                <p className="text-5xl text-gray-800 font-medium tracking-wide">120</p>
                <p className="text-xs font-normal text-gray-700">Users</p>
                <p className="text-xl font-semibold font-inter text-black relative bottom-0 left-0 mt-10">Done</p>
              </div>
              <div className=" relative right-0 top-0">
                <Image src={Done} alt="TotalView" width={50} height={50} className="" />
              </div>
            </div>
          </section>
          <hr className="w-full" />
        </section>
      </section>
    </>
  );
}
