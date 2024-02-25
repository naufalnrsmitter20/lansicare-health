"use client";
import { Date, STATES } from "mongoose";
import { useRouter } from "next/navigation";
import React, { useState, SyntheticEvent } from "react";
import Patient from "@/src/models/Pasien";

const PasienStatusEnum = {
  Registered: "Registered",
  InProgress: "In Progress",
  Verify: "Verify",
  Done: "Done",
};
export default function AddPatient() {
  const [nfcId, setNfcId] = useState("");
  const [nama, setNama] = useState("");
  const [TTL, setTTL] = useState("");
  const [alamat, setAlamat] = useState("");
  const [RT, setRT] = useState("");
  const [RW, setRW] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [kelurahanDesa, setKelurahanDesa] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [NIK, setNIK] = useState("");
  const [email, setEmail] = useState("");
  const [riwayatPenyakit, setRiwayatPenyakit] = useState("");
  const [status, setStatus] = useState("");
  const [agama, setAgama] = useState("");
  const [kewarganegaraan, setKewarganegaraan] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const router = useRouter();
  //   const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nfcId: parseInt(nfcId),
          email: email,
          riwayatPenyakit: riwayatPenyakit,
          pasienStatus: status,
          nama: nama,
          NIK: parseInt(NIK),
          TTL: TTL,
          JenisKelamin: jenisKelamin,
          Alamat: alamat,
          RT: parseInt(RT),
          RW: parseInt(RW),
          KelurahanDesa: kelurahanDesa,
          Kecamatan: kecamatan,
          Agama: agama,
          Pekerjaan: pekerjaan,
          Kewarganegaraan: kewarganegaraan,
        }),
      });
      setIsMutating(false);
      if (res.ok) {
        router.push("/admin/dashboard/dataPage");
      } else {
        throw new Error("Failed to create a topic");
      }
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
                onChange={(e) => setNfcId(e.target.value)}
                value={nfcId}
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
                onChange={(e) => setNama(e.target.value)}
                value={nama}
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
                onChange={(e) => setNIK(e.target.value)}
                value={NIK}
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
                onChange={(e) => setTTL(e.target.value)}
                value={TTL}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setAlamat(e.target.value)}
                value={alamat}
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
                onChange={(e) => setRiwayatPenyakit(e.target.value)}
                value={riwayatPenyakit}
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
                onChange={(e) => setRT(e.target.value)}
                value={RT}
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
                onChange={(e) => setJenisKelamin(e.target.value)}
                value={jenisKelamin}
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
                onChange={(e) => setRW(e.target.value)}
                value={RW}
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
                onChange={(e) => setAgama(e.target.value)}
                value={agama}
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
                onChange={(e) => setKelurahanDesa(e.target.value)}
                value={kelurahanDesa}
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
                onChange={(e) => setKewarganegaraan(e.target.value)}
                value={kewarganegaraan}
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
                onChange={(e) => setKecamatan(e.target.value)}
                value={kecamatan}
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
                onChange={(e) => setPekerjaan(e.target.value)}
                value={pekerjaan}
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
                onChange={(e) => setStatus(e.target.value)}
                value={status}
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
                  <p>Add</p>
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
