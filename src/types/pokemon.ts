export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonInfo {
  abilities: IAbility[];
  base_experience: number;
  forms: IPokemon[];
  game_indices: IGameIndice[];
  height: number;
  held_items: IHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IPokemonMove[];
  name: string;
  order: number;
  past_types: IPokemonTypePast[];
  species: IPokemon[];
  sprites: IPokemonSprites;
  stats: IPokemonStat[];
  types: IPokemonType[];
  weight: number;
}

export interface IPokemonType {
  slot: number;
  type: IPokemon;
}

interface IAbility {
  ability: IPokemon;
  is_hidden: boolean;
  slot: number;
}

interface IVersionGameIndex {
  game_index: number;
  version: IPokemon;
}

interface IGameIndice {
  game_index: number;
  version: IVersionGameIndex;
}

interface IPokemonHeldItemVersion {
  version: IPokemon;
  rarity: number;
}

interface IHeldItem {
  item: IPokemon;
  version_details: IPokemonHeldItemVersion;
}

interface IPokemonMoveVersion {
  move_learn_method: IPokemon;
  version_group: IPokemon;
}

interface IPokemonMove {
  move: IPokemon;
  version_group_details: IPokemonMoveVersion;
}

interface IPokemonTypePast {
  generation: IPokemon;
  types: IPokemonType[];
}

interface IPokemonFront {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
}

interface IPokemonBack {
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface IPokemonSprites extends IPokemonFront, IPokemonBack {
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
  };
  home: IPokemonFront;
}

interface IPokemonStat {
  stat: IPokemon;
  effort: number;
  base_stat: number;
}
