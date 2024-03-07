"use client";
import Image from "next/image";
import React, { useState } from "react";
import LansicareLogo from "@/public/logo-baru.png";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <>
      <nav className=" border-gray-200- fixed start-0 top-0 z-20 w-full border-b bg-primary-1000 shadow-md dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href={"#"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={LansicareLogo}
              width={150}
              height={40}
              alt="Lansicare Logo Logo"
            />
            {/* <span className="self-center text-base-100 text-xl font-medium whitespace-nowrap dark:text-white">LansiCare</span> */}
          </Link>
          {/* {!isLoggedIn ? ( */}
          <div className="hidden space-x-3 md:order-2 md:flex md:space-x-0 rtl:space-x-reverse">
            <Link href={"/users/signup"} className="group block px-3 py-2">
              <svg
                width="18"
                className=" mx-auto block"
                height="19"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.19737 2.8289C5.8748 2.8289 4.80264 3.90106 4.80264 5.22363C4.80264 6.54621 5.8748 7.61837 7.19737 7.61837C8.51995 7.61837 9.59211 6.54621 9.59211 5.22363C9.59211 3.90106 8.51995 2.8289 7.19737 2.8289ZM3.69737 5.22363C3.69737 3.29064 5.26438 1.72363 7.19737 1.72363C9.13037 1.72363 10.6974 3.29064 10.6974 5.22363C10.6974 7.15663 9.13037 8.72363 7.19737 8.72363C5.26438 8.72363 3.69737 7.15663 3.69737 5.22363Z"
                  className=" fill-base-100 group-hover:fill-Navbar-Hover"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6974 2.27626C10.6974 1.97105 10.9448 1.72363 11.25 1.72363L14.1974 1.72363C14.5026 1.72363 14.75 1.97105 14.75 2.27626C14.75 2.58147 14.5026 2.8289 14.1974 2.8289L11.25 2.8289C10.9448 2.8289 10.6974 2.58147 10.6974 2.27626Z"
                  className=" fill-base-100 group-hover:fill-Navbar-Hover"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7237 4.30273C12.4185 4.30273 12.1711 4.05531 12.1711 3.7501L12.1711 0.802734C12.1711 0.497524 12.4185 0.250103 12.7237 0.250103C13.0289 0.250103 13.2763 0.497524 13.2763 0.802734L13.2763 3.7501C13.2763 4.05531 13.0289 4.30273 12.7237 4.30273Z"
                  className=" fill-base-100 group-hover:fill-Navbar-Hover"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.08292 11.6567C3.08931 10.6083 4.71708 9.82886 7.19737 9.82886C9.67766 9.82886 11.3054 10.6083 12.3118 11.6567C13.3048 12.691 13.6447 13.9381 13.6447 14.8025C13.6447 15.1078 13.3973 15.3552 13.0921 15.3552H1.30263C0.997422 15.3552 0.75 15.1078 0.75 14.8025C0.75 13.9381 1.08996 12.691 2.08292 11.6567ZM1.91361 14.2499H12.4811C12.3692 13.6911 12.0834 13.0147 11.5145 12.4221C10.7525 11.6283 9.43287 10.9341 7.19737 10.9341C4.96187 10.9341 3.64227 11.6283 2.88024 12.4221C2.31135 13.0147 2.02552 13.6911 1.91361 14.2499Z"
                  className=" fill-base-100 group-hover:fill-Navbar-Hover"
                />
              </svg>
              <p className="rounded text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                Sign Up
              </p>
            </Link>
            <Link href={"/users/signin"} className="group block px-3  py-2">
              <svg
                width="18"
                className=" mx-auto block"
                height="19"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.75 8.15614C0.75 7.85875 0.991077 7.61768 1.28846 7.61768H10.6218C10.9192 7.61768 11.1603 7.85875 11.1603 8.15614C11.1603 8.45352 10.9192 8.6946 10.6218 8.6946H1.28846C0.991077 8.6946 0.75 8.45352 0.75 8.15614Z"
                  className=" fill-base-100 group-hover:fill-Navbar-Hover"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.36924 4.18579C7.57953 3.97551 7.92046 3.97551 8.13074 4.18579L11.6697 7.72476C11.908 7.96308 11.908 8.34948 11.6697 8.5878L8.13074 12.1268C7.92046 12.3371 7.57953 12.3371 7.36924 12.1268C7.15896 11.9165 7.15896 11.5756 7.36924 11.3653L10.5782 8.15628L7.36924 4.94729C7.15896 4.73701 7.15896 4.39607 7.36924 4.18579Z"
                  className=" fill-base-100 group-hover:fill-Navbar-Hover"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3227 1.45521C10.3227 1.15783 10.5638 0.916748 10.8612 0.916748H14.1398C14.4768 0.916748 14.7501 1.18997 14.7501 1.527V14.7851C14.7501 15.1222 14.4768 15.3954 14.1398 15.3954H10.3825C10.0851 15.3954 9.84407 15.1543 9.84407 14.8569C9.84407 14.5595 10.0851 14.3185 10.3825 14.3185H13.6731V1.99367H10.8612C10.5638 1.99367 10.3227 1.75259 10.3227 1.45521Z"
                  className=" fill-base-100 group-hover:fill-Navbar-Hover"
                />
              </svg>
              <p className="rounded text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                Sign In
              </p>
            </Link>
            {/* <button className="flex items-center p-2 rounded-lg" onClick={() => handleLogout}>
              <span className="flex-1 ms-3 text-base-100 text-start">Logout</span>
            </button> */}
          </div>
          {/* ) : ( */}
          {/* )} */}
          <div className=" block">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {modal && (
              <>
                <ul className="fixed left-0 mt-5 w-screen border-t border-slate-700 bg-primary-1000 py-2">
                  <li className=" border-b border-b-gray-500">
                    <Link
                      href={"/users/homepage"}
                      className="group flex justify-center px-3 py-2"
                    >
                      <svg
                        width="18"
                        className=""
                        height="19"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.738785 12.4677V7.38947C0.738785 6.54831 1.145 5.75893 1.82947 5.27001L6.49319 1.93864C6.946 1.61519 7.55429 1.61518 8.00711 1.93861L12.6713 5.27001C13.3558 5.75893 13.762 6.54834 13.762 7.38953V12.4677C13.762 13.5466 12.8874 14.4212 11.8086 14.4212H9.94781C9.22856 14.4212 8.64549 13.8381 8.64549 13.1189V12.1421C8.64549 11.6027 8.20819 11.1654 7.66875 11.1654H6.83154C6.2921 11.1654 5.85479 11.6027 5.85479 12.1421V13.1189C5.85479 13.8381 5.27172 14.4212 4.55247 14.4212H2.69227C1.61339 14.4212 0.738785 13.5466 0.738785 12.4677Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                      </svg>
                      <p className="rounded px-2 text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                        Home
                      </p>
                    </Link>
                  </li>
                  <li className=" border-b border-b-gray-500">
                    <Link
                      href={"/users/about"}
                      className="group flex justify-center px-3 py-2"
                    >
                      <svg
                        width="18"
                        className=" "
                        height="19"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.04069 1.86688C1.59116 1.86688 1.22674 2.23129 1.22674 2.68083V9.84358C1.22674 10.2931 1.59116 10.6575 2.04069 10.6575H12.4592C12.9088 10.6575 13.2732 10.2931 13.2732 9.84358V2.68083C13.2732 2.23129 12.9088 1.86688 12.4592 1.86688H2.04069ZM0.25 2.68083C0.25 1.69186 1.05172 0.890137 2.04069 0.890137H12.4592C13.4482 0.890137 14.2499 1.69186 14.2499 2.68083V9.84358C14.2499 10.8326 13.4482 11.6343 12.4592 11.6343H2.04069C1.05172 11.6343 0.25 10.8326 0.25 9.84358V2.68083Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.625794 3.47921C0.744714 3.23712 1.03737 3.13728 1.27946 3.2562L7.17837 6.15391C7.22364 6.17614 7.27666 6.17614 7.32192 6.15391L13.2208 3.2562C13.4629 3.13728 13.7556 3.23712 13.8745 3.47921C13.9934 3.7213 13.8936 4.01395 13.6515 4.13287L7.75257 7.03058C7.43571 7.18624 7.06459 7.18624 6.74773 7.03059L0.848808 4.13287C0.606721 4.01395 0.506874 3.7213 0.625794 3.47921Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.60576 6.34495C9.55698 6.30954 9.49262 6.30399 9.43849 6.33051L7.75136 7.15721C7.43505 7.3122 7.06484 7.3122 6.74854 7.15721L5.0614 6.33051C5.00727 6.30399 4.94292 6.30954 4.89414 6.34495L1.02525 9.15348C0.806977 9.31193 0.501585 9.26343 0.343136 9.04516C0.184687 8.82689 0.233183 8.5215 0.451454 8.36305L4.32034 5.55452C4.6618 5.30665 5.11228 5.26775 5.49118 5.45341L7.17832 6.2801C7.2235 6.30225 7.27639 6.30225 7.32158 6.2801L9.00871 5.45341C9.38762 5.26775 9.83809 5.30665 10.1796 5.55452L14.0484 8.36305C14.2667 8.5215 14.3152 8.82689 14.1568 9.04516C13.9983 9.26343 13.6929 9.31193 13.4746 9.15348L9.60576 6.34495Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                      </svg>
                      <p className="rounded px-2 text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                        About
                      </p>
                    </Link>
                  </li>
                  <li className=" border-b border-b-gray-500">
                    <Link
                      href={"/users/profile"}
                      className="group flex justify-center px-3 py-2"
                    >
                      <svg
                        width="18"
                        className=" "
                        height="19"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_627_1060)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.55084 1.04626C6.1888 1.04626 5.08465 2.15042 5.08465 3.51246C5.08465 4.8745 6.1888 5.97865 7.55084 5.97865C8.91288 5.97865 10.017 4.8745 10.017 3.51246C10.017 2.15042 8.91288 1.04626 7.55084 1.04626ZM4.03838 3.51246C4.03838 1.57258 5.61096 0 7.55084 0C9.49071 0 11.0633 1.57258 11.0633 3.51246C11.0633 5.45233 9.49071 7.02491 7.55084 7.02491C5.61096 7.02491 4.03838 5.45233 4.03838 3.51246Z"
                            className=" fill-base-100 group-hover:fill-Navbar-Hover"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.187 10.4041C3.27318 9.24363 5.03971 8.37012 7.75042 8.37012C10.4611 8.37012 12.2277 9.24363 13.3138 10.4041C14.3864 11.5499 14.7504 12.9281 14.7504 13.8755C14.7504 14.1644 14.5162 14.3986 14.2273 14.3986H1.27355C0.984634 14.3986 0.75042 14.1644 0.75042 13.8755C0.75042 12.9281 1.11449 11.5499 2.187 10.4041ZM1.84117 13.3523H13.6597C13.5508 12.6808 13.2289 11.8444 12.55 11.1191C11.6931 10.2036 10.2212 9.41638 7.75042 9.41638C5.27964 9.41638 3.80773 10.2036 2.95085 11.1191C2.27198 11.8444 1.95003 12.6808 1.84117 13.3523Z"
                            className=" fill-base-100 group-hover:fill-Navbar-Hover"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_627_1060"
                            x="-3.24958"
                            y="0"
                            width="22"
                            height="22.3987"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_627_1060"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_627_1060"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <p className="rounded px-2 text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                        Profile
                      </p>
                    </Link>
                  </li>
                  <li className=" border-b border-b-gray-500">
                    <Link
                      href={"/users/signin"}
                      className="group flex justify-center px-3 py-2"
                    >
                      <svg
                        width="18"
                        className=" "
                        height="19"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.75 8.15614C0.75 7.85875 0.991077 7.61768 1.28846 7.61768H10.6218C10.9192 7.61768 11.1603 7.85875 11.1603 8.15614C11.1603 8.45352 10.9192 8.6946 10.6218 8.6946H1.28846C0.991077 8.6946 0.75 8.45352 0.75 8.15614Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.36924 4.18579C7.57953 3.97551 7.92046 3.97551 8.13074 4.18579L11.6697 7.72476C11.908 7.96308 11.908 8.34948 11.6697 8.5878L8.13074 12.1268C7.92046 12.3371 7.57953 12.3371 7.36924 12.1268C7.15896 11.9165 7.15896 11.5756 7.36924 11.3653L10.5782 8.15628L7.36924 4.94729C7.15896 4.73701 7.15896 4.39607 7.36924 4.18579Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.3227 1.45521C10.3227 1.15783 10.5638 0.916748 10.8612 0.916748H14.1398C14.4768 0.916748 14.7501 1.18997 14.7501 1.527V14.7851C14.7501 15.1222 14.4768 15.3954 14.1398 15.3954H10.3825C10.0851 15.3954 9.84407 15.1543 9.84407 14.8569C9.84407 14.5595 10.0851 14.3185 10.3825 14.3185H13.6731V1.99367H10.8612C10.5638 1.99367 10.3227 1.75259 10.3227 1.45521Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                      </svg>
                      <p className="rounded px-2 text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                        SignIn
                      </p>
                    </Link>
                  </li>
                  <li className=" border-b border-b-gray-500">
                    <Link
                      href={"/users/signup"}
                      className="group flex justify-center px-3 py-2"
                    >
                      <svg
                        width="18"
                        className=" "
                        height="19"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.19737 2.8289C5.8748 2.8289 4.80264 3.90106 4.80264 5.22363C4.80264 6.54621 5.8748 7.61837 7.19737 7.61837C8.51995 7.61837 9.59211 6.54621 9.59211 5.22363C9.59211 3.90106 8.51995 2.8289 7.19737 2.8289ZM3.69737 5.22363C3.69737 3.29064 5.26438 1.72363 7.19737 1.72363C9.13037 1.72363 10.6974 3.29064 10.6974 5.22363C10.6974 7.15663 9.13037 8.72363 7.19737 8.72363C5.26438 8.72363 3.69737 7.15663 3.69737 5.22363Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.6974 2.27626C10.6974 1.97105 10.9448 1.72363 11.25 1.72363L14.1974 1.72363C14.5026 1.72363 14.75 1.97105 14.75 2.27626C14.75 2.58147 14.5026 2.8289 14.1974 2.8289L11.25 2.8289C10.9448 2.8289 10.6974 2.58147 10.6974 2.27626Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.7237 4.30273C12.4185 4.30273 12.1711 4.05531 12.1711 3.7501L12.1711 0.802734C12.1711 0.497524 12.4185 0.250103 12.7237 0.250103C13.0289 0.250103 13.2763 0.497524 13.2763 0.802734L13.2763 3.7501C13.2763 4.05531 13.0289 4.30273 12.7237 4.30273Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.08292 11.6567C3.08931 10.6083 4.71708 9.82886 7.19737 9.82886C9.67766 9.82886 11.3054 10.6083 12.3118 11.6567C13.3048 12.691 13.6447 13.9381 13.6447 14.8025C13.6447 15.1078 13.3973 15.3552 13.0921 15.3552H1.30263C0.997422 15.3552 0.75 15.1078 0.75 14.8025C0.75 13.9381 1.08996 12.691 2.08292 11.6567ZM1.91361 14.2499H12.4811C12.3692 13.6911 12.0834 13.0147 11.5145 12.4221C10.7525 11.6283 9.43287 10.9341 7.19737 10.9341C4.96187 10.9341 3.64227 11.6283 2.88024 12.4221C2.31135 13.0147 2.02552 13.6911 1.91361 14.2499Z"
                          className=" fill-base-100 group-hover:fill-Navbar-Hover"
                        />
                      </svg>
                      <p className="rounded px-2 text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                        SignUp
                      </p>
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
          <div
            className="mx-auto hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-primary-1000 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-primary-1000 md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              <li>
                <Link
                  href={"/users/homepage"}
                  className="group block px-3  py-2"
                >
                  <svg
                    width="18"
                    className=" mx-auto block"
                    height="19"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.738785 12.4677V7.38947C0.738785 6.54831 1.145 5.75893 1.82947 5.27001L6.49319 1.93864C6.946 1.61519 7.55429 1.61518 8.00711 1.93861L12.6713 5.27001C13.3558 5.75893 13.762 6.54834 13.762 7.38953V12.4677C13.762 13.5466 12.8874 14.4212 11.8086 14.4212H9.94781C9.22856 14.4212 8.64549 13.8381 8.64549 13.1189V12.1421C8.64549 11.6027 8.20819 11.1654 7.66875 11.1654H6.83154C6.2921 11.1654 5.85479 11.6027 5.85479 12.1421V13.1189C5.85479 13.8381 5.27172 14.4212 4.55247 14.4212H2.69227C1.61339 14.4212 0.738785 13.5466 0.738785 12.4677Z"
                      className=" fill-base-100 group-hover:fill-Navbar-Hover"
                    />
                  </svg>
                  <p className="rounded text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/users/about"} className="group block px-3 py-2">
                  <svg
                    width="18"
                    className=" mx-auto block"
                    height="19"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.04069 1.86688C1.59116 1.86688 1.22674 2.23129 1.22674 2.68083V9.84358C1.22674 10.2931 1.59116 10.6575 2.04069 10.6575H12.4592C12.9088 10.6575 13.2732 10.2931 13.2732 9.84358V2.68083C13.2732 2.23129 12.9088 1.86688 12.4592 1.86688H2.04069ZM0.25 2.68083C0.25 1.69186 1.05172 0.890137 2.04069 0.890137H12.4592C13.4482 0.890137 14.2499 1.69186 14.2499 2.68083V9.84358C14.2499 10.8326 13.4482 11.6343 12.4592 11.6343H2.04069C1.05172 11.6343 0.25 10.8326 0.25 9.84358V2.68083Z"
                      className=" fill-base-100 group-hover:fill-Navbar-Hover"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.625794 3.47921C0.744714 3.23712 1.03737 3.13728 1.27946 3.2562L7.17837 6.15391C7.22364 6.17614 7.27666 6.17614 7.32192 6.15391L13.2208 3.2562C13.4629 3.13728 13.7556 3.23712 13.8745 3.47921C13.9934 3.7213 13.8936 4.01395 13.6515 4.13287L7.75257 7.03058C7.43571 7.18624 7.06459 7.18624 6.74773 7.03059L0.848808 4.13287C0.606721 4.01395 0.506874 3.7213 0.625794 3.47921Z"
                      className=" fill-base-100 group-hover:fill-Navbar-Hover"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.60576 6.34495C9.55698 6.30954 9.49262 6.30399 9.43849 6.33051L7.75136 7.15721C7.43505 7.3122 7.06484 7.3122 6.74854 7.15721L5.0614 6.33051C5.00727 6.30399 4.94292 6.30954 4.89414 6.34495L1.02525 9.15348C0.806977 9.31193 0.501585 9.26343 0.343136 9.04516C0.184687 8.82689 0.233183 8.5215 0.451454 8.36305L4.32034 5.55452C4.6618 5.30665 5.11228 5.26775 5.49118 5.45341L7.17832 6.2801C7.2235 6.30225 7.27639 6.30225 7.32158 6.2801L9.00871 5.45341C9.38762 5.26775 9.83809 5.30665 10.1796 5.55452L14.0484 8.36305C14.2667 8.5215 14.3152 8.82689 14.1568 9.04516C13.9983 9.26343 13.6929 9.31193 13.4746 9.15348L9.60576 6.34495Z"
                      className=" fill-base-100 group-hover:fill-Navbar-Hover"
                    />
                  </svg>
                  <p className="rounded text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/users/profile"} className="group block px-3 py-2">
                  <svg
                    width="18"
                    className=" mx-auto block"
                    height="19"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_627_1060)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.55084 1.04626C6.1888 1.04626 5.08465 2.15042 5.08465 3.51246C5.08465 4.8745 6.1888 5.97865 7.55084 5.97865C8.91288 5.97865 10.017 4.8745 10.017 3.51246C10.017 2.15042 8.91288 1.04626 7.55084 1.04626ZM4.03838 3.51246C4.03838 1.57258 5.61096 0 7.55084 0C9.49071 0 11.0633 1.57258 11.0633 3.51246C11.0633 5.45233 9.49071 7.02491 7.55084 7.02491C5.61096 7.02491 4.03838 5.45233 4.03838 3.51246Z"
                        className=" fill-base-100 group-hover:fill-Navbar-Hover"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.187 10.4041C3.27318 9.24363 5.03971 8.37012 7.75042 8.37012C10.4611 8.37012 12.2277 9.24363 13.3138 10.4041C14.3864 11.5499 14.7504 12.9281 14.7504 13.8755C14.7504 14.1644 14.5162 14.3986 14.2273 14.3986H1.27355C0.984634 14.3986 0.75042 14.1644 0.75042 13.8755C0.75042 12.9281 1.11449 11.5499 2.187 10.4041ZM1.84117 13.3523H13.6597C13.5508 12.6808 13.2289 11.8444 12.55 11.1191C11.6931 10.2036 10.2212 9.41638 7.75042 9.41638C5.27964 9.41638 3.80773 10.2036 2.95085 11.1191C2.27198 11.8444 1.95003 12.6808 1.84117 13.3523Z"
                        className=" fill-base-100 group-hover:fill-Navbar-Hover"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_627_1060"
                        x="-3.24958"
                        y="0"
                        width="22"
                        height="22.3987"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_627_1060"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_627_1060"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <p className="rounded text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
                    Profile
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
