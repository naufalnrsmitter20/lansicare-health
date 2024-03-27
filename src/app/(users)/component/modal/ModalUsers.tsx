"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
enum PasienStatus {
  rawatInap = "Rawat Inap",
  rawatJalan = "Rawat Jalan",
}

type Patient = {
  _id: number;
  nfcId: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  fullname: string;
  NIK: number;
  TTL: string;
  JenisKelamin: string;
  Alamat: string;
  RT: number;
  RW: number;
  KelurahanDesa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: Date;
  updatedAt: string;
};
export default function ModalUsers() {
  const { data: session } = useSession();
  const [isMutating, setIsMutating] = useState(false);
  const [IsVisible, setIsVisible] = useState(false);
  const [patient, setPatient] = useState<Patient | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      setIsMutating(true);
      if (session) {
        try {
          const response = await fetch(`/api/topics/`);
          const data = await response.json();
          const patients = data.patients || [];
          const loggedInUser = patients.find(
            (patient: any) => patient.email === session.user?.email,
          );
          setPatient(loggedInUser || null);
          setIsMutating(false);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };

    fetchProfile();
  }, [session, router]);

  return (
    <>
      {patient ? (
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="fullname"
              className="mb-2 block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama
            </label>
            <div
              id="fullname"
              className="block w-full rounded-lg border border-gray-300 bg-slate-500 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              {patient.fullname}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              {patient.email}
            </div>
          </div>
          <div>
            <label
              htmlFor="NIK"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              NIK
            </label>
            <input
              type="number"
              id="NIK"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="NIK"
              required
            />
          </div>
          <div>
            <label
              htmlFor="TTL"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              TTL
            </label>
            <input
              type="date"
              id="Create At"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Create At"
              required
            />
          </div>
          <div>
            <label
              htmlFor="jeniskelamin"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Kelamin
            </label>
            <input
              type="text"
              id="jeniskelamin"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Jenis Kelamin"
              required
            />
          </div>
          <div>
            <label
              htmlFor="alamat"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Alamat"
              required
            />
          </div>
          <div>
            <label
              htmlFor="RT"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              RT
            </label>
            <input
              type="number"
              id="RT"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="RT"
              required
            />
          </div>
          <div>
            <label
              htmlFor="RW"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              RW
            </label>
            <input
              type="number"
              id="RW"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="RW"
              required
            />
          </div>
          <div>
            <label
              htmlFor="kelurahandesa"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Kelurahan/Desa
            </label>
            <input
              type="text"
              id="kelurahandesa"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Kelurahan/Desa"
              required
            />
          </div>
          <div>
            <label
              htmlFor="kecamatan"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Kecamatan
            </label>
            <input
              type="text"
              id="kecamatan"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Kecamatan"
              required
            />
          </div>
          <div>
            <label
              htmlFor="agama"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Agama
            </label>
            <input
              type="text"
              id="agama"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="agama"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pekerjaan"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Pekerjaan
            </label>
            <input
              type="text"
              id="pekerjaan"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Pekerjaan"
              required
            />
          </div>
          <div>
            <label
              htmlFor="kewarganegaraan"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Kewarganegaraan
            </label>
            <input
              type="text"
              id="kewarganegaraan"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Kewarganegaraan"
              required
            />
          </div>
        </div>
      ) : null}

      {!isMutating ? (
        <>
          <button
            type="button"
            className="mt-4 rounded-lg bg-sky-600 px-5  py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            Edit Profile
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="btn loading rounded-lg  bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            Updating...
          </button>
        </>
      )}
    </>
  );
}
