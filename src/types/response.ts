import { IPokemon } from "./pokemon";

export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}
