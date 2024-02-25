"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import hospitals from "@/public/rumahsakits.jpeg";
import lansia from "@/public/lansia.jpg";
import checkUp from "@/public/pexels-pixabay-40568.jpg";
interface BackgroundImageProps {
  imageURL: string;
}
export default function Carousel({ imageURL }: any) {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
    <div className="mt-20 h-screen max-h-screen w-full">
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex h-10 list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <main
              id="carousel1"
              className="flex bg-gray-900/90  bg-center bg-no-repeat bg-blend-multiply"
            >
              <Image
                src={hospitals}
                className="absolute -z-20 w-screen bg-center bg-no-repeat bg-blend-multiply"
                alt="background Image"
              />
              <div className=" max-w-screen-xl px-4 py-24 text-start lg:py-56">
                <h1 className="mb-4 pl-48 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                  Welcome User{" "}
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
                  Selamat datang, user! Website ini dirancang khusus untuk
                  membantu Anda dalam melakukan registrasi check-up kesehatan,
                  dan juga website ini bisa membantu Anda melihat riwayat
                  check-up kesehatan. Dapatkan akses informasi kesehatan Anda
                  dengan mudah dan cepat. Kami berkomitmen untuk menyediakan
                  layanan yang dapat meningkatkan kesehatan dan kesejahteraan
                  lansia. Jangan ragu untuk mulai registrasi dan jadwalkan
                  check-up Anda sekarang!
                </p>
                <div className="ml-48 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
                  <Link
                    href={"profile"}
                    className="inline-flex items-center justify-center rounded-lg bg-darkBlue px-5 py-3 text-center text-base font-medium text-white hover:bg-mainBlue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  >
                    Explore more
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56"></div>
            </main>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <main
              id="carousel2"
              className="z-50  w-screen bg-gray-900/90 bg-center bg-no-repeat bg-blend-multiply "
            >
              <Image
                src={lansia}
                className=" absolute -z-20 w-screen bg-center bg-no-repeat object-right-top bg-blend-multiply"
                alt="background Image"
              />
              <div className=" ml-40 max-w-screen-xl px-4 py-24 text-end lg:py-56">
                <h1 className="mb-4 mt-7 pl-48 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                  LansiCare{" "}
                </h1>
                <p className="mb-8 text-end text-lg font-normal text-gray-300 sm:pl-16 lg:pl-64 lg:text-xl">
                  Website ini membantu Anda dalam melakukan registrasi check-up
                  secara online. Anda bisa melakukan registrasi check-up dengan
                  memilih dokter yang sesuai. Selanjutnya akan keluar nomor
                  antrean dan waktu untuk pemeriksaan. Selain itu, website ini
                  juga membantu Anda untuk mengecek riwayat pemeriksaan Anda.
                  Anda tidak perlu lagi mengantre dengan kurun waktu yang lama
                  di klinik karena bisa mengantre secara online. Tunggu apa
                  lagi? Jadwalkan check-up kesehatan Anda sekarang juga!
                </p>
                <div className="ml-48 flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-y-0">
                  <Link
                    href={"profile"}
                    className="inline-flex items-center justify-center rounded-lg bg-darkBlue px-5 py-3 text-center text-base font-medium text-white hover:bg-mainBlue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  >
                    Explore more
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56"></div> */}
            </main>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <main
              id="carousel3"
              className="z-50 w-screen bg-gray-900/90 bg-center bg-no-repeat bg-blend-multiply "
            >
              <Image
                src={checkUp}
                className="absolute -z-20 w-screen bg-center bg-no-repeat bg-blend-multiply"
                alt="background Image"
              />
              <div
                className=" mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56"
                // style={{ backgroundImage: `url('${imageURL}')` }}
              >
                <h1 className=" mb-36 mt-16 text-4xl font-extrabold leading-none tracking-tight text-slate-200 md:text-5xl lg:text-6xl">
                  Ayo jadwalkan chek-up kesehatan Anda sekarang juga!
                </h1>

                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  {/* <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-darkBlue px-5 py-3 text-center text-base font-medium text-white hover:bg-mainBlue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  >
                    Explore more
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
            </main>
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}
