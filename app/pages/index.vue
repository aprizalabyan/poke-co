<template>
  <v-container>
    <div class="mb-4">
      <h1>Poke Co.</h1>
    </div>
    <v-row>
      <v-col v-for="(item, n) in listPokemon" :key="n" class="five-col-item">
        <v-card class="pokemon-card" flat variant="outlined" color="primary">
          <v-card-text class="d-flex flex-column ga-4 text-white">
            <div class="d-flex">
              <v-chip size="small" rounded="xl" variant="tonal" color="grey">
                <span class="font-weight-bold text-white">
                  #{{ String(item.id).padStart(3, "0") }}
                </span>
              </v-chip>
            </div>
            <v-img
              alt="img"
              :src="item.sprites.other.dream_world.front_default"
              height="120"
            />
            <div class="d-flex flex-column ga-4">
              <span class="text-h6 font-weight-bold text-capitalize">
                {{ item.name }}
              </span>
              <v-row>
                <v-col class="d-flex flex-column align-center">
                  <span class="text-grey">Weight</span>
                  <span>{{ item.weight }} kg</span>
                </v-col>
                <v-col class="d-flex flex-column align-center">
                  <span class="text-grey">Height</span>
                  <span>{{ item.height }} m</span>
                </v-col>
              </v-row>
              <div class="d-flex justify-center">
                <span class="text-grey">Type :</span>
                <span class="ms-1 text-capitalize">{{
                  item.types.map((t) => t.type.name).join("/")
                }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { listPokemon } = usePokemonApi();
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
