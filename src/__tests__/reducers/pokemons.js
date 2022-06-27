import reducer from "../../reducers/pokemons";
import { SET_POKEMONS, SET_POKEMON, SET_TOTALCOUNT } from "../../types";
import { getPokemonById, getPokemons } from "../../services";
import { pokemons, pokemon } from "../../mocks";

jest.mock("../../services");

const state = {};

describe("pokemons reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  test("should handle SET_POKEMONS", () => {
    let response;
    getPokemons.mockResolvedValue({ pokemons });
    getPokemons().then((res) => (response = res));
    const action = {
      type: SET_POKEMONS,
      payload: { response },
    };
    expect(reducer({}, action)).toEqual({
      ...state,
      list: response,
    });
  });

  test("should handle SET_POKEMON", () => {
    let response;
    getPokemonById.mockResolvedValue({ pokemon });
    getPokemonById().then((res) => (response = res));
    const action = {
      type: SET_POKEMON,
      payload: { pokemon: response },
    };
    expect(reducer({}, action)).toEqual({ ...state, pokemon: response });
  });

  test("should handle SET_TOTALCOUNT", () => {
    const count = 1000;
    const action = {
      type: SET_TOTALCOUNT,
      payload: { count },
    };
    expect(reducer({}, action)).toEqual({ ...state, count: count });
  });
});
