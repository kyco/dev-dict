import cms from './term-types/cms'
import concept from './term-types/concept'
import database from './term-types/database'
import framework from './term-types/framework'
import language from './term-types/language'
import library from './term-types/library'
import methodology from './term-types/methodology'
import platform from './term-types/platform'
import runtime_environment from './term-types/runtime_environment'
import standard from './term-types/standard'

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
