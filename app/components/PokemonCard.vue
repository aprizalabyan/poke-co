<template>
  <v-card
    class="pokemon-card"
    flat
    variant="outlined"
    color="primary"
    @click="openDialog(data)"
  >
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

const { openDialog } = useAdditionalDetail();
</script>

<style scoped lang="scss">
.pokemon-card {
  background: #363636;
  background: radial-gradient(
    circle,
    rgba(54, 54, 54, 1) 0%,
    rgba(28, 30, 33, 1) 100%
  );
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    top: -100%;
    left: -100%;
    transition: all 0.5s ease;
  }

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 0 15px #646cff50;

    &::before {
      top: 100%;
      left: 100%;
    }
  }
}
</style>
