// "use client";
import React from "react";
import SessionAuth from "../../../components/SessionAuth";
import Sidebar from "../../../components/content/Sidebar";
import Headers from "../../../components/content/Headers";
import Link from "next/link";
import { useSession } from "next-auth/react";
import TableData from "../../../components/content/TableData";
import EditPatient from "../../../components/content/EditPatient";

enum PasienStatus {
  Registered = "Registered",
  InProgress = "In Progress",
  Verify = "Verify",
  Done = "Done",
}

interface PatientData {
  nfcId: number;
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

const getTopicById = async (_id: number) => {
  try {
    const res = await fetch(
      `https://lansicare-health.vercel.app/api/topics/${_id}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function EditDataPages({ params }: { params: any }) {
  const { id } = params;
  try {
    const patientData: PatientData = await getTopicById(id);
    const {
      nfcId,
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
      StatusPerkawinan,
      Pekerjaan,
      Kewarganegaraan,
      BerlakuHingga,
    } = patientData;
    // const {  } = KTP;

    return (
      <>
        <div>
          <Sidebar />
          <div className="ml-64 w-3/4 max-w-full">
            <Headers name="EDIT PATIENT" />
            <div className="absolute right-0 top-0 mx-4 max-w-lg">
              <p className=" mt-7 w-full rounded-full bg-gray-800 px-5 py-4 text-center text-base font-medium text-white">
                Logged in! :
              </p>
            </div>
            <EditPatient
              nfcId={nfcId}
              _id={_id}
              email={email}
              riwayatPenyakit={riwayatPenyakit}
              pasienStatus={pasienStatus}
              nama={nama}
              NIK={NIK}
              TTL={TTL}
              JenisKelamin={JenisKelamin}
              Alamat={Alamat}
              RT={RT}
              RW={RW}
              KelurahanDesa={KelurahanDesa}
              Kecamatan={Kecamatan}
              Agama={Agama}
              Pekerjaan={Pekerjaan}
              Kewarganegaraan={Kewarganegaraan}
            />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return <div>Error fetching patient data. Please try again later.</div>;
  }
}
