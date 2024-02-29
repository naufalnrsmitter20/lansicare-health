import React from "react";
import image1 from "@/public/X RPL 8_22_Muhammad Keefa Syawal.jpg";
import image2 from "@/public/X RPL 8_26_Naufal Nabil Ramadhan.jpg";
import image3 from "@/public/X RPL 8_30_Raisya Ramadhani Achmad.jpg";
import image4 from "@/public/X RPL 8_31_Rakha Adrian Nur Tanaya.jpg";
import Image from "next/image";
export default function AboutComponent() {
  return (
    <>
      <section>
        <div className="mx-auto mt-40 text-base-100">
          <h6 className="m-1 text-center text-xl">About us</h6>
          <h1 className="mx-80 mb-20 mt-10 bg-gradient-to-r from-darkBlue to-mainBlue bg-clip-text text-center text-6xl font-bold text-transparent">
            InnoSync Team
          </h1>
        </div>

        <div className=" mx-auto h-auto w-[1380px] place-items-center justify-center rounded-[10px] bg-primary-1000 shadow-md ">
          <div className="relative h-full p-[100px]">
            <div className="relative mb-20 mt-[200px] grid h-10 w-full grid-cols-4">
              <div className="relative flex justify-center">
                <div className="group absolute -top-64 w-52 transition-all hover:scale-105">
                  <Image
                    src={image1}
                    alt="image"
                    className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                  />
                  <p className="mt-3 hidden text-center text-base font-medium group-hover:block">
                    Muhammad Keefa Syawal (Hipster)
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="group absolute -top-32 w-52 transition-all hover:scale-105">
                  <Image
                    src={image2}
                    alt="image"
                    className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                  />
                  <p className="mt-3 hidden text-center text-base font-medium group-hover:block">
                    Naufal Nabil Ramadhan (Hacker)
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="group absolute -top-64 w-52 transition-all hover:scale-105">
                  <Image
                    src={image3}
                    alt="image"
                    className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                  />
                  <p className="mt-3 hidden text-center text-base font-medium group-hover:block">
                    Raisya Ramadhani Achmad (Hustler)
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="group absolute -top-32 w-52  transition-all hover:scale-105">
                  <Image
                    src={image4}
                    alt="image"
                    className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                  />
                  <p className="mt-3 hidden text-center text-base font-medium group-hover:block">
                    Rakha Adrian Nur Tanaya (Leader)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* deskripsi */}
        <div className=" mx-auto mt-[10px] h-auto w-[1380px] place-items-center justify-center rounded-[10px] bg-primary-1000 shadow-md ">
          <div className="relative mb-20 ml-10 mt-20 h-full">
            <div className="ml-10 mt-10 flex pb-10 pt-10">
              <div className=" w-full max-w-5xl">
                <h1 className="flex justify-start text-5xl font-bold">Who</h1>
                <h3 className="ml-7 max-w-7xl  text-5xl font-bold text-darkBlue">
                  are we
                </h3>
              </div>
              <div className="font-medium">
                <p className=" ml-20 mr-20 flex justify-normal text-left">
                  Selamat datang di website resmi LansiCare! Kami adalah tim
                  InnoSync yang terdiri dari empat individu berbakat yang
                  terdiri dari Rakha, sebagai ketua kami, memimpin dengan visi
                  yang kuat serta mengarahkan tim untuk terus berkembang. Ada
                  pula hacker kami yaitu Naufal, developer yang membawa keahlian
                  teknis yang mendalam serta bertanggung jawab atas program yang
                  ada. Serta ada Raisya, hustler kami, memiki keterampilan
                  komunikasi dan negosiasi yang luar biasa, dan ada pula Keefa,
                  hipster kreatif, menambahkan sentuhan estetika yang unik,
                  sehingga membawa kesan megah kepada tim kami.
                </p>
                <br />
                <p className="ml-20 mr-20 flex justify-normal text-left">
                  Kami menyediakan platform untuk memudahkan lansia dalam
                  menjalani check-up kesehatan. Website ini dirancang untuk
                  memberikan bantuan dengan melakukan registrasi check-up secara
                  online sehingga mereka tidak perlu mengantre di tempat. Selain
                  itu, kami juga menyediakan fitur dimana lansia bisa mengecek
                  riwayat kesehatan sehingga mempermudah mereka untuk mengakses
                  informasi kesehatan. Dengan adanya website ini, kami berharap
                  bisa memberikan alternatif atas permasalahan yang ada,
                  sehingga website kami memiliki manfaat bagi lingkungan
                  sekitar.
                </p>
                <br />
                <p className="ml-20 mr-20 flex justify-normal text-left">
                  Kami bersatu untuk menciptakan solusi luar biasa dan
                  menghadirkan ide-ide kreatif. Terima kasih telah berkunjung ke
                  situs kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
