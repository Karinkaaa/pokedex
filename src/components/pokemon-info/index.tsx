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
        boxShadow: "1px 1px 5px gray",
        position: "sticky",
        top: "20%",
      }}
    >
      <CardMedia
        component="img"
        image={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        sx={{ height: 200, objectFit: "contain", px: 2, py: 3 }}
      />
      <Divider />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          fontWeight={700}
          component="div"
          sx={(theme) => ({
            fontSize: "x-large",
            [theme.breakpoints.up("xl")]: {
              fontSize: "xx-large",
            },
          })}
        >
          {pokemon.name} {getCode(pokemon.id)}
        </Typography>

        <DetailsTable pokemon={pokemon} />
      </CardContent>
    </Card>
  );
};
