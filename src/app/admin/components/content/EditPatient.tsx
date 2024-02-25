"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

enum PasienStatus {
  Registered = "Registered",
  InProgress = "In Progress",
  Verify = "Verify",
  Done = "Done",
}

interface PatientData {
  _id: number;
  nfcId: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  nama: string;
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
}
export default function EditPatient({
  _id,
  nfcId,
  email,
  riwayatPenyakit,
  pasienStatus,
  nama,
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
  nama: string;
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
}): React.ReactElement {
  const [newNfcId, setNewNfcId] = useState(nfcId);
  const [newNama, setNewNama] = useState(nama);
  const [newTTL, setNewTTL] = useState(TTL);
  const [newAlamat, setNewAlamat] = useState(Alamat);
  const [newRT, setNewRT] = useState(RT);
  const [newRW, setNewRW] = useState(RW);
  const [newJenisKelamin, setNewJenisKelamin] = useState(JenisKelamin);
  const [newKelurahanDesa, setNewKelurahan_desa] = useState(KelurahanDesa);
  const [newKecamatan, setNewKecamatan] = useState(Kecamatan);
  const [newNIK, setNewNIK] = useState(NIK);
  const [newEmail, setNewEmail] = useState(email);
  const [newRiwayatPenyakit, setNewRiwayatPenyakit] = useState(riwayatPenyakit);
  const [newStatus, setNewStatus] = useState(pasienStatus);
  const [newAgama, setNewAgama] = useState(Agama);
  const [newKewarganegaraan, setNewKewarganegaraan] = useState(Kewarganegaraan);
  const [newPekerjaan, setNewPekerjaan] = useState(Pekerjaan);
  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMutating(true);

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newNfcId, newNama, newTTL, newAlamat, newRT, newRW, newJenisKelamin, newKelurahanDesa, newKecamatan, newNIK, newEmail, newRiwayatPenyakit, newStatus, newAgama, newKewarganegaraan, newPekerjaan }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Patient");
      }
      router.refresh();
      alert(`Data Uppdated!`);
      router.push("/admin/dashboard/dataPage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="container max-w-7xl w-ful mx-10 mt-7 block">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="NFCID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                NFC ID
              </label>
              <input
                type="number"
                id="NFCID"
                onChange={(e) => setNewNfcId(parseInt(e.target.value))}
                value={newNfcId}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nfc ID (Card Readers)"
                required
              />
            </div>
            <div>
              <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                onChange={(e) => setNewNama(e.target.value)}
                value={newNama}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div>
              <label htmlFor="NIK" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                NIK
              </label>
              <input
                type="number"
                id="NIK"
                onChange={(e) => setNewNIK(parseInt(e.target.value))}
                value={newNIK}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="16 digit"
                required
              />
            </div>
            <div>
              <label htmlFor="TTL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                TTL
              </label>
              <input
                type="date"
                id="TTL"
                onChange={(e) => setNewTTL(e.target.value)}
                value={newTTL}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                onChange={(e) => setNewAlamat(e.target.value)}
                value={newAlamat}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Alamat Lengkap"
                required
              />
            </div>
            <div>
              <label htmlFor="riwayatPenyakit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Riwayat Penyakit
              </label>
              <input
                type="text"
                id="riwayatPenyakit"
                onChange={(e) => setNewRiwayatPenyakit(e.target.value)}
                value={newRiwayatPenyakit}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Riwayat Penyakit"
                required
              />
            </div>
            <div>
              <label htmlFor="rt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                RT
              </label>
              <input
                type="number"
                id="rt"
                onChange={(e) => setNewRT(parseInt(e.target.value))}
                value={newRT}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="RT"
                required
              />
            </div>
            <div>
              <label htmlFor="jenisKelamin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Jenis Kelamin
              </label>
              <input
                type="text"
                id="jenisKelamin"
                onChange={(e) => setNewJenisKelamin(e.target.value)}
                value={newJenisKelamin}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jenis Kelamin"
                required
              />
            </div>

            <div>
              <label htmlFor="rw" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                RW
              </label>
              <input
                type="number"
                id="rw"
                onChange={(e) => setNewRW(parseInt(e.target.value))}
                value={newRW}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="RW"
                required
              />
            </div>
            <div>
              <label htmlFor="agama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Agama
              </label>
              <input
                type="text"
                id="agama"
                onChange={(e) => setNewAgama(e.target.value)}
                value={newAgama}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Agama"
                required
              />
            </div>
            <div>
              <label htmlFor="kelurahan_desa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Kelurahan/Desa
              </label>
              <input
                type="text"
                id="kelurahan_desa"
                onChange={(e) => setNewKelurahan_desa(e.target.value)}
                value={newKelurahanDesa}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kelurahan/Desa"
                required
              />
            </div>
            <div>
              <label htmlFor="kewarganegaraan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Kewarganegaraan
              </label>
              <input
                type="text"
                id="kewarganegaraan"
                onChange={(e) => setNewKewarganegaraan(e.target.value)}
                value={newKewarganegaraan}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Indonesia"
                required
              />
            </div>
            <div>
              <label htmlFor="kecamatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Kecamatan
              </label>
              <input
                type="text"
                id="kecamatan"
                onChange={(e) => setNewKecamatan(e.target.value)}
                value={newKecamatan}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kecamatan"
                required
              />
            </div>
            <div>
              <label htmlFor="pekerjaan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Pekerjaan
              </label>
              <input
                type="text"
                id="pekerjaan"
                onChange={(e) => setNewPekerjaan(e.target.value)}
                value={newPekerjaan}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pekerjaan"
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Status
              </label>
              <select
                name="status"
                id="status"
                onChange={(e) => setNewStatus(e.target.value as PasienStatus)}
                value={newStatus}
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-mainBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="null">-- SELECT --</option>
                <option value="Registered">Registered</option>
                <option value="InProgress">In Progress</option>
                <option value="Verify">Verify</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div>
              {!isMutating ? (
                <button type="submit" className="text-white bg-mainBlue hover:bg-sky-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full">
                  <p>Edit</p>
                </button>
              ) : (
                <button type="button" className="text-white bg-mainBlue hover:bg-sky-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full">
                  <p>Saving...</p>
                </button>
              )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
