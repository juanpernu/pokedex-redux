import React from "react";

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`rounded-md shadow mt-4 px-8 py-3 text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
