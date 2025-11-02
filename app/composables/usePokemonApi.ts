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

function makeRange(start: number, end: number) {
  return Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i)
}

export function usePokemonApi() {
  const limit = 10;
  const total = 151;
  const startId = 1;
  const concurrency = 5;

  const page = ref(1);
  const loading = ref(false);
  const error = ref<unknown>(null);
  const listPokemon = ref<IPokemon[]>([]);

  const maxPage = computed(() => Math.ceil(total / limit));

  watch(page, () => fetchPage())

  async function fetchPage() {
    loading.value = true;
    error.value = null;
    try {
      const start = startId + (page.value - 1) * limit
      const end = Math.min(start + limit - 1, startId + total - 1)
      const ids = makeRange(start, end)

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

  return { listPokemon, loading, error, page, maxPage };
}
