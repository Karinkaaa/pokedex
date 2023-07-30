import React from "react";
import { v4 as uuid } from "uuid";
import { Box, Typography } from "@mui/material";
import { useGetPokemonInfoByNameQuery } from "../redux/api";
import { IPokemonType } from "../types";

interface Props {
  name: string;
}

export const PokemonInfo: React.FC<Props> = ({ name }) => {
  const { data } = useGetPokemonInfoByNameQuery(name);

  return (
    <Box
      sx={{
        maxWidth: 400,
        p: 5,
        boxShadow: "1px 1px 5px gray",
        position: "sticky",
        top: "25%",
      }}
    >
      <Typography gutterBottom variant="h4" component="div">
        {name} #00{data?.id}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Types:
        {data?.types.map((item: IPokemonType) => (
          <span key={uuid()}> {item.type.name}</span>
        ))}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Attack: {data?.stats[1].base_stat}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Defense: {data?.stats[2].base_stat}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        HP: {data?.stats[0].base_stat}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        SP Attack: {data?.stats[3].base_stat}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        SP Defense: {data?.stats[4].base_stat}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Speed: {data?.stats[5].base_stat}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Weight: {data?.weight}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Total moves: {data?.moves.length}
      </Typography>
    </Box>
  );
};
