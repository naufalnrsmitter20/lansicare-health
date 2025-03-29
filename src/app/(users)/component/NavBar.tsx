"use client";
import Image from "next/image";
import React, { useState } from "react";
import LansicareLogo from "@/public/logo-baru.png";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import SVGLogout from "./svg/SVGLogout";
import SVGSignup from "./svg/SVGSignup";
import SVGSignin from "./svg/SVGSignin";
import Hambugers from "./svg/Hambugers";
import HomeIcon from "./svg/HomeIcon";
import AboutIcon from "./svg/AboutIcon";
import ProfileIcon from "./svg/ProfileIcon";

export default function NavBar() {
  const { data, status } = useSession();
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };

  const isAuth = status === "authenticated";
  return (
    <>
      <nav className=" border-gray-200- fixed start-0 top-0 z-20 w-full border-b bg-primary-1000 shadow-md dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href={"/homepage"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <p className="text-xl font-semibold">Lansifera</p>
          </Link>
          <div className="hidden space-x-3 md:order-2 md:flex md:space-x-0 rtl:space-x-reverse">
            {isAuth ? (
              <SVGLogout />
            ) : (
              <>
                <SVGSignup />
                <SVGSignin />
              </>
            )}
          </div>

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
              <Hambugers />
            </button>
            {modal && (
              <>
                <ul className="fixed left-0 mt-4 w-screen border-y border-slate-300 bg-primary-1000 py-2">
                  <li className=" border-b border-b-slate-300">
                    <HomeIcon />
                  </li>
                  {/* <li className=" mt-0.5 border-b border-b-slate-300">
                    <AboutIcon />
                  </li> */}
                  <li className=" mt-0.5 border-b border-b-slate-300">
                    <ProfileIcon />
                  </li>
                  {isAuth ? (
                    <li className=" mt-0.5 border-b border-b-slate-300">
                      <SVGLogout />
                    </li>
                  ) : (
                    <>
                      <li className=" mt-0.5 border-b border-b-slate-300">
                        <SVGSignin />
                      </li>
                      <li className="mt-0.5">
                        <SVGSignup />
                      </li>
                    </>
                  )}
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
                <HomeIcon />
              </li>
              {/*               <li>
                <AboutIcon />
              </li> */}
              <li>
                <ProfileIcon />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
