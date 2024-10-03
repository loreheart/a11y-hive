<script setup lang="ts">

</script>

<template>
  <details class="drop-card">
    <summary class="drop-card-title clickable bg-hive-blue-dark text-honey-300">
      <slot name="title"/>
    </summary>
    <div class="drop-card-drawer flex flex-col gap-4 text-xl p-4 bg-hive-green-blue-400 text-white font-normal">
      <slot name="drawer"/>
    </div>
  </details>
</template>

<style scoped>
  summary {
    cursor: pointer;
    padding: 0.5rem 1rem;
    position: relative;
  }
  .drop-card {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    position: relative;
    padding: 0;
    z-index: 1;
  }
</style>