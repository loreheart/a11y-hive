<script setup lang="ts">
import { IProcessStep } from '../types/main'

  const processes: IProcessStep[] = [
    {
      name: 'Find',
      description: 'Add Site Link and some context',
    },
    {
      name: 'Survey',
      description: 'Soft Audit, quick look, Builtwith / Wappalyzer, Add Contact (adds more details to site)',
    },
    {
      name: 'Pitch',
      description: 'Cold email or call referencing something found',
    },
    {
      name: 'Audit',
      description: 'Audit process, either minimal or full',
    },
    {
      name: 'Deck',
      description: 'Prepare slide deck with details from Audit',
    },
    {
      name: 'Presentation',
      description: 'Present to Site owner using Deck with details from Audit',
    },
  ]
  const journey = processes.map(({ name }) => name).join(' -> ')
</script>

<template>
  <section class="flex flex-col gap-8 pt-12 p-4 text-white">
    <h1 class="text-4xl font-bold">Welcome to the A11y Hive!</h1>
    <h2 class="text-4xl font-bold text-hive-blue-200">Journey - Audit Flow</h2>

    <p class="text-2xl font-extrabold text-white">
      {{ journey }}
    </p>

    <h2 class="text-4xl font-bold text-hive-blue-200">Journey Steps</h2>
    <ol>
      <li v-for="(item, index) in processes" :key="index" class="block text-3xl font-bold text-white">
        {{ item.name }}
        <span class="text-xl text-hive-blue-200 mx-6">
          {{ item.description }}
        </span>
      </li>
    </ol>
  </section>
</template>

<style scoped></style>
