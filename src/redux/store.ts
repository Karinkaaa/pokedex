import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonSlice } from "./slice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemon: pokemonSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
