import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPokemonInfo } from "../types";

interface IState {
  info: IPokemonInfo | null;
  list: IPokemonInfo[];
  page: number;
  limit: number;
  filters: string[];
  isOpenDrawer: boolean;
}

const initialState: IState = {
  info: null,
  list: [],
  page: 0,
  limit: 12,
  filters: [],
  isOpenDrawer: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<IPokemonInfo[]>) => {
      state.list = action.payload;
    },
    addPokemons: (state, action: PayloadAction<IPokemonInfo[]>) => {
      state.list = [...state.list, ...action.payload];
    },
    setChosenPokemon: (state, action: PayloadAction<IPokemonInfo | null>) => {
      state.info = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilters: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
    setDrawer: (state, action: PayloadAction<boolean>) => {
      state.isOpenDrawer = action.payload;
    },
  },
});

export const {
  setPokemons,
  addPokemons,
  setChosenPokemon,
  setPage,
  setFilters,
  setDrawer,
} = pokemonSlice.actions;
