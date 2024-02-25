"use client";

import React, { useState } from "react";

export default function ModalEditProfile({ isVisible, onClose, children }: any) {
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
        <div className="overflow-y-auto overflow-x-hidden z-50 fixed justify-center items-center w-full md:inset-0 max-h-full bg-black/10">
          <div className="relative p-4 w-full mx-auto max-w-4xl max-h-full my-20 bg-white overflow-visible rounded-md">
            <div className="flex items-center justify-between p-4 md:p-5 ">
              <button
                type="button"
                onClick={() => onClose()}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
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
                className="ms-3focus:ring-4 focus:outline-none  rounded-lg border mx-3 text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
              >
                Close
              </button>
              <div className="flex items-center justify-end p-4 md:p-5 mb-4 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
