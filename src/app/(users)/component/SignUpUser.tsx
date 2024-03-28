"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import SignupImage from "@/public/SignUpImageSide.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { error } from "console";
import { signIn } from "next-auth/react";

export default function SignUpUser() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { fullname, email, password } = userInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/auth/users", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(userInfo),
    })
      .then((res: any) => {
        if (res.ok) {
          router.push("/signin");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        throw new Error(error);
      });
  };
  return (
    <>
      <section className="lg:min-w-xl mt-10 flex flex-1 flex-col justify-center bg-base-50 align-middle lg:mt-20 lg:h-full lg:px-8 lg:pb-20 lg:pt-40">
        <div className="max-h-xl lg:max-h-3xl m-auto h-fit w-full max-w-7xl justify-around rounded-[5px] bg-primary-1000 px-5 pb-12 pt-5 shadow-md shadow-slate-600 lg:flex lg:rounded-[30px] lg:px-0 lg:pr-20">
          <main className="m-20">
            <Image
              src={SignupImage}
              width={397.22}
              height={305.61}
              alt="SignUp Image"
            />
          </main>
          <main className="w-full max-w-lg">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-10 mt-20 justify-center text-center text-4xl font-bold">
                SignUp
              </h1>
              <div className="mb-5">
                <label
                  htmlFor="fullname"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-base-100 focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-base-100 focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-base-100 focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div>
                <button
                  disabled={isLoading}
                  type={"submit"}
                  className="w-full max-w-full rounded-lg bg-darkBlue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <p>Sign Up</p>
                </button>
                {/* <p className="mb-4 text-sm text-red-600"></p> */}
                <p className="mt-8 text-center text-base font-semibold text-base-100 ">
                  Or Sign Up With
                </p>
                <div className="mt-7 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => signIn("credentials")}
                    className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-base-100 hover:bg-base-100 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    {/* image */}
                    <p className="text-[14px] font-medium">Google</p>
                  </button>
                  <button
                    type="button"
                    className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-base-100 hover:bg-base-100 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    {/* image */}
                    <p className="text-[14px] font-medium">Facebook</p>
                  </button>
                </div>
                <p className="mt-9 text-center text-[18px] font-semibold text-base-100">
                  Already have an account?
                </p>
                <div className="mt-7 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="mb-2 me-2 rounded-lg border-2 bg-darkBlue/10 px-5 py-2.5 text-sm font-medium text-base-100 hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-500 dark:border-gray-600"
                  >
                    <p className="text-[14px] font-medium">Forgot Password?</p>
                  </button>
                  <Link
                    href={"/users/signin"}
                    className="mb-2 me-2 rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <p className="text-center text-[14px] font-medium">Login</p>
                  </Link>
                </div>
              </div>
            </form>
          </main>
        </div>
      </section>
    </>
  );
}
