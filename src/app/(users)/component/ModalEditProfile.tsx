"use client";

import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useRef } from "react";

export default function ModalEditProfile({
  children,
}: {
  children: React.ReactNode;
}) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  const onClose = () => {
    router.back();
  };

  return (
    <>
      <div ref={overlay} id="modalEdit" onClick={close} className="">
        <div className="invisible fixed z-50 h-screen max-h-full w-full items-center justify-center overflow-y-auto bg-black/10 md:visible md:inset-0 lg:overflow-x-hidden">
          <div className="relative mx-auto max-h-full w-full  overflow-visible rounded-md bg-white p-4 lg:my-20 lg:max-w-4xl">
            <div className=" mt-2">
              {children}
              <button
                type="button"
                id="closedItem"
                onClick={() => onClose()}
                className="ms-3focus:ring-4 mx-3  rounded-lg border border-gray-500 bg-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white focus:z-10 focus:outline-none focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
