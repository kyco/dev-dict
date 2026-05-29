import { interpolateValues } from '@/utils'

import cms from './types/cms'
import concept from './types/concept'
import database from './types/database'
import framework from './types/framework'
import language from './types/language'
import library from './types/library'
import methodology from './types/methodology'
import platform from './types/platform'
import runtime_environment from './types/runtime_environment'
import standard from './types/standard'

export const RAW_TYPES = {
  [cms.id]: cms,
  [concept.id]: concept,
  [database.id]: database,
  [framework.id]: framework,
  [language.id]: language,
  [library.id]: library,
  [methodology.id]: methodology,
  [platform.id]: platform,
  [runtime_environment.id]: runtime_environment,
  [standard.id]: standard,
} as const

export const TYPES = interpolateValues({ obj: RAW_TYPES, keys: ['name'], populateEmpty: false })
