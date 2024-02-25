import mongoose from "mongoose";

const { Schema } = mongoose;

// Definisikan enum PasienStatus
const PasienStatusEnum = {
  Registered: "Registered",
  InProgress: "In Progress",
  Verify: "Verify",
  Done: "Done",
};

const pasienSchema = new Schema(
  {
    nfcId: Number,
    email: String,
    password: {
      type: String,
      required: false,
    },
    riwayatPenyakit: String,
    pasienStatus: String,
    nama: String,
    NIK: Number,
    TTL: Date,
    JenisKelamin: String,
    Alamat: String,
    RT: Number,
    RW: Number,
    KelurahanDesa: String,
    Kecamatan: String,
    Agama: String,
    StatusPerkawinan: Boolean,
    Pekerjaan: String,
    Kewarganegaraan: String,
    BerlakuHingga: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Pasien || mongoose.model("Pasien", pasienSchema);
