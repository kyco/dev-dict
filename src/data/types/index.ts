import { interpolateValues } from '@/utils'

import cms from './cms'
import concept from './concept'
import database from './database'
import framework from './framework'
import language from './language'
import library from './library'
import methodology from './methodology'
import platform from './platform'
import runtime_environment from './runtime_environment'
import standard from './standard'

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
