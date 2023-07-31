import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPokemonInfo } from "../types";

interface IState {
  info: IPokemonInfo | null;
}

const initialState: IState = {
  info: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<IPokemonInfo | null>) => {
      state.info = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
