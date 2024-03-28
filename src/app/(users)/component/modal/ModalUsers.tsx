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
export default function ModalUsers({
  _id,
  nfcId,
  email,
  riwayatPenyakit,
  pasienStatus,
  fullname,
  NIK,
  TTL,
  JenisKelamin,
  Alamat,
  RT,
  RW,
  KelurahanDesa,
  Kecamatan,
  Agama,
  Pekerjaan,
  Kewarganegaraan,
}: {
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
  Pekerjaan: string;
  Kewarganegaraan: string;
}) {
  const { data: session } = useSession();
  const [isMutating, setIsMutating] = useState(false);
  const [IsVisible, setIsVisible] = useState(false);
  const [patient, setPatient] = useState<Patient | null>(null);
  const router = useRouter();
  // State Edit Profile
  const [newNfcId, setNewNfcId] = useState(nfcId);
  const [newTTL, setNewTTL] = useState(TTL);
  const [newAlamat, setNewAlamat] = useState(Alamat);
  const [newRT, setNewRT] = useState(RT);
  const [newRW, setNewRW] = useState(RW);
  const [newJenisKelamin, setNewJenisKelamin] = useState(JenisKelamin);
  const [newKelurahanDesa, setNewKelurahan_desa] = useState(KelurahanDesa);
  const [newKecamatan, setNewKecamatan] = useState(Kecamatan);
  const [newNIK, setNewNIK] = useState(NIK);
  const [newRiwayatPenyakit, setNewRiwayatPenyakit] = useState(riwayatPenyakit);
  const [newPasienStatus, setNewStatus] = useState(pasienStatus);
  const [newAgama, setNewAgama] = useState(Agama);
  const [newKewarganegaraan, setNewKewarganegaraan] = useState(Kewarganegaraan);
  const [newPekerjaan, setNewPekerjaan] = useState(Pekerjaan);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMutating(true);

    try {
      const res = await fetch(`/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newNfcId,
          newTTL,
          newAlamat,
          newRT,
          newRW,
          newJenisKelamin,
          newKelurahanDesa,
          newKecamatan,
          newNIK,
          newRiwayatPenyakit,
          newPasienStatus,
          newAgama,
          newKewarganegaraan,
          newPekerjaan,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Patient");
      }
      console.log(await res.json());

      router.refresh();
      alert(`Data Uppdated!`);
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

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
  const onClose = () => {
    router.back();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                className="block w-full rounded-lg border border-gray-300 bg-slate-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                className="block w-full rounded-lg border border-gray-300 bg-slate-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                value={newNIK}
                onChange={(e) => setNewNIK(parseInt(e.target.value))}
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
                value={newTTL}
                onChange={(e) => setNewTTL(e.target.value)}
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
                value={newJenisKelamin}
                onChange={(e) => setNewJenisKelamin(e.target.value)}
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
                value={newAlamat}
                onChange={(e) => setNewAlamat(e.target.value)}
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
                value={newRT}
                onChange={(e) => setNewRT(parseInt(e.target.value))}
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
                value={newRW}
                onChange={(e) => setNewRW(parseInt(e.target.value))}
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
                value={newKelurahanDesa}
                onChange={(e) => setNewKelurahan_desa(e.target.value)}
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
                value={newKecamatan}
                onChange={(e) => setNewKecamatan(e.target.value)}
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
                value={newAgama}
                onChange={(e) => setNewAgama(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="agama"
                required
              />
            </div>
            <div>
              <label
                htmlFor="RiwayatPenyakit"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Riwayat Penyakit
              </label>
              <input
                type="text"
                id="RiwayatPenyakit"
                value={newRiwayatPenyakit}
                onChange={(e) => setNewRiwayatPenyakit(e.target.value)}
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
                value={newKewarganegaraan}
                onChange={(e) => setNewKewarganegaraan(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Kewarganegaraan"
                required
              />
            </div>
          </div>
        ) : null}
        <div className="flex">
          {!isMutating ? (
            <>
              <button
                type="submit"
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
          <button
            type="button"
            id="closedItem"
            onClick={() => onClose()}
            className="mx-3 ms-3 mt-4 rounded-lg  border border-gray-500 bg-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-600"
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
}
