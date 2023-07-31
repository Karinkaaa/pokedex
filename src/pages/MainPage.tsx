import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { PokemonInfo } from "../components/pokemon-info";
import { Pokemons } from "../components/pokemons";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useGetPokemonsQuery } from "../redux/api";
import { addPokemons, setPage } from "../redux/slice";
import { IPokemonInfo } from "../types";

const empty: IPokemonInfo[] = [];

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { info, list, page, limit } = useAppSelector((state) => state.pokemon);
  const {
    data = empty,
    isLoading,
    isFetching,
  } = useGetPokemonsQuery({ page, limit });

  useEffect(() => {
    dispatch(addPokemons(data));
  }, [data, dispatch]);

  const handleClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ justifyContent: "center", bgcolor: "#5600b1" }}>
          <Typography variant="h4">Pokedex</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ m: 10 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10}>
          <Box gridColumn="span 7">
            <Pokemons
              pokemons={list}
              isLoading={isLoading || isFetching}
              limit={limit}
            />
            <Button
              fullWidth
              size="large"
              variant="contained"
              disabled={isLoading || isFetching}
              sx={{ mt: 5, borderRadius: 2 }}
              onClick={handleClick}
            >
              Load more
            </Button>
          </Box>
          <Box gridColumn="span 5">
            {info && <PokemonInfo pokemon={info} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
