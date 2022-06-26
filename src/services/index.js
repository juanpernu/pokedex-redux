import { axiosInstance } from "../utils";

export function getPokemons(params) {
  return axiosInstance.get(`/pokemon${params}`);
}

export function getPokemonById(id) {
  return axiosInstance.get(`/pokemon${id}`);
}
