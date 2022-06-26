import React from "react";

export const Item = ({ data: { name, url }, onClick }) => {
  const [, id] = url.split("pokemon");
  return (
    <div>
      <p onClick={() => onClick(id)}>{name}</p>
    </div>
  );
};
