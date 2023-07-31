import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";
import { IPokemonInfo, IPokemonType } from "../../types";

interface Props {
  pokemon: IPokemonInfo;
}

export const DetailsTable: React.FC<Props> = ({ pokemon }) => {
  const types = pokemon.types
    .map((item: IPokemonType) => item.type.name)
    .join(", ");

  return (
    <Table size="small">
      <TableBody sx={{ border: "1px solid lightgray", p: 1 }}>
        <TableRow key={uuid()}>
          <TableCell align="center">Type</TableCell>
          <TableCell align="center">{types}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">Attack</TableCell>
          <TableCell align="center">{pokemon.stats[1].base_stat}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">Defense</TableCell>
          <TableCell align="center">{pokemon.stats[2].base_stat}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">HP</TableCell>
          <TableCell align="center">{pokemon.stats[0].base_stat}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">SP Attack</TableCell>
          <TableCell align="center">{pokemon.stats[3].base_stat}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">SP Defense</TableCell>
          <TableCell align="center">{pokemon.stats[4].base_stat}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">Speed</TableCell>
          <TableCell align="center">{pokemon.stats[5].base_stat}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">Weight</TableCell>
          <TableCell align="center">{pokemon.weight}</TableCell>
        </TableRow>

        <TableRow key={uuid()}>
          <TableCell align="center">Total moves</TableCell>
          <TableCell align="center">{pokemon.moves.length}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
