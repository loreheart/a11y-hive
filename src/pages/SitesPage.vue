<script setup lang="ts">
  import FlowerCard from '../components/FlowerCard.vue'
  import { useFlowerStore } from '../stores'

  const flowerStore = useFlowerStore()
  const flowers = flowerStore.getAllFlowers()
</script>

<template>
  <section class="max-w-6xl mx-auto py-4">
    <h1 class="text-4xl text-hive-blue-darkest text-bold py-2">
      Flowers
    </h1>
    <ul class=" flex flex-col text-hive-blue-darkest gap-3">
      <li
        v-for="flower of flowers"
        :key="`site-${flower.company_name}`"
        class="site-entry"
      >
        <FlowerCard :flower="flower" />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
