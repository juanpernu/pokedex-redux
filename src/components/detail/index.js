import React from "react";

export const Detail = ({ data }) => {
  const {
    name,
    sprites: { front_default },
  } = data;
  return (
    <>
      <p>{name}</p>
      <img src={front_default} alt={`${name} front`} />
    </>
  );
};
