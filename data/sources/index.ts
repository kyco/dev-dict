import { interpolateValues } from '@/utils'

import ai_generated from './ai_generated'
import community from './community'
import inferred from './inferred'
import official_website from './official_website'
import wikipedia from './wikipedia'

export const RAW_SOURCE = {
  [ai_generated.id]: ai_generated,
  [community.id]: community,
  [inferred.id]: inferred,
  [official_website.id]: official_website,
  [wikipedia.id]: wikipedia,
} as const

export const SOURCE = interpolateValues({ obj: RAW_SOURCE, keys: ['name'], useFallback: false })
