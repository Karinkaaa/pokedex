import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonInfo, IPokemonResponse } from "../types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<IPokemon[], void>({
      query: () => "pokemon/?limit=12",
      transformResponse: (response: IPokemonResponse) => response.results,
    }),
    getPokemonInfoByName: builder.query<IPokemonInfo, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonInfoByNameQuery } = pokemonApi;
