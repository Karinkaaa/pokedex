import React from "react";
import { v4 as uuid } from "uuid";
import { Grid } from "@mui/material";
import { useGetPokemonsQuery } from "../redux/api";
import { PokemonCard } from "./PokemonCard";

export const Pokemons: React.FC = () => {
  const { data } = useGetPokemonsQuery();

  return (
    <Grid container justifyContent="center" spacing={3}>
      {data?.map((item) => (
        <Grid key={uuid()} item xs={4}>
          <PokemonCard name={item.name} />
        </Grid>
      ))}
    </Grid>
  );
};
