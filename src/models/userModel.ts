import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface UserDocument extends Document {
  email: string;
  fullname: string;
  password: string;
  role: "pasien" | "dokter" | "superadmin";
  comparePassword(candidatePassword: string): Promise<boolean>;
  riwayatPenyakit: string[];
  pasienStatus: "Rawat-inap" | "Rawat-jalan";
  NIK: number;
  TTL: string;
  JenisKelamin: "Laki-Laki" | "Perempuan";
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
  nfcId: number;
  tanggalCheckup: string[];
  rumah_sakit: string[];
  nama_dokter: string[];
  status_dokter: "online" | "offline";
  spesialis: string[];
  penyakit: string[];
}

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["pasien", "dokter", "superadmin"],
      default: "pasien",
    },
    riwayatPenyakit: {
      type: [String],
    },
    pasienStatus: {
      type: String,
    },
    NIK: {
      type: Number,
    },
    TTL: {
      type: String,
    },
    JenisKelamin: {
      type: String,
    },
    Alamat: {
      type: String,
    },
    RT: {
      type: Number,
    },
    RW: {
      type: Number,
    },
    KelurahanDesa: {
      type: String,
    },
    Kecamatan: {
      type: String,
    },
    Agama: {
      type: String,
    },
    StatusPerkawinan: {
      type: Boolean,
    },
    Pekerjaan: {
      type: String,
    },
    nfcId: {
      type: Number,
    },
    Kewarganegaraan: {
      type: String,
    },
    tanggalCheckup: {
      type: [String],
    },
    rumah_sakit: {
      type: [String],
    },
    nama_dokter: {
      type: [String],
    },
    status_dokter: {
      type: String,
      enum: ["online", "offline", null],
      default: null,
    },
    spesialis: {
      type: [String],
    },

    penyakit: {
      type: [String],
    },
  },
  { timestamps: true },
);

// Pre-save hook to hash the password
userSchema.pre<UserDocument>("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
