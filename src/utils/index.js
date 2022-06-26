import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const typesColors = {
  normal: "#94a3b8",
  fighting: "#a16207",
  flying: "#94a3b8",
  poison: "#c084fc",
  ground: "#a16207",
  rock: "#a16207",
  bug: "#4ade80",
  ghost: "#c084fc",
  steel: "#737373",
  fire: "#ef4444",
  water: "#3b82f6",
  grass: "#4ade80",
  electric: "#eab308",
  psychic: "#c084fc",
  ice: "#38bdf8",
  dragon: "#d946ef",
  dark: "#27272a",
  fairy: "#d946ef",
  unknown: "#94a3b8",
  shadow: "#27272a",
};
