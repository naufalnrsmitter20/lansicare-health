import React from "react";
import image1 from "@/public/X RPL 8_22_Muhammad Keefa Syawal.jpg";
import image2 from "@/public/X RPL 8_26_Naufal Nabil Ramadhan.jpg";
import image3 from "@/public/X RPL 8_30_Raisya Ramadhani Achmad.jpg";
import image4 from "@/public/X RPL 8_31_Rakha Adrian Nur Tanaya.jpg";
import Image from "next/image";
export default function AboutComponent() {
  return (
    <>
      <section className="bg-base-50 pb-5">
        <div className="mx-auto pt-[120px] text-base-100 lg:pt-[160px]">
          <h6 className="m-1 text-center text-sm font-medium lg:text-xl">
            About us
          </h6>
          <h1 className="mx-auto mt-5 bg-gradient-to-r from-darkBlue to-mainBlue bg-clip-text pb-[50px] text-center text-[45px] font-bold text-transparent lg:mt-10 lg:pb-[70px] lg:text-6xl">
            InnoSync Team
          </h1>
        </div>

        <main className="h-autoplace-items-center mx-[15px] justify-center rounded-[10px] border-gray-200 bg-primary-1000 shadow-md lg:mx-[35px]">
          <div className="relative h-full p-[100px]">
            <div className="relative grid h-fit w-full grid-cols-1 gap-y-10 lg:mb-20 lg:mt-[200px] lg:h-20 lg:grid-cols-4">
              <div className="relative flex justify-center">
                <div className="group relative w-52 transition-all hover:scale-105 lg:absolute lg:-top-64">
                  <div>
                    <Image
                      src={image1}
                      alt="image"
                      className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                    />
                    <p className="mt-3 hidden pb-7 text-center text-[12px] font-medium group-hover:block lg:mb-7">
                      Muhammad Keefa Syawal (Hipster)
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="group relative w-52 transition-all hover:scale-105 lg:absolute lg:-top-32">
                  <div>
                    <Image
                      src={image2}
                      alt="image"
                      className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                    />
                    <p className="mt-3 hidden pb-7 text-center text-[12px] font-medium group-hover:block lg:mb-7">
                      Naufal Nabil Ramadhan (Hacker)
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="group relative w-52 transition-all hover:scale-105 lg:absolute lg:-top-64">
                  <div>
                    <Image
                      src={image3}
                      alt="image"
                      className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                    />
                    <p className="mb-7 mt-3 hidden text-center text-[12px] font-medium group-hover:block">
                      Raisya Ramadhani Achmad (Hustler)
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="group relative w-52 transition-all hover:scale-105  lg:absolute lg:-top-32">
                  <div>
                    <Image
                      src={image4}
                      alt="image"
                      className="rounded-[6px] group-hover:ring-4 group-hover:ring-mainBlue/20"
                    />
                    <p className="mt-3 hidden text-center text-[12px] font-medium group-hover:block">
                      Rakha Adrian Nur Tanaya (Leader)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="mx-[15px] mt-10 rounded-[10px] border-gray-200 bg-primary-1000 py-10 shadow-md lg:mx-[35px]">
          <h4 className="mb-6 mt-4 text-center text-4xl font-bold lg:text-5xl">
            Lansifera{" "}
            <span className="mx-auto mt-5 bg-gradient-to-r from-darkBlue to-mainBlue bg-clip-text pb-[50px] text-center text-4xl font-bold text-transparent lg:mt-10 lg:pb-[70px] lg:text-5xl">
              Trailer
            </span>
          </h4>
          <iframe
            className="mx-auto mb-7 max-h-[200px] max-w-[300px] lg:max-h-[580px] lg:max-w-[1000px]"
            width={1024}
            height={576}
            src="https://www.youtube.com/embed/DhnEnsjj2DU?si=UjRdAr2gQ3c_qDep"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className=" mx-[15px] mt-[10px] h-auto place-items-center justify-center rounded-[10px] border-gray-200 bg-primary-1000 shadow-md lg:mx-[35px]">
          <div className="relative mb-20 ml-10 mt-10 h-full">
            <div className="mx-5 mt-10 grid grid-cols-1 pb-10 pt-10 lg:mx-10 lg:flex">
              <div className=" w-full max-w-5xl">
                <h1 className="flex justify-start text-4xl font-bold lg:text-5xl">
                  Who
                </h1>
                <h3 className="ml-7 max-w-7xl text-4xl font-bold text-darkBlue lg:text-5xl">
                  are we
                </h3>
              </div>
              <div className="mt-5 text-[12px] font-medium lg:text-[16px]">
                <p className="flex justify-normal text-left lg:mx-20">
                  Selamat datang di website resmi Lansifera! Kami adalah tim
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
                <p className="flex justify-normal text-left lg:mx-20">
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
                <p className="flex justify-normal text-left lg:mx-20">
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
