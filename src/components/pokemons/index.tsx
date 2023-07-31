import { Grid, Skeleton } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
import { IPokemonInfo } from "../../types";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: IPokemonInfo[];
  isLoading: boolean;
  limit: number;
}

export const Pokemons: React.FC<Props> = ({ pokemons, isLoading, limit }) => {
  return (
    <Grid container justifyContent="center" spacing={3}>
      {pokemons?.map((item) => (
        <Grid key={item.id} item xs={4}>
          <PokemonCard pokemon={item} />
        </Grid>
      ))}
      {isLoading &&
        new Array(limit).fill(0).map(() => (
          <Grid key={uuid()} item xs={4}>
            <Skeleton variant="rectangular" width={210} height={320} />
          </Grid>
        ))}
    </Grid>
  );
};
