import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { useKeypress } from "../../hooks";

export const Modal = ({ isOpenModal, closeModal, title, children }) => {
  useKeypress("Escape", closeModal);

  if (!isOpenModal) return null;

  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed bottom-1/2 z-20 w-auto h-modal rounded bg-white p-8 shadow-lg">
        <div className="flex flex-col">
          <span onClick={closeModal}>
            <XIcon
              className="mr-4 h-5 w-5 absolute top-6 right-4 text-slate-400 hover:text-slate-500 hover:cursor-pointer"
              aria-hidden="true"
            />
          </span>
          <h2 className="mt-4 text-xl font-semibold text-neutral-800">
            {title}
          </h2>
          {children}
        </div>
      </div>
      <div
        style={{ display: isOpenModal ? "block" : "none" }}
        className="fixed z-10 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      />
    </>
  );
};
