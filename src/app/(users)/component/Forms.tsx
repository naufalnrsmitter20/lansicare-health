import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ScriptURL =
  "https://script.google.com/macros/s/AKfycbzEhRYDsstw2b4UPkz6qwhJ90HIe7V5G-NAfdf-1k1zLiq6WwdcvcGdCxS0tTQhPMplwA/exec";

const Forms: React.FC = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [komentar, setKomentar] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);
    try {
      const response = await fetch(ScriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      console.log("Success!", response);
      router.refresh();
      window.location.reload();
      alert("Komentar anda berhasil terkirim!");
    } catch (error) {
      console.error("Error!", (error as Error).message);
    }
  };

  return (
    <form name="form-komentar" onSubmit={handleSubmit}>
      <div className="my-8 max-w-3xl px-12">
        <div className="mb-4">
          <label
            htmlFor="nama"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Nama{" "}
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Masukkan Nama"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Masukkan Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Komentar"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
          >
            Komentar{" "}
          </label>
          <textarea
            id="Komentar"
            name="komentar"
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-mainBlue focus:ring-mainBlue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Komentar Anda"
            required
          />
        </div>
        {!isMutating ? (
          <button
            type="submit"
            className="mb-2 me-2 rounded-lg bg-darkBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            className="mb-2 me-2 rounded-lg bg-mainBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-mainBlue focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Loading . . .
          </button>
        )}
      </div>
    </form>
  );
};

export default Forms;
