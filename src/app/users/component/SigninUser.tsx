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
        <section className="mt-20 flex h-full min-w-full flex-1 flex-col justify-center bg-base-50 align-middle lg:px-8">
          <div className=" max-h-3xl m-auto flex h-fit w-full max-w-7xl justify-around rounded-[30px] bg-primary-1000 pb-10 pr-20 pt-5 shadow-md shadow-slate-600">
            <main className="m-10">
              <Image
                src={SigninImage}
                width={560.63}
                height={392.28}
                alt="SignIn Image"
              />
            </main>
            <main className="w-full max-w-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <h1 className="mb-10 mt-20 justify-center text-center text-4xl font-bold">
                    Hi User!
                  </h1>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                      <p className="text-[14px] font-medium">
                        Forgot Password?
                      </p>
                    </button>
                    <button
                      type="submit"
                      className="mb-2 me-2 rounded-lg border-2 border-darkBlue bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-base-100 focus:outline-none focus:ring-4 focus:ring-gray-500"
                    >
                      <p className="text-[14px] font-medium">Signin</p>
                    </button>
                  </div>
                  <p className="mb-4 text-sm text-red-600">{error && error}</p>
                </div>
              </form>
            </main>
          </div>
        </section>
      </>
    )
  );
}
