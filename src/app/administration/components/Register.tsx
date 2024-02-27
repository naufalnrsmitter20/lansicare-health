"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Register() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/administration");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
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
      const res = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/administration/dashboard/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    sessionStatus !== "authenticated" && (
      <>
        <div className="flex h-full min-w-full flex-1 flex-col justify-center align-middle lg:px-8">
          <div className="max-h-3xl m-auto h-fit w-full max-w-xl rounded-lg bg-gray-800/30 pb-12 pt-5">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-start font-inter text-3xl font-bold leading-9 tracking-tight text-white">
                Register
              </h2>
              <p className=" mt-4 font-inter text-base text-white">
                Register for LansiCare admin panel
              </p>
              <hr className=" my-5 fill-white" />
            </div>

            <div className="mt-10 font-inter sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        required
                        className="block w-full rounded-md border-2 border-white bg-white/5 py-2.5 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 placeholder:text-sm placeholder:text-white focus:shadow-sm focus:shadow-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Password
                      </label>
                      {/* <div className="text-sm">
                      <div onClick={() => router.push("/admin/dashboard/forgot-password")} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
                        Forgot password?
                      </div>
                    </div> */}
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        required
                        className="block w-full rounded-md border-2 border-white bg-white/5 py-2.5 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 placeholder:text-sm placeholder:text-white focus:shadow-sm focus:shadow-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mb-5 flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-sm font-medium text-white"
                    >
                      I agree with{" "}
                      <span className=" font-bold">Tearms and Condition </span>
                    </label>
                  </div>

                  <div>
                    <button
                      className="mb-3 flex w-full cursor-pointer justify-center rounded-md bg-indigo-700 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      type="submit"
                    >
                      Register
                    </button>
                    <p className="mb-4 text-sm text-red-600">
                      {error && error}
                    </p>
                    <Link
                      className="font-inter text-sm text-white hover:text-blue-300"
                      href="/admin/dashboard/login"
                    >
                      <p className=" text-start">
                        Login with an exixting account
                      </p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
}
