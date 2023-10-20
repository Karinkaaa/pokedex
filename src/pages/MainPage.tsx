import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Filters } from "../components/filters";
import { PokemonInfo } from "../components/pokemon-info";
import { InfoDrawer } from "../components/pokemon-info/InfoDrawer";
import { Pokemons } from "../components/pokemons";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useGetPokemonsQuery } from "../redux/api";
import { addPokemons, setFilters, setPage } from "../redux/slice";
import { IPokemonInfo, IPokemonType } from "../types";

const empty: IPokemonInfo[] = [];

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { info, page, limit, filters } = useAppSelector(
    (state) => state.pokemon
  );

  const list = useAppSelector((state) => {
    if (filters.length > 0) {
      return state.pokemon.list.filter((item: IPokemonInfo) =>
        item.types.some((type: IPokemonType) =>
          filters.some((f) => f === type.type.name)
        )
      );
    }
    return state.pokemon.list;
  });

  const {
    data = empty,
    isLoading,
    isFetching,
  } = useGetPokemonsQuery({ page, limit });

  useEffect(() => {
    dispatch(addPokemons(data));
  }, [data, dispatch]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
    dispatch(setFilters([]));
  };

  const handleRemoveFilter = (filter: string) => {
    dispatch(setFilters(filters.filter((value) => value !== filter)));
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h4" position="absolute" left="50vw">
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        sx={(theme) => ({
          p: 5,
          [theme.breakpoints.down("sm")]: {
            textAlign: "center",
          },
          [theme.breakpoints.up("md")]: {
            px: 10,
          },
          [theme.breakpoints.up("lg")]: {
            px: 15,
          },
          [theme.breakpoints.up("xl")]: {
            pt: 10,
            pl: 30,
          },
        })}
      >
        <Filters filters={filters} handleClik={handleRemoveFilter} />
        <Grid
          container
          sx={(theme) => ({
            gap: 5,
            [theme.breakpoints.down("sm")]: {
              justifyContent: "center",
            },
            [theme.breakpoints.up("lg")]: {
              gap: 10,
            },
            [theme.breakpoints.up("xl")]: {
              gap: 15,
            },
          })}
        >
          <Grid item xs={12} sm={6} md={7} lg={7} xl={7}>
            <Pokemons
              pokemons={list}
              isLoading={isLoading || isFetching}
              limit={limit}
            />
            <Button
              fullWidth
              size="large"
              variant="contained"
              disabled={isLoading || isFetching}
              sx={{ mt: 5, borderRadius: 2 }}
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </Grid>

          {window.innerWidth < 600 ? (
            info && <InfoDrawer info={info} />
          ) : (
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              lg={4}
              xl={3}
              sx={(theme) => ({
                width: "fit-content",
                [theme.breakpoints.up("md")]: {
                  width: "max-content",
                },
              })}
            >
              {info && <PokemonInfo pokemon={info} />}
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};
