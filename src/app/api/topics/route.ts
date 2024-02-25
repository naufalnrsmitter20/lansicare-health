import { NextResponse } from "next/server";
import Pasien from "@/src/models/Pasien";
import connect from "@/src/utils/db";

export async function POST(request: any): Promise<NextResponse> {
  const { nfcId, email, riwayatPenyakit, pasienStatus, nama, NIK, TTL, JenisKelamin, Alamat, RT, RW, KelurahanDesa, Kecamatan, Agama, StatusPerkawinan, Pekerjaan, Kewarganegaraan, BerlakuHingga } = await request.json();
  await connect();
  await Pasien.create({
    nfcId,
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
  });
  return NextResponse.json({ message: "New Patient Success to Created" }, { status: 201 });
}

export async function GET() {
  try {
    await connect();
    const patients = await Pasien.find();
    return NextResponse.json({ patients });
  } catch (error) {
    console.error("Error fetching patients:", error);
    return NextResponse.json({ message: "New Patient Failed to Created" }, { status: 201 });
  }
}

export async function DELETE(request: any): Promise<NextResponse> {
  const id: string | null = request.nextUrl.searchParams.get("_id");
  if (!id) {
    throw new Error("ID parameter is missing");
  }
  await connect();
  await Pasien.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data patient deleted!" }, { status: 200 });
}
