export type Poketype = {
  id: string | null | undefined;
  name: string;
  image: string;
  species: {
    name: string;
  };

  results: {
    map: {
      pokemon: {
        url: string;
        name: string;
      };
      index: number;
    };
  };

  sprites: {
    front_shiny: string;
    front_default: string;
    back_default: string;
  };
  pokemonApi: {
    getPokemonByName: {
      loading: boolean;
      data: {
        id: string;
        name: string;
        image: string;
      };
      error: any;
    };
  };
};
