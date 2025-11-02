<template>
  <v-card class="pokemon-card" flat variant="outlined" color="primary">
    <v-card-text class="d-flex flex-column ga-4 text-white">
      <div class="d-flex">
        <v-chip size="small" rounded="xl" variant="tonal" color="grey">
          <span class="font-weight-bold text-white">
            #{{ String(data.id).padStart(3, "0") }}
          </span>
        </v-chip>
      </div>
      <v-img
        alt="img"
        :src="data.sprites.other.dream_world.front_default"
        height="120"
      />
      <div class="d-flex flex-column ga-4">
        <span class="text-h6 font-weight-bold text-capitalize">
          {{ data.name }}
        </span>
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <span class="text-grey">Weight</span>
            <span>{{ data.weight }} kg</span>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <span class="text-grey">Height</span>
            <span>{{ data.height }} m</span>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <span class="text-grey">Type :</span>
          <span class="ms-1 text-capitalize">{{
            data.types.map((t) => t.type.name).join("/")
          }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { IPokemon } from "~/api/pokemon.api";

defineProps<{
  data: IPokemon;
}>();
</script>

<style scoped></style>
