import ai_generated from './sources/ai_generated'
import community from './sources/community'
import official_website from './sources/official_website'
import wikipedia from './sources/wikipedia'

export const RAW_SOURCES = {
  [ai_generated.id]: ai_generated,
  [community.id]: community,
  [official_website.id]: official_website,
  [wikipedia.id]: wikipedia,
} as const
