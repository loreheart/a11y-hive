<script setup lang="ts">
import { PropType, ref } from 'vue'

import DropCard from './DropCard.vue'
import { ISite } from '../types/sites'

  defineProps({
    flower: {
      type: Object as PropType<ISite>,
      required: true
    },
  })

  const showIframe = ref(false)
</script>

<template>
  <article class="flower-card flex flex-col mx-auto bg-hive-green-blue-400">
    <div class="font-bold">
      <DropCard>
        <template #title>
          <h2 class="text-2xl inline-block pl-4 text-hive-gold-brightest">
            {{ flower.company_name }}
          </h2>
        </template>
        <template #drawer>
          <section v-if="
            !!flower.website_url.trim() ||
            !!flower.built_with.trim()
          ">
            <h3 class="font-bold bg-hive-blue-dark text-honey-300 p-2">Site Details</h3>
            <ul class="p-2">
              <li v-if="!!flower.website_url.trim()" >
                <span class="text-honey-500">
                  Website Url
                </span>
                <a
                  :href="flower.website_url"
                  class="font-bold text-hive-blue-lightest"
                  target="_blank"
                >
                  {{ flower.website_url }}
                </a>
              </li>
              <li v-if="!!flower.built_with.trim()" >
                <span class="text-honey-500">
                  Built With
                </span>
                {{ flower.built_with }}
              </li>
            </ul>
          </section>

          <section v-if="
            !!flower.company_description.trim() ||
            !!flower.company_name.trim()
          ">
            <h3 class="font-bold bg-hive-blue-dark text-honey-300 p-2">
              Company Details
            </h3>
            <h4 v-if="!!flower.company_name.trim()" class="px-2">
              <span class="text-honey-500">
                Name
              </span>
              {{  flower.company_name }}
            </h4>
            <p v-if="!!flower.company_description.trim()" class="px-2">
              <span class="text-honey-500">
                Description
              </span>
              {{ flower.company_description }}
            </p>
          </section>

          <section class="live">
            <h3 class="font-bold bg-hive-blue-dark text-honey-300 p-2">
              Live Site
              <button
                class="px-2 bg-honey-300 text-white"
                @click="showIframe = !showIframe"
              >
                {{ showIframe ? 'Hide' : 'Show'}}
              </button>
            </h3>
            <div v-if="showIframe">
              <iframe
                :src="flower.website_url"
                :title="`Live Site for ${flower.company_name}`"
                height="600"
                width="100%"
              ></iframe>
            </div>
            
          </section>

          <section v-if="
              !!flower.contact_name.trim() ||
              !!flower.phone_number.trim() ||
              !!flower.contact_role.trim() ||
              !!flower.contact_method.trim()
            ">
            <h3 class="font-bold bg-hive-blue-dark text-honey-300 p-2">
              Contact Details
            </h3>
            <ul class="p-2">
              <li v-if="!!flower.contact_name.trim()">
                <span class="text-honey-500">
                  Name
                </span>
                {{ flower.contact_name }}
              </li>
              <li v-if="!!flower.email.trim()">
                <span class="text-honey-500">
                  Email
                </span>
                {{ flower.email }}</li>
              <li v-if="!!flower.phone_number.trim()">
                <span class="text-honey-500">
                  Phone Number
                </span>
                {{ flower.phone_number }}
              </li>
              <li v-if="!!flower.contact_role.trim()">
                <span class="text-honey-500">
                  Role
                </span>
                {{ flower.contact_role }}
              </li>
              <li v-if="!!flower.contact_method.trim()">
                <span class="text-honey-500">
                  Method
                </span>
                {{ flower.contact_method }}
              </li>
            </ul>
          </section>

          <section v-if="!!flower.meeting_notes.trim() || !!flower.next_step.trim()">
            <h3 class="font-bold bg-hive-blue-dark text-honey-300 p-2">
              Notes
            </h3>
            <ul class="p-2">
              <li v-if="!!flower.meeting_notes.trim()">
                <span class="text-honey-500">
                  Meeting Notes
                </span>
                {{ flower.meeting_notes }}
              </li>
              <li v-if="!!flower.next_step.trim()">
                <span class="text-honey-500">
                  Next Step
                </span>
                {{ flower.next_step }}
              </li>
            </ul>
          </section>

          <section v-if="!!flower.discovered_date.trim() || !!flower.outreach_date.trim() || !!flower.followup_date.trim()">
            <h3 class="font-bold bg-hive-blue-dark text-honey-300 p-2">
              Dates</h3>
            <ul class="p-2">
              <li v-if="!!flower.discovered_date.trim()">
                <span class="text-honey-500">
                  Discovered
                </span>
                {{ flower.discovered_date }}
              </li>
              <li v-if="!!flower.outreach_date.trim()">
                <span class="text-honey-500">
                  Outreach
                </span>
                {{ flower.outreach_date }}
              </li>
              <li v-if="!!flower.followup_date.trim()">
                <span class="text-honey-500">
                  Followup
                </span>
                {{ flower.followup_date }}
              </li>
            </ul>
          </section>
        </template>
      </DropCard>
    </div>
  </article>
</template>

<style scoped lang="scss">

</style>