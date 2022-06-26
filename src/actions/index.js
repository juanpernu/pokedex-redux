import {
  SET_POKEMONS,
  SET_POKEMON,
  SET_TOTALCOUNT,
  START_LOADING,
  FINISH_LOADING,
} from "../types";
import { getPokemons, getPokemonById } from "../services";

const startLoading = () => {
  return { type: START_LOADING };
};

const finishLoading = () => {
  return { type: FINISH_LOADING };
};

const setPokemons = (pokemons) => {
  return {
    type: SET_POKEMONS,
    payload: { pokemons },
  };
};

const setPokemon = (pokemon) => {
  return {
    type: SET_POKEMON,
    payload: { pokemon },
  };
};

const setTotalCount = (count) => {
  return {
    type: SET_TOTALCOUNT,
    payload: { count },
  };
};

export const getPokemonList = (params = "") => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await getPokemons(params);

    dispatch(setPokemons(data.results));
    dispatch(setTotalCount(data.count));
  } catch (err) {
    throw new Error(err.response.data);
  } finally {
    dispatch(finishLoading());
  }
};

export const getPokemon = (id) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await getPokemonById(id);

    dispatch(setPokemon(data));
  } catch (err) {
    throw new Error(err.response.data);
  } finally {
    dispatch(finishLoading());
  }
};
