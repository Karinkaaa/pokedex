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
import { setChosenPokemon, setDrawer, setFilters } from "../../redux/slice";
import { IPokemonInfo, IPokemonType } from "../../types";
import { typeColors } from "../../utils/typeColors";

interface Props {
  pokemon: IPokemonInfo;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const { info, filters } = useAppSelector((state) => state.pokemon);

  const handleChoosePokemon = () => {
    dispatch(setChosenPokemon(pokemon));
    setTimeout(() => dispatch(setDrawer(true)), 1); // for smooth scrolling
  };

  const handleSetFilters = (filter: string) => {
    if (!filters.includes(filter)) {
      dispatch(setFilters([...filters, filter])); 
    }
  };

  return (
    <Card
      sx={(theme) => ({
        boxShadow: "1px 1px 5px gray",
        bgcolor: pokemon?.id === info?.id ? "aliceblue" : "white",
        "&:hover": {
          cursor: "pointer",
          bgcolor: "aliceblue",
          boxShadow: "2px 2px 10px " + theme.palette.primary.light,
        },
      })}
      onClick={handleChoosePokemon}
    >
      <CardMedia
        component="img"
        image={pokemon?.sprites?.other.dream_world.front_default}
        alt={pokemon.name}
        sx={{ height: 200, objectFit: "contain", px: 2, py: 3 }}
      />
      <Divider />
      <CardContent>
        <Typography
          paragraph
          align="center"
          fontWeight={700}
          sx={(theme) => ({
            fontSize: "large",
            [theme.breakpoints.up("md")]: {
              fontSize: "x-large",
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "xx-large",
            },
          })}
        >
          {pokemon.name}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {pokemon?.types.map((item: IPokemonType) => (
            <Chip
              key={uuid()}
              label={item.type.name}
              sx={{
                bgcolor: typeColors[item.type.name],
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
              onClick={(event) => {
                event.stopPropagation();
                handleSetFilters(item.type.name);
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
