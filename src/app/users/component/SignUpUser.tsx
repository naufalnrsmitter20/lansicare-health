"use client";

import React, { useEffect, useState } from "react";
import SignupImage from "@/public/SignUpImageSide.png";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SignUpUser() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/users");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const nama = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(sessionStatus);

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/users/signin");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  const redirectSignin = () => {
    redirect("/users/siginin");
  };
  return (
    sessionStatus !== "authenticated" && (
      <>
        <section className=" mt-20 flex h-full min-w-full flex-1 flex-col justify-center bg-base-50 align-middle lg:px-8">
          <div className=" max-h-3xl m-auto h-fit w-full max-w-7xl justify-around rounded-[30px] bg-primary-1000 px-5 pb-12 pt-5 shadow-md shadow-slate-600 lg:flex lg:px-0 lg:pr-20">
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
                    htmlFor="nama"
                    className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="nama"
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
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-base-100 focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full max-w-full rounded-lg bg-darkBlue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <p>Sign Up</p>
                  </button>
                  <p className="mb-4 text-sm text-red-600">{error && error}</p>
                  <p className="mt-8 text-center text-base font-semibold text-base-100 ">
                    Or Sign Up With
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    <button
                      type="button"
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
                      <p className="text-[14px] font-medium">
                        Forgot Password?
                      </p>
                    </button>
                    <Link
                      href={"/users/signin"}
                      className="mb-2 me-2 rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      <p className="text-center text-[14px] font-medium">
                        Login
                      </p>
                    </Link>
                  </div>
                </div>
              </form>
            </main>
          </div>
        </section>
      </>
    )
  );
}
