"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RemovePatient from "./RemovePatient";
import AddDataIcons from "@/public/AddDataIcons.svg";
import Image from "next/image";
// Import InputSearch if it's available
import InputSearch from "../utilities/InputSearch";
import CopyClipboard from "../utilities/CopyClipboard";

enum PasienStatus {
  Registered = "Registered",
  InProgress = "In Progress",
  Verify = "Verify",
  Done = "Done",
}

type Patient = {
  _id: number;
  nfcId: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  nama: string;
  NIK: number;
  TTL: string;
  JenisKelamin: string;
  _Alamat: string;
  RT: number;
  RW: number;
  Kelurahan_Desa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: Date;
  updatedAt: string;
};

export const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function TableData() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { patients }: { patients: Patient[] } = await getData();
        setPatients(patients);
        setFilteredPatients(patients);
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter patients based on searchInput
    const filtered = patients.filter(
      (patient) =>
        patient.nfcId?.toString().includes(searchInput) ||
        patient.nama?.toString().includes(searchInput),
    );
    setFilteredPatients(filtered);
  }, [searchInput, patients]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const textCopy = "https://lansicare-healthes.vercel.app/users/profile";
  return (
    <>
      <section className="container mx-10 mt-7 block w-full max-w-7xl">
        <div className="max-w-2xl">
          {/* Pass the search input state and change handler to InputSearch */}
          <InputSearch
            searchInput={searchInput}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
        <div className="mt-10 flex justify-end">
          <div className="flex justify-end rounded-md border-2 border-mainBlue bg-sky-200 px-3 py-3 hover:ring-2 hover:ring-blue-200">
            <p className=" mr-14 text-xs font-medium">{textCopy}</p>
            <CopyClipboard text={textCopy} />
          </div>
        </div>
        <div>
          <Link
            href={"/admin/dashboard/addPasien"}
            className="absolute right-28 top-36 mb-2 me-2 flex rounded-lg bg-mainBlue px-3 py-2.5 text-sm font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <p className="mr-2">Add</p>
            <Image src={AddDataIcons} alt="Add Icons" width={20} />
          </Link>
        </div>
        <div className="mb-8 mt-8 max-w-7xl">
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr className=" border-4 border-white bg-mainBlue text-center text-white">
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    User ID
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Terakhir Diubah
                  </th>
                  <th scope="col" className="border-4 border-white px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((Data, index) => (
                  <tr
                    key={Data._id}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td
                      scope="row"
                      className="border-4 border-white bg-sky-200 px-6 py-3 text-center text-xs font-medium text-gray-900 dark:text-white"
                    >
                      {index + 1}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-3 text-xs">
                      {Data.nfcId}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-3 text-xs font-semibold">
                      {Data.nama}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-3 text-center text-xs">
                      {Data.pasienStatus}
                    </td>
                    <td className="border-4 border-white bg-sky-200 px-6 py-3 text-center text-xs">
                      {Data.updatedAt}
                    </td>

                    <td className="flex-1 justify-center border-4 border-white bg-sky-200 px-6 py-3">
                      <Link
                        href={`/admin/dashboard/editPasien/${Data._id}`}
                        className="mb-2 me-2 rounded-lg bg-green-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300 "
                      >
                        Edit & View
                      </Link>
                      <RemovePatient _id={Data._id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
