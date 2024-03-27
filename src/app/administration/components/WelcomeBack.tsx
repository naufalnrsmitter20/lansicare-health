"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function WelcomeBack() {
  const { data: session } = useSession();
  return (
    <div>
      <p className=" mt-7 w-full rounded-full bg-gray-800 px-5 py-4 text-center text-sm font-medium text-white">
        Welcome Back {session?.user?.name}
      </p>
    </div>
  );
}
