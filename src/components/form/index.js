import React, { useState } from "react";
import { Button } from "../index";

export const Form = ({ onSubmit, onCancel }) => {
  const [newPokemon, setNewPokemon] = useState({});

  const onChangeHandler = (e, property) => {
    let value = e.target.value;
    if (property === "url")
      value = `https://pokeapi.co/api/v2/pokemon/${e.target.value}/`;
    setNewPokemon({
      ...newPokemon,
      isNew: true,
      [property]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(newPokemon);
  };
  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className="grid mt-2 grid-cols-2 gap-x-8">
        <span className="relative rounded-md shadow-sm">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            ID
          </label>
          <input
            type="text"
            id="url"
            onChange={(e) => onChangeHandler(e, "url")}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 py-2 sm:text-sm border-gray-300 rounded-md"
          />
        </span>
        <span className="relative rounded-md shadow-sm">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => onChangeHandler(e, "name")}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 py-2 sm:text-sm border-gray-300 rounded-md"
          />
        </span>
        <Button className="w-full" onClick={(e) => onSubmitHandler(e)}>
          <p>Add</p>
        </Button>
        <Button
          className="w-full bg-red-500 hover:bg-red-700"
          onClick={onCancel}
        >
          <p>Cancel</p>
        </Button>
      </div>
    </form>
  );
};
