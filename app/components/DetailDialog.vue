<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card width="480">
      <v-card-text class="d-flex flex-column ga-4">
        <span class="text-h6 font-weight-bold"> Additional Detail </span>
        <div class="d-flex flex-column ga-2 text-body-2">
          <v-img
            alt="img"
            :src="fullData?.sprites.other.dream_world.front_default"
            height="160"
          />
          <div class="d-flex ga-2 text-subtitle-1 font-weight-bold">
            <span class="text-white">
              #{{ String(fullData?.id).padStart(3, "0") }}
            </span>
            -
            <span class="text-capitalize">
              {{ fullData?.name }}
            </span>
          </div>
          <div class="d-flex flex-column">
            <v-row dense>
              <v-col cols="2" class="text-grey">Weight:</v-col>
              <v-col cols="10">{{ fullData?.weight }} kg</v-col>
            </v-row>
            <v-row dense>
              <v-col cols="2" class="text-grey">Height:</v-col>
              <v-col cols="10">{{ fullData?.height }} m</v-col>
            </v-row>
            <v-row dense>
              <v-col cols="2" class="text-grey">Type:</v-col>
              <v-col cols="10" class="text-capitalize">{{
                fullData?.types.map((t) => t.type.name).join("/")
              }}</v-col>
            </v-row>
            <v-row dense>
              <v-col cols="2" class="text-grey">Abilites:</v-col>
              <v-col cols="10" class="text-capitalize">{{
                fullData?.abilities.map((a) => a.ability.name).join(", ")
              }}</v-col>
            </v-row>
            <v-row dense>
              <v-col cols="2" class="text-grey">Moves:</v-col>
              <v-col cols="10" class="d-flex overflow-y-auto" style="max-height: 100px">
                <span class="text-capitalize">{{
                  fullData?.moves.map((m) => m.move.name).join(", ")
                }}</span>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card-text>
      <template #actions>
        <v-btn class="ms-auto" color="grey" @click="closeDialog">
          <span class="text-subtitle-1 text-capitalize">Close</span>
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const { dialog, fullData, closeDialog } = useAdditionalDetail();
</script>

<style scoped></style>
