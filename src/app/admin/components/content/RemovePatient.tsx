"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function RemovePatient({ _id }: { _id: any }) {
  const router = useRouter();
  const removePatient = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?_id=${_id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removePatient} type="button" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
      Delete
    </button>
  );
}
// `http://localhost:3000/api/topics?id=${_id}`
