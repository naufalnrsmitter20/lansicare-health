import { Label, Modal, Spinner, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import {
  LoadingButton,
  PrimaryButton,
} from "./../../components/utilities/Buttons";
import SpinnerProops from "./../../components/utilities/Spinner";
import Toaster from "./../../components/utilities/Toaster";
import { HiCheck } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ModalRiwayatCheckUp({
  _id,
  nama_dokter,
  penyakit,
  rumah_sakit,
  spesialis,
  tanggalCheckup,
}: {
  _id: string;
  nama_dokter: string[];
  penyakit: string[];
  rumah_sakit: string[];
  spesialis: string[];
  tanggalCheckup: string[];
}) {
  const { data: session } = useSession();
  const [isMutating, setIsMutating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const router = useRouter();
  const [newTanggalCheckup, setNewTanggalCheckup] = useState<string[]>([
    ...tanggalCheckup,
  ]);
  const [newRumahSakit, setNewRumahSakit] = useState<string[]>([
    ...rumah_sakit,
  ]);
  const [newNamaDokter, setNewNamaDokter] = useState<string[]>([
    ...nama_dokter,
  ]);
  const [newSpesialis, setNewSpesialis] = useState<string[]>([...spesialis]);
  const [newPenyakit, setNewPenyakit] = useState<string[]>([...penyakit]);
  const [modal, setModal] = useState(true);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMutating(true);
    setIsVisible(false);

    try {
      const res = await fetch(`/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newNamaDokter,
          newPenyakit,
          newRumahSakit,
          newTanggalCheckup,
          newSpesialis,
        }),
      });

      if (!res.ok) {
        throw new Error("Gagal Menambahkan Riwayat Penyakit");
      }
      console.log(await res.json());
      setIsMutating(false);
      setIsVisible(true);
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

  const handleCheckUpChange = (index: number, value: string) => {
    const newND = [...newNamaDokter];
    const newP = [...newPenyakit];
    const newRS = [...newRumahSakit];
    const newS = [...newSpesialis];
    const newTC = [...newTanggalCheckup];
    newND[index] = value;
    newP[index] = value;
    newRS[index] = value;
    newS[index] = value;
    newTC[index] = value;
    setNewNamaDokter(newND);
  };

  const handleAddCheckUp = () => {
    setNewNamaDokter([...newNamaDokter, ""]);
    setNewPenyakit([...newPenyakit, ""]);
    setNewRumahSakit([...newRumahSakit, ""]);
    setNewSpesialis([...newSpesialis, ""]);
    setNewTanggalCheckup([...newTanggalCheckup, ""]);
  };

  const handleRemoveCheckUp = (index: number) => {
    const newND = newNamaDokter.filter((_, i) => i !== index);
    const newP = newPenyakit.filter((_, i) => i !== index);
    const newRS = newRumahSakit.filter((_, i) => i !== index);
    const newS = newSpesialis.filter((_, i) => i !== index);
    const newTC = newTanggalCheckup.filter((_, i) => i !== index);
    setNewNamaDokter(newND);
    setNewNamaDokter(newP);
    setNewNamaDokter(newRS);
    setNewNamaDokter(newS);
    setNewNamaDokter(newTC);
  };
  function onCloseModal() {
    router.back();
  }
  return (
    <Modal show={modal} size="lg" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              CheckUp Pasien
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Tanggal" value="Tanggal" />
              </div>
              <TextInput
                id="Tanggal"
                name="Tanggal"
                type="date"
                value={newTanggalCheckup}
                onChange={(e) => setNewTanggalCheckup(e.target.value)}
                placeholder="Tanggal CheckUp"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="rumahsakit" value="Rumah Sakit" />
              </div>
              <TextInput
                id="rumahsakit"
                name="rumahsakit"
                type="text"
                value={newRumahSakit}
                onChange={(e) => setNewRumahSakit(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="dokter" value="Nama Dokter" />
              </div>
              <TextInput
                id="dokter"
                name="dokter"
                type="text"
                value={newNamaDokter}
                onChange={(e) => setNewNamaDokter(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="spesialis" value="Spesialis" />
              </div>
              <TextInput
                id="spesialis"
                name="spesialis"
                type="text"
                value={newSpesialis}
                onChange={(e) => setNewSpesialis(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="penyakit" value="Penyakit" />
              </div>
              <TextInput
                id="penyakit"
                name="penyakit"
                type="text"
                value={newPenyakit}
                onChange={(e) => setNewPenyakit(e.target.value)}
              />
            </div>

            <div className="w-full">
              {!isMutating ? (
                <>
                  {!isVisible ? (
                    <PrimaryButton type="submit">
                      <p>Submit</p>
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton type="button" onClick={onCloseModal}>
                      <p>Kembali</p>
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
            {isVisible && (
              <Toaster
                type={<HiCheck className="h-5 w-5" />}
                message="Data Berhasil Diperbarui"
              />
            )}
          </div> */}
        </form>
      </Modal.Body>
    </Modal>
  );
}
