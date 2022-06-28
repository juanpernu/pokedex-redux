import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Detail, Empty, Loading, Button } from "../components";
import { getPokemon } from "../actions";

function Details({ dispatch }) {
  const navigate = useNavigate();
  const {
    pokemons: { pokemon },
    loading: { isLoading },
  } = useSelector((state) => state);

  const changePokemon = (action) => {
    let id;
    if (action === "next") id = `/${pokemon.id + 1}/`;
    if (action === "prev") id = `/${pokemon.id - 1}/`;
    getPokemon(id)(dispatch);
  };

  return (
    <section className="md:w-1/2 md:px-0 px-2 w-full flex flex-col justify-center m-auto">
      {isLoading && <Loading />}
      <img src="static/logo.png" width={300} alt="Logo" className="m-auto" />
      {pokemon ? (
        <Detail data={pokemon} />
      ) : (
        <Empty message="Ups! No hay pokemon seleccionado" />
      )}
      <div className="flex justify-between">
        <Button
          className="bg-sky-50 border-sky-500 text-sky-600 group"
          onClick={() => changePokemon("prev")}
        >
          <ChevronLeftIcon className="h-5 w-5 text-sky-600 group-hover:text-white" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button className="w-full mx-4" onClick={() => navigate("/")}>
          <p>Back to list</p>
        </Button>
        <Button
          className="bg-sky-50 border-sky-500 text-sky-600 group"
          onClick={() => changePokemon("next")}
        >
          <ChevronRightIcon className="h-5 w-5 text-sky-600 group-hover:text-white" />
          <span className="sr-only">Anterior</span>
        </Button>
      </div>
    </section>
  );
}

export default connect()(Details);
