import React from "react";
import { typesColors } from "../../utils";

export const Detail = ({ data }) => {
  const {
    name,
    id,
    types,
    height,
    weight,
    stats,
    sprites: { front_default },
  } = data;

  const getTypeClass = (type) => {
    if (typesColors[type]) return typesColors[type];
  };

  return (
    <div className="bg-white rounded-md p-8">
      <div className="flex flex-col">
        <p className="block text-sm font-medium text-gray-500 capitalize">
          # {id}
        </p>
        <p className="block text-2xl font-semibold text-gray-500 capitalize">
          {name}
        </p>
        <div className="flex mt-2">
          {types.map((t, i) => (
            <p
              className="capitalize text-sm mr-2 bg-slate-200 text-white px-2 rounded"
              style={{ backgroundColor: getTypeClass(t.type.name) }}
              key={i}
            >
              {t.type.name}
            </p>
          ))}
        </div>
      </div>
      <img
        src={front_default}
        width={300}
        height={300}
        className="m-auto"
        alt={`${name} front`}
      />
      <div className="flex justify-center">
        <p className="block text-sm font-medium text-gray-500 capitalize mr-8">
          Weight: {weight}kg
        </p>
        <p className="block text-sm font-medium text-gray-500 capitalize">
          Height: {height}m
        </p>
      </div>
      <div className="flex justify-between mt-8 px-8">
        {stats.map((s, i) => (
          <div className="flex flex-col text-center">
            <p className="m-0 p-0 text-sm font-bold">{s.base_stat}</p>
            <p className="m-0 p-0 text-xs">{s.stat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
