import React from "react";
import { v4 as uuid } from "uuid";
import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { useGetPokemonInfoByNameQuery } from "../redux/api";
import { IPokemonType } from "../types";

interface Props {
  name: string;
}

export const PokemonCard: React.FC<Props> = ({ name }) => {
  const { data } = useGetPokemonInfoByNameQuery(name);

  return (
    <Card sx={{ maxWidth: 300, boxShadow: "1px 1px 5px gray" }}>
      <CardMedia
        component="img"
        image={data?.sprites?.other.dream_world.front_default}
        alt={name}
        sx={{ height: 200, objectFit: "contain", p: 2 }}
      />
      <CardContent>
        <Typography
          paragraph
          align="center"
          variant="h5"
          sx={{ fontWeight: 700 }}
        >
          {name}
        </Typography>
        <Stack direction="row" spacing={1}>
          {data?.types.map((item: IPokemonType) => (
            <Chip key={uuid()} label={item.type.name} color={"secondary"} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
