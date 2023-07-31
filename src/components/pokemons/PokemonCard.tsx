import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setChosenPokemon } from "../../redux/slice";
import { typeColors } from "../../utils/typeColors";
import { IPokemonInfo, IPokemonType } from "../../types";

interface Props {
  pokemon: IPokemonInfo;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const chosen = useAppSelector((state) => state.pokemon.info);

  const handleClick = () => {
    dispatch(setChosenPokemon(pokemon));
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: "1px 1px 5px gray",
        bgcolor: pokemon?.id === chosen?.id ? "aliceblue" : "white",
        "&:hover": {
          cursor: "pointer",
          bgcolor: "aliceblue",
          boxShadow: "2px 2px 10px cornflowerblue",
        },
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        image={pokemon?.sprites?.other.dream_world.front_default}
        alt={pokemon.name}
        sx={{ height: 200, objectFit: "contain", p: 2 }}
      />
      <Divider />
      <CardContent>
        <Typography
          paragraph
          align="center"
          variant="h5"
          sx={{ fontWeight: 700 }}
        >
          {pokemon.name}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {pokemon?.types.map((item: IPokemonType) => (
            <Chip
              key={uuid()}
              label={item.type.name}
              sx={{ bgcolor: typeColors[item.type.name] }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
