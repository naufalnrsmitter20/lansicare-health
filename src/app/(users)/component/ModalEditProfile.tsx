"use client";

import React, { useState } from "react";

export default function ModalEditProfile({
  isVisible,
  onClose,
  children,
}: any) {
  const [isMutating, setIsMutating] = useState(false);
  const [modal, setModal] = useState(false);
  if (!isVisible) return null;
  const handleClose = (e: any) => {
    if (e.target.id === "modalEdit") {
      onClose();
    }
  };

  return (
    <>
      <div id="modalEdit" onClick={handleClose} className="">
        <div className="invisible fixed z-50 h-screen max-h-full w-full items-center justify-center overflow-y-auto bg-black/10 md:visible md:inset-0 lg:overflow-x-hidden">
          <div className="relative mx-auto max-h-full w-full  overflow-visible rounded-md bg-white p-4 lg:my-20 lg:max-w-4xl">
            <div className="flex items-center justify-between p-4 md:p-5 ">
              <button
                type="button"
                onClick={() => onClose()}
                className="ms-auto inline-flex w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="placeholder:">
              {children}
              <button
                type="button"
                id="closedItem"
                onClick={() => onClose()}
                className="ms-3focus:ring-4 mx-3  rounded-lg border border-gray-500 bg-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white focus:z-10 focus:outline-none focus:ring-gray-600"
              >
                Close
              </button>
              <div className="mb-4 flex items-center justify-end p-4 md:p-5 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
