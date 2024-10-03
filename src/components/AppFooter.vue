<script setup lang="ts">
  const footerNavLinks = [
    {
      name: "Credits",
      link: "credits",
    },
  ]
</script>

<template>
  <footer className="flex w-screen p-4 bg-honey-100 justify-center">
    <nav>
      <ul>
        <li className="text-lg font-bold">
          <a href="http://gala.loreheart.com" target="_blank">
            &copy;2024 LoreHeart
          </a>
        </li>
        <li v-for="nav in footerNavLinks" :key="`footer-nav-${nav.name}`">
          <router-link
            :class="`text-hive-blue-green-400`"
            :title="`Footer Nav to ${nav.name}`"
            :aria-target="`Footer Nav to ${nav.name}`"
            :to="`${nav.link}`"
          >
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped></style>
