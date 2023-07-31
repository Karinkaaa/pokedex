import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { IPokemonInfo } from "../../types";
import { DetailsTable } from "./DetailsTable";

interface Props {
  pokemon: IPokemonInfo;
}

export const PokemonInfo: React.FC<Props> = ({ pokemon }) => {
  const getCode = (id: number): string => {
    if (id < 10) return `#00${id}`;
    if (id < 100) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        p: 2,
        boxShadow: "1px 1px 5px gray",
        position: "sticky",
        top: "25%",
      }}
    >
      <CardMedia
        component="img"
        image={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        sx={{ height: 200, objectFit: "contain", p: 2 }}
      />
      <Divider />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h4" fontWeight={700} component="div">
          {pokemon.name} {getCode(pokemon.id)}
        </Typography>

        <DetailsTable pokemon={pokemon} />
      </CardContent>
    </Card>
  );
};
