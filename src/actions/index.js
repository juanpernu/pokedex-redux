import {
  SET_POKEMONS,
  SET_POKEMON,
  SET_TOTALCOUNT,
  SET_ADDPOKEMON,
  SET_SNACKBAR,
  START_LOADING,
  FINISH_LOADING,
  RESET_SNACKBAR,
} from "../types";
import { getPokemons, getPokemonById } from "../services";

export const startLoading = () => {
  return { type: START_LOADING };
};

export const finishLoading = () => {
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

const setSnackbar = (snackbar) => {
  return {
    type: SET_SNACKBAR,
    payload: { snackbarHandler: snackbar },
  };
};

export const resetSnackbar = () => {
  return {
    type: RESET_SNACKBAR,
  };
};

export const setAddPokemon = (list, specs) => {
  return {
    type: SET_ADDPOKEMON,
    payload: { list, specs },
  };
};

export const createPokemon = (list, pokemon) => (dispatch) => {
  dispatch(setAddPokemon(list, pokemon));
  dispatch(
    setSnackbar({
      showSnackbar: true,
      snackbarMessage: "Pokemon successfully added",
      snackbarType: "success",
    })
  );
};

export const getPokemonList =
  (params = "") =>
  async (dispatch) => {
    try {
      dispatch(startLoading());
      const { data } = await getPokemons(params);

      dispatch(setPokemons(data.results));
      dispatch(setTotalCount(data.count));
    } catch (err) {
      dispatch(
        setSnackbar({
          showSnackbar: true,
          snackbarMessage: "Ups! We where unable to find Pokemons",
          snackbarType: "error",
        })
      );
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
    dispatch(
      setSnackbar({
        showSnackbar: true,
        snackbarMessage: "Ups! We where unable to the Pokemon",
        snackbarType: "error",
      })
    );
  } finally {
    dispatch(finishLoading());
  }
};
