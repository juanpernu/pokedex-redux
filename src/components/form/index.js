import React, { useState } from "react";
import { Button } from "../index";

export const Form = ({ onSubmit, onCancel }) => {
  const [newPokemon, setNewPokemon] = useState({});
  const [showError, setShowError] = useState({});

  const onChangeHandler = (e, property) => {
    let value = e.target.value;
    setNewPokemon({
      ...newPokemon,
      isNew: true,
      [property]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!newPokemon.name && !newPokemon.id)
      return setShowError({ name: true, id: true });
    if (!newPokemon.name) return setShowError({ name: true, id: false });
    if (!newPokemon.id) return setShowError({ name: false, id: true });
    setShowError({});
    onSubmit(newPokemon);
  };

  const Error = () => (
    <p className="text-sm mt-2 text-red-400">* required field</p>
  );

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className="grid mt-2 grid-cols-2 gap-x-8">
        <span className="relative">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            ID *
          </label>
          <input
            type="number"
            id="id"
            onChange={(e) => onChangeHandler(e, "id")}
            className="rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 py-2 sm:text-sm border-gray-300 rounded-md"
          />
          {showError.id && <Error />}
        </span>
        <span className="relative">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => onChangeHandler(e, "name")}
            className="rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 py-2 sm:text-sm border-gray-300 rounded-md"
          />
          {showError.name && <Error />}
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
