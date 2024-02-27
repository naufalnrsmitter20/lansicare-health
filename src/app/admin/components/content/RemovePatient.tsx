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
        window.location.reload();
      }
    }
  };
  return (
    <button
      onClick={removePatient}
      type="button"
      className="mb-2 me-2 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 "
    >
      Delete
    </button>
  );
}
// `http://localhost:3000/api/topics?id=${_id}`
