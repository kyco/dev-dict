import ai_generated from './term-sources/ai_generated'
import community from './term-sources/community'
import official_website from './term-sources/official_website'
import wikipedia from './term-sources/wikipedia'

export const RAW_SOURCES = {
  [ai_generated.id]: ai_generated,
  [community.id]: community,
  [official_website.id]: official_website,
  [wikipedia.id]: wikipedia,
} as const
