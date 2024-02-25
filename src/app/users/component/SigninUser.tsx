"use client";

import React, { useEffect, useState } from "react";
import SigninImage from "@/public/SignInImageSide.png";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SigninUser() {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/users/profile");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    console.log(sessionStatus);

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/users");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    sessionStatus !== "authenticated" && (
      <>
        <section className="flex flex-1 flex-col min-w-full justify-center lg:px-8 align-middle h-full mt-10 bg-base-50">
          <div className=" max-w-7xl flex justify-around max-h-3xl m-auto w-full h-fit pb-12 pt-5 rounded-[30px] shadow-md shadow-slate-600 bg-primary-1000">
            <main>
              <Image src={SigninImage} width={397.22} height={305.61} alt="SignIn Image" />
            </main>
            <main className="max-w-lg w-full">
              <form onClick={handleSubmit}>
                <div className="mb-5">
                  <h1 className="font-bold text-4xl justify-center text-center mt-20 mb-10">Hi User!</h1>
                  <label htmlFor="name" className="block mb-2 text-sm font-semibold text-base-100 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-base-100 text-sm rounded-lg focus:ring-slate-800 focus:border-black block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-semibold text-base-100 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-base-100 text-sm rounded-lg focus:ring-slate-800 focus:border-black block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="mt-24 mb-28">
                  <div className="grid grid-cols-2 gap-2 mt-7">
                    <button
                      type="button"
                      className="text-base-100 hover:text-white bg-white border-2 border-base-100 focus:outline-none hover:bg-base-100 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      <p className="font-medium text-[14px]">Forgot Password?</p>
                    </button>
                    <button
                      type="submit"
                      className="text-white hover:text-base-100 bg-darkBlue border-2 border-darkBlue focus:outline-none hover:bg-white focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      <p className="font-medium text-[14px]">Signin</p>
                    </button>
                  </div>
                  <p className="text-red-600 text-sm mb-4">{error && error}</p>
                </div>
              </form>
            </main>
          </div>
        </section>
      </>
    )
  );
}
