import React from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "../hooks";
import { PokemonInfo } from "../components/pokemon-info";
import { Pokemons } from "../components/pokemons";

export const MainPage: React.FC = () => {
  const pokemon = useAppSelector((state) => state.pokemon.info);

  return (
    <Box>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ justifyContent: "center", bgcolor: "#5600b1" }}>
          <Typography variant={"h4"}>Pokedex</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ m: 10 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10}>
          <Box gridColumn="span 7">
            <Pokemons />
          </Box>
          <Box gridColumn="span 5">
            {pokemon && <PokemonInfo pokemon={pokemon} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
