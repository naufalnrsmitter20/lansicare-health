import React from "react";
const getTopicById = async (_id: string): Promise<PatientData> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};
export default async function EditCP({ params }: { params: { _id: string } }) {
  const { _id: patientId } = params;

  let patientData: PatientData | null = null;

  try {
    patientData = await getTopicById(patientId);
  } catch (error: any) {
    console.error(error.message);
    return <div>Error loading patient data.</div>;
  }

  if (!patientData) {
    return <div>No patient data found.</div>;
  }

  const { _id, nama_dokter, penyakit, rumah_sakit, spesialis, tanggalCheckup } =
    patientData;
  return <></>;
}
