import { SET_POKEMONS, SET_POKEMON, SET_TOTALCOUNT } from "../types";

const pokemons = (state = {}, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case SET_POKEMONS:
      const { pokemons } = payload;
      return {
        ...state,
        list: pokemons,
      };
    case SET_POKEMON:
      const { pokemon } = payload;
      return {
        ...state,
        pokemon,
      };
    case SET_TOTALCOUNT:
      const { count } = payload;
      return {
        ...state,
        count,
      };
    default:
      return state;
  }
};

export default pokemons;
