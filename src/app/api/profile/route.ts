import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import User from "@/src/models/userModel";

export async function POST(request: any): Promise<NextResponse> {
  const {
    nfcId,
    email,
    riwayatPenyakit,
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
    StatusPerkawinan,
    Pekerjaan,
    Kewarganegaraan,
    BerlakuHingga,
  } = await request.json();
  await connect();
  await User.create({
    nfcId,
    email,
    riwayatPenyakit,
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
    StatusPerkawinan,
    Pekerjaan,
    Kewarganegaraan,
    BerlakuHingga,
  });
  return NextResponse.json(
    { message: "New Patient Success to Created" },
    { status: 201 },
  );
}

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
