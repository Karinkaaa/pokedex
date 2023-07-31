import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonInfo, IPokemonResponse, IQueryArgs } from "../types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<IPokemonInfo[], IQueryArgs>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const { limit, page } = _arg;

        const response: QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        > = await fetchWithBQ(`pokemon/?limit=${limit}&offset=${page * limit}`);

        if (response.error) {
          return { error: response.error as FetchBaseQueryError };
        }

        const names = (response.data as IPokemonResponse).results.map(
          (item: IPokemon) => item.name
        );

        const promises = names.map(async (name: string) => {
          const response = await fetchWithBQ(`pokemon/${name}`);
          return response.data;
        });

        const result = await Promise.all(promises);

        return { data: result as IPokemonInfo[] };
      },
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
