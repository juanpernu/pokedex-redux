import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Detail, Empty, Loading, Button } from "../components";

function Details() {
  const navigate = useNavigate();
  const {
    pokemons: { pokemon },
    loading: { isLoading },
  } = useSelector((state) => state);

  return (
    <section className="flex flex-col justify-center">
      {isLoading && <Loading />}
      {pokemon ? (
        <Detail data={pokemon} />
      ) : (
        <Empty message="Ups! No hay pokemon seleccionado" />
      )}
      <Button onClick={() => navigate("/")}>
        <p>Volver</p>
      </Button>
    </section>
  );
}

export default Details;
