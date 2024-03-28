"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import SigninImage from "@/public/SignInImageSide.png";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninUser() {
  const { data: session, status } = useSession();
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, refresh } = useRouter();
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // await signIn("email", { email });
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: "/profile",
      });
      if (!res?.error) {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        await push("/profile");
        setIsLoading(false);
      } else {
        if (res.status === 401) {
          setError("Email or Password is Incorrect");
        }
        console.log(res);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (status === "authenticated") {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    push("/profile");
  }
  return (
    <>
      <section className="flex flex-1 flex-col justify-center bg-base-50 pb-10 align-middle lg:mt-20 lg:h-full lg:min-w-full lg:px-8">
        <div className=" max-h-3xl m-auto mt-36 w-full max-w-7xl justify-around rounded-[30px] bg-primary-1000 pt-5 shadow-md shadow-slate-600 lg:mt-0 lg:flex lg:h-fit lg:pr-20">
          <main className="m-10">
            <Image
              src={SigninImage}
              width={560.63}
              height={392.28}
              alt="SignIn Image"
            />
          </main>
          <main className="w-full max-w-lg px-5 lg:px-0">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-10 mt-20 justify-center text-center text-4xl font-bold">
                Signin
              </h1>
              <div className=" mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-base-100 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // value={email}
                  // onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-black focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your email"
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
                  // value={password}
                  // onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-base-100 focus:border-black focus:ring-slate-800 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-28 mt-24">
                <div className="mt-7 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="mb-2 me-2 rounded-lg border-2 bg-darkBlue/10 px-5 py-2.5 text-sm font-medium text-base-100 hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-500"
                  >
                    <p className="text-[14px] font-medium">Forgot Password?</p>
                  </button>
                  <button
                    disabled={IsLoading}
                    type="submit"
                    className="mb-2 me-2 rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-4 focus:ring-gray-500"
                  >
                    <p className="text-[14px] font-medium">
                      {IsLoading ? "Loading..." : "Signin"}
                    </p>
                  </button>
                </div>
                {error ? (
                  <p className="mb-4 text-sm text-red-600">{error}</p>
                ) : null}
              </div>
            </form>
          </main>
        </div>
      </section>
    </>
  );
}
