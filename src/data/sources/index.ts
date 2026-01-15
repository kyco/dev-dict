import { interpolateValues } from '@/utils'

import ai_generated from './ai_generated'
import community from './community'
import official_website from './official_website'
import wikipedia from './wikipedia'

export const RAW_SOURCES = {
  [ai_generated.id]: ai_generated,
  [community.id]: community,
  [official_website.id]: official_website,
  [wikipedia.id]: wikipedia,
} as const

export const SOURCES = interpolateValues({ obj: RAW_SOURCES, keys: ['name'], populateEmpty: false })
