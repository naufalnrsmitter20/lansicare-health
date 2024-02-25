import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import Pasien from "@/src/models/Pasien";

export async function PUT(request: Request, { params }: { params: { _id: any } }) {
  const { _id } = params;
  const {
    newNfcId: nfcId,
    newEmail: email,
    newRiwayatPenyakit: riwayatPenyakit,
    newPasienStatus: pasienStatus,
    newNama: nama,
    newNIK: NIK,
    newTTL: TTL,
    newJenisKelamin: JenisKelamin,
    newAlamat: Alamat,
    newRT: RT,
    newRW: RW,
    newKelurahanDesa: KelurahanDesa,
    newKecamatan: Kecamatan,
    newAgama: Agama,
    newStatusPerkawinan: StatusPerkawinan,
    newPekerjaan: Pekerjaan,
    newKewarganegaraan: Kewarganegaraan,
    newBerlakuHingga: BerlakuHingga,
  } = await request.json();
  await connect();
  await Pasien.findByIdAndUpdate(_id, { nfcId, email, riwayatPenyakit, pasienStatus, nama, NIK, TTL, JenisKelamin, Alamat, RT, RW, KelurahanDesa, Kecamatan, Agama, StatusPerkawinan, Pekerjaan, Kewarganegaraan, BerlakuHingga });
  return NextResponse.json({ message: "Patient updated" }, { status: 200 });
}

export async function GET(request: any, { params }: { params: { _id: any } }) {
  const { _id } = params;
  await connect();
  const pasien = await Pasien.findOne({ _id: _id });
  return NextResponse.json(pasien, { status: 200 });
}
