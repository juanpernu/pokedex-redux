import React from "react";

export const Item = ({ data: { name, url, isNew = false }, onClick }) => {
  const [, id] = url.split("pokemon");
  const sanitazedId = id.replace("/", "").replace("/", "");
  return (
    <div
      className="flex justify-between border-b p-2 hover:bg-lime-200 hover:cursor-pointer"
      onClick={() => onClick(id)}
    >
      <div className="flex flex-col">
        <span className="block text-xs font-medium text-gray-500 capitalize">
          ID: {sanitazedId}
        </span>
        <p className="block text-base font-medium text-gray-700 mr-4 capitalize">
          {name}
        </p>
      </div>
      {isNew && (
        <span className="text-xs self-center rounded bg-sky-500 px-2 py-1 mr-4 font-semibold text-white shadow-md">
          NEW
        </span>
      )}
    </div>
  );
};
