import type { IPokemon } from "~/api/pokemon.api";

const dialog = ref(false);
const fullData = ref<IPokemon | null>(null);

export function useAdditionalDetail() {
  const openDialog = (d: IPokemon) => {
    dialog.value = true;
    fullData.value = d;
  };

  const closeDialog = () => {
    dialog.value = false;
    fullData.value = null;
  };

  return { dialog, fullData, openDialog, closeDialog };
}
