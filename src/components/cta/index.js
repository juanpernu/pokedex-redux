import React from "react";

export const Cta = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:shadow-lg absolute bottom-4 right-4 mt-4 inline-flex h-14 w-14 w-full justify-center rounded-full p-2 text-xs font-light uppercase text-white shadow-sm transition ease-in-out hover:bg-blue-800 ${className}`}
    >
      {children}
    </button>
  );
};
