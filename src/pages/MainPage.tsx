import React from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { PokemonInfo } from "../components/PokemonInfo";
import { Pokemons } from "../components/Pokemons";

export const MainPage: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ justifyContent: "center" }}>
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
            <PokemonInfo name={"bulbasaur"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
