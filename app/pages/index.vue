<template>
  <v-container>
    <div class="d-flex align-center ga-2 mb-4">
      <Icon name="duo-icons:dashboard" size="32" />
      <h1>Poke Co.</h1>
    </div>
    <div style="min-height: 720px">
      <template v-if="loading">
        <div
          class="d-flex justify-center align-center w-100"
          style="min-height: 720px"
        >
          <Icon name="svg-spinners:bars-scale-fade" size="32" />
        </div>
      </template>
      <v-row v-else>
        <v-col v-for="(item, n) in listPokemon" :key="n" class="five-col-item">
          <PokemonCard :data="item" />
        </v-col>
      </v-row>
    </div>
    <div class="d-flex justify-end mt-4">
      <v-pagination v-model="page" :length="maxPage" :total-visible="5" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
const { loading, listPokemon, page, maxPage } = usePokemonApi();
</script>

<style scoped lang="scss">
.five-col-item {
  flex-basis: 20%;
  max-width: 20%;
}

.pokemon-card {
  background: #363636;
  background: radial-gradient(
    circle,
    rgba(54, 54, 54, 1) 0%,
    rgba(28, 30, 33, 1) 100%
  );
}
</style>
