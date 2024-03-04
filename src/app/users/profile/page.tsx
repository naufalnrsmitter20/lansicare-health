"use client";
import React, { useState } from "react";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";
import Link from "next/link";
import Imageprofile from "@/public/userdefault.png";
import Image from "next/image";
import ModalEditProfile from "../component/ModalEditProfile";
import { useRouter } from "next/navigation";
import gammbarAsma from "@/public/gambar_Asma.jpg";
import Footer from "../component/Footer";

interface PatientData {
  _id: number;
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

const Profile = ({
  _id,
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
}): React.ReactElement => {
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
  // const [patients, setPatients] = useState<Pasiens[]>([]);
  // const [selectedPatient, setSelectedPatient] = useState<Pasiens | null>(null);
  const [isMutating, setIsMutating] = useState(false);
  const { data: session, status: sessionStatus } = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMutating(true);

    try {
      const res = await fetch(
        `https://lansicare-health.vercel.app/api/topics/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newNama,
            newTTL,
            newAlamat,
            newRT,
            newRW,
            newJenisKelamin,
            newKelurahanDesa,
            newKecamatan,
            newNIK,
            newEmail,
            newRiwayatPenyakit,
            newStatus,
            newAgama,
            newKewarganegaraan,
            newPekerjaan,
          }),
        },
      );

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

  return <section></section>;
};

export default function ProfilePage() {
  const { data: session, status: sessionStatus } = useSession();
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [IsVisible, setIsVisible] = useState(false);

  const HandleToggle = () => {
    setIsVisible(!IsVisible);
  };

  return (
    <>
      {!session ? (
        <>
          {!session ? <NavBar /> : <InBar />}

          <div className="mt-20 flex h-full min-w-full flex-1 flex-col justify-center align-middle lg:px-8">
            <div className="m-auto mt-52 grid w-full max-w-xl grid-cols-1 place-content-center pb-12 pt-5">
              <p className="text-center text-xl ">User is Not Authenticated!</p>
              <div className="mx-auto block w-full max-w-lg ">
                <Link href={"/users/signin"}>
                  <p className="mt-5 w-full rounded-lg border-2 border-black bg-white px-3 py-2.5 text-center text-base font-semibold text-black hover:bg-black  hover:text-white focus:ring-4 focus:ring-slate-300">
                    Sign In
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <section>
          <div className="w-screen scroll-smooth bg-base-50">
            {!session ? <NavBar /> : <InBar />}
            <>
              <div className="h-full pt-32">
                <div className="flex max-w-full flex-1 flex-col justify-center align-middle font-inter lg:px-8">
                  <div className="mx-auto inline-flex h-auto w-[1430px] place-items-center items-center justify-center py-[17px]">
                    <div className="relative h-auto w-[1417px]">
                      <div className="relative left-0 w-[1370px] rounded-[10px] bg-slate-50 pb-8 shadow">
                        <div className="absolute left-0 top-0 h-[336px] w-[1370px] rounded-tl-[10px] rounded-tr-[10px] bg-gradient-to-r from-blue-200 to-cyan-700" />
                        <div className="absolute left-[47.48px] top-[37.05px] inline-flex w-[1370px] items-center justify-start gap-[23px] pr-3 pt-4">
                          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                            <div className="self-stretch text-5xl font-bold leading-normal text-black">
                              Profile
                            </div>
                          </div>
                        </div>
                        <div className="absolute left-[47.48px] top-[168.13px] inline-flex h-[313px] w-[300px] items-center justify-center gap-[60px]">
                          <Image
                            src={Imageprofile}
                            className="h-[300px] w-[300px] rounded-[150px] border-4 border-slate-50"
                            alt="Image profile"
                          />
                        </div>
                        {/* content */}
                        <div className=" relative w-[1346.55px] pl-[47.48px] pt-[500px]">
                          <div className="flex justify-between">
                            <div>
                              {!session ? (
                                <div className="mb-4 text-[32px] font-semibold leading-10 tracking-wider text-black">
                                  Undefined User
                                </div>
                              ) : (
                                <div className="mb-4 text-[32px] font-semibold leading-10 tracking-wider text-black">
                                  {session.user?.email}
                                </div>
                              )}
                            </div>

                            {/* <input checked={modal} onChange={handleChange} type="checkbox" className="modal-toggle invisible" /> */}
                          </div>
                          <div>
                            <button
                              onClick={() => setModal(true)}
                              type="button"
                              className=" right-0 top-5 mb-2 me-2 rounded-lg border-2 border-black bg-white px-5 py-2 text-sm font-medium text-black hover:bg-black hover:text-white focus:ring-4 focus:ring-blue-300"
                            >
                              Edit Profil
                            </button>
                            <button
                              type="button"
                              onClick={HandleToggle}
                              className=" right-0 top-5 mb-2 me-2 rounded-lg border-2 border-black bg-white px-5 py-2 text-sm font-medium text-black hover:bg-black hover:text-white focus:ring-4 focus:ring-blue-300"
                            >
                              See Details
                            </button>

                            <div className="mt-10 grid max-w-5xl gap-6 md:grid-cols-1">
                              <div>
                                <label
                                  htmlFor="nama"
                                  className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                >
                                  Nama :
                                </label>
                                <input
                                  id="nama"
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                  placeholder="Naufal Nabil Ramadhan"
                                  disabled
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="nama"
                                  className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                >
                                  NFC ID :
                                </label>
                                <input
                                  id="nama"
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                  placeholder="778910029768"
                                  disabled
                                />
                              </div>
                              {IsVisible && (
                                <div className="grid gap-6 md:grid-cols-2 ">
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      NIK :
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="778910029768"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      TTL :
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Malang, 20 September 2007"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Jenis Kelamin :
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Laki Laki"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Status{" "}
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Registered"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Alamat
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Jl. Raya Candi 2A No. 3000"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      RT
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="09"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      RW
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="01"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Kelurahan/Desa
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="KarangBesuki"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Kecamatan
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Sukun"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Agama
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Islam"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Pekerjaan
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Software Engineer"
                                      disabled
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="nama"
                                      className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
                                    >
                                      Kewarganegaraan
                                    </label>
                                    <input
                                      id="nama"
                                      className="block w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-gray-900 placeholder:font-medium placeholder:text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                      placeholder="Indonesia"
                                      disabled
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <form>
                            <ModalEditProfile
                              isVisible={modal}
                              onClose={() => setModal(false)}
                            >
                              <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                  <label
                                    htmlFor="nama"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Nama
                                  </label>
                                  <input
                                    type="text"
                                    id="nama"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="Nama"
                                    required
                                  />
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
                                    id="TTL"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="TTL"
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
                              {!isMutating ? (
                                <button
                                  type="button"
                                  className="mt-4 rounded-lg bg-sky-600 px-5  py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-800"
                                >
                                  Edit Profile
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="btn loading rounded-lg  bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-800"
                                >
                                  Updating...
                                </button>
                              )}
                            </ModalEditProfile>
                          </form>
                          {/* modal */}
                        </div>
                        {/* content */}
                      </div>

                      <div className="mt-10 w-[1370px] max-w-full rounded-[10px] border bg-primary-1000 shadow-md">
                        <h3 className=" px-12 pb-4 pt-5 font-inter text-2xl font-medium text-black">
                          Riwayat Penyakit
                        </h3>
                        <div className="mt-4 px-12 pb-5">
                          <div className=" max-w-[240px] rounded-[10px] border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                            <a href="#">
                              <Image
                                className="rounded-t-lg"
                                src={gammbarAsma}
                                width={"300"}
                                height={"200"}
                                alt=""
                              />
                            </a>
                            <div className="p-5">
                              <a href="#">
                                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-800 dark:text-white">
                                  Asma
                                </h5>
                                <p className="text-sm">
                                  Senin, 19 January 100SM 12:00:35
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-10 mt-10 w-[1370px] max-w-full gap-6 rounded-md bg-primary-1000 px-12 pb-5 shadow-md md:grid-cols-1">
                        <h3 className=" pb-4 pt-5 font-inter text-2xl font-medium text-black">
                          Riwayat Check Up
                        </h3>
                        <div className="lg:grid ">
                          <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                              24 Maret 2023{" "}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                              <strong>Lokasi : </strong>Jawa Timur
                              <br />
                              <strong>Rumah Sakit : </strong>
                              Husada Bunda
                              <br />
                              <strong>Spesialis : </strong>
                              Umum
                              <br />
                              <strong>Dokter : </strong>
                              Dr. Isti Mintorowati
                            </p>
                            <p className="mt-3 text-sm">
                              <strong>Time : </strong>
                              2024-02-28T09:03:18.456Z{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
          <Footer />
        </section>
      )}
    </>
  );
}
