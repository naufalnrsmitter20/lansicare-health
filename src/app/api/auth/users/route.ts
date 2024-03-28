import User from "@/src/models/userModel";
import connect from "@/src/utils/db";
import { NextResponse } from "next/server";

interface NewUserRequest {
  fullname: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  fullname: string;
  email: string;
  role: string;
  Agama: string;
  Alamat: string;
  JenisKelamin: string;
  Kecamatan: string;
  KelurahanDesa: string;
  Kewarganegaraan: string;
  NIK: number;
  Pekerjaan: string;
  RT: number;
  RW: number;
  TTL: Date;
  riwayatPenyakit: string;
  StatusPerkawinan: boolean;
  nfcId: number;
  pasienStatus: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;
  await connect();
  const oldUser = await User.findOne({ email: body.email });
  if (oldUser)
    return NextResponse.json(
      { error: "Email is Already Exists" },
      { status: 422 },
    );
  const user = await User.create({ ...body });
  return NextResponse.json({
    user: {
      id: user._id.toString(),
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      Agama: user.Agama,
      Alamat: user.Alamat,
      JenisKelamin: user.JenisKelamin,
      Kecamatan: user.Kecamatan,
      KelurahanDesa: user.KelurahanDesa,
      Kewarganegaraan: user.Kewarganegaraan,
      NIK: user.NIK,
      Pekerjaan: user.Pekerjaan,
      RT: user.RT,
      RW: user.RW,
      TTL: user.TTL,
      nfcId: user.nfcId,
      riwayatPenyakit: user.riwayatPenyakit,
      StatusPerkawinan: user.StatusPerkawinan,
      pasienStatus: user.pasienStatus,
    },
  });
};

export async function GET() {
  try {
    await connect();
    const patients = await User.find();
    return NextResponse.json({ patients });
  } catch (error) {
    console.error("Error fetching patients:", error);
    return NextResponse.json(
      { message: "New Patient Failed to Created" },
      { status: 201 },
    );
  }
}
