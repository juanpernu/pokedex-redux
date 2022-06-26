import React from "react";

export const Item = ({ data: { name, url }, onClick }) => {
  const [, id] = url.split("pokemon");
  const sanitazedId = id.replace("/", "").replace("/", "");
  return (
    <div
      className="flex flex-col border-b p-2 hover:bg-lime-200 hover:cursor-pointer"
      onClick={() => onClick(id)}
    >
      <span className="block text-xs font-medium text-gray-500 capitalize">
        ID: {sanitazedId}
      </span>
      <p className="block text-base font-medium text-gray-700 mr-4 capitalize">
        {name}
      </p>
    </div>
  );
};
