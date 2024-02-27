"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/admin/dashboard/insight");
      router.refresh();
      // window.location.reload();
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
      if (res?.url) {
        router.replace("/admin/");
        router.refresh();
        // window.location.reload();
      }
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  const handleReload = () => {
    if (sessionStatus === "authenticated") {
      window.location.reload();
    }
  };
  return (
    sessionStatus !== "authenticated" && (
      <>
        <div className="flex h-full min-w-full flex-1 flex-col justify-center align-middle lg:px-8">
          <div className="max-h-3xl m-auto h-fit w-full max-w-xl rounded-lg bg-gray-800/30 pb-12 pt-5">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-start font-inter text-3xl font-bold leading-9 tracking-tight text-white">
                Login
              </h2>
              <p className=" mt-4 font-inter text-base text-white">
                Login for LansiCare admin panel
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="block w-full rounded-md border-2 border-white bg-white/5 py-2.5 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 placeholder:text-sm placeholder:text-white focus:shadow-sm focus:shadow-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleReload}
                      className="mb-4 flex w-full cursor-pointer justify-center rounded-md bg-indigo-700 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Login
                    </button>

                    <p className="mb-4 text-sm text-red-600">
                      {error && error}
                    </p>
                    <Link
                      className="font-inter text-sm text-white hover:text-blue-300"
                      href="/admin/dashboard/register"
                    >
                      Register to create account
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
