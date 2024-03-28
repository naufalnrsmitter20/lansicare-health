import { getData } from "@/services/profiles";
import ModalUsers from "@/src/app/(users)/component/modal/ModalUsers";
import ModalEditProfile from "@/src/app/(users)/component/ModalEditProfile";

interface Patient {
  nfcId: number;
  _id: number;
  riwayatPenyakit: string;
  pasienStatus: string;
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
  // Add the missing properties
  email: string;
  fullname: string;
}

const getTopicById = async (_id: number): Promise<Patient> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/topics/${_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();
};

export default async function addDetailsProfile(props: any) {
  const { params } = props;

  // Initialize outside to widen their scope
  let patientData: Patient | null = null;

  try {
    // Correct the function call to pass the _id correctly
    patientData = await getTopicById(params._id);
  } catch (error: any) {
    console.error(error.message);
    // Handle your error state appropriately (e.g., return an error message, set an error state, etc.)
    return <div>Error loading patient data.</div>;
  }

  if (!patientData) {
    // Handle the case where patientData is null
    return <div>No patient data found.</div>;
  }

  // Destructure after checking patientData is not null
  const {
    nfcId,
    _id,
    riwayatPenyakit,
    pasienStatus,
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
    email,
    fullname,
  } = patientData;

  return (
    <>
      <ModalEditProfile>
        <ModalUsers
          // Now pass all required props, including the newly added ones
          nfcId={nfcId}
          _id={_id}
          email={email}
          fullname={fullname}
          riwayatPenyakit={riwayatPenyakit}
          pasienStatus={pasienStatus}
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
      </ModalEditProfile>
    </>
  );
}
