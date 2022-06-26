import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button
      className="rounded-md shadow px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
