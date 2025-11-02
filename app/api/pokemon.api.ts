export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default?: string;
      };
    };
  };
  types: { type: { name: string } }[];
  height: number;
  weight: number;
}

const getPokemon = async (id: number) => {
  try {
    const res = await $fetch<IPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return res;
  } catch (err: unknown) {
    throw err;
  }
};

export default { getPokemon };
