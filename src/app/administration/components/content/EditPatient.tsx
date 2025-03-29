"use client";

import { Label, Select, Spinner, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SpinnerProops from "../utilities/Spinner";
import Toaster from "../utilities/Toaster";
import { HiCheck } from "react-icons/hi";
import { LoadingButton, PrimaryButton } from "../utilities/Buttons";

export default function EditPatient({
  _id,
  nfcId,
  email,
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
  role,
  tanggalCheckup,
  rumah_sakit,
  nama_dokter,
  spesialis,
  penyakit,
}: {
  _id?: string;
  nfcId?: number;
  email?: string;
  pasienStatus?: string;
  fullname?: string;
  NIK?: number;
  TTL?: string;
  JenisKelamin?: string;
  Alamat?: string;
  RT?: number;
  RW?: number;
  KelurahanDesa?: string;
  Kecamatan?: string;
  Agama?: string;
  Pekerjaan?: string;
  Kewarganegaraan?: string;
  role?: "pasien" | "dokter" | "superadmin";
  tanggalCheckup: string;
  rumah_sakit: string;
  nama_dokter: string;
  spesialis: string;
  penyakit: string;
}): React.ReactElement {
  const [newNfcId, setNewNfcId] = useState(nfcId ?? "");
  const [newFullname, setNewNama] = useState(fullname ?? "");
  const [newTTL, setNewTTL] = useState(TTL ?? "");
  const [newAlamat, setNewAlamat] = useState(Alamat ?? "");
  const [newRT, setNewRT] = useState(RT ?? "");
  const [newRW, setNewRW] = useState(RW ?? "");
  const [newJenisKelamin, setNewJenisKelamin] = useState(JenisKelamin ?? "");
  const [newKelurahanDesa, setNewKelurahan_desa] = useState(
    KelurahanDesa ?? "",
  );
  const [newKecamatan, setNewKecamatan] = useState(Kecamatan ?? "");
  const [newNIK, setNewNIK] = useState(NIK ?? "");
  const [newEmail, setNewEmail] = useState(email ?? "");
  const [newPasienStatus, setNewStatus] = useState(pasienStatus ?? "");
  const [newAgama, setNewAgama] = useState(Agama ?? "");
  const [newKewarganegaraan, setNewKewarganegaraan] = useState(
    Kewarganegaraan ?? "",
  );
  const [newPekerjaan, setNewPekerjaan] = useState(Pekerjaan ?? "");
  const [newRole, setNewRole] = useState(role ?? ("admin" || "user"));

  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState(false);

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
          newFullname,
          newTTL,
          newAlamat,
          newRT,
          newRW,
          newJenisKelamin,
          newKelurahanDesa,
          newKecamatan,
          newNIK,
          newEmail,
          newPasienStatus,
          newAgama,
          newKewarganegaraan,
          newPekerjaan,
          newRole,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Patient");
      }
      console.log(await res.json());
      setIsVisible(true);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
    setIsMutating(false);
  };
  function onCloseModal() {
    setModal(false);
  }

  return (
    <>
      <section className="w-ful container mx-10 mt-7 block max-w-7xl">
        {role === "pasien" && (
          <>
            <div className="mb-10">
              <div className="flex justify-start gap-x-4">
                <PrimaryButton
                  onClick={() =>
                    router.push(`/administration/editPasien/CP/${_id}`)
                  }
                  className="max-w-56"
                  type="button"
                >
                  CheckUp Pasien
                </PrimaryButton>
                <PrimaryButton
                  onClick={() =>
                    router.push(`/administration/editPasien/RP/${_id}`)
                  }
                  className="max-w-56"
                  type="button"
                >
                  List Riwayat Penyakit
                </PrimaryButton>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="NFCID"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NFC ID
                  </label>
                  <TextInput
                    type="number"
                    id="NFCID"
                    onChange={(e) => setNewNfcId(parseInt(e.target.value))}
                    value={newNfcId}
                    placeholder="Nfc ID (Card Readers)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="fullname"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama
                  </label>
                  <TextInput
                    type="text"
                    id="fullname"
                    onChange={(e) => setNewNama(e.target.value)}
                    value={newFullname}
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div>
                  <label
                    htmlFor="NIK"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NIK
                  </label>
                  <TextInput
                    type="number"
                    id="NIK"
                    onChange={(e) => setNewNIK(parseInt(e.target.value))}
                    value={newNIK}
                    placeholder="16 digit"
                  />
                </div>
                <div>
                  <label
                    htmlFor="TTL"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    TTL
                  </label>
                  <TextInput
                    type="text"
                    id="TTL"
                    onChange={(e) => setNewTTL(e.target.value)}
                    value={newTTL}
                    placeholder="Tempat Tanggal Lahir"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    email
                  </label>
                  <TextInput
                    type="email"
                    id="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    value={newEmail}
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="alamat"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Alamat
                  </label>
                  <TextInput
                    type="text"
                    id="alamat"
                    onChange={(e) => setNewAlamat(e.target.value)}
                    value={newAlamat}
                    placeholder="Alamat Lengkap"
                  />
                </div>
                <div>
                  <label
                    htmlFor="rt"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    RT
                  </label>
                  <TextInput
                    type="number"
                    id="rt"
                    onChange={(e) => setNewRT(parseInt(e.target.value))}
                    value={newRT}
                    placeholder="RT"
                  />
                </div>
                <div>
                  <label
                    htmlFor="jenisKelamin"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Jenis Kelamin
                  </label>
                  <Select
                    className="bg-white"
                    id="jeniskelamin"
                    value={newJenisKelamin}
                    onChange={(e) => setNewJenisKelamin(e.target.value)}
                  >
                    <option>Pilih</option>
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="rw"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    RW
                  </label>
                  <TextInput
                    type="number"
                    id="rw"
                    onChange={(e) => setNewRW(parseInt(e.target.value))}
                    value={newRW}
                    placeholder="RW"
                  />
                </div>
                <div>
                  <label
                    htmlFor="agama"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Agama
                  </label>
                  <TextInput
                    type="text"
                    id="agama"
                    onChange={(e) => setNewAgama(e.target.value)}
                    value={newAgama}
                    placeholder="Agama"
                  />
                </div>
                <div>
                  <label
                    htmlFor="kelurahan_desa"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kelurahan/Desa
                  </label>
                  <TextInput
                    type="text"
                    id="kelurahan_desa"
                    onChange={(e) => setNewKelurahan_desa(e.target.value)}
                    value={newKelurahanDesa}
                    placeholder="Kelurahan/Desa"
                  />
                </div>
                <div>
                  <label
                    htmlFor="kewarganegaraan"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kewarganegaraan
                  </label>
                  <TextInput
                    type="text"
                    id="kewarganegaraan"
                    onChange={(e) => setNewKewarganegaraan(e.target.value)}
                    value={newKewarganegaraan}
                    placeholder="Indonesia"
                  />
                </div>
                <div>
                  <label
                    htmlFor="kecamatan"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kecamatan
                  </label>
                  <TextInput
                    type="text"
                    id="kecamatan"
                    onChange={(e) => setNewKecamatan(e.target.value)}
                    value={newKecamatan}
                    placeholder="Kecamatan"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pekerjaan"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pekerjaan
                  </label>
                  <TextInput
                    type="text"
                    id="pekerjaan"
                    onChange={(e) => setNewPekerjaan(e.target.value)}
                    value={newPekerjaan}
                    placeholder="Pekerjaan"
                  />
                </div>
                <div>
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <Select
                    className="bg-white"
                    id="status"
                    value={newPasienStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option>Pilih</option>
                    <option value="Rawat-inap">Rawat Inap</option>
                    <option value="Rawat-jalan">Rawat Jalan</option>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block w-full text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <Select
                    className="bg-white"
                    id="role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  >
                    <option value="pasien">Pasien</option>
                  </Select>
                </div>
                <div>
                  {!isMutating ? (
                    <>
                      {!isVisible ? (
                        <PrimaryButton type="submit">
                          <p>Edit</p>
                        </PrimaryButton>
                      ) : (
                        <PrimaryButton
                          type="button"
                          href="/administration/dataPage"
                        >
                          <p>Kembali Ke Halaman Data</p>
                        </PrimaryButton>
                      )}
                    </>
                  ) : (
                    <LoadingButton type="button" className="w-full">
                      <Spinner theme={SpinnerProops.spinner} color="white" />
                      <p className="ml-3 pt-0.5 text-[12px] font-semibold lg:text-[14px]">
                        Loading...
                      </p>
                    </LoadingButton>
                  )}
                </div>
              </div>
            </form>
            {isVisible && (
              <Toaster
                type={<HiCheck className="h-5 w-5" />}
                message="Data Berhasil Diperbarui"
              />
            )}
          </>
        )}

        {role === "dokter" && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullname"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama
                  </label>
                  <TextInput
                    type="text"
                    id="fullname"
                    onChange={(e) => setNewNama(e.target.value)}
                    value={newFullname}
                    placeholder="Nama Lengkap"
                    disabled
                  />
                  <p className="mt-1 text-xs">
                    Only Superadmin can change this field!
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    email
                  </label>
                  <TextInput
                    type="email"
                    id="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    value={newEmail}
                    placeholder="name@example.com"
                    disabled
                  />
                  <p className="mt-1 text-xs">
                    Only Superadmin can change this field!
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block w-full text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <Select
                    className="bg-white"
                    id="role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    disabled
                  >
                    <option value="dokter">Dokter</option>
                    <option value="superadmin">Superadmin</option>
                  </Select>
                  <p className="mt-1 text-xs">
                    Only Superadmin can change this field!
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="jenisKelamin"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Jenis Kelamin
                  </label>
                  <Select
                    className="bg-white"
                    id="jeniskelamin"
                    value={newJenisKelamin}
                    onChange={(e) => setNewJenisKelamin(e.target.value)}
                    disabled
                  >
                    <option value="">Pilih</option>
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </Select>
                  <p className="mt-1 text-xs">
                    Only Superadmin can change this field!
                  </p>
                </div>{" "}
                <div>
                  {!isMutating ? (
                    <>
                      {!isVisible ? (
                        <PrimaryButton type="submit">
                          <p>Edit</p>
                        </PrimaryButton>
                      ) : (
                        <PrimaryButton
                          type="button"
                          href="/administration/insight"
                        >
                          <p>Kembali Ke Halaman Insight</p>
                        </PrimaryButton>
                      )}
                    </>
                  ) : (
                    <LoadingButton type="button" className="w-full">
                      <Spinner theme={SpinnerProops.spinner} color="white" />
                      <p className="ml-3 pt-0.5 text-[12px] font-semibold lg:text-[14px]">
                        Loading...
                      </p>
                    </LoadingButton>
                  )}
                </div>
              </div>
            </form>
            {isVisible && (
              <Toaster
                type={<HiCheck className="h-5 w-5" />}
                message="Data Berhasil Diperbarui"
              />
            )}
          </>
        )}
      </section>
    </>
  );
}
