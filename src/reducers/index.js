import { combineReducers } from "redux";
import pokemons from "./pokemons";
import loading from "./loading";

export default combineReducers({
  pokemons,
  loading,
});
