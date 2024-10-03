<script setup lang="ts">
import { RouterLink } from 'vue-router'

  const navItems = [
    {
      name: "Hive",
      link: "",
    },
    {
      name: "Flowers",
      link: "sites",
    },
  ]
</script>

<template>
  <header class="flex w-screen p-1 bg-honey-100 flex-col lg:flex-row text-hive-green-blue-500">
    <section
      class="flex flex-col lg:flex-row content-center justify-center lg:max-w-6xl lg:gap-4 mx-auto"
    >
      <div class="flex gap-4 justify-center">
        <img
          class="h-24"
          :src="`/Logo.png`"
          alt="A11y Hive Logo Incorporating lovea11y Logo"
        />
      </div>
      <span
        class="text-xl lg:text-3xl text-hive-blue-green-500 font-bold py-8 tracking-tighter"
      >
        Transforming Experiences Together
      </span>
    </section>
    <section>
      <nav>
        <ul class="flex flex-row justify-center">
          <li
            v-for="nav in navItems"
            :key="`header-nav-${nav.name}`"
            class="nav-link text-2xl font-bold"
          >
            <RouterLink :to="`/${nav.link}`" class="block font-bold py-8 px-4 text-hive-blue-green-500 cursor-pointer">
              {{ nav.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<style scoped></style>
