<script setup lang="ts">
  import AppHeader from "./components/AppHeader.vue"
  import AppFooter from "./components/AppFooter.vue"
</script>

<template>
  <div class="app-body flex flex-col justify-between min-h-screen bg-hive-green-blue-300">
    <AppHeader />
    <main class="w-full flex-1">
      <router-view :key="$route.fullPath" />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>

</style>
