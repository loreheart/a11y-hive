<script setup lang="ts">
const credits = [
  {
    text: 'Honeycomb Image by juicy_fish on Freepik',
    link: 'https://www.freepik.com/author/juicy-fish'
  }, 
  {
    text: 'LoveA11y Logo from SilkTide',
    link: 'https://silktide.com/lovea11y/'
  }
]

</script>

<template>
  <div class="text-white font-bold">
    <h1>Credits</h1>
    <ul>
      <li v-for="credit in credits" :key="`credit-link-${credit.text}`">
        <a :href="credit.link" class="text-white" target="_blank">
          {{ credit.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
