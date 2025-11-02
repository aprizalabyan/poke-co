import type { IPokemon } from "~/api/pokemon.api";
import PokemonService from "~/api/pokemon.api";

async function withConcurrency(tasks: (() => Promise<IPokemon>)[], n = 5) {
  const results: IPokemon[] = [];
  let i = 0;
  async function worker() {
    while (true) {
      const cur = i++;
      if (cur >= tasks.length) break;
      const task = tasks[cur];
      if (!task) continue;
      results[cur] = await task();
    }
  }
  await Promise.all(Array.from({ length: Math.min(n, tasks.length) }, worker));

  return results;
}

export function usePokemonApi() {
  const loading = ref(false);
  const error = ref<unknown>(null);
  const listPokemon = ref<IPokemon[]>([]);
  const concurrency = 5;

  async function fetchPage() {
    loading.value = true;
    error.value = null;
    try {
      const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const tasks = ids.map((id) => () => PokemonService.getPokemon(id));
      listPokemon.value = await withConcurrency(tasks, concurrency);
    } catch (e) {
      error.value = e;
      listPokemon.value = [];
    } finally {
      loading.value = false;
    }
  }

  onMounted(async () => {
    fetchPage();
  });

  return { listPokemon, loading, error };
}
