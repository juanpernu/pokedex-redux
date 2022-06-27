import React from "react";

export const Tooltip = ({ text, className = "" }) => (
  <div
    className={`absolute hidden w-32 rounded bg-slate-500 px-4 py-2 group-hover:block ${className}`}
  >
    <p>{text}</p>
  </div>
);
