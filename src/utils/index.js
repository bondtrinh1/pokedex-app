import axios from "axios";

/** Fetch a list of Pokemons */
export const getPokemons = async () => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=150`
  );
  return data;
};

/** Fetch a specific Pokemon by URL */
export const getPokemonByURL = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
