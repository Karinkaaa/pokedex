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
import { useGetPokemonInfoByNameQuery } from "../../redux/api";
import { setPokemon } from "../../redux/slice";
import { IPokemonType } from "../../types";
import { typeColors } from "../../utils/typeColors";

interface Props {
  name: string;
}

export const PokemonCard: React.FC<Props> = ({ name }) => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemon.info);
  const { data } = useGetPokemonInfoByNameQuery(name);

  const handleClick = () => {
    data && dispatch(setPokemon(data));
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: "1px 1px 5px gray",
        bgcolor: pokemon?.id === data?.id ? "aliceblue" : "white",
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
        image={data?.sprites?.other.dream_world.front_default}
        alt={name}
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
          {name}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap={"wrap"}>
          {data?.types.map((item: IPokemonType) => (
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
