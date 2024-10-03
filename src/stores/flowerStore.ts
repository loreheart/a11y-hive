import { Ref, ref } from 'vue'
import { defineStore } from 'pinia'

import type { ISite } from '../types'
import { convertCSVKeys } from '../helpers'
import { SITE_LIST } from '../data'

export const useFlowerStore = defineStore('sites', () => {
  const initialSites: ISite[] = convertCSVKeys(SITE_LIST)
  const sites: Ref<ISite[]> = ref(initialSites)

  const getAllFlowers = () => {
    return sites
  }

  const getFlowerById = (id: string): ISite => {
    return sites.value.find(
      (site: ISite) => id === site.id
    ) as ISite
  }

  const getFlowerByCompanyName = (name: string): ISite => {
    return sites.value.find(
      (site: ISite) => name === site.company_name
    ) as ISite
  }

  return {
    getAllFlowers,
    getFlowerById,
    getFlowerByCompanyName,
  }
})