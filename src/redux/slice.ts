import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPokemonInfo } from "../types";

interface IState {
  info: IPokemonInfo | null;
  list: IPokemonInfo[];
  page: number;
  limit: number;
}

const initialState: IState = {
  info: null,
  list: [],
  page: 0,
  limit: 12,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<IPokemonInfo[]>) => {
      state.list = [...state.list, ...action.payload];
    },
    setChosenPokemon: (state, action: PayloadAction<IPokemonInfo | null>) => {
      state.info = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { addPokemons, setChosenPokemon, setPage } = pokemonSlice.actions;
